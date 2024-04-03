import React from 'react'
import popularImage1 from '../assets/img/Popular1.png';
import img40 from '../assets/img/img40.png';
import popular3 from '../assets/img/popular3.png';

const Menu = () => {
  return (
    <section className="popular section" id="popular">
      <span className="section__subtitle">The Best Food</span>
      <h2>Our Menu</h2>

      <div className="popular__container container grid">
        <article className="popular__card f">
          <img src={popularImage1} className="popular__img" alt="Popular Dish" />
          <h3>Chicken Tikka</h3>
          <span className="popular__description">Punjabi Dish</span>
          {/* <span className="popular__price">Rs 450</span> */}
          <button className="popular__button  ">
          <i className="ri-shopping-bag-line">Vegetarian Food</i>
          </button>
          
        </article>

        {/* Repeat the same structure for remaining articles, replacing image sources */}
        <article className="popular__card">
          <img src={popularImage1} className="popular__img" alt="Popular Dish" />
          <h3>Chicken Tikka</h3>
          <span className="popular__description">Punjabi Dish</span>
          {/* <span className="popular__price">Rs 450</span> */}
          <button className="popular__button">
            
            <i className="ri-shopping-bag-line">Non-Veg Food</i>
          </button>
        </article>

        <article className="popular__card">
          <img src={popularImage1} className="popular__img" alt="Popular Dish" />
          <h3>Chicken Tikka</h3>
          <span className="popular__description">Punjabi Dish</span>
          {/* <span className="popular__price">Rs 450</span> */}
          <button className="popular__button">
            <i className="ri-shopping-bag-line"> Punjabi Food </i>
          </button>
        </article>

        {/* ... repeat for other articles */}

        <article className="popular__card">
          <img src={img40} className="popular__img" alt="Popular Dish" />
          <h3>Paneer Tikka</h3>
          <span className="popular__description">Indian Dish</span>
          {/* <span className="popular__price">Rs 250</span> */}
          <button className="popular__button">
            <i className="ri-shopping-bag-line">Indian Food </i>
          </button>
        </article>

        <article className="popular__card">
          <img src={popular3} className="popular__img" alt="Popular Dish" />
          <h3>Tandoori Chicken</h3>
          <span className="popular__description">Japanese Dish</span>
          {/* <span className="popular__price">Rs 350</span> */}
          <button className="popular__button">
            <i className="ri-shopping-bag-line">Chinease Food</i>
          </button>
        </article>
      </div>
    </section>


  )
}

export default Menu