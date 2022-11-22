import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

/*
    1. only allow authentication user to visit the route
    2. 
    3. Redirect user to the route they wanted to go before login
*/ 

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation(); // {pathname: '/', search: '', hash: '', state: null, key: 's09nvhcx'}
    if(loading){
        return <Spinner animation="grow" />
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>;
    }
    return children;
};
export default PrivateRoute;