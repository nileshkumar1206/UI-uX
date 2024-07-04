import React, { useEffect } from 'react'
import LowSec from './HomePage/LowSec'
import Hero from './HomePage/Hero'
import Layout from '../Layout'

function Home() {

  return (
    <Layout>
      <Hero />
      <LowSec />
    </Layout>
  )
}

export default Home