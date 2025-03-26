
import React from 'react'
import './Hero.css'
import noah_img from '../../assets/noah_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={noah_img} class="round-image" alt=""></img>
        <h1><span>Mitt namn är Noah Järvbäck</span></h1>
        <p>systemutvecklare med kandidatexamen från systemvetenskapliga programmet Örebro universitet</p>
        <div className="hero-action">
            <div className="hero-connect">Kom i kontakt med mig</div>
            <div className="hero-resume">Mitt CV</div>
        </div>
    </div>
  )
}

export default Hero
