import React, {useEffect, useState} from "react";

import {GetFavourites, RemoveFavourite} from "../../api/favourites"
import "./style.css"

const songsPath = "http://localhost:5000/music"

const Favourite = () => {

    const [favouriteList, setFavouriteList] = useState([])

    const deleteSong = (songId) => {
        RemoveFavourite(songId)
            .then((res)=>{
                console.log(res);})
            .catch((err)=>{
                console.log(err);})
    }


    useEffect(()=>{
        const userId = localStorage.getItem("userId")

        GetFavourites(userId)
            .then((res)=>{
                setFavouriteList(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [favouriteList])

    return (
        <div className="container-fluid favourite-root">
            <div className="container">
                <p className="row company-name">Your Favourite Songs</p>
                <div className="player-parent">
                    {favouriteList.map((objectSong, index) => {
                        return (
                            <div className="row player" key={index}>
                                <div className="col song-name" >{objectSong.song.name}</div>
                                <audio className="col"
                                       key={index} controls>
                                    <source
                                        src={`${songsPath}/${objectSong.song.artist.slug}/${objectSong.song.file}`}
                                    />
                                </audio>
                                <button onClick={()=>deleteSong(objectSong.id)} className="artis-page-btn">REMOVE FROM FAVOURITES</button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Favourite;