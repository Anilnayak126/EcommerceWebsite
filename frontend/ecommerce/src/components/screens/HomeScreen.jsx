import React from 'react'
import Appix from '../Api/Appix'
import ImageCarousel from '../loader/Cursol'
import Promotions from './PromotionScreens'
import Testimonials from './Testtimonals'
import RecommendedProducts from './Recommendation'


function HomeScreen() {
  return (
    <div>
        <ImageCarousel/>
        <Promotions/>
        {/* <RecommendedProducts/> */}
        <Testimonials/>


       
    </div>
  )
}

export default HomeScreen