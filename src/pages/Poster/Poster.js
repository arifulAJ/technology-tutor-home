import React from 'react';
import './Poster.css'
const Poster = () => {
    return (
        <div className=''>
         <div className='postImage'>
         <img className='img-fluid' src="https://storage.googleapis.com/ibw-blog/media/b4/8d09ffc86cacc5b7b8358464350530.png" alt="" />
         </div>
         <div className='tickerWrap '>
             <div className="bigHeading">
                 update
             </div>
             <div className="textUpdate ">
                 <p>we have a big plan to the next generation .that is , we are released some updated course for the tech lover . design and development is our main aim .....  </p>
             </div>
         </div>
            
        </div>
    );
};

export default Poster;