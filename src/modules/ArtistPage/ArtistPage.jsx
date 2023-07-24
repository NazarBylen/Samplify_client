import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import "./styles.css"
import {http} from "../../http"

const imagePath = "http://localhost:5000/images/artists"
const songsPath = "http://localhost:5000/music"

const ArtistPage = () => {

    const {slug} = useParams();

    const [currentArtist, setCurrentArtist] = useState(null)

    const soundRef = useRef(null);

    function play() {
        if (soundRef.current === null) {
            const tempSong = currentArtist.songs[Math.floor(Math.random() * currentArtist.songs.length)];
            const songPath = `${songsPath}/${currentArtist.slug}/${tempSong.file}`;
            const audio = new Audio(songPath);
            audio.play();
            audio.addEventListener('ended', stop);
            soundRef.current = audio;
        }
    }

    function stop() {
        const sound = soundRef.current;
        if (sound !== null) {
            sound.pause();
            sound.currentTime = 0;
            sound.removeEventListener('ended', stop);
            soundRef.current = null;
        }
    }


    useEffect(() => {
        return () => {
            stop();
        };
    }, []);;

    useEffect(() => {
        http.get(`artists/${slug}`)
            .then((res) => {
                setCurrentArtist(res.data[0])
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return currentArtist ? (
        <div className="container-fluid artist-page-root">
            <div className="container artist-profile">
                <img src={`${imagePath}/${currentArtist.image}`} alt="Artist" className="artist-picture"/>
                <h1 className="artist-name">{currentArtist.name}</h1>
            </div>
            <div className="container wrap-btn-mix">
                <button onClick={play} className="artis-page-btn">MIX MUSIC</button>
                <button onClick={stop} className="artis-page-btn">STOP MUSIC</button>
            </div>
            <div className="player-parent">
                {currentArtist.songs.map((song, index) => {
                    return (
                        <audio
                            key={index} controls>
                            <source
                                key={index}
                                src={`${songsPath}/${currentArtist.slug}/${song.file}`}
                            />
                        </audio>
                    )
                })
                }
            </div>
            <p className="artist-desc">{currentArtist.description}</p>
        </div>
    ) : null
}

export default ArtistPage;