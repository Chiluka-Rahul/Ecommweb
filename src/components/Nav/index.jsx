import React, { useState } from 'react'
import {AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useHid } from '../../context/HidContext'
import Animation from './animation'
import './Nav.css' 
import NavLinks from '../NavLinks/NavLinks'

const ListMenu = ({children}) => {
  const DURATION = 0.2;
  const STRAGGER = 0.025;
  return (
    <motion.li initial = "initial" whileHover = "hovered" className='text-hover'>
      <div>
        {children.split("").map((l,i) => {
          return <motion.span variants = {{initial: {y:0}, hovered: {y: "-100%"}}} transition={{ease : "easeInOut", duration : DURATION, delay: STRAGGER * i}} key={i} className='inline-span'>{l}</motion.span>
        })}
      </div>
      <div className='another-text'>
        {children.split("").map((l,i) => {
          return <motion.span variants = {{initial: {y:"100%"}, hovered: {y: 0}}} transition={{ease : "easeInOut", duration : DURATION, delay: STRAGGER * i}} key={i} className='inline-span'>{l}</motion.span>
        })}
      </div>
    </motion.li>
  )
}


const Nav = () => {
  const { hid } = useHid();
  const [hidden, setHidden] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const { scrollY } = useScroll();
  const menu = "menu"
  const close = "close"

useMotionValueEvent(scrollY,"change", (latest) => {
    const prev = scrollY.getPrevious();
    if(latest > prev && latest > 150){
      setHidden(true)
    }else{
      setHidden(false)
    }

  })

  const variants = {
    open : {
      width : 380,
      height: 420,
      top: "-15px",
      right: "-5px",
      transition : {duration : 0.5, ease : [0.76, 0, 0.24, 1]}
    },
    closed : {
      width: 95,
      height: 40,
      top: "-10px",
      right: "2px",
      transition : {duration : 0.5, delay: 0.35, ease : [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <motion.nav variants={{visible : {y : 0}, hidden : {y : "-100%"}}} animate = {hidden && hid ? "hidden" : "visible"} transition={{duration : 0.35, ease : "easeInOut"}} className='nav-container'>
        <div className='navigation'>
            <img src={`${process.env.PUBLIC_URL}/Logo-Image.jpg`} alt='logo-image'className='Image'/>
            
            <h1 className='brand-heading'><Link to={"/"}>Ecomm-Web</Link></h1>
              
              {/* <div className='cart-btn'>
                <Link to={"/cart"} >
                    <ListMenu className='cart'>Cart</ListMenu>
                </Link>
              </div> */}
              <div className='btn-cnt'>
                <motion.div variants={variants} animate = {isActive ? "open" : "closed"} initial = "closed"  className='background-menu'>
                  <AnimatePresence>
                    {isActive && <NavLinks />}
                  </AnimatePresence>
                </motion.div>
                <Animation label1 = {menu} label2 = {close} isActive = {isActive} setIsActive = {setIsActive}/>
              </div>
        </div>
    </motion.nav>
  )
}

export default Nav