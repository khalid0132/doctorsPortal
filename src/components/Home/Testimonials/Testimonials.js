import React from 'react';
import './Testimonials.css';
import Elsa from '../../../images/Elsa.png';
import Erik from '../../../images/Erik.png';
import Emma from '../../../images/Emma.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialsData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Elsa Harry',
        from: 'Stockholm',
        img: Elsa,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Erik Eriksson',
        from: 'Mälmo',
        img: Erik,
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name: 'Emma Lund',
        from: 'California',
        img: Emma,
    }
]

const Testimonials = () => {
    return (
        <section className="testimonial-container mt-5">
            <div className="container">
                <div className="text-left">
                    <h6 className="text-uppercase" style={{color: '#1CC7C1', fontWeight: 'bold'}}>Testimonial</h6>
                    <h2 className="mt-3">What's Our Patients <br />Says</h2>
                </div>
                <div className="w-100 row mt-4 pt-2">
                    {
                        testimonialsData.map(testimonial => <Testimonial testimonial = {testimonial}></Testimonial>)
                    }
                </div>
            </div>    
        </section>
    );
};

export default Testimonials;