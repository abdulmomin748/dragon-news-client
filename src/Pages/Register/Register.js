import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
const Register = () => {
    const {createUser, updatePro, emailVerify} = useContext(authContext);
    const [error, setError] = useState('');
    const [accepTerms, setAcceptTerms] = useState(false);
    useTitle('Register')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');

            handleUpdateUserProfile(name, photoUrl);
            toast.success('Plz Verify Your Email address!!',{duration: 4000})
            // .then(result => {
            //     const user = result.user;
            //     console.log(user);
            // })
            // .catch(error => {
            //     console.error(error);
                
            // })

            handleEmailVerify();
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }

    
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updatePro(profile)
        .then(() => {}) 
        .catch(error => console.error(error));
    }

    const handleTerms = event => {
        setAcceptTerms(event.target.checked);
    }

    const handleEmailVerify = () => {
        emailVerify()
        .then(() => {})
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <Form.Text className="text-warning mb-3">
                {error}
            </Form.Text>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Yout Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photURL' type="text" placeholder="Photo URL"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleTerms}
                    type="checkbox" 
                    label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accepTerms}> {/*not accepted*/}
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;