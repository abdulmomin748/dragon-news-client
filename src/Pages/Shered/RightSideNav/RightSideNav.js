import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub, FaFacebook, FaTwitter,FaWhatsapp, FaTwitch  } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import ListGroup from 'react-bootstrap/ListGroup';
// import Carousel from 'react-bootstrap/Carousel';
import BrandCarosoul from '../BrandCarosoul/BrandCarosoul';
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const { providerLogin } = useContext(authContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
          console.error(error)  
        })
    }
    
    return (
        <div className='position-sticky top-0'>
            <ButtonGroup vertical className='w-100'>
                <Button onClick={handleGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark" className='mb-3'><FaGithub></FaGithub>Login with Github</Button>
            </ButtonGroup>
            <ListGroup className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup.Item className='mb-2'><FaFacebook /> justo odio</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp /> Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter /> Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch /> Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaFacebook /> Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <div>
                <BrandCarosoul />
            </div>
        </div>
    );
};

export default RightSideNav;