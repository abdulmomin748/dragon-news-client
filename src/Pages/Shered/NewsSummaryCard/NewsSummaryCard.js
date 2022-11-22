import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye} from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    const {title, _id, details, thumbnail_url, total_view, author, rating} = news;
    return (
        <div>
            <Card className="mb-5 shadow">
                <Card.Header className='d-flex justify-content-between align-items-center p-2'>
                    <div className='d-flex align-items-center'>
                        <Image  className='me-2' 
                        roundedCircle
                        src={author.img}
                        style ={{height: '60px'}}>
                        </Image>
                        <div>
                            <h6 className='mb-1'>{author.name}</h6>
                            <h6 className='mb-0'>{author.published_date}</h6>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt className='m-2' />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={thumbnail_url}  style ={{height: '500px'}}/>
                    <Card.Text> {/*<p></p>*/}
                        {
                            details.length > 250 ?
                            <>{details.slice(0, 250) + '...' } <Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            details
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center p-3">
                   <div className=' d-flex align-items-center'>
                        <FaStar className='me-2 text-warning' />
                        <span>{rating.number}</span>
                   </div>
                   <div className=' d-flex align-items-center'>
                        <FaRegEye className='me-2' />
                        <span>{total_view}</span>
                   </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;