import React from 'react';
import logoImage from '../assets/img/LOGO_Finalpng.png'
import springOnionImage from '../assets/img/spring-onion.png';
import spinachLeafImage from '../assets/img/spinach-leaf.png';
import leafBranch4Image from '../assets/img/leaf-branch-4.png';
import footerCard1Image from '../assets/img/footer-card-1.png';
import footerCard2Image from '../assets/img/footer-card-2.png';
import footerCard3Image from '../assets/img/footer-card-3.png';
import footerCard4Image from '../assets/img/footer-card-4.png';
const Footer = () => {
    return (
        <footer className="footer flex flex-col justify-center">
            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        <img src={logoImage} alt="logo image" />
                        Delux Dabha
                    </a>
                    <p className="footer__description">
                        Food for the body is not <br />
                        enough. There must be food <br />
                        for the soul.
                    </p>
                </div>

                <div className="footer__content">
                    <div>
                        <h3 className="footer__title">Main Menu</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Menus</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Offers</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Events</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Information</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Order & Returns</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Videos</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Reservation</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Address</h3>
                        <ul className="footer__links">
                            <li className="footer__information">
                                Lorem, ipsum dolor. <br /> Lorem, ipsum dolor..
                            </li>
                            <li className="footer__information">
                                9AM - 11PM
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">Social Media</h3>
                        <ul className="footer__social">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                className="footer__social-links"
                            >
                                <i className="ri-facebook-circle-fill"></i>
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                className="footer__social-links"
                            >
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                className="footer__social-links"
                            >
                                <i className="ri-linkedin-fill"></i>
                            </a>
                        </ul>
                    </div>
                </div>

                <img src={springOnionImage} className="footer__onion" alt="spring onion" />
                <img src={spinachLeafImage} className="footer__spinach" alt="spinach leaf" />
                <img src={leafBranch4Image} className="footer__leaf" alt="leaf branch" />
            </div>

            <div className="footer__info container">
                <div className="footer__card">
                    <img src={footerCard1Image} alt="card image" />
                    <img src={footerCard2Image} alt="card image" />
                    <img src={footerCard3Image} alt="card image" />
                    <img src={footerCard4Image} alt="card image" />
                </div>
                <span className="footer__copy">
                    &#169; Copyright By Delux Dhaba . All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
