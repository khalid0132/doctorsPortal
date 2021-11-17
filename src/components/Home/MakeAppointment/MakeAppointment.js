import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-brand fw-bold mt-5 text-uppercase">APPOINTMENT</h5>
                        <h2 className="my-4">Make an appointment <br/> today</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta quas totam, dolor sit nulla?</p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAppointment;