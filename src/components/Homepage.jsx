import React from 'react'
import Slider from './Parts/Slider'
import Poster from './Parts/Poster'
import Transparet from './Parts/Transparent'
import ShopPage from './Pages/Shop'
import UniversalWatches from './Pages/UniversalWatches'
import Poster2 from './Parts/Poster2'
import Dials from './Parts/Dials'

const Homepage = () => {
  return (
    <div>
        <Slider/>
        <Poster/>
        <Transparet/>
        <ShopPage/>
        <UniversalWatches/>
        <Poster2/>
        <Dials/>

        
    </div>
  )
}

export default Homepage