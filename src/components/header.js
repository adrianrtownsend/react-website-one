import '../assets/scss/style.scss';

import logo from '../assets/images/logo.svg';

const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

function btnHamburgerClick(e) {
  e.preventDefault();
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  } 
}

function Header() {

  return (
    <header className="header">
      <div className="overlay has-fade"/>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo"/>
        </a>

        <div className="header__links hide-for-mobile">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
        </div>

        <a href="/" className="button header__cta hide-for-mobile">Request Invite</a> 
        
        <a id="btnHamburger" onClick={btnHamburgerClick} href="/" className="header__toggle hide-for-desktop">
          <span/>
          <span/>
          <span/>
        </a>
      </nav>

      <div className="header__menu has-fade">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
      </div>
    </header>
  );
}

export default Header;