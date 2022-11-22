  import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar} from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
  const News = () => {
    useTitle('News Details')
    const news = useLoaderData();
    console.log(news)
    const {title, category_id, details, image_url, rating, author} = news;
    return (
        <div>
            <Card>
              <Card.Img variant="top" src={image_url}/>
              <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Text>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p><span className='fw-bold'>Author:</span> {author.name}</p>
                    <p><span className='fw-bold'>Published Date:</span> {author.published_date}</p>
                    <p className='d-flex align-items-center'><span className='me-2'><FaStar className='text-warning' /></span> {rating.number}</p>
                  </div>
                  <div className='text-start'>
                    <p>{details}</p>
                  </div>
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="primary">All news in this category</Button></Link>
              </Card.Body>
            </Card>
        </div>
    );
  };
  
  export default News;