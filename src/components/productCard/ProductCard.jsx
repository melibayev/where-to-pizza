import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProductCard.scss'

const ProductCard = ({id, img, name, description, price}) => {
  return (
    <NavLink>
        <div className='product_card'>
            <div className="product_card__img">
                <img src={img} alt="" />
            </div>
            <div className="product_card__description">
                <h4>{name}</h4>
                <h5>{description}</h5>
                <p>от {price} ₽</p>
            </div>
        </div>
    </NavLink>
  )
}

export default ProductCard