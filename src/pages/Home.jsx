import React from 'react';
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Navbar from '../componets/NavBar';
import Footer from '../componets/Footer';
import Slide1 from '../Images/slide1.jpg';
import Slide2 from '../Images/slide2.jpg';

function Home() {
    return(
        <>
        <Navbar />

        {/* Carousel Start */}
        <Container fluid className="p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src={Slide1}
                    alt="Slide 1"
                    />
                    <Carousel.Caption className="d-md-block">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg= {8}>
                                <p className="text-primary text-uppercase fw-bold mb-2">Sweetness For Your Soul</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">Passionate about our Desserts</h1>
                                <p className="text-light fs-5 mb-4 pb-3">
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
                    <img className="d-block w-100"
                    src={Slide2}
                    alt="Slide 2"
                    />
                    <Carousel.Caption className="d-md-block">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg= {8}>
                                <p className="text-primary text-uppercase fw-bold mb-2">Sweetness For Your Soul</p>
                                <h1 className="display-1 text-light mb-4 animated slideInDown">Passionate about our Desserts</h1>
                                <p className="text-light fs-5 mb-4 pb-3">
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
{/*Carousel End */}

<div className="container-xxl py-4">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeIn"  data-wow-delay="0.1s">

                <div className="fact-item bg-light rounded text-center h-100 p-5">
                    <i className="fa fa-certificate fa-4x text-warning mb-4" />
                    <p className="mb-2">Years Experience</p>
                    <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
                </div>
            </div>
            <div className="col-lg-3 col-md6 wow fadeIn" data-wow-delay="0.3s">
                <div className="fact-item bg-light rounded text-center h-100 p-5">
                    <i className="fa fa-user fa-4x text-warning mb-4" />
                    <p className="mb-2">Professionals</p>
                    <h1 className="display-5 mb-0" data-toggle="counter-up">185</h1>
                </div>
            </div>

        </div>
    </div>
</div>

        
        </>
    )
};

export default Home;