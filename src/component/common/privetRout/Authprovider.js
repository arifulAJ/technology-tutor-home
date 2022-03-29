import React, { createContext } from 'react';
import useAuth from '../../../pages/useAuth/useAuth';


export const AuthContext=createContext();

const Authprovider = ({children}) => {
    const allContent=useAuth();
    return (
        <AuthContext.Provider value={allContent}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default Authprovider;