import React, { Fragment } from 'react'
import './Card.scss'
const Card = ({id, img, name, price}) => {
  return (
    <Fragment>
      <div className='card'>
        <img src={img} alt="img" />
        <p>{name} <br />
        от {price} рублей
        </p>
    </div>
    </Fragment>
  )
}

export default Card