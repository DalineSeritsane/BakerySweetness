import React from 'react';
import NavBar from '../components/NavBar';
import garlicbread from '../Images/garlic-bread-.jpg';
import choccake from '../Images/choc-cake.jpg';
import summerdessert from '../Images/summer-desserts.jpg';
import Footer from '../components/Footer';

function MenuPage() {
    return(
        <>
        <NavBar />

        <div className="container-xxl bg-light my-6 py-6 pt-0">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 500}}>
                    <p className="text-warning text-uppercase mb-2">Bakery Products</p>
                    <h1 className="display-6 mb-4">Come Explore Our Bakery Products</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="products-item d-flex-column bg-white rounded overflow-hidden h-100">
                            <div className="text-center p-4">
                                <div className="d-inline-block border border-warning rounded-pill px-3 mb-3">R120 - R1000</div>

                                <h3 className="mb-3">Bread</h3>
                                <span>
                                    Enjoy our delicious freshly made bread, made with the finest ingredients and a touch of love. Various types of bread perfect for any occasion
                                </span>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src={garlicbread} alt="garlicbread"/>
                                <div className="product-overlay">
                                    <a href="/" className="btn btn-lg-square btn-outline-light rounded-circle">
                                    <i className="fa fa-eye text-primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                            <div className="text-center p-4">
                                <div className="d-inline-block border border-warning rounded-pill pt-1 px-3 mb-3">
                                    R200 - R1000
                                </div>
                                <h3 className="mb-3">Cakes</h3>
                                <span>
                                    Beautiful decorated cakes freashly made with creative professionals, which can be customzimed in your liking. Soft cakes with a mouthwatering taste and rich ingredients.
                                </span>
                            </div>
                            <div className="position-relative mt-auto">
                                <img className="img-fluid" src={choccake} alt="chococake" />
                                <div className="product-overlay">
                                    <a href="/" className="btn btn-lg-square btn-outline-light rounded-circle">
                                    <i className="fa fa-eye text-primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-warning rounded-pill pt-1 px-3 mb-3">
                                R200 - R1000
                            </div>
                            <h4 className="mb-3">Desserts</h4>
                            <span>
                                Enjoy our delightful various desserts, crafted with care and sweetness flavours. Perfect for any occasion so get your sweet tooth ready! 
                            </span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src={summerdessert} alt="summerdessert" />
                            <div className="product-overlay">
                                <a href="/" className="btn btn-lg-square btn-outline-light rounded-circle">
                                <i className="fa fa-eye text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Footer />
        </>
    );
};

export default MenuPage;