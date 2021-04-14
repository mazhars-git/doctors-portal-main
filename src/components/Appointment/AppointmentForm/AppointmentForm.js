import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen, closeModal, appointmentOn, date}) => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        data.service = appointmentOn;
        data.date = date.toDateString();
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointed Successfully.');
            }
        })
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-center text-secondary"><small>ON {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                    <input {...register("phone", { required: true })} placeholder="Phone Number" />
                    <select {...register("gender", { required: true })}>
                        <option value="select">Select...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                    <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email" />
                    <input type='time' {...register("time")}/>
                    <input type='date' {...register("date")}/>
                  
                    <input type="submit" value="Send" />
                </form>
            </Modal>
            
        </div>
    );
};

export default AppointmentForm;