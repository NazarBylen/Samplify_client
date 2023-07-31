import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "./style.css"
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import {GetAllArtists} from "../../api/artists"

const Home = () => {
    const [artists, setArtists] = useState([]);

    const [userAccessToken, setUserAccessToken] = useState(null)

    const navigate=useNavigate();

    const login = () => {
        navigate("/login")
    }

    const signup = () => {
        navigate("/signup")
    }

    const logout = () => {
        localStorage.clear()
        setUserAccessToken(null);

    }

    const navigateToFavourite = ()=> {
        navigate("/favourites")
    }

    const navigateToProfile = ()=> {
        navigate("/profile")
    }

    useEffect(()=>{
        GetAllArtists()
            .then((res)=>{
                setArtists(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(()=>{
        const currentUser = localStorage.getItem("access-token")

        setUserAccessToken(currentUser)
    }, [userAccessToken])

    return (
        <div className="container-fluid home-root">
            <div className="container">
                <p className="row company-name">Samplify</p>
                <p className="row promo-text">Listen to your favourite music right now!</p>
                {!userAccessToken ?
                    <div>
                        <button onClick={login} className="artis-page-btn">LOGIN</button>
                        <button onClick={signup} className="artis-page-btn">SIGN UP</button>
                    </div> :
                    <div>
                        <button onClick={logout} className="artis-page-btn">LOG OUT</button>
                        <p className="row promo-text">Welcome, Mr. Smith</p>
                        <button className="artis-page-btn" onClick={navigateToFavourite}>Favourite Songs</button>
                        <button className="artis-page-btn" onClick={navigateToProfile}>My Profile</button>
                    </div>
                }
                <p className="row charts">Top Artists In Ukraine!</p>
                <div className="row promo-music">
                    {artists.map(card => {
                        return <ArtistCard key={card.id} {...card} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;