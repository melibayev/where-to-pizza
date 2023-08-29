import React from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../components/data/data';
import { AiOutlineInfoCircle } from 'react-icons/ai'

import styles from './ProductPage.module.scss';
import Slider from 'react-slick';

import Mosarella from '../assets/images/product/mosarella.svg'
import Ogursi from '../assets/images/product/ogursi.svg'
import Pepperoni from '../assets/images/product/pepperoni.svg'
import Tomat from '../assets/images/product/tomat.svg'

const ProductPage = () => {
  let location = useLocation();
  const product = products.filter((el) => el.id === location.pathname.split('/').at(-1))
  const {img, id, name } = product[0];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    adaptiveHeight: true
  };
  return (
    <div>
      <div className="container">
        <div className={styles.product__image}>
          <img src={img} alt="" />
        </div>
        <div className={styles.product__info}>
          <h4>{name}</h4>
          <AiOutlineInfoCircle />
        </div>
      </div>

      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.product_item}>
            <img src={Mosarella} alt="" />
            <p>Моцарелла</p>
          </div>
          <div className={styles.product_item}>
            <img src={Ogursi} alt="" />
            <p>Огурцы</p>
          </div>
          <div className={styles.product_item}>
            <img src={Pepperoni} alt="" />
            <p>Пепперони</p>
          </div>
          <div className={styles.product_item}>
            <img src={Tomat} alt="" />
            <p>Томатный</p>
          </div>
        </Slider>
      </div>


    </div>
  )
}

export default ProductPage