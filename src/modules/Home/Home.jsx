import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./style.css"
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import {http} from "../../http"

const Home = () => {
    const [artists, setArtists] = useState([]);


    const navigate=useNavigate();

    const login = () => {
        navigate("/login")
    }

    const signup = () => {
        navigate("/signup")
    }

    useEffect(()=>{
        http.get('/artists')
            .then((res)=>{
                setArtists(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="container-fluid home-root">
            <div className="container">
                <p className="row company-name">Samplify</p>
                <p className="row promo-text">Listen to your favourite music right now!</p>
                <p className="row charts">Top Artists In Ukraine!</p>
                <div className="row promo-music">
                    {artists.map(card => {
                        return <ArtistCard key={card.id} {...card} />
                    })}
                </div>
                <button onClick={login} className="artis-page-btn">LOGIN</button>
                <button onClick={signup} className="artis-page-btn">SIGN UP</button>
            </div>
        </div>
    )
}

export default Home;