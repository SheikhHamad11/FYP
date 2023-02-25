import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import Image from '../asset/w1.png';
import Image1 from '../asset/w2.png';
import Image2 from '../asset/w3.png';
import Image3 from '../asset/s-3.png';
import Image4 from '../asset/s-4.png';
import Image5 from '../asset/s-6.png';
import Image6 from '../asset/48.png';
import Image7 from '../asset/47.png';

import Pricing from '../Frontend/Pricing'

export default function Home() {
  return (
    <>
<div style={{marginTop:'3rem'}}>
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <div className="img1">
            <img
              className="d-block w-100 h-100"
              src={Image6}
              alt="Car Parking"
            />
          </div>
          <Carousel.Caption>
            <section className="slider_section">

              <div className="detail-box col-md-9 mx-auto px-0">
                <h1 className='fw-bolder'>
                  Finding Parking Lots Made Easy
                </h1>
                <p>
                  Necessitatibus non ducimus hic dolor? Maiores itaque vitae sit blanditiis porro, a expedita ex. Totam vel sed obcaecati. Placeat maxime asperiores deleniti tenetur officiis laboriosam laborum a nihil quisquam quis!
                </p>
                <div className="btn-bo">
                <button type="submit" className='border-0 px-4 py-2 text-white' style={{ backgroundColor: '#ff6f3c',letterSpacing:'1px',fontSize:'large'}}>
                  <span>
                    Search Now
                  </span>
                </button>
              </div>
              </div>

              



            </section>
            {/* <h3 className='text-info'>CAR PARKING SYSTEM</h3>
          <p>One stop solution for paring search and parking booking</p> */}

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <div className="img2">
            <img
              className="d-block w-100 h-100"
              src={Image7}
              alt="Canteen"
            />
          </div>


          <Carousel.Caption>

            {/* <h3 className='text-info'>CANTEEN MANGEMENT SYSTEM</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <section className="slider_section">

              <div className="detail-box col-md-9 mx-auto px-0">
                <h1 className='fw-bolder'>
                  Find The Food You Like Easily
                </h1>
                <p>
                  Necessitatibus non ducimus hic dolor? Maiores itaque vitae sit blanditiis porro, a expedita ex. Totam vel sed obcaecati. Placeat maxime asperiores deleniti tenetur officiis laboriosam laborum a nihil quisquam quis!
                </p>
                <div className="btn-bo">
                <button type="submit" className='border-0 px-4 py-2 text-white' style={{ backgroundColor: '#ff6f3c',letterSpacing:'1px',fontSize:'large'}}>
                  <span>
                    Search Now
                  </span>
                </button>
                </div>
              </div>



            </section>

          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
      </div>

      {/* <!-- why section --> */}

      <div section className="why_section layout_padding" >
        <div className="container py-5">
          <div className="row">
            <div className="col text-center">
              <h2 className='fw-bold'>Car Parking System</h2>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur provident at nesciunt amet vero sapiente quidem, magni autem harum quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    No Booking Fees
                  </h4>
                  <p className='text-light'>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image1} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Online Payments
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image2} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Simple Booking Process
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 py-5 text-center">
              <Link to='/pricing' variant="contained" className='btn text-white w-50 p-3 border-0' style={{ background: '#ff6f3c' }}>Discover More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end why section --> */}

      <Pricing/>

     


      {/* <!-- why section --> */}

      <section className="why_section layout_padding mt-5">
        <div className="container py-3">
          <div className="row">
            <div className="col text-center">
              <h2 className='fw-bold'>Canteen Management System</h2>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur provident at nesciunt amet vero sapiente quidem, magni autem harum quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image3} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Cold Ice-Cream
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image4} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Fresh Juice
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={Image5} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Fresh Tea
                  </h4>
                  <p>
                    Voluptatem earum eveniet mollitia sit animi dolorum. Iste, quas? Omnis error culpa illo nihil consequatur consectetur tenetur harum modi, quae libero ducimus reiciendis voluptat excepturi. Cum ducimus nesciunt dicta tenetur ducimus perferendis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 py-5 text-center">
              <Link to='/canteen' variant="contained" className='btn text-white w-50 p-3 border-0' style={{ background: '#ff6f3c' }}>Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end why section --> */}



      {/* Canteen */}
      {/* <div className="container py-5 parking">
        <div className="row">
          <div className="col text-center">
            <h2>Canteen Management System</h2>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur provident at nesciunt amet vero sapiente quidem, magni autem harum quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet incidunt ab facilis obcaecati eos ea! Voluptates natus tenetur.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 text-center">
            <div className="card border-0 rounded-0">
              <div className="icons text-info">
                <FiSettings />
              </div>
              <h4>Canteen</h4>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam beatae aperiam quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, itaque?</p>
              <button className='btn btn-info'>Learn More</button>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center d-flex">
            <div className="card border-0 rounded-0">
              <div className="icons text-info">
                <FiSettings />
              </div>
              <h4>Canteen</h4>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam beatae aperiam quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, itaque?</p>
              <button className='btn btn-info'>Learn More</button>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center">
            <div className="card border-0 rounded-0">
              <div className="icons text-info">
                <FiSettings />
              </div>
              <h4>Canteen</h4>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam beatae aperiam quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, itaque?</p>
              <button className='btn btn-info'>Learn More</button>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}
