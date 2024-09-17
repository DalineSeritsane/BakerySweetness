import React from 'react';
import NavBar from '../components/NavBar'; 
import cinnamonswirl from '../Images/cinnamon-swirl-bread.jpg';
import oreopots from '../Images/oreo-pots.jpg';
import Footer from '../components/Footer';

function AboutPage () {
    return (
        <>
            <NavBar />

            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded"
                                        src={cinnamonswirl}
                                        alt="Delicious cinnamon swirl bread"
                                    />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid rounded"
                                        src={oreopots}
                                        alt="Delectable Oreo dessert pots"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-warning text-uppercase mb-2">About Us</p>
                                <h1 className="display-6 mb-4">
                                    Let Your Soul be filled with the sweetness of Our SweetBakery desserts
                                </h1>
                                <p>Our bakery believes only in using the finest ingredients to create the delicious, mouthwatering desserts that will set your soul on fire! Each dessert is made with love and attention, ensuring that every bite is unforgettable.</p>
                                <p>We strive to deliver products that not only taste great but also bring a smile to our customers' faces. We are dedicated to providing exceptional quality and service to our customers.</p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-warning me-2" />
                                        Quality Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-warning me-2"/>
                                        Custom Products
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-warning me-2"/>
                                        Online Order
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-warning me-2"/>
                                        Home Delivery
                                    </div>
                                </div>
                                <a href="/" className="btn btn-primary btn-outline-warning rounded-pill py-3 px-5">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default AboutPage;
