import React from 'react';
import './BlogInfo.css';

const BlogInfo = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="blog-content px-5 pt-3 pb-3">
                <div className='dr-content d-flex'>
                    <div className="blog-img me-3">
                        <img src={info.img} alt=""/>
                    </div>
                    <div className="dr-title align-self-center">
                        <h5>{info.name}</h5>
                        <small>{info.date}</small>
                    </div>
                </div>
                <h5 className="pt-2">{info.speech}</h5>
                <p className="text-secondary pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolorem nisi saepe itaque.</p>
            </div>
        </div>
    );
};

export default BlogInfo;