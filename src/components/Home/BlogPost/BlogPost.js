import React from 'react';
import { Card } from 'react-bootstrap';

const BlogPost = ({blog}) => {
    const {title, description, author, authorImg, date} = blog;
    return (
        
        <Card style = {{width: '20rem', boxShadow: '5px 10px 12px gray'}} className= "container mb-5 mt-5 py-5 border-2">

        <div>
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60"/>
                <div>
                    <h6 className="fw-bold">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
        </Card>
    );
};

export default BlogPost;