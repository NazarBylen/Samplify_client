import {Route, Routes} from "react-router-dom";
import React from "react";

import Home from "./modules/Home/Home"
import ArtistPage from "./modules/ArtistPage/ArtistPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/artist-page/:id" element={<ArtistPage/>}/>
        </Routes>
    )
}

export default AppRoutes;