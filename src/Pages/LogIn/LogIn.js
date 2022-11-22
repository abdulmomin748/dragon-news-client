import { errorPrefix } from '@firebase/util';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
const LogIn = () => {

    const [disable, setDisable] = useState(false)
    useTitle('Login')
    
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(authContext);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    console.log(location);
    const handleSubmit = event => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
            form.reset();
            if(user.emailVerified){
                navigate(from, {replace: true})
            }
            else{
                toast.error('Your Email is not verified. please verify your email',{duration: 4000})
            }
        })
        .catch(error => {
            console.error(error);
            setError(error.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }
    return (
        <div>
            <Form.Text className="mb-3 text-warning">
                {error}
            </Form.Text>
            <button className={disable ?
                'btn btn-danger' 
                :
                'btn btn-primary'
            }>Login</button>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default LogIn;