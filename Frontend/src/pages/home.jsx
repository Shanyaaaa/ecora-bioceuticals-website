import React from 'react'
import Navbar from '../components/navbar'
import SlideImg from '../components/slideImg'
import Card from '../components/card'
import BestSellingSection from '../components/BestSelling'
import ProductSection from '../components/ProductSection'
import ReviewSection from '../components/Reviews'
import Faq from '../components/Faq'
import Footer from '../components/footer'



const home = () => {
  return (
    <div>
      <Navbar />
      <SlideImg />
      <Card />
      <BestSellingSection />
      <ProductSection />
      <ReviewSection />
      <Faq />
      <Footer />

    </div>
  )
}

export default home











