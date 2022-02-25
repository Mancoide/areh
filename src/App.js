import Footer from "./includes/footer";
import Form from "./includes/form";
import Header from "./includes/header";

function App() {
    return (
        <>
            <Header />
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>
                        <img src={process.env.PUBLIC_URL + '/assets/img/logo1.svg'} className="img-fluid" />
                    </h1>       
                </div>
            </section>

            <main id="main">

                <section id="about" className="about">
                    <div className="container justify-content-around">
                        <div className="section-title justify-content-between">
                            <h2>NOSOTROS</h2>
                        </div>
                        <p>
                            ANTONIO ROA E HIJOS S.R.L., fundada el 01 de enero de 1990, somos una empresa de servicios, que asesora, construye ya brinda un servicio de excelente calidad
                                con el objetivo de atender las necesitades inmediatas del mercado y las prestaciones de servicios. Somos responsables de realizar el análisis, diseño, desarrollo, 
                                manufactura y mantenimiento de sistemas y dispositivos electromecánicos. <br /><br />
                        </p>
                    </div>
                </section>

                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title">
                            <h2>SERVICIOS</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-bolt"></i></div>
                                    <h4><a href="#services">Instalaciones de baja y alta tensión</a></h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-charging-station"></i></div>
                                    <h4><a href="#services">Montajes de transformadores</a></h4>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="far fa-lightbulb"></i></div>
                                    <h4><a href="#services">Columnas de cementos e iluminacion</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="gallery" className="gallery">
                    <div className="container">
                        <div className="section-title">
                            <h2>GALERIA</h2>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row g-0">
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL + '/assets/img/gallery/gallery-1.jpeg'} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL + '/assets/img/gallery/gallery-1.jpeg'} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-2.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-2.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-5.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-5.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-6.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-6.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-7.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-7.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-9.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-9.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-10.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-10.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href={process.env.PUBLIC_URL +"assets/img/gallery/gallery-11.jpeg"} className="galelry-lightbox">
                                        <img src={process.env.PUBLIC_URL +"assets/img/gallery/gallery-11.jpeg"} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <Form />

                <Footer />
            </main>
        </>
    );
}

export default App;
