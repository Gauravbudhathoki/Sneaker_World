import 'react';
// import { Link } from 'react-router-dom';
import '../css/dashboard.css';

function Dashboard() {
  return (
    <div className="Container">
      <img src="./Image/back.jpg" alt="Sneaker World" />
      <div className="Header">
        <div className="imagecontainer">
          <img src="./Image/logo.png" alt="logo" />
        </div>
      </div>
      <div className="Information">
        <h1> LACE UP, STEP BOLD , OWN THE STREETS!</h1>
        <p>Where Comfort Meets Swagger!</p>
        <button type="button" onClick={() => (window.location.href = '/login')}>
          LOG IN
        </button>
        <button type="button" onClick={() => (window.location.href = '/register')}>
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Dashboard;