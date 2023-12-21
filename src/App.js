import {BrowserRouter} from "react-router-dom";
import React from "react";

import './App.css';
import AppRoutes from "./AppRoutes";


function App() {
  //main app file
    return (
        <div className="App">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}

export default App;
