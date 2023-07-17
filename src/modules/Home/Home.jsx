import React from "react";

import "./style.css"
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import ArtistCardData from "./ArtistCardData";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();

    const login = () => {
        navigate("/login")
    }

    const signup = () => {
        navigate("/signup")
    }

    return (
        <div className="container-fluid home-root">
            <div className="container">
                <p className="row company-name">Samplify</p>
                <p className="row promo-text">Listen to your favourite music right now!</p>
                <p className="row charts">Top Artists In Ukraine!</p>
                <div className="row promo-music">
                    {ArtistCardData.map(card => {
                        return <ArtistCard key={card.id} id={card.id} name={card.name} img={card.img} link={card.link}/>
                    })}
                </div>
                <button onClick={login} className="artis-page-btn">LOGIN</button>
                <button onClick={signup} className="artis-page-btn">SIGN UP</button>
            </div>
        </div>
    )
}

export default Home;