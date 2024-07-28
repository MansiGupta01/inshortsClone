import React from 'react';
import './Navnews.css';
import HamburgerDrawer from './HamburgerDrawer.js';
function Navnews({setCategory}) {
  return (
    <div className='inshortHeader'>
      <div className='navIcon'><HamburgerDrawer setCategory={setCategory}/></div>
      <img 
      style={{cursor:"pointer"}}
      src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' 
      className='headerIcon' 
      height="80%"
      alt='logo'
      />
    </div>
  )
}

export default Navnews
