import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuthintic from './useAuthintic';


const PrivetRout = ({children}) => {
    const {user}=useAuthintic();
    const location=useLocation();
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRout;