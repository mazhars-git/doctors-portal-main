import React from 'react';

const Footer = () => {
    return (
        <section className="footer-area pt-5 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Doctors List</h5>
                        <p>Emergency Dental Care Checkup</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Services</h5>
                        <p>Emergency Dental Care Checkup</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Oral Health</h5>
                        <p>Emergency Dental Care Checkup</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-info">Our Address</h5>
                        <p>New York ~ 101010 Hudson Yards</p>
                    </div>
                </div>
                <p className="text-center">Copyright &copy; {new Date().getFullYear()} All rights reserved by Md. Mazharul Islam</p>
            </div>
        </section>
    );
};

export default Footer;