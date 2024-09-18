import React from 'react';
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Navbar from '../components/NavBar';
import Slide1 from '../Images/slide1.png';
import Slide6 from '../Images/slide6.jpg';
import fruitcake from '../Images/fruit-cake.jpg';
import cheesebread from '../Images/Cheese-bread.jpg';
import Footer from '../components/Footer';


function Home() {
    return (
        <>
            <Navbar />

            {/* Carousel Start */}
            <Container fluid className="p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-97" src={Slide1} alt="Slide 1" />
                        <Carousel.Caption className="d-md-block">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={8}>
                                        <h1 className="display-1 text-dark mb-4 animated slideInDown">Passionate about our Desserts</h1>
                                        <p className="text-dark fs-5 mb-4 pb-3">
                                            Experience the warmth and aroma of freshly baked bread, pastries, and cakes made with love and the finest ingredients. Indulge in our delightful treats that bring joy to every bite!
                                        </p>
                                        <Button href="/" className="btn btn-primary btn-outline-warning rounded-pill py-3 px-5">
                                            Read More
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={Slide6} alt="Slide 6" />
                        <Carousel.Caption className="d-md-block">
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={8}>
                                        <h1 className="display-1 text-dark mb-4 animated slideInDown">Passionate about our Desserts</h1>
                                        <p className="text-dark fs-5 mb-4 pb-3">
                                            Experience the warmth and aroma of freshly baked bread, pastries, and cakes made with love and the finest ingredients. Indulge in our delightful treats that bring joy to every bite!
                                        </p>
                                        <Button href="/" className="btn btn-primary btn-outline-warning rounded-pill py-3 px-5">
                                            Read More
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            {/* Carousel End */}

            <div className="container-xxl py-4">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-warning mb-4" />
                                <p className="mb-2">Years Experience</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-user fa-4x text-warning mb-4" />
                                <p className="mb-2">Professionals</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">185</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-bread-slice fa-4x text-warning mb-4" />
                                <p className="mb-2">Total Products</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">145</h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-cart-plus fa-4x text-warning mb-4" />
                                <p className="mb-2">Order Everyday</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-warning text-uppercase mb-2">Our Services</p>
                            <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                            <p className="mb-5">
                                We offer a variety of services to meet all your bakery needs. From custom cakes for special occasions to everyday bread and desserts, our products are made with the highest quality ingredients and care.
                            </p>
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                                            <i className="fa fa-bread-slice text-white" />
                                        </div>
                                        <h5 className="mb-0">Quality Products</h5>
                                    </div>
                                    <span>We use only the finest ingredients to create delicious and nutritious baked goods.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                                            <i className="fa fa-birthday-cake text-white" />
                                        </div>
                                        <h5 className="mb-0">Custom Products</h5>
                                    </div>
                                    <span>Our team can create custom cakes and pastries to make your special occasion even more memorable.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                                            <i className="fa fa-cart-plus text-white" />
                                        </div>
                                        <h5 className="mb-0">Online Order</h5>
                                    </div>
                                    <span>Convenient online ordering allows you to enjoy our products from the comfort of your home.</span>
                                </div>
                                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                                            <i className="fa fa-truck text-white" />
                                        </div>
                                        <h5 className="mb-0">Home Delivery</h5>
                                    </div>
                                    <span>We offer home delivery to ensure you receive fresh and delicious baked goods right at your doorstep.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded" src={cheesebread} alt="service 1" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid rounded" src={fruitcake} alt="service 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service */}

            <Footer />

            <a href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
        </>
    );
}

export default Home;
