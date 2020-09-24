import React from 'react'
import Logo from '../images/logo.svg'
import Button from './Button'

export default function Header() {
  return (
    <div className='header-container'>
      <img src={Logo} alt='easybank logo' />
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#careers'>Careers</a>
          </li>
        </ul>
      </nav>
      <Button />
    </div>
  )
}
