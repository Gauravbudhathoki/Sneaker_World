import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/mainpage.css'

function Mainpage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/signup');
    };

    return (
        <div className="Container">
            <img src="/Image/back.jpg" alt="background" />
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