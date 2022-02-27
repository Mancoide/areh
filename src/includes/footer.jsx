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

                                <div className="phone mb-5">
                                    <i className="bi bi-phone"></i>
                                    <h4>Tel.:</h4>
                                    <p>+595 981 800-978</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <iframe style={{ border: 0 }} width="100%" height="350"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.0154968935326!2d-57.49874263243482!3d-25.269542804179462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8667ca4025%3A0xce05da935369e176!2sGral.%20D%C3%ADaz%20%26%20Cnel.%20Oviedo%2C%20Luque!5e0!3m2!1ses-419!2spy!4v1645839126117!5m2!1ses-419!2spy" frameBorder="0" allowFullScreen loading="lazy" />
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