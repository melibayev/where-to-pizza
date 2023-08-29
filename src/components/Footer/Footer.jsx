import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'


import './Footer.scss'

import Logo from '../../assets/images/header/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="footer_logo">
        <img src={Logo} alt="" />
        <h4>Куда пицца</h4>
      </div>
        <h3>Куда пицца</h3>
        <p>О компании</p>
        <p>Пользовательское соглашение</p>
        <p>Условия гарантии</p>
        <h3>Помощь</h3>
        <p>Ресторан</p>
        <p>Контакты</p>
        <p>Поддержка</p>
        <p>Отследить заказ</p>
        <h3>Контакты</h3>
        <div className="footer_location">
          <CiLocationOn />
          <p>Москва, ул. Юных Ленинцев, д.99</p>
        </div>
        <div className="footer_contacts">
          <BsTelephone />
          <p>+7 (926) 223-10-11</p>
        </div>
        <div className="copyrights">
          <p>© Copyright 2021 — Куда Пицца</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer