import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h5 className="text-brand fw-bold text-uppercase text-center mt-5">Contact</h5>
                 <h1>Always  Connect With Ss</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group mt-2">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group mt-2">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group mt-2">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center mt-2">
                        <button className="btn btn-brand my-5 text-white"> SUBMIT </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;