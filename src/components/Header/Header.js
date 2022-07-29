import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from "framer-motion";
import './Header.scss';

const Header = () => {
  const [clicked,setClicked] = useState(false)
  const color = useMotionValue('#1d768a')
  const platform = localStorage.getItem('os')

  useEffect(()=>{
    if(clicked){
      animate(color, '#fff', {
        duration: 0.5
      })
    }
  })

  return (
    <header>
      <nav className={`header_nav_${platform}`}>
        <div className='header_icon'></div>
        <div className='header_nav_item'>
          <motion.span 
            onClick={() => {setClicked(true)}}
            style = {{ color }}
          >
            案例
          </motion.span>
          <span className='header_about_icon'>
            关于我们
          </span>
          <span className='header_en_icon'></span>
        </div>
      </nav>
    </header>
  )
}

export default Header;