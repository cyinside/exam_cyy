import React from 'react'
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';


const AnimateComponent = (props) => {
  const { children } = props
  const location = useLocation()


  let containerVariants = {
    hidden : {
      x: '100vw',
      skewX: '0deg'
    },
    visible: {
      x: ['100vw', '0vw'],
      skewX: ['0deg', '10deg', '0deg'],
      transition: {
        delay: .4,
        duration: .6,
        ease : 'easeOut',
      }
    },
    exit: {
      x: ['0vw', '-100vw'],
      skewX: ['0deg', '10deg', '0deg'],
      transition : {
        duration: .4,
        ease : 'easeInOut',
      }
    }
  }

  const isHome = location.pathname === '/';
  if(isHome){
    containerVariants = {}
  }

  return (
    <motion.div
      variants= {containerVariants}
      initial= "hidden"
      animate= "visible"
      exit= "exit"
    >{children}</motion.div>
  )
}

export default AnimateComponent