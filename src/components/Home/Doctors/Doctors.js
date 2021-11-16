import React from 'react';
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <div className="mt-5 container">
            <h6 style={{color: '#1CC7C1', fontWeight: 'bold'}} className="text-uppercase text-center">Our Doctors</h6>
            <div className="row">
                <Doctor></Doctor>
                <Doctor></Doctor>
                <Doctor></Doctor>
            </div>
        </div>
    );
};

export default Doctors;