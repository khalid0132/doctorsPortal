import React from 'react';
import doctor from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img src={doctor} alt="" className="img-fluid" />
            <h6>Dr. Patric Johansson</h6>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>+46737139307</p>
        </div>
    );
};

export default Doctor;