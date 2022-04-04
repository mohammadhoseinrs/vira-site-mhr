import React, { useState } from 'react'
import './Navbar.css'
import {MdKeyboardArrowLeft} from 'react-icons/md'
import {BsFillTelephoneFill , BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import HamburgerMenu from './HamburgerMenu'
import {AnimatePresence} from 'framer-motion'

export default function Navbar() {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <>
    <div className='navbar'>
        <div className="hamburger__menu">
          <GiHamburgerMenu onClick={()=>setOpenMenu(true)} />
        </div>
    <div className='navbar__logo'>کافه ویرا</div>
    <div className="navbar__menu">
      <ul className='navbar__menu__item'>
        <li>خانه</li>
        <li>فروشگاه</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
      </ul>
      <div className="navbar__input">
      <input type="text" />
      <BsSearch />
      </div>
    </div>
    <div className="navbar__info">
      <div className="navbar__info__login">
        <p>ورود به سیستم</p>
        <MdKeyboardArrowLeft className='navbar__info__login__svg' />
      </div>
      <div className="navbar__info__phone">
        <div className="navbar__info__phone__right">
          <div className="navbar__info__phone__right__number">
          <div>454638</div>
            <p>021</p>
          </div>
          <p className="navbar__info__phone__right__text">پاسخگوی شما هستیم</p>
        </div>
        <div className="navbar__info__phone__icon">
          <BsFillTelephoneFill color='white' />
        </div>
      </div>
    </div>
    </div>
    {openMenu &&
    <AnimatePresence>
      <HamburgerMenu setOpenMenu={setOpenMenu} />
    </AnimatePresence>
    }
    </>
  )
}
