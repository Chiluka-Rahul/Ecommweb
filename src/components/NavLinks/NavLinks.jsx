import React from 'react'
import { navgLinks } from './navigationlinks'
import { motion } from 'framer-motion'
import './NavLinks.css'



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



const perspective = {
    initial : {
        opacity : 0,
        rotateX : 90,
        translateY : 80,
        translateX : -20,
    },
    enter : (i) => ({
        opacity : 1,
        rotateX : 0,
        translateY : 0,
        translateX : 0,
        transition : {duration: 0.65, opacity:{duration : 0.35}, delay : 0.5 + (i * 0.1), ease : [.215,.61,.355,1],}
    }),
    exit : {
        opacity : 0,
        transition : {duration : 0.5, ease : [0.76, 0, 0.24, 1]}

    }
}

const NavLinks = () => {
  return (
    <div className='navLinks-container'>
        <div className='navLinks-header'>
            {navgLinks.map((link, i) => {
                return(
                    <div key={i} className='nav-linkk-container'>
                        <motion.div variants = {perspective} custom={i} whileHover= "hovered" animate = "enter" exit= "exit" initial = "initial">   
                            <a href={link.href}> <ListMenu>{link.title}</ListMenu></a>
                        </motion.div>    
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default NavLinks