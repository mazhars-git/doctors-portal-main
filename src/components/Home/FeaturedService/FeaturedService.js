import React from 'react';
import featureImage from '../../../images/feature.png';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={featureImage} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2 style={{color: '#303f54'}}>Exceptional Dental <br/> Care, on Your Terms</h2>
                        <p className="text-secondary my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio expedita voluptatum esse amet ipsam, at accusantium nesciunt nemo iste sunt quidem reprehenderit atque. Ex corrupti quaerat asperiores aliquid porro nihil enim accusamus dicta dolorem recusandae aspernatur nemo delectus quos, maiores, tenetur accusantium cupiditate neque soluta consectetur saepe dolore, tempore doloribus! Exercitationem sit commodi doloribus autem nihil voluptate magni eligendi fuga! Nesciunt, molestiae. Autem ad error amet soluta magni sit, et aut ratione possimus quos. Nisi placeat aperiam nam reiciendis quis perspiciatis repellat? Et, aspernatur fuga ea delectus quasi ducimus placeat labore quae officia quo asperiores neque blanditiis nostrum officiis praesentium!</p>
                        <button className="btn btn-info text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;