import React from 'react'
import Image from '../asset/p.png'
export default function ParkingSlots() {
    return (
        <>
            <h1 className='text-center  bg-light py-4' style={{ color: '#155263',marginTop:'3.2rem' }}>Parking Slots</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>Empty Slots</h3>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-2 ms-4 ">
                    <div className="col-6 col-md-4 col-lg-2 border  m-1">
                        <img className='img-fluid m-1' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                   
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div></div>

                    <div className="row ms-4 my-2">
                    
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 border m-1">
                        <img className='img-fluid' src={Image} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
