import React, { useEffect, useState } from 'react';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('https://afternoon-ocean-10289.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    return (
        <div className = "container-fluid row">
            <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr Nr.</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
              {
                  appointments.map((app, index) =>                    
                   <tr>
                    <td>{index+1}</td>
                    <td>{app.name}</td>
                    <td>{app.phone}</td>
                    <td>{app.email}</td>
                </tr>
             )
              }
            </tbody>
        </table>
            
        </div>
    );
};

export default AllPatients;