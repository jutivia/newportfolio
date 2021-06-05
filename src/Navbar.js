import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

  
const Navbar = () => {
  const {openSidebar, openSubmenu,closeSubmenu}= useGlobalContext();

  const displaySubmenu=(e)=>{
    const page= e.target.textContent;
    const tempBtn= e.target.getBoundingClientRect();
    const center= (tempBtn.left +tempBtn.right)/2
    const bottom =tempBtn-3;
    openSubmenu(page, {center, bottom});
  }
  const handleSubmenu =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className='nav-center'>
    <div className='nav-header'>
     <h2 className='add-name-css'>add name</h2>
     <button  className='btn toggle-btn'onClick={openSidebar}><FaBars/></button>    
 </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            About
          </button>
          </li>
          <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            Projects
          </button>
          </li>
          <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            Contact
          </button>
        </li>

      </ul>
      <button className='btn signin-btn'>Get in Touch </button>
    </div>
  </nav>
}

export default Navbar
