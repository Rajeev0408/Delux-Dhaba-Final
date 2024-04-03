import React from 'react';
import locationImage from '../assets/images/location.png';
import mailImage from '../assets/images/mail.png';
import callImage from '../assets/images/call.png';
import facebookImage from '../assets/images/1.png';
import instagramImage from '../assets/images/3.png';
import twitterImage from '../assets/images/2.png';
import linkedinImage from '../assets/images/5.png';

const Contact = () => {
    return (
        <section className="contactSection">
            <div className="contactcontainer">
                <div className="contactInfo">
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={locationImage} alt="Location" /></span>
                                <span>Lorem, ipsum dolor. <br />
                                    Lorem ipsum dolor sit.<br />
                                    Lorem, ipsum..
                                </span>
                            </li>
                            <li>
                                <span><img src={mailImage} alt="Mail" /></span>
                                <span><a href="mailto:deluxdhaba@gmail.com">deluxdhaba@gmail.com</a></span>
                            </li>
                            <li>
                                <span><img src={callImage} alt="Call" /></span>
                                <span>702-279-3488</span>
                            </li>
                        </ul>
                    </div>
                    <ul className="sci">
                        <li><a href="https://www.facebook.com/nassosanagn/"><img src={facebookImage} alt="Facebook" /></a></li>
                        <li><a href="https://www.instagram.com/nassosanagn_/?hl=el"><img src={instagramImage} alt="Instagram" /></a></li>
                        <li><a href="https://twitter.com/nassosanagn"><img src={twitterImage} alt="Twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/nassos-anagnostopoulos-2b9631196/"><img src={linkedinImage} alt="Linkedin" /></a></li>
                    </ul>
                </div>
                <div className="contactForm flex flex-col">
                    <h2>Send a Message</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required />
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox border border-black ">
                            <textarea required >

                            </textarea>
                            <span >Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
