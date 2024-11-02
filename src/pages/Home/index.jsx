import React,{  useRef} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../../components/Nav'
import {AnimatePresence, motion, useScroll, useTransform, useInView} from 'framer-motion'
import ProductTop from '../../components/ProductTop/ProductTop'
import './style.css'
import ProductFeatures from '../../components/ProductFeatures/ProductFeatures'


const slideUp = {
  initial : {y : "100%"},
  open: (i) => ({
    y : "0%",
    transition: {ease: [0.12, 0, 0.39, 0], duration : 0.8, delay : 0.05 * (i)}, 
  }),
  closed : {
    y : "100%",
    transition : {duration : 0.8}
  }
}

const Homee = () => {

  return (
    <>
    <div className="homee">
      <div className='home-first-container'>
        <div  className='image-container'>
          <AnimatePresence mode='wait'>

          <>
          <motion.div initial = {{x : "0%"}} animate = {{x : "100%", transition: {duration: 1.5, ease: [0.65, 0, 0.35, 1]}}} className='imagee'>
          </motion.div>
          <motion.div initial = {{scale : 1.3}} animate = {{scale : 1, transition: {duration: 1.5, ease: [0.65, 0, 0.35, 1]} }}>
            <img src={`${process.env.PUBLIC_URL}/HomeImage.jpg`} alt='image-picture' className='image-1'/>
          </motion.div>
          </>
          
          </AnimatePresence>
        </div>
        <div className='side-container'> 
          <h1 className='side-heading'>Stand Out with Style</h1>
          <p className='side-paragraph'> Style is more than appearance—it's a language of self-expression, evolving with every trend and season. Whether it’s what you wear, the gadgets you use, or the decor you choose, each choice you make reflects your personality and passions. Embrace a world of products that empower you to be bold, be seen, and be authentically you. Discover something new and exciting every day, and make each choice a true reflection of your individuality.</p>
            <Link  to = "/products">
              <motion.button className='button-container' initial = {{y : 0}} whileHover={{y: 5}}> Shop Now</motion.button>
            </Link>

        </div>
      </div>
    </div>
    </>
  )
}


const ImagePhoto = () => {
  const imageContainerRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: imageContainerRef,
    markers : true,
    offset : ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0,1], ["-5%", "5%"])
  return (
    <div ref={imageContainerRef} className='ecomm-image-container' style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
      <div className='ecomm-image-inner-container'>
        <motion.div style={{y}} className='ecomm-image'>
          <img src={`${process.env.PUBLIC_URL}/ShoppingPhoto.jpg`} alt='imagePhoto'/>
        </motion.div>
      </div>
    </div>
  )
}

const Quote = () => {
  const heading = "Good things Inside"
  const heading1 = "Shop it!"
  const headd = useRef(null)
  const isInView = useInView(headd)
  return(
    <div ref={headd} className='quote-container'>
      <h1 className='quote'>
        <div>
          {heading.split(" ").map((word, i) => {
              return <span className='mask-1' key={i}><motion.span variants={slideUp} initial = 'initial' animate = {isInView ? 'open' : 'closed'} custom={i} key={i}>{word}</motion.span></span>
          })}
        </div>
        <div>
          {heading1.split(" ").map((word, i) => {
              return <span className='mask-1' key={i}><motion.span variants={slideUp} initial = 'initial' animate = {isInView ? 'open' : 'closed'} custom={i} key={i}>{word}</motion.span></span>
          })}
        </div>
      </h1>
    </div>
  )
}


const Home = () => {
  return (
    <main>
      <Nav />
      <Homee />
      <ProductTop />
      <ProductFeatures />
      <ImagePhoto  />
      <Quote />
    </main>
  )
}

export default Home