import React from 'react'
import Announcement from '../components/Announcement'
import Blogs from '../components/Contact'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home