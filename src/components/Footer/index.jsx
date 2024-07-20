import React from 'react'
import realty from "/logo.png";
import facebook from "../../assets/images/icons/whiteIcons/facebook.png";
import Instagram from "../../assets/images/icons/whiteIcons/Instagram.png";
import Twitter from "../../assets/images/icons/whiteIcons/Twitter.png";
import Whatsapp from "../../assets/images/icons/whiteIcons/Whatsapp.png";
import Youtube from "../../assets/images/icons/whiteIcons/Youtube.png";
import Email from "../../assets/images/icons/whiteIcons/Email.png";
import location from "../../assets/images/icons/whiteIcons/location.png";
import Phone from "../../assets/images/icons/whiteIcons/Phone.png";
import { Link } from 'react-router-dom';
const index = () => {
  return (
    <div className='bg-[#181818]'>
      <div className='w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0 items-start py-20 text-white'>
        <div className='mx-auto md:mx-0 flex flex-col items-center'>
            <img src={realty} width={120} className='' />
            <div className='flex justify-center md:justify-start gap-3 mt-4'>

                <Link to='https://www.facebook.com/SageRealtyBPl/' target='_blank'><img src={facebook} className='size-5'/></Link>
               <Link to='https://www.instagram.com/sagerealtybpl/' target='_blank'><img src={Instagram} className='size-5'/></Link> 
               <Link to='https://www.youtube.com/@sagerealty' target='_blank'><img src={Youtube} className='size-5'/></Link>
                
                
            </div>
        </div>
        <div className='md:hidden grid grids-cols-1 min-[410px]:grid-cols-2 mx-auto min-[410px]:mx-0 w-fit min-[410px]:w-full gap-y-8'>
          <div>
              <div className='font-bold'>PROGRAMS</div>
              <ul className='list-disc text-xs'>
                  <li className='mt-4'><Link to='/premium/ongoing-projects'>Ongoing Project</Link></li>
                  <li className='mt-2'><Link to='/premium/commercial-projects'>Commercial Projects</Link></li>
                  <li className='mt-2'><Link to='/premium/completed-projects'>Completed Projects</Link></li>
              </ul>
          </div>
          <div>
              <div className='font-bold'>SUPPORT</div>
              <ul className=' text-xs'>
                    <li className='mt-4'><a href='/about-us' target='_blank'>About us</a></li>
                    <li className='mt-2'><Link to='/terms-and-condition'>Term & Conditions</Link></li>
                    <li className='mt-2'><Link to='/contact-us'>Contact</Link></li>
              </ul>
          </div>     
          <div>
              <div className='font-bold'>Contact Us</div>
              <ul className=' text-xs'>
                  <li className='flex items-center gap-4 mt-4'><img src={Email} className='size-4'/>info@sagerealty.in</li>
                  <li className='flex items-center gap-4 mt-2'><img src={Phone} className='size-4'/>+91-9200700800</li>
              </ul>
          </div>
        </div>
        <div className='hidden md:block'>
            <div className='font-bold'>PROGRAMS</div>
            <ul className='list-disc text-xs'>
                <li className='mt-4'><Link to='/premium/ongoing-projects' target='_blank'>Ongoing Project</Link></li>
                <li className='mt-2'><Link to='/premium/commercial-projects'  target='_blank'>Commercial Projects</Link></li>
                <li className='mt-2'><Link to='/premium/completed-projects'  target='_blank'>Completed Projects</Link></li>
            </ul>
        </div>
        <div className='hidden md:block'>
            <div className='font-bold'>SUPPORT</div>
            <ul className=' text-xs'>
                <li className='mt-4'><a href='/about-us' target='_blank'>About us</a></li>
                <li className='mt-2'><Link to='/terms-and-condition'>Term & Conditions</Link></li>
                <li className='mt-2'><Link to='/contact-us'>Contact</Link></li>
            </ul>
        </div>
        <div className='hidden md:block'>
            <div className='font-bold'>Contact Us</div>
            <ul className=' text-xs'>
                <li className='flex items-center gap-4 mt-4'><img src={Email} className='size-4'/>info@sagerealty.in</li>
                <li className='flex items-center gap-4 mt-2'><img src={Phone} className='size-4'/>+91-9200700800</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default index
