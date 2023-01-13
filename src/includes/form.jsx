import React, { Component } from 'react';
import emailjs from '@emailjs/browser';

class Form extends Component {
    
    handleSubmit(e)
    {
        e.preventDefault();
        // template_9al5tvl
        emailjs.sendForm('service_o4m82ic', 'template_6fzxsyb', e.target, 'MV1ohmNXRrleYEn-R').then(resp => {
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    } 

    render() { 
        return ( 
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contactanos</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12 mt-lg-0">
                            <form role="form" className="php-email-form" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre y Apellido" required />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="user_email" id="user_email" placeholder="E-mail" required />
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="user_number" id="user_number" placeholder="09** *** ****" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Enviar Mensaje</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Form;