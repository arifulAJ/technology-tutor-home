import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';

const useAuthintic = () => {
   

    return useContext(AuthContext)


}
export default useAuthintic;