import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../asset/about-img.jpg'
export default function Home() {
  return (
    <>
      <h1 className='text-center  bg-light  py-3' style={{ color: '#155263',marginTop:'3.2rem' }}>User Dashboard</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>User Dashboard</h3>
            <hr />
          </div>
        </div>
        <div className='row my-5'>
          <div className=" col-lg-6 dash-btn text-center">
            <Link variant='contained' to='/' className='btn'>Home</Link><br />
            <Link to='/about' className='btn'>About</Link><br />
            <Link to='manage' className='btn'>Manage Employee</Link><br />
            <Link to='report' className='btn'>Parking Location Report</Link><br />
            <Link to='slots' className='btn'>Manage Parking Slots</Link><br />
            <Link to='menu' className='btn'>Canteen Menu</Link><br />
          </div>
          <div className="col-lg-6">
            <img src={Image} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
   
    </>
  )
}
