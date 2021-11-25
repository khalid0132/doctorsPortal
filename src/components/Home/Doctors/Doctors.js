import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div className="mt-5 container">
            <h6 className="text-brand fw-bold text-uppercase text-center mb-5">Our Doctors</h6>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key = {doctor._id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;