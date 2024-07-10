import React from 'react'
import Logo from '../assets/Library.svg'

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row row__column">
                <a href="/">
                    <img src={Logo} alt="" className="footer__logo--img" />
                </a>
                <div className="footer__list">
                    <a href="" className="footer__link">Home</a>
                    <span className="footer__link">About</span>
                    <a href="/books" className="footer__link">Books</a>
                    <a href="/cart" className="footer__link">Cart</a>
                </div>
                <div className="footer__copyright">Copyright &copy; 2024 Cat Nguyen</div>
            </div>
        </div>
    </footer>
  )
}

