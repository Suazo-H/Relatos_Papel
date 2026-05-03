import React from "react";
import { Outlet } from "react-router-dom";
import './MainContent.css';

export default function MainContent(){
    return(
        <div className="container">
            <Outlet />
        </div>
    );
}