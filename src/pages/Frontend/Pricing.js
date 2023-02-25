import React from 'react'
import Image from '../asset/pricing-bg.jpg'
import { Link } from 'react-router-dom'
export default function Pricing() {
    return (
        // <!-- pricing section -->

        <section className="pricing_section layout_padding py-5  " style={{ marginTop:'3.2rem' }}>
            <div className="bg-box">
                <img src={Image} alt="" />
            </div>
            <div className="container ">
                <div className="heading_container heading_center">
                    <h2 style={{letterSpacing:'2px',textTransform:'uppercase'}}>
                        Our Pricing
                    </h2>
                </div>
                <div className="col-xl-10 px-0 mx-auto">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <h4 className="price">
                                    10$
                                </h4>
                                <h5 className="name">
                                    Basic
                                </h5>
                                <p>
                                    Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                </p>
                                <Link>
                                    Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box box-center">
                                <h4 className="price">
                                    30$
                                </h4>
                                <h5 className="name">
                                    Premium
                                </h5>
                                <p>
                                    Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                </p>
                                <Link href="">
                                    Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <h4 className="price">
                                    20$
                                </h4>
                                <h5 className="name">
                                    Standard
                                </h5>
                                <p>
                                    Consequuntur iure, quam vero quidem minima obcaecati veniam, praesentium impedit quod repudiandae tempora amet deserunt rerum accusamus. Commodi qui, illum ad ipsa porro ipsum nostrum magni minus.
                                </p>
                                <Link href="">
                                    Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )


}
