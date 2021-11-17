import React, {useState} from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const {id, subject, visitingHour, totalSpace} = booking;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5  className="card-title text-brand">{subject}</h5>
                    <h6>{visitingHour}</h6>
                    <p><small className="text-secondary">{totalSpace} SPACES AVAILABLE</small></p>
                    <button onClick={openModal} className="btn text-uppercase btn-brand">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal= {closeModal} subject={subject} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;