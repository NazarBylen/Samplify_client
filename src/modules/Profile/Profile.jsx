import React, {useEffect, useState} from "react";
import {GetUserInfo} from "../../api/auth";
import {useNavigate} from "react-router-dom";

import {DeleteUser} from "../../api/auth"
import "./style.css"

const Profile = () => {

    const navigate=useNavigate();

    const [currentUser, setCurrentUser] = useState(null)

    const navigateToChangePassword = () => {
        navigate("/change-password")
    }

    const deleteUserAccount = () => {
        const userId = localStorage.getItem("userId")

        DeleteUser(userId)
            .then((res)=>{
                console.log(res.status);
            })
            .catch((err)=>{
                console.log(err);
            })
        localStorage.clear()
        navigate("/home")
    }

    useEffect(()=>{

        const userId = localStorage.getItem("userId")

        GetUserInfo(userId)
            .then((res)=>{
                setCurrentUser(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    return (
        <div className="container-fluid profile-root">
            <div className="container">
                <p className="row company-name">Profile Information</p>
                {currentUser ?
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
                        <button className="artis-page-btn" onClick={deleteUserAccount}>DELETE ACCOUNT</button>
                    </div>
                        : null
                }
            </div>
        </div>
    )
}

export default Profile;