import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useAuthintic from './useAuthintic';


const PrivetRout = ({children}) => {
    const {user,isloading}=useAuthintic();
    const location=useLocation();
    if(isloading){
        return (
            <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
          );
      }
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRout;