import React, { useRef, useEffect } from 'react'
import { ReactTyped } from "react-typed";
import About from './About';
import ScrollReveal from 'scrollreveal';

import img40 from '../assets/img/img40.png'
import leafBranch2 from "../assets/img/leaf-branch-2.png"
import leafBranch3 from '../assets/img/leaf-branch-3.png';
import leafBranch4 from "../assets/img/leaf-branch-4.png"
import homeSushiTitle from '../assets/img/home-sushi-title.png'
import spinachLeaf from '../assets/img/spinach-leaf.png';
import salad from '../assets/img/Salad.png';
import popular3 from '../assets/img/popular3.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const homeRef = useRef(null);
    const recentlyRef = useRef(null);
    const newsletterRef = useRef(null);
    useEffect(() => {
        if (homeRef.current) {
            ScrollReveal().reveal(homeRef.current, {
                origin: 'left',
                duration: 1000,
                delay: 150,
                distance: '500px',
                scale: 1,
                easing: 'ease',
            });
        }

        if (recentlyRef.current) {
            ScrollReveal().reveal(recentlyRef.current, {
                origin: 'left',
                duration: 1000,
                delay: 150,
                distance: '500px',
                scale: 1,
                easing: 'ease',
            });
        }

        if (newsletterRef.current) {
            ScrollReveal().reveal(newsletterRef.current, {
                origin: 'left',
                duration: 1000,
                delay: 150,
                distance: '500px',
                scale: 1,
                easing: 'ease',
            });
        }
    }, []);

    return (

        <div className='flex flex-col justify-center'>
            <section className=" home section flex " id="home" ref={homeRef}>
                <div className="home__container container grid ">
                    <div className="home_container_img place-self-center md:place-self-auto">
                        <img src={img40} alt="home image" className="home__img" />
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">
                            Enjoy Delicious
                            <div>
                                <img src={homeSushiTitle} alt="home image" />

                                <ReactTyped strings={[
                                    "Indian Food",
                                    "Punjabi Food",
                                    "Italian Food",
                                    "Chinease Food",
                                    "French Food",
                                ]} typeSpeed={100}
                                    backDelay={1000}
                                    backSpeed={80}
                                    loop
                                />
                            </div>
                        </h1>
                        <p className="home__description ">
                            Enjoy a good dinner with the best dishes in the Restorant and improve your day.
                        </p>
                        <Link to="/Menu" className="button">
                            Order Now <i className="ri-arrow-right-line"></i>
                        </Link>

                    </div>
                </div>

                <img src={leafBranch2} alt="leaf branch" className="home__leaf-1 " />
                <img src={leafBranch4} alt="leaf branch" className="home__leaf-2" />
                <a href="#" className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-line"></i>
                </a>
            </section>
            {/* <About /> */}
            <section className="recently section flex justify-center" id="recently" ref={recentlyRef}>
                <div className="recently__container container grid">
                    <div className="recently__data">
                        <span className="section__subtitle">Recently Added</span>
                        <h2 className="section__title">Tandoori Chicken<br />Extra Smoky</h2>
                        <p className="recently__description">
                            Take a look at What's new. And do not deprive yourself of a good
                            meal, enjoy and be happy.
                        </p>
                        <a href="./menu.html" className="button">
                            Order Now <i className="ri-arrow-right-line"></i>
                        </a>
                        <img src={spinachLeaf} className="recently__data-img" alt="Spinach Leaf" />
                    </div>

                    <img src={popular3} className="recently__img" alt="Recently Added Dish" />
                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>
            <section className="newsletter section flex " ref={newsletterRef}>
                <div className="newsletter__container container">
                    <div className="newsletter__content grid">
                        <img src={salad} className="newsletter__img" alt="Salad Image" />
                        <div className="newsletter__data">
                            <span className="section__subtitle">Newsletter</span>
                            <h2 className="section__title">Suscribe For<br />More</h2>
                            <form action="" className="newsletter__form">
                                <input type="email" placeholder="Enter email" className="newsletter__input" />
                                <button className="button newsletter__button">
                                    Suscribe <i className="ri-send-plane-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src={spinachLeaf} className="newsletter__spinach" alt="Spinach Leaf" />
                </div>
            </section>
        </div>

    );
};

export default Home