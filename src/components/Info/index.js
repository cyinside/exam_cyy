import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./index.scss";
import qrUrl from "../../assets/qrCode.png";
import qrUrl_pc from "../../assets/qrCode_pc.png";
import { motion } from "framer-motion";

const itemsVariants = {
  hidden : {
    marginLeft: '30%',
    opacity: 0,
  },
  visible: {
    marginLeft: '0%',
    opacity: 1,
  }
}

const qrcodeVariants = {
  hidden : {
    opacity: 0,
    x: '-50%'
  },
  visible: {
    opacity: 1,
    x: '-5%',
    transition: {
      delay: 0.4,
      type: 'spring',
      duration: 1,
    }
  },
}

const Info = (props) => {
  const [ clicked, setClicked] = useState(false)
  const location = useLocation()
  const platform = localStorage.getItem('os')
  const isHome = location.pathname === '/';
  const items_animate_op = (delayVal) => !isHome && ({
      variants : itemsVariants,
      initial : 'hidden',
      animate : 'visible',
      transition : {
        delay: delayVal,
        duration: 0.8,
        ease : 'easeOut',
      }
    })
  
  
  return (
    <div className={`info_${platform}`}>
      <motion.span className='info_title'
        {...items_animate_op(0.6)}
      ></motion.span>
      <motion.span className='info_subtitle'
        {...items_animate_op(1)}
      ></motion.span>
      <motion.span className='info_desc'
        {...items_animate_op(1.2)}
      ></motion.span>
      <motion.div className="info_box"
        {...items_animate_op(1.4)}
      >
          <div className='info_qrcode'>
            { clicked ? (
                <motion.img
                  variants = { qrcodeVariants }
                  initial = 'hidden'
                  animate = 'visible'
                  src={ platform === 'mobile' ? qrUrl : qrUrl_pc } alt="" />
              ) : null }
          </div>
          <motion.div className='info_btns'>
            <div className={`btns_contact ${clicked ? 'active' : ''}`} onClick={e => {setClicked(true)}}>
              <span>联系我们</span>
              <span>
                {clicked ? 
                <div className='btn_arrows'/> : ''}
                添加微信
              </span>
            </div>
            <Link to="/about">
              <div className='btns_contact'>
                <span>下一页</span>
                <span>下一页</span>
              </div>
            </Link>
          </motion.div>
      </motion.div>
      <motion.div className='info_case' 
        {...items_animate_op(1.6)}
      ></motion.div>
      <motion.div className='info_case' 
        {...items_animate_op(1.8)}
      ></motion.div>
    </div>
  )
}

export default Info