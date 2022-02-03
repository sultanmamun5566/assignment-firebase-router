import React from 'react';
import { Navigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase/useFirebse';

const PrivateRoute = ({children}) => {
    const {user } = useFirebase();
    return (
        user.email ? children : <Navigate to='/login'>
            
       </Navigate>
    );
};

export default PrivateRoute;