import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io'
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

import Logo from '../../assets/images/header/logo.svg'
import Hamburger from '../../assets/images/header/hamburger.svg'
import Xmark from '../../assets/images/header/xmark.svg'

import './Header.scss';

const Header = () => {
const [isNavbarOpen, setIsNavbarOpen] = useState(false);

const toggleNavbar = () => {
  setIsNavbarOpen(!isNavbarOpen);
};
  
  return (
    <header>
      <nav>
        <div className="navbar-top">
          <div className="container">
            <div className="top-left">
            <CiLocationOn />
            <div>
              <p>Москва</p>
              <IoIosArrowDown />
            </div>
            </div>
            <div className="top-right">
              <p>Среднее время доставки*: 00:24:19</p>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="container">
            <NavLink to='/'>
              <div className="bottom-left">
                <img src={Logo} alt="" />
                <p>Куда пицца</p>
              </div>
            </NavLink>
            <div className="bottom-right">
              <button className='toggle-btn' onClick={toggleNavbar}><img src={isNavbarOpen ? Xmark : Hamburger} alt="" /></button>
            </div>
          </div>
        </div>
        <div className={`toggle-navbar ${isNavbarOpen ? 'open' : ''}`}>
          <div className="enter_account">
            <AiOutlineUser />
          <p>Войти в аккаунт</p>
          </div>
          <div className="toggle-links">
            <NavLink><p>Акции</p></NavLink>
            <NavLink><p>О компании</p></NavLink>
            <NavLink><p>Пользовательское соглашение</p></NavLink>
            <NavLink><p>Условия гарантии</p></NavLink>
            <NavLink><p>Ресторан</p></NavLink>
            <NavLink><p>Контакты</p></NavLink>
            <NavLink><p>Поддержка</p></NavLink>
            <NavLink><p>Отследить заказ</p></NavLink>
          </div>
          <div className="toggle-phone">
            <BsTelephone />
            <p>+7 (926) 223-10-11</p>
          </div>
          <div className="toggle-location">
            <CiLocationOn />
            <p>Москва, ул. Юных Ленинцев, д.99</p>
          </div>
          <div className="toggle-routine">
            <p>Время работы: с 11:00 до 23:00</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header