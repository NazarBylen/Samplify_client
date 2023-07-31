import React, {useEffect, useState} from "react";
import {GetUserInfo} from "../../api/auth";
import {useNavigate} from "react-router-dom";

import "./style.css"

const Profile = () => {

    const navigate=useNavigate();

    const [currentUser, setCurrentUser] = useState(null)

    const navigateToChangePassword = () => {
        navigate("/change-password")
    }

    useEffect(()=>{

        const userId = localStorage.getItem("userId")

        GetUserInfo(userId)
            .then((res)=>{
                setCurrentUser(res.data[0])
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    return currentUser ? (
        <div className="container-fluid profile-root">
            <div className="container">
                <p className="row company-name">Profile Information</p>
                <div className="row info">
                    <div className="col-6 info-text">
                        Id :
                    </div>
                    <div className="col-6">
                        {currentUser.id}
                    </div>
                    <div className="col-6 info-text">
                        Email :
                    </div>
                    <div className="col-6">
                        {currentUser.email}
                    </div>
                    <button className="artis-page-btn" onClick={navigateToChangePassword}>Change Password</button>
                </div>
            </div>
        </div>
    ) : null
}

export default Profile;