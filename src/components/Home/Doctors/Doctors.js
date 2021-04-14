import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import image_1 from '../../../images/profile.png';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/doctors`)
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section className="container pt-5 pb-5 text-center">
            <h5 className="pt-5 pb-5 text-info">OUR DOCTORS</h5>
            <div className="row">
                {
                    doctors.map(doctor => <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>)
                }
            </div>
        </section>
    );
};

export default Doctors;