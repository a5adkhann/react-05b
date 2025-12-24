import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../features/Cards'
import Slideshow from '../features/Slideshow'

const Home = () => {
  return (
    <>
      <Slideshow/>
      <Cards/>
    </>
  )
}

export default Home
