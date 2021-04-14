import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hours',
            description: '24/7 days available.',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title: 'Contact Us Now',
            description: '+000 123 994466',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;