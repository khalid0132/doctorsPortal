import React from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <div className="mt-5 container">
            <h6 className="text-brand fw-bold text-uppercase text-center">Our Doctors</h6>
            <div className="row">
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
            </div>
        </div>
    );
};

export default Doctors;