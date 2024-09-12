import React from 'react';
function Footer() {
    return (
        <footer className="my-3">
            <div className="container">
                <div className="row text-light my-5 border-bottom">
                    <div className="col-lg-4 my-5">
                        <h4 className="text-light">Subscribe Newsletter</h4>
                        <p className="text-light">Subscribe newsletter to get 5% on all products.</p>
                    </div>
                    <div className="col-lg-4 my-5">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text bg-danger" id="basic-addon2">Subscribe</span>
                        </div>
                    </div>
                    <div className="col-lg-4 my-5">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row text-light border-bottom">
                    <div className="col-lg-4">
                        <img src="images/logo2_footer.png" alt="Footer Logo" />
                    </div>
                    <div className="col-lg-2">
                        <h4>Shop Men</h4>
                        <ul className="text-light">
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Winter</a></li>
                            <li><a href="#">Summer</a></li>
                            <li><a href="#">Formal</a></li>
                            <li><a href="#">Casual</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Shop Women</h4>
                        <ul className="text-light">
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Winter</a></li>
                            <li><a href="#">Summer</a></li>
                            <li><a href="#">Formal</a></li>
                            <li><a href="#">Casual</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Baby Collection</h4>
                        <ul className="text-light">
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Winter</a></li>
                            <li><a href="#">Summer</a></li>
                            <li><a href="#">Formal</a></li>
                            <li><a href="#">Casual</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h4>Quick Links</h4>
                        <ul className="text-light">
                            <li><a href="#">Track your Order</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Carrier</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
