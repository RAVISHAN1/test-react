import React from 'react'
import OffcanvasMenu from '../../components/OffcanvasMenu/OffcanvasMenu'
import Navbar from '../../components/Navbar/Navbar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Footer from '../../components/Footer/Footer'
import CartProducts from './CartProducts'

const Cart = () => {
    return (
        <>
            <OffcanvasMenu></OffcanvasMenu>
            <Navbar></Navbar>
            <Breadcrumb></Breadcrumb>
            
            <CartProducts></CartProducts>

            <Footer></Footer>
        </>
    )
}

export default Cart
