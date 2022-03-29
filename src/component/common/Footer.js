import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footerColor p-3 text-white'>
            <div className='row row-cols-1 row-cols-md-3 '>
                <div className='col'>
                   
                    <img className='w-50 p-2' src="https://www.zilliondesigns.com/blog/wp-content/uploads/Logo-Design-Tutorials.png" alt="" />
                </div>
                <div className='col'>
                 <h6> All course name</h6>
                 <li>Graphics design</li>
                 <li>Blockchain develop</li>
                 <li>web development</li>
                 <li>Net working</li>
                </div>
                <div className='col'>
                    <h6>Connect with us</h6>
                    <a className='fontColor' href="https://www.facebook.com/profile.php?id=100025248092230"> <i class="fa-brands fa-facebook-square"> Facebook</i> <br /></a>
                    <a className='fontColor' href="https://twitter.com/ArifulI75306060">  <i class="fa-brands fa-twitter"> Twitter</i> <br /></a>
                   <a className='fontColor' href="https://www.instagram.com/ariful_islam_1011/"> <i class="fa-brands fa-instagram"> Instagram</i> </a>

                </div>

            </div>
        </div>
    );
};

export default Footer;