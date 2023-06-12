import './Navbar.css'
import { useState } from 'react';
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../assets/data';
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [isNavShowing, setIshNavShowing] = useState(false);
  return ( 

    <nav>
        <div className="container nav__container">
         <Link to='/' className='logo' onClick={() => setIshNavShowing(false)} >
        <img src={Logo} alt="Nav Logo" />
         </Link>

         <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
          {
            links.map(({name,path}, index) => {
            return (
                <li key={index} onClick={()=>{
                  setIshNavShowing(prev => !prev )
                }}
                    >
              <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}>{name}</NavLink>
          </li>
              )
            })
          }
         </ul>

<button className="nav__toggle-btn" onClick={()=>{
  setIshNavShowing(prev => !prev )
}}>{
  isNavShowing ? <AiOutlineClose /> :  <BiMenu/>
} </button>

        </div>
    </nav>
  )
}

export default Navbar
