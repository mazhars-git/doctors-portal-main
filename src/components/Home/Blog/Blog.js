import React from 'react';
import dr_1 from '../../../images/Ellipse 1.png';
import dr_2 from '../../../images/Ellipse 2.png';
import dr_3 from '../../../images/Ellipse 3.png';
import BlogInfo from '../BlogInfo/BlogInfo';

const Blog = () => {
    const blogInfos=[
        {
            name: 'Dr. Maikle',
            date: '13 April 2019',
            speech: 'Take healthy food to keep your body fresh and healthy',
            img: dr_1
        },
        {
            name: 'Dr. Caudi',
            date: '15 Jan 2018',
            speech: '2 times of brush in a day can keep you healthy',
            img: dr_2
        },
        {
            name: 'Dr. John Mitchel',
            date: '22 March 2019',
            speech: 'The tooth cancer is taking a challenge',
            img: dr_3
        }
    ]
    return (
        <section className="container pt-5 pb-5">
            <h5 className="text-center text-info">OUR BLOG</h5>
            <h2 style={{color: '#203047'}} className="text-center">From Our Blog News</h2>
            <div className="row pt-5">
                {
                    blogInfos.map(info => <BlogInfo info={info}></BlogInfo>)
                }
            </div>
        </section>
    );
};

export default Blog;