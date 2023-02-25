import React from 'react'
import { Routes, Route } from "react-router-dom"
 // PAges 
import Home from './Home'
import Users from './Users'
import Menu from './Menu'
import ParkingSlots from './ParkingSlots'
import ParkingReport from './ParkingReport'
import ManageEmployee from './ManageEmployee'

// Components 
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function index() {
  return (
    <>
    <Header />
    <main>
    <Routes>
        <Route path='/*'>
            <Route index element={<Home />} />
            <Route path='users' element={<Users />} />
            <Route path='menu' element={<Menu />} />
            <Route path='slots' element={<ParkingSlots />} />
            <Route path='report' element={<ParkingReport />} />
            <Route path='manage' element={<ManageEmployee />} />
        </Route>
    </Routes>
    </main>
    <Footer/>
    </>
  )
}
