import React from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer";
function EMI_Calculator() {
  return (
    <div>


      <Header />


      <div className='gg' style={{ overflow: 'hidden' }}>

        <iframe width="100%" height="100%" src="https://sagerealty.in/premium/emi-calculator" className='calculator' style={{ overflow: 'hidden' }}>

        </iframe>

      </div>

      <Footer />
    </div>
  )
}

export default EMI_Calculator
