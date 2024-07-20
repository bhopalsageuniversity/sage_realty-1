import React from 'react'

import '../App.css'
function PricingCard({ src1,src2 }) {
  return (
    <div>
      {src1 && <iframe src={src1} style={{width:"100%",height:"100vh"}}/>}
      {src2 && <iframe src={src2}  style={{width:"100%",height:"100vh"}}/>}
    </div>
  )
}
export default PricingCard

