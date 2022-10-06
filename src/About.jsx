import React from 'react';
import Common from './Common';
import webserver from '../src/images/webserver.png';
const About =()=>{
    return(
        <>
            <Common
                name="Welcome to About page of "
                imgsrc={webserver}
                visit="/contact"
                btname='Contact '
            />
        </>
    );
};
export default About;