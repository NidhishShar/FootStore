import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, BrowserRouter } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const Store = () => <h2>Store Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const About = () => <h2>About Page</h2>;

const Navigation = () => {
  return (
   
      <nav className='container'>
        <div className='logo'>
         <a href="https://www.adidas.co.in/" target='_blank'> <img src="/images/Adidas-logo.webp" alt="adidas" style={{ width: 150 }} /></a>
        </div>
        <ul>

          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/store">Store</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <button><Link to = '/login'>Login</Link></button>
      </nav>
      
     
  );
}

export default Navigation;
