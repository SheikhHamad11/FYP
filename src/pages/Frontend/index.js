import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from './Home'
import About from './About'
import Canteen from './Canteen'
import Contact from './Contact'
import Pricing from './Pricing'
export default function Index() {
    return (
        <>
            {/* <Routes> */}
                <Header />
                <main>
                    <Routes path='/*'>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/canteen" element={<Canteen />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                        
                    </Routes>
                </main>
                <Footer />
            {/* </Routes> */}
        </>
    )
}
