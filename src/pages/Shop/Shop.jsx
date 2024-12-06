import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import OffcanvasMenu from '../../components/OffcanvasMenu/OffcanvasMenu'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import ShopSection from './ShopSection'

function Shop() {
  return (
    <>
      <OffcanvasMenu></OffcanvasMenu>
      <Navbar></Navbar>
      <Breadcrumb></Breadcrumb>
      <ShopSection></ShopSection>

      <Footer></Footer>
    </>
  )
}

export default Shop
