import React from 'react';
import './Blogs.css';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title:'Check at the latest a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        author: 'Dr. Jacob',
        authorImg: wilson,
        date: '23 November 2021'
    },
    {
        title:'2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        author: 'Dr. Caudi',
        authorImg: wilson,
        date: '23 November 2021'
    },
    {
        title:'The tooth cancer is talking a challenge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipis',
        author: 'Dr. John Mitchel',
        authorImg: wilson,
        date: '23 November 2021'
    }
]

const Blogs = () => {
    return (
        <div className = "container">
            <div className="section-header text-center mt-5 mb-5">
                <h6 className="text-uppercase text-brand fw-bold">Our Blog</h6>
                <h2>From Our Blog News</h2>
            </div>
            <div className="w-100 row mt-4 pt-2">
                {
                    blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;