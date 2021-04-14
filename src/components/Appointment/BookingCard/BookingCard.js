import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({cardInfo, date}) => {
        const [modalIsOpen, setIsOpen] = useState(false);
        function openModal() {
            setIsOpen(true);
        }

        function closeModal(){
            setIsOpen(false);
        }
    return (
        <div className="col-md-4 pt-3 pb-3">
            <div className="card p-5">
                <div className="card-content px-2 text-center">
                    <h5 className="text-brand">{cardInfo.subject}</h5>
                    <h6>{cardInfo.visitingHour}</h6>
                    <p>{cardInfo.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand">Book Now</button>
                    <AppointmentForm 
                        modalIsOpen={modalIsOpen} 
                        closeModal={closeModal}
                        appointmentOn={cardInfo.subject}
                        date={date}
                    ></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;