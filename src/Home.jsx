import React from 'react';
import astrooo from '../src/images/astrooo.jpg';
import Common from './Common';
const Home =()=>{
    return(
        <>
             <Common
                name="let's learn with  "
                imgsrc={astrooo}
                visit="/service"
                btname='Get Started'
            />
        </>
    );
};
export default Home;