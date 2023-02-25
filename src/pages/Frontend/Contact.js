import React from 'react'

export default function Contact() {
  return (
    <>


      <div className='container py-5'>
      
        <div className="row" style={{ marginTop:'3.2rem' }}>
          <div className="col-12 col-md-7">
            <h3>GET IN TOUCH WITH US</h3>
            <div>
              <textarea className='form-control mb-2' name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
            </div>
            <div>
              <input className='form-control  mb-2' type="text" placeholder='Enter Your Email' />
              <input className='form-control  mb-2' type="text" placeholder='Enter Your Name' />
            </div>
            <div>
              <input className='form-control  mb-2' type="text" placeholder='Enter Your Subject' />
            </div>
            <div>
              <button className='border-0 mb-2  px-4 py-2 text-white' style={{ background: '#ff6f3c' }}>Send</button>
            </div>




          </div>
          <div className="col-12 col-md-5 mt-4">
            <div className=''>
              <i class='fa fa-home'></i>
              <h3>Pakistan</h3>
              <p className='text-secondary'>Warburton City</p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <h3>sheikhhamad1830@gmail.com</h3>
              <p className='text-secondary'>Rosemand 1122</p>
            </div>
            <div>
              <i class='fa fa-tablet'></i>
              <h3>+123 456 789</h3>
              <p className='text-secondary'>Rosemand 1122</p>
            </div>

          </div>
        </div>

      </div>
      <div className="container">
          <div className="row">
            <div className="col py-5 p-3">
              <iframe title='Google Maps' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13617.505295814151!2d73.07561025!3d31.431305199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1674663703224!5m2!1sen!2s" width="100%" height="500" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
    </>
  )
}
