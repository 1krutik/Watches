import React from 'react'
import Slider from './Parts/Slider'
import Poster from './Parts/Poster'
import Transparet from './Parts/Transparent'
import ShopPage from './Pages/Shop'
import UniversalWatches from './Pages/UniversalWatches'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Poster/>
        <Transparet/>
        <ShopPage/>
        <UniversalWatches/>

        
    </div>
  )
}

export default Homepage