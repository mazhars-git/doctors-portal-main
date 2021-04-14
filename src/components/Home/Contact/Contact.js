import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-page pt-5 pb-5">
            <h5 className="pt-5 pb-3 text-info text-center">CONTACT US</h5>
            <h2 className="pb-5 text-center text-white">Always Connect With Us</h2>
            <form className="w-50 m-auto" action="">
                <input className="form-control p-3" type="text" placeholder="Email"/>
                <br/>
                <input className="form-control p-3" type="text" placeholder="Subject"/>
                <br/>
                <textarea className="form-control p-5" type="textarea"/>
                <br/>
                <button className="btn btn-info text-white w-25" >Submit</button>
            </form>
        </section>
    );
};

export default Contact;