import React from 'react'
import Header from '../../components/Header'
import Footer from "../../components/Footer";
import { Container } from 'postcss';
function Awards() {
  return (
    <div className="App" >
      <div>
        <Header />
        <iframe width="100%" height="100%" src="https://sagerealty.in/premium/awards" className='award4' >
        </iframe>
        <Footer />
      </div>
    </div>
  )
}
export default Awards
