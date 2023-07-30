import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

import "./styles.css"
import {AddToFavourites} from "../../api/favourites"
import {GetArtistSongs} from "../../api/artists"

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

    async function addToFavourites(songId) {

        const userId = localStorage.getItem("userId")

        const data = {
            songId,
            userId
        }
        AddToFavourites(data)
            .then()
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        return () => {
            stop();
        };
    }, []);

    useEffect(() => {
        GetArtistSongs(slug)
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
                        <div className="row player" key={index}>
                            <div className="col song-name" >{song.name}</div>
                            <audio className="col"
                                key={index} controls>
                                <source
                                    src={`${songsPath}/${currentArtist.slug}/${song.file}`}
                                />
                            </audio>
                            <button className="col favourites-btn" onClick={() => addToFavourites(song.id)}>Add To Favourites</button>
                        </div>
                    )
                })
                }
            </div>
            <p className="artist-desc">{currentArtist.description}</p>
        </div>
    ) : null
}

export default ArtistPage;