import React, { useEffect, useState } from "react";
import { useMediaQuery } from "../../hooks/use-media-query";
import { Drawer, DrawerTrigger, DrawerContent } from "../shadcn/drawer";
import { Link } from "react-router-dom";
import './Header.css'
function Header() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isDesktop ? (
    <nav
      id="nav"
      className={`fixed tracking-widest p-4 text-[14px] text-white font-nav inset-x-0 top-0 justify-between flex flex-row lg:justify-between z-50  w-full mx-auto items-center bg-black
        transition duration-500 
      `}
    >
      <Link
        to="/"
        className="flex flex-col items-center gap-0 justify-center transition duration-500 "
      >
        <img width={90} src="/logo.png" />
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="">
          HOME
        </Link>
        {/* <Link to="/demo" className="">
          demo
        </Link> */}
        <div class="dropdown dropdown1">
          <Link to="" className="dropbtn">
            ABOUT US
          </Link>
          <div class="dropdown-content drop1">
            <Link style={{ background: "black" }} className="bg-1" ></Link>
            <hr className="border-22" />
            <Link to="/about-us"  className="link-text1">About</Link>
            <hr className="border-5" />
            <Link to="/leadership" className="link-text1">Leadership</Link>
            <hr className="border-5" />
            <Link to="/companies" className="link-text1">Our Group Companies</Link>
            <hr className="border-5" />
            <Link to="/awards" className="link-text1">Awards</Link>
          </div>
        </div>
        <div class="dropdown dropdown1">
          <Link to="" className="dropbtn">
            PROJECTS
          </Link>
          <div class="dropdown-content drop1">
            <Link style={{ background: "black" }} className="bg-1" ></Link>
            <hr className="border-22" />
            <Link to="/premium/ongoing-projects" className="link-text1">Ongoing Projects</Link>
            <hr className="border-5" />
            <Link to="/premium/commercial-projects" className="link-text1">Commercial Projects</Link>
            <hr className="border-5" />
            {/* <Link to="/premium/rental-properties" className="link-text1">Rental Properties</Link>
            <hr className="border-5" /> */}
            <Link to="/premium/completed-projects" className="link-text1">Completed Projects</Link>
          </div>
        </div>
        <div class="dropdown dropdown1">
          <Link to="" className="dropbtn">
            RESOURCES
          </Link>

          <div class="dropdown-content drop1">
            <Link style={{ background: "black" }} className="bg-1" ></Link>
            <hr className="border-22" />
            <Link to="/emi-calculator" className="link-text1">EMI Calculator</Link>

            <hr className="border-5" />
            <Link to="/home-loan" className="link-text1">Home Loan</Link>
            <hr className="border-5" />
            <Link to="blogs" className="link-text1">Blogs</Link>
          </div>
        </div>
        <Link to="/luxury"  className="">
          SAGE LUXURY
        </Link>
        <Link to="/media" className="">
          MEDIA
        </Link>
        <Link to="/true-sage-foundation"  className="">
          COMMUNITY SERVICE
        </Link>
        <Link to="/sustainability" className="">
          SUSTAINABILITY
        </Link>
        <Link to="/contact-us" className="">
          CONTACT US
        </Link>
      </div>
    </nav>
  ) : (
    <div
      className={`lg:hidden fixed tracking-widest text-primary font-nav inset-x-0 top-0 left-0 justify-between px-4 flex flex-row  z-50 items-center bg-black transition duration-500
    `}
    >
      <div className={`p-4`}>
        <div className=" text-xl">
          <Link
            to="/"
            className="flex flex-col items-center gap-0 justify-center transition duration-500"
          >
            <img width={90} src="/logo.png" />
          </Link>
        </div>
      </div>
      <Drawer direction="right">
        <DrawerTrigger>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </DrawerTrigger>
        <DrawerContent className="bg-[#111111] rounded-none">
          <div className="flex justify-between items-start py-4 px-4 w-full">
            <div className="font-bold text-xl">

              <Link
                to="/"
                className="flex flex-col items-center gap-0 justify-center text-primary transition duration-500"
              >
                <img width={90} src="/logo.png" />
              </Link>
            </div>
            <DrawerTrigger>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </DrawerTrigger>
          </div>
          <Link to="/" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            HOME
          </Link>
          <nav>

            <ul class="ul2">
              {/* <li class="ul1"><a href="#" className="block py-4 text-center text-white border-b-2 border-[#242424]"> Home</a></li> */}

              <li>
                <label for="drop-3" class="toggle"
                  className="block py-4 text-center text-white border-b-2 border-[#242424]">ABOUT US +</label>
                <input type="checkbox" id="drop-3" />
                <ul className="ul8">
                  <li>  <Link to="about-us"  className="link-text1 text-center">About</Link></li>
                  <hr className="border-5" />
                  <li>  <Link to="leadership" className="link-text1 text-center">Leadership</Link></li>
                  <hr className="border-5" />
                  <li>  <Link to="/companies" className="link-text1 text-center">Our Group Companies</Link></li>
                  <hr className="border-5" />
                  <li> <Link to="/awards" className="link-text1 text-center">Awards</Link></li>
                </ul>
              </li>
              <li>

                <label for="drop-2" class="toggle"
                  className="block py-4 text-center text-white
                 border-b-2 border-[#242424]"> PROJECTS +</label>

                <input type="checkbox" id="drop-2" />
                <ul  className="ul8">
               
                  <li>  <Link to="/premium/ongoing-projects" className="link-text1 text-center">Ongoing Projects</Link></li>
                  <hr className="border-5" />
                  <li>  <Link to="/premium/commercial-projects" className="link-text1 text-center">Commercial Projects</Link></li>
                  <hr className="border-5" />
               
                 <li> <Link to="/premium/completed-projects" className="link-text1 text-center">Completed Projects</Link></li>


                </ul>
              </li>
              <li>


                <label for="drop-4" class="toggle"
                  className="block py-4 text-center text-white
                 border-b-2 border-[#242424]">  RESOURCES +</label>

                <input type="checkbox" id="drop-4" />
                <ul  className="ul8">
                
                  <li>  <Link to="https://sagerealty.in/emi-calculator" className="link-text1 text-center">EMI Calculator</Link></li>

                  <hr className="border-5" />
                  <li><Link to="https://sagerealty.in/home-loan" className="link-text1 text-center">Home Loan</Link></li>
                  <hr className="border-5" />
                  <li>   <Link to="/blogs" className="link-text1 text-center">Blogs</Link></li>

                </ul>
              </li>
              {/* <li><a href="#">Blog</a></li> */}

            </ul>
          </nav>

          <Link to="/luxury" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            SAGE LUXURY
          </Link>
          <Link to="/media" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            MEDIA
          </Link>
          <Link to="/true-sage-foundation" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            COMMUNITY SERVICE
          </Link>
          <Link to="/sustainability" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            SUSTAINABILITY
          </Link>
          <Link to="/contact-us" className="block py-4 text-center text-white border-b-2 border-[#242424]">
            CONTACT US
          </Link>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Header;
