import React from 'react';
import { link } from 'react-router-dom';
// import '../css/mainpage.css'

function Mainpage() {
    return (
        <div className="Container">
            <div className="Header">
                <div className="imagecontainer">
                    <img src="/Image/logo.png" alt="logo" />
                </div>
            </div>
            <div className="Information">
                <h1>Lace Up, Step Bold, Own the Streets!</h1>
                <p>Where Comfort Meets Swagger!</p>
                <button type="button" onClick={handleLogin}>LOG IN</button>
                <button type="button" onClick={handleRegister}>REGISTER</button>
            </div>
        </div>
    );
}

export default Mainpage;