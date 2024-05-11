import React from 'react'
import Navbar from '../_components/Home/Navbar'
import Hero from '../_components/Home/Hero'
import { db } from '@/utils/dbConfig'
import { Likes } from '@/utils/schema'

function Home() {

  
  return (
    <section className='py-10 px-14 flex flex-col justify-center'>
        <Navbar/>
        <div className='mt-20'>
                <Hero/>
        </div>
    </section>
  )
}

export default Home