import React from 'react'
import phoneImg from './images/images/jujux.jpg'
import {useGlobalContext} from './context'
const Hero = () => {
  const {closeSubmenu}= useGlobalContext();
  
  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
    <article className='hero-info'>
 <h1>
   Web developer, tech enthusiast and content creator</h1>
 <p> write a little about yourself here. <br/> Think about it for later </p>
 
 <button className='btn'>Learn More </button>
 
    </article>
    <article className='hero-images'>
      <img src={phoneImg} alt='' className='phone-img'/>
    </article>
    
</div>
  </section>
}

export default Hero
