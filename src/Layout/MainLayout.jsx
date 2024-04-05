import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logo } from '../assets'
import "./style.css"
import { FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa";
import About from '../pages/about/About';


const Layout = () => {
  return (
    <div>
      <div className='bodyCover'>
      <nav className='navBar'>
        <div className='logoDesing'>
          <img src={logo} alt="CoffeShop logo"/>
        </div>

        <ul className='ulPages'>
          <li><Link to="/">Home</Link></li>
          <li>Contato</li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/cardapio">Cardapio</Link></li>
        </ul>
      </nav>
      <Outlet></Outlet>

      <footer>
        <h2>Todos os direitos reservados a &copy;CoffeShop</h2>

        <ul>
          <li><FaInstagram/></li>
          <li><FaTwitter/></li>
          <li><FaLinkedinIn/></li>
        </ul>
      </footer>
      </div>
    </div>
  )
}

export default Layout