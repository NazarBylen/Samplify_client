import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "./modules/Home/Home"
import ArtistPage from "./modules/ArtistPage/ArtistPage";
import Login from "./modules/Login/Login";
import Signup from "./modules/Signup/Signup";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/artist-page/:id" element={<ArtistPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}

export default AppRoutes;