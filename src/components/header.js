import { useState } from 'react'

import '../assets/scss/style.scss';

import logo from '../assets/images/logo.svg';

function Header() {

  const [headerOpen, setHeaderOpen] = useState(true)

  const toggleHeader = () => {
    setHeaderOpen(prevState => {
      const body = document.querySelector('body');
      prevState ? body.classList.remove('noScroll') : body.classList.add('noScroll')
      return !prevState
    })
  }

  return (
    <header className={`header ${headerOpen ? '' : 'open'}`}>
      <div className={`overlay ${headerOpen ? 'fade-out' : 'fade-in'}`}/>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/react-website-one" className="header__logo">
          <img src={logo} alt="logo"/>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="/react-website-one">Home</a>
          <a href="/react-website-one">About</a>
          <a href="/react-website-one">Contact</a>
          <a href="/react-website-one">Blog</a>
          <a href="/react-website-one">Careers</a>
        </div>

        <a href="/react-website-one" className="button header__cta hide-for-mobile">Request Invite</a> 
        
        <span id="btnHamburger" onClick={() => toggleHeader()} className="header__toggle hide-for-desktop">
          <span/>
          <span/>
          <span/>
        </span>
      </nav>

      <div className={`header__menu ${headerOpen ? 'fade-out' : 'fade-in'}`}>
        <a href="/react-website-one">Home</a>
        <a href="/react-website-one">About</a>
        <a href="/react-website-one">Contact</a>
        <a href="/react-website-one">Blog</a>
        <a href="/react-website-one">Careers</a>
      </div>
    </header>
  );
}

export default Header;