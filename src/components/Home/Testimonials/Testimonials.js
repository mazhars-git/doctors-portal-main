import React from 'react';
import img_1 from '../../../images/Ellipse 1.png';
import img_2 from '../../../images/Ellipse 2.png';
import img_3 from '../../../images/Ellipse 3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';


const Testimonials = () => {
    const testimonialsData = [
        {
            name: 'Winson Herry',
            location: 'California',
            img: img_1
        },
        {
            name: 'Winson Herry',
            location: 'California',
            img: img_2
        },
        {
            name: 'Winson Herry',
            location: 'California',
            img: img_3
        }
    ]
    return (
        <section className="testimonial pb-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h5 style={{color: '#1cc7c1'}}>TESTIMONIAL</h5>
                        <h2 style={{color: '#303f54'}}>What's Our Patients <br/> Says</h2>
                    </div>
                    <div className="col-md-6">
                        <FontAwesomeIcon style={{fontSize: '70px'}} icon={faPenFancy} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 mb-5">
                    {
                        testimonialsData.map(testimonialInfo => <TestimonialDetail infoDetail={testimonialInfo}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;