import React from 'react'

export default function ForgetPassword() {
  return (
    <div className='auth'>
        <div className="overlay">
      <div className="container m-auto">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 ">
            <div className="card w-100 p-2 p-md-3 p-lg-4 fgt-card shadow-lg" style={{marginTop:'10rem'}}>
              <h1 className='text-center'>Forgot password</h1>
              <p className='text-secondary text-center'>Enter your details to get access</p>


              <div className="row">
                <div className="col">
                  <label htmlFor=""><b>Email</b></label>
                  <input type="email" className='form-control' placeholder='username or email' />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-end">
                  <button variant='contained' className=' border-0  btn-register py-3'>Send Link</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
