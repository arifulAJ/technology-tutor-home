import React from 'react';

import Poster from '../Poster/Poster';
import Services from '../Services/Services';
import Stdio from '../Services/Stdio';
import Teachers from '../Services/Teachers';

const Home = () => {
    return (
        <div>
            
            <Poster/>
            <Services/>
            <Teachers/>
            <Stdio/>
          
        </div>
    );
};

export default Home;