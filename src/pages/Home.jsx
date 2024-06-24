import React from 'react'
import HeroSection from '../components/HeroSection'
import "./Home.css";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='hero hidden sm:w-full sm:h-screen sm:block '>

      </div>
    </div>
  )
}

export default Home
