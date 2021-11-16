import React from 'react';
import feature from '../../../images/feature.png'

const FeatureService = () => {
    return (
        <section>
            <div className="d-flex justify-content-center mt-5 pb-md-5 my-5 pb-0">
                <div className="container mb-5">
                   <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={feature} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h2 className="mb-5">Exceptional Dental <br />Care, On Your Terms</h2>
                            <p className="text-secondary mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam beatae maxime culpa omnis quas dolor veritatis laudantium <br/><br/>orem, ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam beatae maxime culpa omnis quas dolor veritatis lau debitis dolore maiores fugit saepe accusamus obcaecati sint laborum praesentium? Inventore, cupiditate!</p>
                            <button className="btn btn-brand">Learn More</button>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;