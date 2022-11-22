import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
const Profile = () => {
    const { user } = useContext(authContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
        console.log(photoURLRef, photoURLRef.current.value)  // {current: input#formBasicPassword.form-control}
    }

    const handleNameChanged = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChanged} name='name' defaultValue={name} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>

                    <Form.Control ref={photoURLRef} name='photoURL' type="text" defaultValue={user?.photoURL} placeholder="Photo URL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;