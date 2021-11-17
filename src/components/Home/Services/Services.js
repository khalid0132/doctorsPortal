import React from 'react';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesInfo from '../ServicesInfo/ServicesInfo';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="services-container">
            <h6 className="text-brand fw-bold mt-5">OUR SERVICES</h6>
            <h2>Services We Provide</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    {
                        servicesData.map(service => <ServicesInfo service = {service}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;