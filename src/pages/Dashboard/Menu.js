import React from 'react'
import Image1 from '../asset/g-2.jpg'
import Image2 from '../asset/g-3.jpg'
import Image3 from '../asset/g-6.jpg'
import Image4 from '../asset/g-1.jpg'
import Image5 from '../asset/g-4.jpg'
import Image6 from '../asset/g-5.jpg'
import Image7 from '../asset/g-7.jpg'
import Image8 from '../asset/g-8.jpg'
export default function Menu() {
  return (
    <>
      <h1 className='text-center  bg-light  py-3' style={{ color: '#155263',marginTop:'3.8rem' }}>User Menu</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Today's Menu</h3>
            <hr />
          </div>
        </div>
      </div>
      { /* image Section */}
      <div className="container my-5">
        <div className="row text-center" >
          <div className='text-center mb-5 '>
            <h1>Canteen Menu</h1>
            <p>Our Popular products Contain Sandwiches , Fritters , Rolls</p>
            <i className="fa fa-heart text-danger me-1" aria-hidden="true"></i>
            <i className="fa fa-heart text-danger me-1" aria-hidden="true"></i>
            <i className="fa fa-heart text-danger" aria-hidden="true"></i>
                
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            <div className="card  mb-2 mb-md-0">
              <img className='card-img-top' src={Image1} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.300</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0  ">
              <img className='card-img-top' src={Image2} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star " aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.400</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0 ">
              <img className='card-img-top' src={Image3} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.250</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0 ">
              <img className='card-img-top' src={Image4} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star " aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.250</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>
          </div>
          </div>
          <div className="row text-center mt-5 ">
          <div className='col-12 col-md-6 col-lg-3'>
            <div className="card  mb-2 mb-lg-0">
              <img className='card-img-top' src={Image5} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.300</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0  ">
              <img className='card-img-top' src={Image6} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
               
              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.400</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>

          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0 ">
              <img className='card-img-top' src={Image7} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>

              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
                <h4 className=''>Rs.250</h4>
                <button className='text-white border-0 w-50 py-2' style={{ background: '#ff6f3c' }}>Order</button>
              </div>

            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>

            <div className="card   mb-2 mb-lg-0 ">
              <img className='card-img-top' src={Image8} alt="" />
              <div className="card-body">
                <p>Tasty Food With free delivery</p>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                
               
              </div>
              <div className="card-footer">
                {/* <i className="bi bi-shop"></i> Open One Month Ago */}
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
      

      
     
          
        
       


    </>
  )
}
