import React from 'react';
import creamydessert from '../Images/creamy-dessert.jpg';
import mixedberriescake from '../Images/mixed-berries-cake.jpg';
import flowercake from '../Images/flower-cake.jpg';
import CherryDelight from '../Images/Cherry-Delight.jpg';
import BananaCream from '../Images/BananaCream.jpg';
import darkchoccake from '../Images/dark-choc-cake.jpg';

function Footer(){
    return(
        <>

        <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="text-light mb-4">Bakery Address</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3" />
                            145 Street, New York, USA
                        </p>
                        <p className="mb-2">
                          <i className="fa fa-phone-alt me-3" />
                           +012 345 67890
                       </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a href="/" className="btn btn-square btn-outline-light rounded-circle me-1">
                <i className="fab fa-twitter" />
                </a>
                <a href="/" className="btn btn-square btn-outline-light rounded-circle me-1">
                <i className="fab fa-youtube" />
                </a>
              </div>
        </div>
        <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a href="/" className="btn btn-link">
                About Us
              </a>
              <a href="/" className="btn btn-link">
                Contact Us
              </a>
              <a href="/" className="btn btn-link">
                Our Services
              </a>
              <a href="/" className="btn btn-link">
                Terms &amp; Condition
              </a>
              <a href="/" className="btn btn-link">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a href="/" className="btn btn-link">
                About Us
              </a>
              <a href="/" className="btn btn-link">
                Contact Us
              </a>
              <a href="/" className="btn btn-link">
                Our Services
              </a>
              <a href="/" className="btn btn-link">
                Terms &amp; Condition
              </a>
              <a href="/" className="btn btn-link">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="text-light mb-4">Gallery Of Desserts</h4>
                <div className="row g-2">
                    <div className="col-4">
                        <img className="img-fluid bg-light rounded p-1" src={CherryDelight} alt="Cherry Delight" />
                    </div>
                </div>
                <div className="col-4">
                    <img className="img-fluid bg-light rounded p-1" src={mixedberriescake} alt="Mixed Berries Cake" />
                </div>
                <div className="col-4">
                    <img className="img-fluid bg-light rounded p-1" src={flowercake} alt="flowercake" />
                </div>
                <div className="col-4">
                    <img className="img-fluid bg-light rounded p-1" src={creamydessert} alt="creamy dessert" />
                    </div>
                    <div className="col-4">
                    <img className="img-fluid bg-light rounded p-1" src={darkchoccake} alt="dark choccake" />
                    </div>
                    <div className="col-4">
                    <img className="img-fluid bg-light rounded p-1" src={BananaCream} alt="Banana Cream dessert" />
                </div>
                
            </div>
        </div>
     </div>
  </div>
</>

    );
};

export default Footer;