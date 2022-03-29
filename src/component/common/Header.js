import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../pages/useAuth/useAuth';
import './header.css'
const Header = () => {
  const {user,signOuttemp}=useAuth();
    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/home">Home</Link>
        </li>
        
       
      </ul>
    
      <div className='d-flex'>
      { user.email ?<button  type="button" class="btn btn-success mx-2">  Name:   {user.displayName}</button > :  <div></div>}
      {user.email? <button onClick={signOuttemp} type="button" class="btn btn-success">log Out</button>
:<button onClick={signOuttemp} type="button" class="btn btn-success"><Link className='text-white text-dec '  to="/login"> log in</Link></button> }
      
       
      
        
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;