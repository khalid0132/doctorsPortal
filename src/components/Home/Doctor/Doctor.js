import React from 'react';
// import doctor from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            {
                doctor.image? <img src={`data:image/jpeg;base64,${doctor.image.img}`} alt="" className="img-fluid" style={{height: '200px'}}/>: 
                 <img src={`https://afternoon-ocean-10289.herokuapp.com/${doctor.img}`} alt="" className="img-fluid" style={{height: '200px'}} />
            }
            <h4>Dr. {doctor.name}</h4>
            <h6> {doctor.email}</h6>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/>+46737139307</p>
        </div>
    );
};

export default Doctor;