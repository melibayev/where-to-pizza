import React, { Fragment } from 'react'
import { useBoolContext } from '../../context/BoolContext';
import './ProductCard.scss'

const ProductCard = ({id, img, name, description, price,}) => {
  const {setBooleanValue } = useBoolContext();
  const saveProduct = (id) => {
    localStorage.setItem('product', id);
    setBooleanValue(true);
  }
  return (
    <Fragment>
        <div className='product_card' onClick={() => saveProduct(id)}>
            <div className="product_card__img">
                <img src={img} alt="" />
            </div>
            <div className="product_card__description">
                <h4>{name}</h4>
                <h5>{description}</h5>
                <p>от {price} ₽</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductCard