import React from 'react'
import Image from '../asset/home-img.png'
import Image1 from '../asset/g-2.jpg'
import Image2 from '../asset/g-3.jpg'
import Image3 from '../asset/g-6.jpg'
import Image8 from '../asset/step1.jpg';
import Image9 from '../asset/step-2.jpg';
import Image10 from '../asset/step-3.jpg';
import Image11 from '../asset/step-4.jpg';

export default function Canteen() {
    return (
        <>

            <div className='px-3 shadow'>
                <section className="home" id="home">

                    <div className="content">
                        <h1>food made with love</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
                        <button variant='contained' className="btn text-white  w-sm-50 p-3 rounded-0" style={{ background: '#ff6f3c' }}>Order Now</button>
                    </div>

                    <div className="image">
                        <img src={Image} alt="" />
                    </div>



                </section>
            </div>

            { /* image Section */}
            <div className="container my-5">
                <div className="row text-center" >
                    <div className='text-center mb-5 '>
                        <h1>Our Famous Food</h1>
                        <p>Our Popular products Contain Sandwiches , Fritters , Rolls</p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className="card  mb-2 mb-md-0" style={{width: '350px' }}>
                            <img className='card-img-top' src={Image1} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="card-footer">
                                {/* <i class="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Rs.300</h4>
                                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-md-4'>

                        <div className="card  mb-2 mb-md-0   " style={{width: '350px' }}>
                            <img className='card-img-top' src={Image2} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                            </div>
                            <div class="card-footer">
                                {/* <i class="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Rs.400</h4>
                                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-md-4'>

                        <div className="card  mb-2 mb-md-0  " style={{width: '350px' }}>
                            <img className='card-img-top' src={Image3} style={{ height: '250px' }} alt="" />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel placeat unde laboriosam?</p>
                                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="card-footer">
                                {/* <i class="bi bi-shop"></i> Open One Month Ago */}
                                <h4 className=''>Rs.250</h4>
                                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 py-5">
                        <button variant="contained" className='btn text-white w-50 p-3 border-0' style={{ background: '#ff6f3c' }}>Discover More</button>
                    </div>
                </div>
            </div>

            {/* <!-- steps section starts  --> */}

            <div className="step-container">

                <h1 className="heading text-center">How it <span>Works</span></h1>

                <section className="steps">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <img src={Image8} alt="" />
                                <h3>choose your favorite food</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <img src={Image9} alt="" />
                                <h3>free and fast delivery</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <img src={Image10} alt="" />
                                <h3>easy payments methods</h3>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="box">
                                <img src={Image11} alt="" />
                                <h3>and finally, enjoy your food</h3>
                            </div>
                        </div>
                    </div>





                </section>

            </div>

            {/* <!-- steps section ends --> */}
        </>
    )
}
