import React from 'react';
// import doctor from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image? <img src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" className="img-fluid" style={{height: '200px'}}/>: 
                 <img src={`http://localhost:7000/${doctor.img}`} alt="" className="img-fluid" style={{height: '200px'}} />
            }
            <h4>Dr. {doctor.name}</h4>
            <h6> {doctor.email}</h6>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>+46737139307</p>
        </div>
    );
};

export default Doctor;