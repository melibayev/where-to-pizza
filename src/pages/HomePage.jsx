import React, { Fragment, useState } from 'react'
import Slider from 'react-slick';
import { GiCakeSlice } from 'react-icons/gi'
import { CiLocationOn } from 'react-icons/ci'
import { products } from '../components/data/data';
import { AiOutlineFilter } from 'react-icons/ai'
import {GiCancel}  from 'react-icons/gi'
import { AiOutlineFire }  from 'react-icons/ai'
import Card from '../components/productCard/Card';
import styles from './HomePage.module.scss';

import Pizza from '../assets/images/home/pizza.svg'
import Zakuski from '../assets/images/home/zakuski.svg'
import Drinks from '../assets/images/home/drinks.svg'
import Btn from '../assets/images/home/input-btn.svg' 
import ProductCard from '../components/productCard/ProductCard';
import { useBoolContext } from '../context/BoolContext';


const HomePage = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };
  const productSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
  };
  // Filtered variables
  let box = products.filter((el) => el.category ==='Комбо')
  let pizza = products.filter((el) => el.category === 'Пицца')  
  let sushi = products.filter((el) => el.category === 'Суши')
  let zakuski = products.filter((el) => el.category === 'Закуски')
  let deserts = products.filter((el) => el.category === 'Десерты')
  let drinks = products.filter((el) => el.category === 'Напитки')

  // LocalStorage product
  let selected_product = products.filter((el) => el.id === localStorage.getItem('product'))
  let product = selected_product[0];

  // Close function for selected product
  const {booleanValue, setBooleanValue } = useBoolContext()
  const productClose = () => {
    setBooleanValue(false);
  }
  
  const saveToCart = () => {
    localStorage.setItem('Cart',JSON.stringify(product))
    setBooleanValue(false);
  }
  
  // prevent default for form
  const submit = (e) => {
    e.preventDefault()
  }

  // Change color from tradition to thin
  const [ buttonPosition, setButtonPosition ] = useState(false); 
  const changeState = () => {
    setButtonPosition(!buttonPosition);
  }


  return (
    <Fragment>
      <section id={styles.home}>
        <div className="container">
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
        <section id={styles.sushiSection}>
            <div className="container">
              <div className={styles.sushi_home}>
                <h2>Суши</h2>
                <button>
                <AiOutlineFilter />
                Фильтры
                </button>
              </div>
              {sushi.map((pr) => (
                <ProductCard key={pr.id} {...pr}/>
              ))}
            </div>
        </section>
        <section id={styles.zakuskiSection}>
            <div className="container">
              <div className={styles.zakuski_home}>
                <h2>Закуски</h2>
                <button>
                <AiOutlineFilter />
                Фильтры
                </button>
              </div>
              {zakuski.map((pr) => (
                <ProductCard key={pr.id} {...pr}/>
              ))}
            </div>
        </section>
        <section id={styles.desertsSection}>
            <div className="container">
              <div className={styles.deserts_home}>
                <h2>Десерты</h2>
                <button>
                <AiOutlineFilter />
                Фильтры
                </button>
              </div>
              {deserts.map((pr) => (
                <ProductCard key={pr.id} {...pr}/>
              ))}
            </div>
        </section>
        <section id={styles.drinksSection}>
            <div className="container">
              <div className={styles.drinks_home}>
                <h2>Напитки</h2>
                <button>
                <AiOutlineFilter />
                Фильтры
                </button>
              </div>
              {drinks.map((pr) => (
                <ProductCard key={pr.id} {...pr}/>
              ))}
            </div>
        </section>
        <section id={styles.home_info}>
          <div className="container">
            <h4>Сео-текст</h4>
            <p>Американская пицца — близкая родственница классического итальянского блюда, отличающаяся от него щедростью теста и начинки. На пышной ароматной основе равномерно распределяются самые свежие...</p>
            <span>Подробнее</span>
          </div>
        </section>

        <div className={`${styles.boxx} ${booleanValue ? styles.product_open : ''}`  }>
              <div className="container">
                <button onClick={productClose} className={styles.closeBtn}><GiCancel /></button>
                <div className={styles.product_image}>
                  <img src={product !== '' ? product.img : ''} alt="" />
                </div>
                <div className={styles.product_name}>
                  <AiOutlineFire />
                  <h4>{product !== '' ? product.name : ''}</h4>
                </div>
                <div className={styles.product_type}>
                  <button onClick={changeState}><p>Традиционное</p></button>
                  <button onClick={changeState}><p>Тонкое</p></button>
                  <div className={`${styles.changeColor} ${buttonPosition ? styles.moveLeft : ''}`}>
                    <p>{buttonPosition ? 'Тонкое' : 'Традиционное'}</p>
                  </div>
                </div>

                <div className={styles.addCart}>
                  <p>Итого: {product.price} ₽</p>
                  <button onClick={saveToCart}>
                    Добавить
                  </button>
                </div>
              </div>
        </div>
        
    </Fragment>
  )
}

export default HomePage