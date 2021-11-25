import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments)
    return (
        <div>
            <h2 className="text-center">Appointments </h2>
            {
                appointments.length? appointments.map(appointments => <AppointmentShortList key={appointments._id} appointments={appointments}></AppointmentShortList>) :
                <p className="text-center p-5">No appointment is found for this date</p>
            }          
        </div>
    );
};

export default AppointmentsByDate;