import React, {useEffect, useState} from "react";

import {http} from "../../http"
import "./style.css"

const songsPath = "http://localhost:5000/music"

const Favourite = () => {

    const [favouriteList, setFavouriteList] = useState([])


    useEffect(()=>{
        const userId = localStorage.getItem("userId")

        http.get(`/favourites/getFavourite/${userId}`)
            .then((res)=>{
                setFavouriteList(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

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