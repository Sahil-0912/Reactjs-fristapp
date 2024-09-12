import React from 'react';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img src="images/logo.png.webp" className="ms-5 mt-3" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mt-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="men.html">Men</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="women.html">Women</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="babycollection.html">Baby Collection</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="login.html">Login</a></li>
                            <li><a className="dropdown-item" href="#">Cart</a></li>
                            <li><a className="dropdown-item" href="#">Product Details</a></li>
                            <li><a className="dropdown-item" href="#">Product Checkout</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="contact.html">Contact</a>
                    </li>
                </ul>
                <div className="navbar-icon me-5">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
    </nav>
        </header>
    );
}

export default Header;
