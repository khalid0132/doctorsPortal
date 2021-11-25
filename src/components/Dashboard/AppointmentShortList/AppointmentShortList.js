import React from 'react';

const AppointmentShortList = ({appointments}) => {
    return (
        <table className="table table-borderless">
            <thead>
                {/* <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr> */}
            </thead>
            <tbody>
              
                        
                    <tr>
                        <td>Name: {appointments.name}</td>
                        <td>Mobile: {appointments.phone}</td>
                        <td>E-mail: {appointments.email}</td>
                    </tr>
                 
            </tbody>
        </table>
    );
};

export default AppointmentShortList;