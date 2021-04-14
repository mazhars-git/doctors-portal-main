import React from 'react';
import './TestimonialDetail.css';

const TestimonialDetail = ({infoDetail}) => {
    return (
        <div className="col-md-4">
            <div className="infoBox px-5">
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt odit asperiores quod consequatur consequuntur iste at, hic tempore adipisci aspernatur explicabo neque deleniti amet autem facilis cumque? Temporibus, itaque.</p>
                
                <div className="profile d-flex pt-5">
                    <div className="profile-img me-3">
                        <img src={infoDetail.img} alt=""/>
                    </div>
                    <div className="profile-title align-self-center">
                        <h4>{infoDetail.name}</h4>
                        <h6>{infoDetail.location}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;