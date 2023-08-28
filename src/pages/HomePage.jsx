import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { GiCakeSlice } from 'react-icons/gi'
import { CiLocationOn } from 'react-icons/ci'
import { products } from '../components/data/data';
import { AiOutlineFilter } from 'react-icons/ai'
import Card from '../components/productCard/Card';
import styles from './HomePage.module.scss';

import Pizza from '../assets/images/home/pizza.svg'
import Zakuski from '../assets/images/home/zakuski.svg'
import Drinks from '../assets/images/home/drinks.svg'
import Btn from '../assets/images/home/input-btn.svg' 
import ProductCard from '../components/productCard/ProductCard';


const HomePage = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const productSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };
  // Filtered variables
  let box = products.filter((el) => el.category ==='Комбо')
  let pizza = products.filter((el) => el.category === 'Пицца')  



  const submit = (e) => {
    e.preventDefault()
  }


  return (
    <Fragment>
      <section id={styles.home}>
        <div className={styles.slider}>
          <Slider {...settings} className={styles.slider_items}>
            <div className={styles.category_item}>
              <img src={Pizza} alt="" />
              <p>Пицца</p>
            </div>
            <div className={styles.category_item}>
              <img src={Drinks} alt="" />
              <p>Напитки</p>
            </div>
            <div className={styles.category_item}>
              <img src={Zakuski} alt="" />
              <p>Закуски</p>
            </div>
            <div className={styles.category_item}>
              <GiCakeSlice />
              <p>Десерты</p>
            </div>
          </Slider>
        </div>

        <div className={styles.product_slider}>
          <Slider {...productSettings}>
          {box.map((pr) => (
            <Card {...pr}/>
          ))}
          </Slider>
        </div>
      </section>

        <section id={styles.form}>
          <div className="container">
            <div className={styles.form}>
              <h4>Проверить адрес доставки</h4>
              <form onSubmit={submit}>
                <CiLocationOn />
                <input type="text" placeholder='Адрес'/>
                <button type='submit'><img src={Btn} alt="" /></button>
              </form>
            </div>
          </div>
        </section>
        
        <section id={styles.pizzaSection}>
            <div className="container">
              <div className={styles.pizza_home}>
                <h2>Пицца</h2>
                <button>
                <AiOutlineFilter />
                Фильтры
                </button>
              </div>
              {pizza.map((pr) => (
                <ProductCard key={pr.id} {...pr}/>
              ))}
            </div>
        </section>

    </Fragment>
  )
}

export default HomePage