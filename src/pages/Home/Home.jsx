import React from 'react'
import Categories from './Categories'
import ProductSection from './ProductSection'
import BannerSection from './BannerSection'
import TrendSection from './TrendSection'
import DiscountSection from './DiscountSection'
import ServicesSection from './ServicesSection'
import InstagramSection from './InstagramSection'

function Home() {
  return (
    <>
      <Categories></Categories>
      <ProductSection></ProductSection>
      <BannerSection></BannerSection>
      <TrendSection></TrendSection>
      <DiscountSection></DiscountSection>
      <ServicesSection></ServicesSection>
      <InstagramSection></InstagramSection>
    </>
  )
}

export default Home
