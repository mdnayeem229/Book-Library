import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/book-and-studen-logo-free-vector.jpg';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
const Navbar = () => {
  const [menu, nav] = useState (false);
  function toggle(){
    nav(!menu);
  }
  return (
    <>
    <div className="main-nav">
    <div className="logo">
    <Link to=""><img src={logo} alt=""/>BOOKHUB</Link>
    </div>
    <div className="menu" onClick={toggle}> {menu ? ( <i class="fa-solid fa-xmark"></i>) : (<i class="fa-solid fa-bars"></i>)} </div>
    <nav className={menu ? 'nav active' : 'sidbar' }>
       <Link to="/">Home</Link>
       <Link to="/About">About</Link>
       <Link to="/Contact">Contact</Link>
</nav>
</div>
</>

)
}


export default Navbar









