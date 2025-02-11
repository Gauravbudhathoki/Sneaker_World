import React from 'react';
import '../css/signup.css'

function Signup() {
    return (
        <div className="Container">
            <img src='/Image/back.jpg' alt='back'/>
            <div className="Header">
                <div className="imagecontainer">
                    <a href="./dashboard.html">
                        <img src="/Image/logo.png" alt="logo" />
                    </a>
                </div>
            </div>
            <div className="Form">
                <form action="">
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullname"
                        className="input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password"
                        className="input"
                    />
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                <div className="signup">
                    <p>Already have an account? <a href="./login.html">LOG IN</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
