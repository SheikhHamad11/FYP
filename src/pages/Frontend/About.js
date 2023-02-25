import React from 'react'
// import { Link } from 'react-router-dom'
import Image from '../asset/about-img.jpg'
import Image1 from '../asset/pic1.png'
import Image2 from '../asset/pic2.png'
export default function About() {
  return (
    <>
      <div className="sub_page py-5">


        {/* <!-- about section --> */}

        <section className="about_section layout_padding">
          <div className="container py-5  ">
            <div className="heading_container ">
              <h2>
                About Us
              </h2>
              <p>
                Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="img-box">
                  <img src={Image} alt=""/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="detail-box">
                  <h3>
                    We Are Here For Help
                  </h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are going to use a passage to be sure there isn't anything
                    the middle of text.
                  </p>
                  <p>
                    Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
                  </p>
                  <button className='border-0 p-3 text-white' style={{ background: '#ff6f3c' }}>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end about section --> */}

      {/* <!-- client section --> */}

 <section className="client_section layout_padding">
  <div className="container">
    <div className="heading_container col">
      <h2>
        What Says Our <span>Client</span>
      </h2>
      
    </div>
    <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
              <div className="client_id">
                <div className="img-box">
                  <img src={Image1} alt="" />
                </div>
                <div className="name">
                  <h6>
                    Lisa Adams
                  </h6>
                  <p>
                    Magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
              <div className="client_id">
                <div className="img-box">
                  <img src={Image2} alt="" />
                </div>
                <div className="name">
                  <h6>
                    Michel Trout
                  </h6>
                  <p>
                    Magna
                  </p>
                </div>
              </div>
            </div>
          </div>
       
    {/* <div className="client_container">
      <div className="carousel-wrap ">
        <div className="owl-carousel client_owl-carousel">
          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
              <div className="client_id">
                <div className="img-box">
                  <img src={Image1} alt="" />
                </div>
                <div className="name">
                  <h6>
                    Lisa Adams
                  </h6>
                  <p>
                    Magna
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
              </div>
              <div className="client_id">
                <div className="img-box">
                  <img src={Image2} alt="" />
                </div>
                <div className="name">
                  <h6>
                    Michel Trout
                  </h6>
                  <p>
                    Magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
     </div> */}
  </div>
</section> 

{/* <!-- end client section --> */}
    </>
  )
}
