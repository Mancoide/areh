import React from 'react'

function Footer ()
{
    return(
        <footer id="footer">
            <div className="footer-top contact">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-6">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Dirección:</h4>
                                    <p> Crnel Oviedo 513 c/ esquina Gral. Diaz - Luque</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>emprendimientoroa1@yahoo.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Tel.:</h4>
                                    <p>+595 981 800-978</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className="container d-md-flex py-4">

            <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                &copy; Copyright <strong><span>Medilab</span></strong>. All Rights Reserved
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;