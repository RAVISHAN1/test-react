import React from 'react'
import { Outlet } from 'react-router-dom'
import OffcanvasMenu from '../components/OffcanvasMenu/OffcanvasMenu'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
    return (
        <>
            <OffcanvasMenu></OffcanvasMenu>
            <Navbar></Navbar>

            <div className="content">
                <Outlet />
            </div>

            <Footer></Footer>
        </>
    )
}

export default MainLayout
