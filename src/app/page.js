import Discover from '@/components/Discover'
import Explore from '@/components/Explore'
import Home from '@/components/Hero'
import Promo from '@/components/Promo'
import Trending from '@/components/Trending'
import Visited from '@/components/Visited'

import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Home/>
      <Discover/>
      <Trending/>
      <Visited/>
      <Promo/>
      <Explore/>
      
    </div>
  )
}

export default page