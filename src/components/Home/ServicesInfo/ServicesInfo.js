import React from 'react';
import './ServicesInfo.css';

const ServicesInfo = ({service}) => {
    return (
        <div className="col-md-4">
            <img style={{height: '40px'}} src={service.img} alt="" />
            <h3 className="mt-3 mb-3">{service.name}</h3>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, nobis.</p>
        </div>
    );
};

export default ServicesInfo;