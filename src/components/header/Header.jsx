import './Header.css';
import { useEffect, useState, useRef } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Home from '../page/Home';
import ContactUs from '../page/ContactUs';

const hostUrl = import.meta.env.VITE_APP_URL;

function Header() {
  const navRef = useRef(null);
  const togglerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;
    const navToggler = togglerRef.current;
    const header = headerRef.current;

    // Function to toggle navbar open/close
    const toggleNavbar = () => {
      navbar.classList.toggle('active');
      navToggler.classList.toggle('active');
    };

    // Function to close navbar
    const closeNavbar = () => {
      navbar.classList.remove('active');
      navToggler.classList.remove('active');
    };

    // Add click event to toggler button
    navToggler.addEventListener('click', toggleNavbar);

    // Add click event to all nav links to close navbar
    const navLinks = navbar.querySelectorAll('[data-nav-link]');
    navLinks.forEach(link => link.addEventListener('click', closeNavbar));

    // Scroll event to toggle header active class
    const onScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup listeners on unmount
    return () => {
      navToggler.removeEventListener('click', toggleNavbar);
      navLinks.forEach(link => link.removeEventListener('click', closeNavbar));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  

  return (
     <header className="header" data-header ref={headerRef}>
      <div className="container">

        <a href="#" className="logo">Gupta</a>

        <nav className="navbar" data-navbar ref={navRef}>
          {/* <ul className="navbar-list">
            <li>
              <a href={`${hostUrl}Home/Index`} className="navbar-link" data-nav-link>Home</a>
              Link
            </li>
            <li>
              <a href={`${hostUrl}Home/NewsArticles`} className="navbar-link" data-nav-link>News & Articles</a>
            </li>
            <li>
              <a href={`${hostUrl}Home/ContactUs`} className="navbar-link" data-nav-link>Contact Us</a>
            </li>
            <li>
              <a href={`${hostUrl}Home/Login`} className="navbar-link" data-nav-link>Admin</a>
            </li>
          </ul> */}
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link" data-nav-link>Home</Link>
            </li>
            <li>
              <Link to="/BlogArticleDetail" className="navbar-link" data-nav-link>News & Articles</Link>
            </li>
            <li>
              <Link to="/ContactUs" className="navbar-link" data-nav-link>Contact Us</Link>
            </li>
            <li>
              <Link to="/admin" className="navbar-link" data-nav-link>Admin</Link>
            </li>
          </ul>

        </nav>

        <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler ref={togglerRef}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

      </div>

    </header>
  );
}

export default Header;
