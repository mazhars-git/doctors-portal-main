import React from 'react';
import doctorImg from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={doctorImg} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 style={{color: '#10cfe3'}}>APPOINTMENT</h5>
                        <h2 className="pt-3 pb-3" style={{color: '#fff'}}>Make an appointment <br/>Today </h2>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, ut ea dolorem vero voluptatem accusantium!</p>
                        <button className="btn btn-info text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;