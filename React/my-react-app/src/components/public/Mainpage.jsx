import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/mainpage.css';


function Mainpage() {
  const headerRef = useRef(null);
  const aboutUsLinkRef = useRef(null);
  const footerLinkRef = useRef(null);

 

  useEffect(() => {
    // Handle scroll behavior for header
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    // Smooth scrolling for About Us link
    const handleAboutUsClick = (event) => {
      event.preventDefault();
      document.getElementById('aboutus').scrollIntoView({
        behavior: 'smooth',
      });
    };

    // Smooth scrolling for Footer link
    const handleFooterClick = (event) => {
      event.preventDefault();
      document.getElementById('footer').scrollIntoView({
        behavior: 'smooth',
      });
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    const aboutUsLink = aboutUsLinkRef.current;
    const footerLink = footerLinkRef.current;
    aboutUsLink.addEventListener('click', handleAboutUsClick);
    footerLink.addEventListener('click', handleFooterClick);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      aboutUsLink.removeEventListener('click', handleAboutUsClick);
      footerLink.removeEventListener('click', handleFooterClick);
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <header ref={headerRef}>
        <div className="imagecontainer">
          <img src="/Image/logo.png" alt="logo" />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li>
            <a href="#footer" id="footer-link" ref={footerLinkRef}>Contact</a>
          </li>
          <li>
            <a href="#aboutus" id="aboutus-link" ref={aboutUsLinkRef}>About Us</a>
          </li>
        </ul>
        <div className="bought">
          <Link to="/bought">
            <img src="/Image/bought.png" alt="bought" />
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <img src="/Image/cart.png" alt="cart" />
          </Link>
        </div>
        <div className="logout">
          <Link to="/login">
            <img src="/Image/logout1.png" alt="logout" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="Container">
      <img src="/Image/background.jpg" alt="Img" />
      </div>

      {/* Jerseys Section */}
      <div className="jerseyheading">
        <h1>Nike</h1>
      </div>
      <div className="jerseyshow">
        <div className="jersey1" id="1">
          <img src="/Image/nike1-removebg-preview.png" alt="nike1" />
          <h1>olive Green</h1>
          <h2>Rs 150000|-</h2>
          <Link to="/booknow" state={{ productName: "Olive Green ", price: 150000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Olive Green ", price: 150000  }}>
            <button className="bn3">Add to Cart</button>
          </Link>
         
        </div>
        <div className="jersey2" id="2">
          <img src="/Image/airforce.png" alt="nike2" />
          <h1>Nike Mid 77 </h1>
          <h2>Rs 15000 |-</h2>
          <Link to="/booknow" state={{ productName: "Nike Mid 77", price: 18000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Nike Mid 77", price: 18000 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
          
        </div>
        <div className="jersey3" id="3">
          <img src="/Image/nikelow.png" alt="nike3" />
          <h1>Nike Brown</h1>
          <h2>Rs 15000 |-</h2>
          <Link to="/booknow" state={{ productName: "Nike Brown", price: 15000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Nike Brown", price: 15000}}>
            <button className="bn3">Add to Cart</button>
          </Link>
          
        </div>
      </div>

      {/* Boots Section */}
      <div className="bootheading">
        <h1>Adidas</h1>
      </div>
      <div className="bootshow">
        <div className="boot1" id="1">
          <img src="/Image/adidascampus.jpg" alt="adidas 1" />
          <h1>Adidas Campus</h1>
          <h2>Rs 12500 |-</h2>
          <Link to="/booknow" state={{ productName: "Adidas Campus", price: 12500}}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Adidas Campus", price: 1250 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
          
        </div>
        <div className="boot2" id="2">
          <img src="/Image/samba.jpg" alt="adidas2" />
          <h1>Adidas Samba</h1>
          <h2>Rs 17000 |-</h2>
          <Link to="/booknow" state={{ productName: "Adidas Samba", price: 17000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Adidas Samba", price: 17000 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
          
        </div>
        <div className="boot3" id="3">
          <img src="/Image/adidas3.jpg" alt="adidas3" />
          <h1>Ezzy Boost</h1>
          <h2>Rs 24000 |-</h2>
          <Link to="/booknow" state={{ productName: "Nike M10 Edition", price: 24000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Nike M10 Edition", price: 24000 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
         
        </div>
      </div>

      {/* Socks & Shin Guards Section */}
      <div className="sockshinguardheading">
        <h1>Puma</h1>
      </div>
      <div className="sockshinguard">
        <div className="sockshin1" id="1">
          <img src="/Image/puma1.jpg" alt="puma1" />
          <h1>Puma Fiber Edition</h1>
          <h2>Rs 18000 |-</h2>
          <Link to="/booknow" state={{ productName: "Puma Adition 1", price: 18000 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Puma Adition 1", price: 18000 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
          
        </div>
        <div className="sockshin2" id="2">
          <img src="/Image/puma2.jpg" alt="Puma " />
          <h1>Puma BMW</h1>
          <h2>Rs 20000 |-</h2>
          <Link to="/booknow" state={{ productName: "Puma BMW", price: 20000}}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Puma BMW", price: 20000}}>
            <button className="bn3">Add to Cart</button>
          </Link>
         
        </div>
        <div className="sockshin3" id="3">
          <img src="/Image/puma3.png" alt="Puma" />
          <h1>puma</h1>
          <h2>Rs 18750 |-</h2>
          <Link to="/booknow" state={{ productName: "Sponge Premium Shin Guard", price: 18750 }}>
            <button className="bn3">Buy Now</button>
          </Link>
          <Link to="/addtocart" state={{ productName: "Sponge Premium Shin Guard", price: 18750 }}>
            <button className="bn3">Add to Cart</button>
          </Link>
         
        </div>
      </div>

      {/* About Us Section */}
      <div className="aboutus" id="aboutus">
        <div className="about1" id="1">
          <img src="/Image/about us.jpg" alt="aboutus" />
        </div>
        <div className="about2" id="2">
          <h1>Welcome to Sneaker World</h1>
          <p>Designed to Move ,Built to Impress!</p>
          <p>Sneaker World is Nepal&apos;s premier destination for Sneaker enthusiasts</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer" id="footer">
          <div className="mainfooter">
            <div className="row">
              {/* <img src="./Images/logo3.png" alt="logo2" /> */}
              <div className="footer1">
                <h1>Our specialities</h1>
                <p>We specialize in providing high-quality Sneaker </p>
                <p>We ensure secure and hassle-free online shopping</p>
                <p>Our store offers exclusive discounts</p>
              </div>
              <div className="footer2">
                <h1>Contact</h1>
                <p>Number: 01 9875604 || 9867558890p</p>
                <p>Email: sneakerworld@2081@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Sneakerworld@ 2025 - All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Mainpage;
