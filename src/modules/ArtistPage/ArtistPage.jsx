import {useParams} from "react-router-dom";

import ArtistCardData from "../Home/ArtistCardData";
import "./styles.css"


const ArtistPage = () => {

    const {id} = useParams();

    const [currentArtist] = ArtistCardData.filter(card => {
        return id===card.id.toString();
    })

    const currentSongs = currentArtist.songs

    let sound=undefined;

    function play() {
        sound = new Audio(currentSongs[(Math.floor(Math.random() * currentSongs.length))].toString());
        sound.play();
    }

    function stop() {
        sound.pause();
        sound.currentTime=0;
        sound=undefined;
    }


    return (
        <div className="container-fluid artist-page-root">
            <div className="container artist-profile">
                <img src={currentArtist.img} alt="Artist" className="artist-picture"/>
                <h1 className="artist-name">{currentArtist.name}</h1>
            </div>
            <div className="container wrap-btn-mix">
                <button onClick={play} className="artis-page-btn">MIX MUSIC</button>
                <button onClick={stop} className="artis-page-btn">STOP MUSIC</button>
            </div>
            <p className="artist-desc">{currentArtist.desc}</p>
        </div>
    )
}

export default ArtistPage;