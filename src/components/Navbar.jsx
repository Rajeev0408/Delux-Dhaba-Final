import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import for using Link components in navigation
import logoImage from '../assets/img/LOGO_Finalpng.png';
import leafBranch4 from '../assets/img/leaf-branch-4.png'; // Import for leaf-branch-4.png
import leafBranch3 from '../assets/img/leaf-branch-3.png'; // Import for leaf-branch-3.png

const Navbar = () => {
    const [showSidebar, setShowSidebar] = React.useState(false);
    const [theme, setTheme] = React.useState('light'); // Step 2: Add state for theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark-theme' : 'light');
    };

    // Step 4: Apply theme class
    useEffect(() => {
        document.body.className = theme; // Apply the theme class to the root element
    }, [theme]);

    return (
        <header className="header flex " id="header">
            <nav className="nav container pr-3">
                <Link to="/" className="nav__logo ">
                    <img src={logoImage} alt="logo image" className='md:block hidden' />
                    Delux Dabha
                </Link>
                <ul className={`md:hidden gap-3 nav__menu flex-col absolute top-0 right-0 p-5  justify-center h-screen w-[100vw] h-[30vh] bg-[#fff1eb]  flex ${showSidebar ? '' : 'hidden'}`}>
                    <li className="nav__item">
                        <Link to="/" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>About Us</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/menu" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Menu</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contactUs" className="nav__link" onClick={() => setShowSidebar(!showSidebar)}>Contact Us</Link>
                    </li>
                </ul>
                <ul className={`md:flex hidden nav__list gap-10 justify-center  `}>
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">About Us</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/menu" className="nav__link">Menu</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/contactUs" className="nav__link">Contact Us</Link>
                    </li>
                </ul>

                <div className={` absolute top-3 cursor-pointer right-3 z-10 flex m-[20px] md:hidden ${showSidebar ? '' : 'hidden'}`} id="nav-close" onClick={() => setShowSidebar(!showSidebar)}>
                    <i className="ri-close-line text-3xl"></i>
                </div>

                <img src={leafBranch4} alt="nav image" className="nav__img-1" />
                <img src={leafBranch3} alt="nav image" className="nav__img-2" />

                <div className={`nav__buttons  `}>
                    <i className="ri-moon-line change-theme" id="theme-button" onClick={toggleTheme}></i> {/* Modified to include onClick */}

                    <div className="nav__toggle" id="nav-toggle" onClick={() => setShowSidebar(!showSidebar)}>
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header >
    );
};

export default Navbar;
