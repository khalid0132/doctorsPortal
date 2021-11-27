import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navbar from '../../Shared/Navbar/Navbar';

const containerStyle = {
    background: 'lightblue',
    height: "100%",
}

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        // console.log(date)
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://afternoon-ocean-10289.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <Navbar />
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments = {appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;