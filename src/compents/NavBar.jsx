import React from 'react';
import {Link } from "react-router-dom";

function NavBar() {
    return(
        <>
        <nav className="navbar navbar-expand-ig navbar-warning fixed-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-black m-0">SweetBakery</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto p-4 p-lg-0 text-black">
                    <il className="nav-item nav-link active">
                        <Link to="/">Home</Link>
                    </il>
                    <il className="nav-item nav-link">
                        <Link to="/about">About</Link>
                    </il>
                    <il className="nav-item nav-link">
                        <Link to="/menu">Products</Link>
                    </il>
                </div>
                <div className=" d-none d-lg-flex">
                    <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                        <i className="fa fa-phone text-white" />
                    </div>
                </div>
                <div className="ps-3">
                    <small className="text-black mb-0">Call Us</small>
                    <p className="text-light fs-5 mb-0">+016 852 5963</p>
                </div>
            </div>
            
        </nav>
        
        </>
    );
};

export default NavBar;