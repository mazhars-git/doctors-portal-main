import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const servicesData =[
        {
            title: 'Fluoride Treatment',
            img: fluoride
        },
        {
            title: 'Cavity Filling',
            img: cavity
        },
        {
            title: 'Teeth Whitening',
            img: whitening
        }

    ]
    return (
        <section className="service-content pt-5">
            <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2 className="mt-3 mb-3" style={{color: '#203047'}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;