import React from 'react';
import ShowLogo from './showlogo.js';
import Header from './header.js';
import OurWhy from './OurWhy.js';
import OurHow from './OurHow.js';
import OurWhat from './OurWhat.js';
import Contact from './Contact.js';
import Footer from '../Footer.js';

function HomeMain() {
    return(
        <>


        <Header />

        <ShowLogo />

        <div className='why_and_how'>
            <OurWhy/>
            <OurHow/>
        </div>

        <OurWhat/>

        <Contact/>

        <Footer/>

        </>
    )
}

export default HomeMain;