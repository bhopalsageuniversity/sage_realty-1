// App.js 

import React from 'react'
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import './About.css'

function About() {

    return (

        <div className="gbg"  >
            <Header  />


            <div className='gg'  style={{ overflow: 'hidden' }}>

                <iframe width="100%" height="100%" src="https://sagerealty.in/premium/about-us" className='obdgry'  style={{ overflow: 'hidden' }}> 

                </iframe>

            </div>

            <Footer />
        </div>
    )
}



export default About;
