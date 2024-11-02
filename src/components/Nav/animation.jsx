import React from 'react'
import { motion } from 'framer-motion'
import "./Nav.css"


function PerspectiveText({text}) {
  return(
    <div className='perspective-text'>
      <p>{text}</p>
      <p>{text}</p>
    </div>
  )
}



const animation = ({label1, label2, isActive, setIsActive}) => {
  return (
    <div onClick={() => {setIsActive(!isActive)}} className='menu-button-container'>
      <motion.div 
        animate = {{top : isActive ? "-100%" : "0"}} 
        transition={{duration : 0.5, ease : [0.76, 0, 0.24, 1]}}  
        className='slider-up-cnt'
      >
        <div className='el'>
          <PerspectiveText text = {label1} /> 
        </div>
        <div className='el'>
        <PerspectiveText text = {label2} /> 
 
        </div>

      </motion.div>
    </div>
  )
}

export default animation