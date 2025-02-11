import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
import { set } from 'react-hook-form';

function Login() {
   return (
    <div className="Container">
      <img src='/Image/back.jpg' alt="Tour Background" />
      <div className="Header">
        <div className="imagecontainer">
          <img src="/Image/logo.png" alt="logo" />
        </div>
      </div>
   
      <div className="Form">
        <form >
          <h1>LOG IN</h1>
          {/* Email Input */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
            const [show ,setShow] = useState(false);
            console.log(show);
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id ="password"
              type = {show ? 'text':'password' }
              placeholder =   'Enter Password'
              />
              <button onClick={() => setShow(!show)}> {show ? 'Hide password' : 'show password'}</button>

              
          
              


            
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button type="submit" className="btn">
            LOG IN
          </button>
        </form>
        <div className="signup">
          <p>
            Don't have an account?
            {/* <Link to="/signup"> Sign up</Link> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;  
