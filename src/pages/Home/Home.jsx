import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OffcanvasMenu from '../../components/OffcanvasMenu/OffcanvasMenu'
import Categories from './Categories'
import ProductSection from './ProductSection'
import BannerSection from './BannerSection'
import TrendSection from './TrendSection'
import DiscountSection from './DiscountSection'
import ServicesSection from './ServicesSection'
import InstagramSection from './InstagramSection'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <OffcanvasMenu></OffcanvasMenu>
      <Navbar></Navbar>
      <Categories></Categories>
      <ProductSection></ProductSection>
      <BannerSection></BannerSection>
      <BannerSection></BannerSection>
      <TrendSection></TrendSection>
      <DiscountSection></DiscountSection>
      <ServicesSection></ServicesSection>
      <InstagramSection></InstagramSection>
      <Footer></Footer>
    </>
  )
}

export default Home
