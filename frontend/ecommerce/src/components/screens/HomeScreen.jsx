import React from 'react'
import Appix from '../Api/Appix'
import ImageCarousel from '../loader/Cursol'
import Promotions from './PromotionScreens'
import Testimonials from './Testtimonals'
import RecommendedProducts from './Recommendation'
import Footer from '../Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Benefits from './Benefits'



function HomeScreen() {
  return (
    <div>
        <ImageCarousel/>
        <Promotions/>
        <RecommendedProducts/>
        <Benefits/>
        <Footer/>
        {/* <Testimonials/> */}


       
    </div>
  )
}

export default HomeScreen