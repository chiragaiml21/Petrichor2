import React from 'react'
import HeroSection from '../components/HeroSection'
import "./Home.css";
import ProductYouLike from '../components/ProductYouLike';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='hero hidden sm:w-full sm:h-screen sm:block '>

      </div>
      <ProductYouLike />
      <Footer />
    </div>
  )
}

export default Home
