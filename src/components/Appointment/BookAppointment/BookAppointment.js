import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookData = [
        {
            id: '124',
            subject: 'Teeth Orthodontics',
            visitingHour: '8:00 AM - 9:00 AM',
            totalSpace: '20'
        },
        {
            id: '12a5',
            subject: 'Cosmetic Dentistry',
            visitingHour: '10:05 AM - 11:30 AM',
            totalSpace: '17'
        },
        {
            id: '12b6',
            subject: 'Teeth Cleaning',
            visitingHour: '05:00 PM - 06:30 PM',
            totalSpace: '10'
        },
        {
            id: '12c7',
            subject: 'Cavity Protection',
            visitingHour: '07:00 AM - 08:30 AM',
            totalSpace: '12'
        },
        {
            id: '12d8',
            subject: 'Teeth Orthodontics',
            visitingHour: '08:00 AM - 09:00 AM',
            totalSpace: '15'
        },
        {
            id: '12e9',
            subject: 'Teeth Replacement',
            visitingHour: '10:00 AM - 11:00 AM',
            totalSpace: '10'
        }
    ]
    return (
        <section>
            <h2 className="text-center text-brand pb-5">Available Appointments on {date.toDateString()}</h2>
           <div className="container">
                <div className="row">
                    {
                        bookData.map(bookingData => 
                        <BookingCard 
                            cardInfo={bookingData} 
                            key={bookingData.id}
                            date={date}
                        ></BookingCard>)
                    }
                </div>
           </div>
        </section>
    );
};

export default BookAppointment;