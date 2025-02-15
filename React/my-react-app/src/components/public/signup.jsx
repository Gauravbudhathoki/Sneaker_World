import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/signup.css';


function Signup() {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onSubmit = (data) => {
        alert(`Form Submitted: ${JSON.stringify(data)}`);
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign Up</h1>
                    
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input"
                        {...register("fullname", { required: "Full Name is required" })}
                    />
                    {errors.fullname && <p style={{ color: "red", margin: "6px" }}>{errors.fullname.message}</p>}
                    
                    <input
                        type="email"
                        placeholder="Email"
                        className="input"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: "red", margin: "6px" }}>{errors.email.message}</p>}
                    
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                    />
                    {errors.password && <p style={{ color: "red", margin: "0px" }}>{errors.password.message}</p>}
                    
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="input"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => {
                                const password = getValues("password");
                                return value === password || "Passwords do not match";
                            },
                        })}
                    />
                    {errors.confirmPassword && <p style={{ color: "red", margin: "6px" }}>{errors.confirmPassword.message}</p>}
                    
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                <div className="signup">
                    <p>Already have an account? <a href="./login">LOG IN</a></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
