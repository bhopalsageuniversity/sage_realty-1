import React, { useState } from "react";
import Footer from "../../components/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeNew from "/home/home_new.png";
import lux from "../../assets/images/home/lux.png";
import premium from "../../assets/images/home/premium.png";
import realty from "../../assets/images/home/realty.png";
import about from "../../assets/images/home/about.png";
import trueSageLogo from "../../assets/images/home/trueSageLogo.png";
import trueSage from "../../assets/images/home/trueSage.png";
import trueSage2 from "../../assets/images/home/trueSage2.png";
import trueSageBg from "../../assets/images/home/trueSageBg.png";
import education1 from "../../assets/images/home/education1.png";
import sirt from "../../assets/images/home/sirt.jpg";
import sageInternational from "../../assets/images/home/sageInternational.jpg";
import sageIndore from "../../assets/images/home/sageIndore.jpg";
import Apollo from "../../assets/images/home/Apollo.jpg";
import power from "../../assets/images/home/power.jpg";
import testBg from "../../assets/images/home/testBg.png";
import timelineBg from "../../assets/images/home/timelineBg.png";

import startQuote from "../../assets/images/icons/startQuote.png";
import endQuote from "../../assets/images/icons/endQuote.png";
import fb from "../../assets/images/icons/fb.png";
import x from "../../assets/images/icons/x.png";
import ig from "../../assets/images/icons/ig.png";
import linkedIn from "../../assets/images/icons/linkedIn.png";
import left from "../../assets/images/icons/left.png";
import right from "../../assets/images/icons/right.png";
import testQuote from "../../assets/images/icons/testQuote.png";
import timelineLeft from "../../assets/images/icons/timelineLeft.png";
import timelineRight from "../../assets/images/icons/timelineRight.png";
import Header from '../../components/Header'
//Bank Logos
import axis from "../../assets/images/home/bank/axis.png";
import BankOfBaroda from "../../assets/images/home/bank/BankOfBaroda.png";
import bankOfIndia from "../../assets/images/home/bank/bankOfIndia.png";
import BankOfMaharashtra from "../../assets/images/home/bank/BankOfMaharashtra.png";
import Canara from "../../assets/images/home/bank/Canara.png";
import CentBank from "../../assets/images/home/bank/CentBank.png";
import HDFC from "../../assets/images/home/bank/HDFC.png";
import IDBIBank from "../../assets/images/home/bank/IDBIBank.png";
import IDFC from "../../assets/images/home/bank/IDFC.png";
import indiaBulls from "../../assets/images/home/bank/indiaBulls.png";
import IndianBank from "../../assets/images/home/bank/IndianBank.png";
import Kotak from "../../assets/images/home/bank/Kotak.png";
import LIC from "../../assets/images/home/bank/LIC.png";
import PNBhousing from "../../assets/images/home/bank/PNBhousing.png";
import SBI from "../../assets/images/home/bank/SBI.png";
import Tata from "../../assets/images/home/bank/Tata.webp";
import Union from "../../assets/images/home/bank/Union.png";
import YesBank from "../../assets/images/home/bank/YesBank.png";

import homeBg from "/home/home-bg.png";
import sustainabilityBg from "/sustain/sustainabilityBg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/ScrollTrigger";
import { Card } from "../../components/shadcn/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/shadcn/carousal";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

gsap.registerPlugin(scrollTrigger);

const index = () => {
  const [missionVision, setMissionVission] = useState("vision");
  const [group, setGroup] = useState("education");

  const [slideCount, setSlideCount] = useState(0);
  const [slideLoad, setSlideLoad] = useState(false);

  useGSAP(() => {
    gsap.from(".mainScreen", {
      scrollTrigger: ".mainScreen",
      opacity: 0,
      delay: 0.2,
      duration: 0.2,
    });
    gsap.from(".sagePremium", {
      scrollTrigger: ".mainScreen",
      opacity: 0,
      x: 10,
      delay: 0.3,
    });
    gsap.from(".sageLux", {
      scrollTrigger: ".mainScreen",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });
    gsap.from(".sage", {
      scrollTrigger: ".mainScreen",
      opacity: 0,
      delay: 0.7,
    });

    gsap.from(".creativeHeading", {
      scrollTrigger: ".creativeHeading",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });
    gsap.from(".creativeText", {
      scrollTrigger: ".creativeHeading",
      opacity: 0,
      x: -10,
      delay: 0.6,
    });
    gsap.from(".creativeNumbers", {
      scrollTrigger: ".creativeHeading",
      opacity: 0,
      x: -10,
      delay: 0.8,
    });

    gsap.from(".vision", {
      scrollTrigger: ".vision",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });

    gsap.from(".timeline", {
      scrollTrigger: ".timelineSection",
      opacity: 0,
      x: 10,
      delay: 0.3,
    });
    gsap.from(".timelineNumber", {
      scrollTrigger: ".timelineSection",
      opacity: 0,
      x: -10,
      delay: 0.5,
    });

    gsap.from(".trueImage", {
      scrollTrigger: ".trueImage",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });

    gsap.from(".trueHeading", {
      scrollTrigger: ".trueSection",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });
    gsap.from(".trueText", {
      scrollTrigger: ".trueSection",
      opacity: 0,
      x: -10,
      delay: 0.6,
    });
    gsap.from(".trueButtons", {
      scrollTrigger: ".trueSection",
      opacity: 0,
      x: -10,
      delay: 0.8,
    });

    gsap.from(".bankingHeading", {
      scrollTrigger: ".bankingHeading",
      opacity: 0,
      delay: 0.3,
    });
    gsap.from(".banking", {
      scrollTrigger: ".banking",
      opacity: 0,
      delay: 0.6,
    });

    gsap.from(".trustText", {
      scrollTrigger: ".trustSection",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });
    gsap.from(".trustCarousel1", {
      scrollTrigger: ".trustSection",
      opacity: 0,
      x: -10,
      delay: 0.6,
    });
    gsap.from(".trustCarousel2", {
      scrollTrigger: ".trustSection",
      opacity: 0,
      x: -10,
      delay: 0.6,
    });

    gsap.from(".groupHeading", {
      scrollTrigger: ".groupHeading",
      opacity: 0,
      x: -10,
      delay: 0.3,
    });
    gsap.from(".groupButtons", {
      scrollTrigger: ".groupButtons",
      opacity: 0,
      x: -10,
      delay: 0.4,
    });
    gsap.from(".groupCarousel", {
      scrollTrigger: ".groupCarousel",
      opacity: 0,
      x: -10,
      delay: 0.6,
    });
  });

  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "red" }}
      //   onClick={onClick}
      // />
      <img
        onClick={onClick}
        src={right}
        className="size-10 hover:drop-shadow-xl absolute right-0 top-1/2 cursor-pointer z-50 border-black rounded-full"
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "green" }}
      //   onClick={onClick}
      // />
      <img
        onClick={onClick}
        src={left}
        className=" size-10 hover:drop-shadow-xl absolute left-0 top-1/2  cursor-pointer z-50 border-black rounded-full"
      />
    );
  }

  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;

    const handleClick = (event) => {
      setSlideLoad(true);
      slideCount < 5 && setSlideCount(slideCount + 1);

      if (onClick) {
        onClick(event);
      }
      setTimeout(() => {
        setSlideLoad(false);
      }, 520);
    };
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "red" }}
      //   onClick={onClick}
      // />
      <img
        onClick={handleClick}
        src={timelineRight}
        className={`${
          slideLoad ? "pointer-events-none" : ""
        } size-10 hover:drop-shadow-xl absolute right-0 -bottom-[10%] cursor-pointer z-50 border-black rounded-full`}
      />
    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;

    const handleClick = (event) => {
      setSlideLoad(true);
      slideCount > 0 && setSlideCount(slideCount - 1);

      // Call the original onClick function
      if (onClick) {
        onClick(event);
      }

      setTimeout(() => {
        setSlideLoad(false);
      }, 520);
    };
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "green" }}
      //   onClick={onClick}
      // />
      <img
        onClick={handleClick}
        src={timelineLeft}
        className={`${
          slideLoad ? "pointer-events-none" : ""
        } size-10 hover:drop-shadow-xl absolute right-16 -bottom-[10%]  cursor-pointer z-50 border-black rounded-full`}
      />
    );
  }

  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "red" }}
      //   onClick={onClick}
      // />
      <img
        onClick={onClick}
        src={right}
        className="size-12 hover:drop-shadow-xl absolute -left-[42%] top-[35%] cursor-pointer z-50 border-black rounded-full"
      />
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      // <div
      //   className={className}
      //   style={{ ...style, display: "block", background: "green" }}
      //   onClick={onClick}
      // />
      <img
        onClick={onClick}
        src={left}
        className="size-12 hover:drop-shadow-xl absolute -left-[50%] top-[35%] cursor-pointer z-50 border-black rounded-full"
      />
    );
  }

  var settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  var settings1 = {
    // dots: true,
    arrows: true,
    infinite: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    centerPadding: "100px",
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          // borderRadius: "10px",
          // padding: "10px"
          color: "#D3AE6E",
        }}
      >
        <ul className="active: bg- [#D3AE6E]" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        // style={{
        //   width: "30px",
        //   color: "blue",
        //   border: "1px blue solid"
        // }}
        className="w-8 h-4 text-[#D3AE6E]"
      >
        -
      </div>
    ),
  };

  const settings2 = {
    // dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };

  var settingsPhone = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
  };

  const handleLuxClick = () => {
    window.location.href = "https://sage-beryl.vercel.app/";
  };

  const handlePremiumClick = () => {
    window.location.href = "https://agrawalconstruction.com/";
  };

  return (
    <div className="mainScreen bg-white font-poppin">
      <Header/>
      {/* <div className="relative h-screen text-white overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div
            className="sageLux w-[95% ] h-1/2 md:h-full md:w-1/2 px-4 md:px-12 flex flex-col gap-6 items-center justify-center text-center bg-cover"
            style={{
              backgroundImage: `url(${lux})`,
            }}
          >
            <div className="font-nav text-[14.76px] md:text-[24px] leading-none text-[#D3AE6E]">
              SAGE <br /> LUXURY
            </div>
            <div className="w-[95%] md:w-[75%] mx-auto font-heading text-[25.18px] lg:text-[40px] leading-[1.15] text-[#D3AE6E]">
              UNCOMPROMISING <br /> EXCELLENCE
            </div>
            <div className="font-poppins w-[85%] text-sm md:text-base">
              Discover Sage Luxury, our curated collection of premium homes designed for those who
              demand the finest.
            </div>
            <button
              onClick={handleLuxClick}
              className="border md:mt-12 px-7 py-2 font-body text-base"
            >
              Read More
            </button>
          </div>
          <div
            className="sagePremium w-[95% ] h-1/2 md:h-full md:w-1/2 px-12 flex flex-col gap-6 items-center justify-center text-center bg-cover"
            style={{
              backgroundImage: `url(${premium})`,
            }}
          >
            <div className="font-nav text-[14.76px] md:text-[24px] leading-none text-white">
              SAGE <br /> PREMIUM
            </div>
            <div className="w-[95%] md:w-[75%] mx-auto font-heading text-[25.18px] lg:text-[40px] leading-[1.15] text-[#D3AE6E]">
              EXPERIENCE <br /> EXCEPTIONAL LIVING
            </div>
            <div className="font-poppins w-[85%] text-sm md:text-base">
              Discover Sage Luxury, our curated collection of premium homes designed for those who
              demand the finest.
            </div>
            <button
              onClick={handlePremiumClick}
              className="border md:mt-12 px-7 py-2 font-body text-base"
            >
              Read More
            </button>
          </div>
        </div>
        <img
          src={realty}
          className="sage absolute h-24 md:size-auto left-1/2 top-1/2 md:top-[43%] transform -translate-x-1/2 -translate-y-1/2"
        />
      </div> */}
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        className="pt-16 relative "
      >
        <CarouselContent >
          <CarouselItem>
            <img className="w-full h-[150px] lg:h-auto desktopview" src="/banner/banner2.jpg" />
            <img className="w-full  lg:h-auto mobileview" src="/mobilebanner/bannermobile2.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img className="w-full h-[150px] lg:h-auto desktopview" src="/banner/banner3.jpg" />
            <img className="w-full  lg:h-auto mobileview" src="/mobilebanner/bannermobile3.jpg" />
          </CarouselItem>
          <CarouselItem>
            <img className="w-full h-[150px] lg:h-auto desktopview" src="/banner/banner1.jpg" />
            <img className="w-full  lg:h-auto mobileview" src="/mobilebanner/bannermobile4.jpg" />
          </CarouselItem>
          <CarouselItem >
          <img className="w-full h-[150px] lg:h-auto desktopview" src="/banner/banner3.jpg" />
            <img className="w-full  lg:h-auto mobileview" src="/mobilebanner/bannermobile1.jpg" />
          </CarouselItem>
        </CarouselContent>
      
        {/* <CarouselPrevious className="absolute left-6" />
        <CarouselNext className="absolute right-6"  /> */}
      </Carousel>

      {/* <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 font-poppin px-8">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="creativeHeading mt-16 text-[40px] min-[410px]:text-[48px] md:text-[56px] leading-tight font-semibold">
              We are Crateive
              <br /> Architecture
              <br /> Studio
            </div>
            <img src={about} className="md:hidden block" />
            <div className="creativeText mt-6 text-xl leading-[1.85]">
              ACCUMULATING 40 YEARS OF EXPERIENCE IN THE PROPERTY MARKET ENABLES
              US TO DELIVER AN INNOVATIVE AND SPECIALIZED RESIDENTIAL
              CONSTRUCTION COMPANY IN THE REAL ESTATE MARKET ACROSS THE NATION.
            </div>
            <div className="creativeNumbers mt-12 flex flex-col sm:flex-row gap-4 justify-between">
              <div>
                <div className="font-semibold text-[40px]">
                  13000<span className="text-[#D3AE6E]">+</span>
                </div>
                <div>Happy Clients</div>
              </div>
              <div>
                <div className="font-semibold text-[40px]">
                  38<span className="text-[#D3AE6E]">+</span>
                </div>
                <div>Finished Project</div>
              </div>
              <div>
                <div className="font-semibold text-[40px]">
                  1000<span className="text-[#D3AE6E]">+</span>
                </div>
                <div>Sage Talks</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={about} className="hidden md:block w- full ml-auto h-[98%]" />
        </div>
      </div> */}
      <div className="timelineSection bg-[#D3AE6E]  md:py-24 md:h-[600px] flex flex-col md:flex-row relative items-center justify-end overflow-hidden">
        <div
          className="timelineNumber md:absolute flex items-center md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:h-[550px] w-full md:w-2/3"
          style={{
            backgroundImage: `url(${timelineBg})`,
          }}
        >
          <div className="font-anton text-[250px] sm:text-[300px] leading-none md:leading-normal md:text-[500px] text-[#D3AE6E] opacity-[0.25]">
            {slideCount === 0
              ? "‘83"
              : slideCount === 1
              ? "‘90"
              : slideCount === 2
              ? "‘00"
              : slideCount === 3
              ? "‘10"
              : slideCount === 4
              ? "‘20"
              : "‘24"}
          </div>
        </div>
        <div className="timeline md:relative bg-[#181818] pt-6  md:pt-0 md:pb-0 pb-20 md:py-12 min-h-[450px] w-full md:w-1/2 pl-8">
          {/* <div className="text-[35px] md:text-[50px] text-[#D3AE6E]"> */}
          <div className="groupHeading  text-[53.93px] md:text-[60px] font-velvet tracking-widest text-[#D3AE6E]">
          <span style={{fontSize:"85px"}}>o</span>ur  <span style={{fontSize:"85px"}}>j</span>ourney</div>
          <Slider {...settings1} className="text-white w-[90%] md:w-[70%] pb-4 mt-">
            <div>
              <div className="text-[26px] md:text-[28px] text-[#D3AE6E]">
                1983 - Founding Vision
              </div>
              <div className="text-justify mt-2 trueText  text-[16px]">
                Since 1983, our journey in construction began in the heart of Madhya Pradesh, driven
                by a passion for quality and innovation. Starting with humble beginnings, we've been
                committed to shaping skylines and fulfilling aspirations across the state. Our
                dedication to excellence has earned us a reputation for reliability and
                craftsmanship in every project we undertake, reflecting our deep-rooted commitment
                to Madhya Pradesh's growth and development.{" "}
              </div>
            </div>
            <div>
              <div className="text-[28px] text-[#D3AE6E]">1983 - 1990</div>
              <div className="text-justify mt-2 trueText  text-[16px]">
                During this time we embarked on a transformative journey by delivering three
                landmark projects across Madhya Pradesh. These initiatives not only redefined
                construction standards but also exemplified our unwavering commitment to quality and
                innovation. Each project was a testament to our vision and dedication, setting a
                benchmark for excellence in the region and fostering lasting trust with our clients
                and communities.{" "}
              </div>
            </div>
            <div>
              <div className="text-[28px] text-[#D3AE6E]">1990 - 2000</div>
              <div className="text-justify mt-2 trueText  text-[16px]">
                During this period, we successfully delivered nine promising projects across Madhya
                Pradesh, each contributing to the creation of homes for numerous families and
                enhancing the region's infrastructure. These developments underscored our commitment
                to quality and community, embodying our dedication to shaping a built environment
                that meets the aspirations of our clients and enriches the lives of our communities.{" "}
              </div>
            </div>
            <div>
              <div className="text-[28px] text-[#D3AE6E]">2000 - 2010</div>
              <div className="text-justify mt-2 trueText  text-[16px]">
                By this duration, our construction efforts flourished with the completion of eleven
                transformative projects across Madhya Pradesh. These ventures not only enriched the
                landscape but also provided new homes and infrastructure, fostering growth and
                prosperity throughout the region. Each project stood as a testament to our
                unwavering dedication to craftsmanship and community, marking a decade of impactful
                contributions to Madhya Pradesh's development.{" "}
              </div>
            </div>
            <div>
              <div className="text-[28px] text-[#D3AE6E]">2010 - 2020</div>
              <div className="text-justify mt-2 trueText  text-[16px]">
                Over the course of the decade, our team delivered eleven remarkable projects across
                Madhya Pradesh, enhancing the region's landscape and enriching communities with
                essential facilities. Each project represented a milestone in our commitment to
                excellence and innovation in construction, reflecting our dedication to shaping
                environments that meet the diverse needs of our clients and foster
                sustainable growth.{" "}
              </div>
            </div>
            <div>
              <div className="text-[28px] text-[#D3AE6E]">2020 - 2024</div>
              <div className="text-justify mt-2 trueText text-[16px]">
                During this phase, we launched Green Hills, a prestigious development renowned in
                Bhopal for its architectural brilliance. Simultaneously, we ventured into healthcare
                with Apollo Sage Hospital, marking just the beginning of our journey toward new
                heights in innovation and community service. These initiatives reflect our
                commitment to setting new standards in both the construction and healthcare sectors,
                promising a future of continued growth and excellence for Bhopal and beyond.{" "}
              </div>
            </div>
          </Slider>
          <div className="absolute bottom-10 left-0 pl-8 flex gap-2">
            <div
              className={`w-4 h-1 ${
                slideCount === 0 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
            <div
              className={`w-4 h-1 ${
                slideCount === 1 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
            <div
              className={`w-4 h-1 ${
                slideCount === 2 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
            <div
              className={`w-4 h-1 ${
                slideCount === 3 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
            <div
              className={`w-4 h-1 ${
                slideCount === 4 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
            <div
              className={`w-4 h-1 ${
                slideCount === 5 ? "bg-[#D3AE6E]" : "bg-[#9D7C37]"
              } rounded-full `}
            />
          </div>
        </div>
      </div>
      <div className="vision w-[90%] md:w-[60%] mt-8 xl:mt-0 mx-auto font-poppin py-10">
        <div className="flex justify-center gap-4">
          <div
            onClick={() => setMissionVission("vision")}
            className={`cursor-pointer ${
              missionVision === "vision"
                ? "font-bold text-2xl underline underline-offset-4 decoration-[#D3AE6E]"
                : "font-semibold text-2xl text-[#6e83a0]"
            }`}
          >
            Vision
          </div>
          <div
            onClick={() => setMissionVission("mission")}
            className={`cursor-pointer ${
              missionVision === "mission"
                ? "font-bold text-2xl underline underline-offset-4 decoration-[#D3AE6E]"
                : "font-semibold text-2xl text-[#6e83a0]"
            }`}
          >
            Mission
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-xl">
          <img src={startQuote} className="size-8" />
          <div className="leading-loose text-center font-light">
            {missionVision === "vision" ? (
              <div className="trueText text-[19px]  tracking-wide">
                To be the industry leader and market driven construction company, renowned for
                excellence, quality, performance and reliability in all types of construction
              </div>
            ) : (
              <div className="trueText text-[19px]  tracking-wide">
                Adherence to ethical business practises, We believe in creating world class
                amenities for most important segments which touch every individuals,
                day-to-day life.
              </div>
            )}
          </div>
          <img src={endQuote} className="size-8 mt-auto" />
        </div>
      </div>

      <div
        className="h-[400px] md:h-[480px] bg-cover bg-center flex flex-col items-center justify-center gap-6"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="text-[#D3AE6E] font-navold flex flex-col items-center">
          <p>SAGE</p>
          <p>LUXURY</p>
        </div>
        <div className="flex flex-col items-center justify-center text-[32.21px] md:text-[78px]">
          <div className="susHeading2 font-velvet text-[#D3AE6E] leading-none z-10 tracking-[0.10rem]">
            Uncompromising
          </div>
          <div className="susHeading2 font-velvet text-[#D3AE6E] leading-none z-10 tracking-[0.10rem]">
            Excellence
          </div>
        </div>
        <p className="text-white text-center">
          Discover Sage Luxury, our curated collection of premium homes designed for those who
          demand the finest.
        </p>
        <Link
          to="/luxury" 
          className="border md:mt-12 px-7 py-2 text-white font-body text-base"
        >
          Read More
        </Link>
      </div>

      <div className="flex p-4 lg:p-10 flex-col items-center justify-center mt-8">
        <h1 className="text-[50px] lg:text-[80px] font-velvet leading-7 tracking-wider">
          Featured Projects
        </h1>
        <div className="flex flex-col lg:flex-row mt-10 gap-y-10 gap-x-10">
          <a href="https://sagerealty.in/luxury/goldenspring" >
            <Card className="p-10 flex flex-col gap-4 items-center text-center">
              <img src="/home/projects/project1.png" />
              <div className="font-rollgate text-[36px] ">
                SAGE GOLDEN
                <br />
                SPRING
              </div>
              <div className="font-poppins">
                2BHK AND 3 BHK FLATS
                <br />
                <span className="text-[#D3AE6E]">AYODHYA BYPASS ROAD</span>
              </div>
            </Card>
          </a>
          <a href="https://sagerealty.in/premium/sage-sun-villas">
            <Card className="p-10 flex flex-col gap-4 items-center text-center">
              <img src="/home/projects/project2.png" />
              <div className="font-rollgate text-[36px] ">
                SAGE SUN
                <br />
                VILLAS
              </div>
              <div className="font-poppins">
                PREMIUM RESIDENTIAL PLOTS
                <br />
                <span className="text-[#D3AE6E]">KATARTA EXTENSION</span>
              </div>
            </Card>
          </a>
        </div>
      </div>
      <div
        className="h-[350px] md:h-[480px] bg-cover bg-center"
        style={{ backgroundImage: `url(${sustainabilityBg})` }}
      >
        <div className="flex flex-col w-full h-full items-center justify-center text-[52.21px] md:text-[96px]">
          <div className="susHeading1 font-heading text-white leading-none z-0">BUILDING A</div>
          <div className="susHeading2 font-lavish text-[#D3AE6E] text-[90 px] leading-none -mt-7 md:-mt-11 -ml-2 z-10 tracking-[0.10rem]">
            Sustainable Future
          </div>
          <Link to="sustainability" className="border md:mt-12 px-7 py-2 text-white font-body text-base">
            Read More
          </Link>
        </div>
      </div>

      <div className="trueImage md:hidden w-full overflow-hidden">
        <img src={trueSage2} className="w-full object-fill" />
      </div>

      <div
        className=" flex flex-col md:flex-row md:items-center mt-16 font-poppin bg-cover bg-left bg-opacity-40"
        style={{
          backgroundImage: `url(${trueSageBg})`,
        }}
      >
        <div className="md:w-1/2 md:px-8">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="flex items-center gap-4">
              <img src={trueSageLogo} className="size-[78px] md:size-[110px]" />
              {/* <div className="trueHeading text-[38px] md:text-[50px] font-bold leading-none"> */}
              <div className="groupHeading mb-5 mt-5 text-[53.93px] md:text-[60px] font-velvet tracking-widest" style={{lineHeight:"50px"}}>
              <span style={{fontSize:"80px"}}>t</span>rue  <span style={{fontSize:"80px"}}>s</span>age
                <br />  <span style={{fontSize:"80px"}}>f</span>oundation
              </div>
            </div>
            <div className="trueText mt-6 text-[16px]">
              True SAGE Foundation, established in 2019, is dedicated to societal and environmental
              betterment through high moral standards and collective efforts. Led by the Chairperson
              of the Sage Group, Mrs. Kiran Agrawal, the Foundation provides essentials like food,
              water, clothing, and education to marginalized communities. It regularly organizes
              Blood Donation Camps to raise community awareness. Committed to innovative education,
              the Foundation aims to empower and catalyze change for the nation's holistic
              development.
            </div>
            <div className="trueButtons flex mt-6 gap-4 items-center">
              <Link to='/true-sage-foundation'> <button className="border-[1.5px] border-black px-4 py-2">Read More</button></Link>
             
              {/* <img src={fb} className="h-5 ml-2" />
              <img src={x} className="h-5" />
              <img src={ig} className="h-5" />
              <img src={linkedIn} className="h-5" /> */}
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <img src={trueSage} className="hidden md:block w- full ml-aut h-[98%]" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${trueSageBg})`,
        }}
        className="h-auto lg:h-[600px] lg:w-[80%] mx-auto flex flex-col p-8 lg:pt-28 items-center lg:flex-row bg-cover bg-center bg-opacity-40"
      >
        <div className="lg:w-1/2 flex flex-col lg:items-start flex-1">

        
          <h1 className="groupHeading mt-16 text-[45.93px] px-4 md:px-0 md:text-[80px] font-velvet tracking-widest text-center mb-8">
            what's new
          </h1>
          <img src={homeNew} className="newImage" />
        </div>
        <div className="lg:w-1/2 flex-1 lg:pl-24 text-primary pt-10 ">
          <div className="text-center lg:text-start mt-10">
            <div className="groupHeading mb-5 mt-5 text-[45.93px] md:text-[60px] font-velvet tracking-widest " style={{lineHeight:"50px"}}>
            <span style={{fontSize:"85px"}}>d</span>iscover <br></br>  <span style={{fontSize:"85px"}}>t</span>he  <span style={{fontSize:"85px"}}>e</span>xperience
            </div>
            {/* <div className="newSubHeading2 font-light font-velvet text-[43px] lg:text-[60px] -mt-6">
              the experience
            </div> */}
          </div>
          <p className="trueText mt-5 text-[16px] newText1 tracking-wide  text-[16px]  lg:leading-relaxed text-justify lg:text-balance">
            Within the heart of Bhopal, a rare opportunity awaits. We are unveiling a limited
            collection of only 35 exquisite villas, meticulously designed to offer an unparalleled
            standard of luxury living.
          </p>
          <div className="newButtons flex flex-col lg:flex-row gap-8 lg:gap-8 items-center pt-14">
            <Link to="/blogs" className="border  px-7 py-2  font-body text-lg">
              Read More
            </Link>
            {/* <Link to="/blogs" className="text-primary hover:underline">
              ALL BLOGS
            </Link> */}
          </div>
        </div>
      </div>

      {/* <div className="bankingHeading text-center text-[24px] font-semibold mt-16">
        Banking Partners
      </div>
      <div class="banking w-full inline-flex flex-nowrap overflow-x-hidden mt-8">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img src={axis} alt="axis" className="h-24" />
          </li>
          <li>
            <img src={BankOfBaroda} alt="BankOfBaroda" className="h-24" />
          </li>
          <li>
            <img src={bankOfIndia} alt="bankOfIndia" className="h-24" />
          </li>
          <li>
            <img src={BankOfMaharashtra} alt="BankOfMaharashtra" className="h-24" />
          </li>
          <li>
            <img src={Canara} alt="Canara" className="h-24" />
          </li>
          <li>
            <img src={CentBank} alt="CentBank" className="h-24" />
          </li>
          <li>
            <img src={HDFC} alt="HDFC" className="h-24" />
          </li>
          <li>
            <img src={IDBIBank} alt="IDBIBank" className="h-24" />
          </li>
          <li>
            <img src={IDFC} alt="IDFC" className="h-24" />
          </li>
          <li>
            <img src={indiaBulls} alt="indiaBulls" className="h-24" />
          </li>
          <li>
            <img src={IndianBank} alt="IndianBank" className="h-24" />
          </li>
          <li>
            <img src={Kotak} alt="Kotak" className="h-24" />
          </li>
          <li>
            <img src={LIC} alt="LIC" className="h-24" />
          </li>
          <li>
            <img src={PNBhousing} alt="PNBhousing" className="h-24" />
          </li>
          <li>
            <img src={SBI} alt="SBI" className="h-24" />
          </li>
          <li>
            <img src={Tata} alt="Tata" className="h-24" />
          </li>
          <li>
            <img src={Union} alt="Union" className="h-24" />
          </li>
          <li>
            <img src={YesBank} alt="YesBank" className="h-24" />
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img src={axis} alt="axis" className="h-24" />
          </li>
          <li>
            <img src={BankOfBaroda} alt="BankOfBaroda" className="h-24" />
          </li>
          <li>
            <img src={bankOfIndia} alt="bankOfIndia" className="h-24" />
          </li>
          <li>
            <img src={BankOfMaharashtra} alt="BankOfMaharashtra" className="h-24" />
          </li>
          <li>
            <img src={Canara} alt="Canara" className="h-24" />
          </li>
          <li>
            <img src={CentBank} alt="CentBank" className="h-24" />
          </li>
          <li>
            <img src={HDFC} alt="HDFC" className="h-24" />
          </li>
          <li>
            <img src={IDBIBank} alt="IDBIBank" className="h-24" />
          </li>
          <li>
            <img src={IDFC} alt="IDFC" className="h-24" />
          </li>
          <li>
            <img src={indiaBulls} alt="indiaBulls" className="h-24" />
          </li>
          <li>
            <img src={IndianBank} alt="IndianBank" className="h-24" />
          </li>
          <li>
            <img src={Kotak} alt="Kotak" className="h-24" />
          </li>
          <li>
            <img src={LIC} alt="LIC" className="h-24" />
          </li>
          <li>
            <img src={PNBhousing} alt="PNBhousing" className="h-24" />
          </li>
          <li>
            <img src={SBI} alt="SBI" className="h-24" />
          </li>
          <li>
            <img src={Tata} alt="Tata" className="h-24" />
          </li>
          <li>
            <img src={Union} alt="Union" className="h-24" />
          </li>
          <li>
            <img src={YesBank} alt="YesBank" className="h-24" />
          </li>
        </ul>
      </div> */}

      <div className="trustSection relative flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] mx-auto mt-24">
        <img
          src={testBg}
          className="absolute z-0 md:left-[32%] top-[20%] md:-top-[5%] opacity-80"
        />
 
{/*groupHeading mt-16 text-[45.93px] px-4 md:px-0 md:text-[60px] font-velvet tracking-widest text-center*/}
        <div className="groupHeading mb-5 mt-5 text-[45.93px] md:text-[60px] font-velvet tracking-widest " style={{lineHeight:" 48px"}}>
          <span style={{fontSize:"80px"}}>t</span>rusted <span style={{fontSize:"78px"}}>b</span>y <span style={{fontSize:"78px"}}>p</span>eople <span style={{fontSize:"78px"}}>f</span>rom <span style={{fontSize:"78px"}}>a</span>ll <span style={{fontSize:"78px"}}>a</span>round
        </div>
        <br></br>
        <div className="trustCarousel1 hidden md:block md:w-2/3">
          <Slider {...settings2}>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Highly recommended!</div>
              <div className="mt-4 ">
                We entrusted Sage Realty with building our dream home, and they truly exceeded
                expectations. The entire process, from design to construction, was smooth and
                professional. Their attention to detail and commitment to quality are unmatched.
              </div>
              <div className="mt-4 font-medium">— Priya Sharma, Bhopal</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Excellent Builders!</div>
              <div className="mt-4">
                As an architect, I've collaborated with many builders over the years, and Sage
                Realty stands out for their collaborative spirit and innovative approach.
              </div>
              <div className="mt-4 font-medium">— Mr. Vikas Kapoor, Renowned Architect, Bhopal</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Welcoming Homebuilders!</div>
              <div className="mt-4">
                Recently bought a property with Sage Realty in Sage Sun City phase 1 everything was
                managed so efficiently by the entire team. Even the approach was very professional
                from the very first day. Thank you so much for all your assistance in finding us a
                property. We have been looking for a while. We are very much satisfied with the
                service of Sage Realty, I would definitely recommend it to others as well
              </div>
              <div className="mt-4 font-medium">— Mr Krishna</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Safe Haven Builders!</div>
              <div className="mt-4">
                I’m happy to associate with the leading brand of Bhopal for us. Sagar Greenhills is
                a perfect combination of lifestyle luxury. It was a dream to own a home around
                nature and a search ended here we are extremely happy and strongly recommend to
                anyone looking to buy property in Bhopal. Thank you.
              </div>
              <div className="mt-4 font-medium">— Mrs Rakhi Jaiswal</div>
            </div>
          </Slider>
        </div>
        <div className="trustCarousel2 md:hidden block mt-12 md:w-2/3">
          <Slider {...settingsPhone}>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Highly recommended!</div>
              <div className="mt-4">
                We entrusted Sage Realty with building our dream home, and they truly exceeded
                expectations. The entire process, from design to construction, was smooth and
                professional. Their attention to detail and commitment to quality are unmatched.
              </div>
              <div className="mt-4 font-medium">— Priya Sharma, Bhopal</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Excellent Builders!</div>
              <div className="mt-4">
                As an architect, I've collaborated with many builders over the years, and Sage
                Realty stands out for their collaborative spirit and innovative approach.
              </div>
              <div className="mt-4 font-medium">— Mr. Vikas Kapoor, Renown Architect, Bhopall</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Welcoming Homebuilders!</div>
              <div className="mt-4">
                Recently bought a property with Sage Realty in Sage Sun City phase 1 everything was
                managed so efficiently by the entire team. Even the approach was very professional
                from the very first day. Thank you so much for all your assistance in finding us a
                property. We have been looking for a while. We are very much satisfied with the
                service of Sage Realty, I would definitely recommend it to others as well
              </div>
              <div className="mt-4 font-medium">— Mr Krishna</div>
            </div>
            <div className="px-6">
              <img src={testQuote} className="size-6" />
              <div className="font-semibold mt-4">Safe Haven Builders!</div>
              <div className="mt-4">
                I’m happy to associate with the leading brand of Bhopal for us. Sagar Greenhills is
                a perfect combination of lifestyle luxury. It was a dream to own a home around
                nature and a search ended here we are extremely happy and strongly recommend to
                anyone looking to buy property in Bhopal. Thank you.
              </div>
              <div className="mt-4 font-medium">— Mrs Rakhi Jaiswal</div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="groupHeading mt-16 text-[45.93px] px-4 md:px-0 md:text-[60px] font-velvet tracking-widest text-center">
        Our Group Companies
      </div>
      <div className="groupButtons flex flex-col md:flex-row mt-4 w-[90%] md:w-[80%] mx-auto items-center md:items-start justify-center gap-2 md:gap-8">
        <div
          onClick={() => setGroup("education")}
          className={`${
            group === "education"
              ? "bg-[#D3AE6E] text-white font-semibold"
              : "border-[1.5px] border-[#D3AE6E]"
          } cursor-pointer flex items-center justify-center h-[50px] w-[200px]`}
        >
          Education
        </div>
        <div
          onClick={() => setGroup("health")}
          className={`${
            group === "health"
              ? "bg-[#D3AE6E] text-white font-semibold"
              : "border-[1.5px] border-[#D3AE6E]"
          } cursor-pointer flex items-center justify-center h-[50px] w-[200px]`}
        >
          Healthcare
        </div>
        <div
          onClick={() => setGroup("power")}
          className={`${
            group === "power"
              ? "bg-[#D3AE6E] text-white font-semibold"
              : "border-[1.5px] border-[#D3AE6E]"
          } cursor-pointer flex items-center justify-center h-[50px] w-[200px]`}
        >
          Electrical Infra
        </div>
      </div>
      <div className="groupCarousel mt-8 mb-12 w-[90%] md:w-[80%] mx-auto">
        {group === "education" ? (
          <>
            <div className="hidden md:block w-full">
              <Slider {...settings} className="px-10">
                <div className="px-16 flex flex-col items-center" >
                  <img src={education1} className="mx-auto h-[480px] w-[1200px]" />
                  <div className="font-rollgate text-[32px] mt-8 " > SAGE UNIVERSITY, BHOPAL</div>
                  <div className="mt-2 trueText mt-6 text-[16px]" >
                  SAGE University, Bhopal with its impeccable academia, colossal campus, leading-
                    edge educational framework and extensive fagade in the beautiful city of lakes
                    bhopal has created a world- class setup for transforming passion into a
                    profession.
                  </div>
                </div>
                <div className="px-16 flex flex-col items-center">
                  <img src={sageInternational} className="mx-auto h-[480px] w-[1200px]" />
                  <div className="font-rollgate text-[32px] mt-8" >SAGE INTERNATIONAL SCHOOL</div>
                  <div className="mt-2 trueText mt-6 text-[16px]" >
                  SAGE International School is among the top and the most distinguished school in
                    bhopal, it is a dream maker, which strives to turn the pursuit of excellence
                    into a reality and where the high academic expectations are fully met.
                  </div>
                </div>
                <div className="px-16 flex flex-col items-center">
                  <img src={sirt} className="mx-auto h-[480px] w-[1200px]" />
                  <div className="font-rollgate text-[32px] mt-8" >SAGE GROUP OF INSTITUTES</div>
                  <div className="mt-2 trueText mt-6 text-[16px]" >
                  Sagar Institute of Research & Technology (SIRT), Bhopal is reputed as the top
                    engineering college in bhopal mp. we believe in the values and principles,
                    standards and qualities that an individual or group of people hold.
                  </div>
                </div>
                <div className="px-16 flex flex-col items-center">
                  <img src={sageIndore} className="mx-auto h-[480px] w-[1200px]" />
                  <div className="font-rollgate text-[32px] mt-8" >SAGE UNIVERSITY, INDORE</div>
                  <div className="mt-2 trueText mt-6 text-[16px]" >
                    SAGE University, Indore is a prominent association where technology innovation and
                    entrepreneurship come together to build an impactful learning environment. sage
                    focuses on the growth of every intellectual who is a part of the institution.
                  </div>
                </div>
              </Slider>
            </div>
            <div className="md:hidden block w-full">
              <Slider {...settingsPhone} className="">
                <div className="px-2 flex flex-col items-center">
                  <div className="mx-auto  w-full overflow-hidden">
                    <img src={education1} className="" />
                  </div>
                  <div className="font-rollgate text-[32px] mt-8" >SAGE UNIVERSITY, BHOPAL</div>
                  <div className="mt-2 trueText mt-6 text-[16px]" >
                  SAGE University, Bhopal with its impeccable academia, colossal campus, leading-
                    edge educational framework and extensive fagade in the beautiful city of lakes
                    bhopal has created a world- class setup for transforming passion into a
                    profession.
                  </div>
                </div>
                <div className="px-2 flex flex-col items-center">
                  <div className="mx-auto  w-full overflow-hidden">
                    <img src={sageInternational} className="" />
                  </div>
                  <div className="font-rollgate text-[32px] mt-8">SAGE INTERNATIONAL SCHOOL</div>
                  <div className=" mt-2 trueText mt-6 text-[16px]" >
                  SAGE International School is among the top and the most distinguished school in
                    bhopal, it is a dream maker, which strives to turn the pursuit of excellence
                    into a reality and where the high academic expectations are fully met.
                  </div>
                </div>
                <div className="px-2 flex flex-col items-center">
                  <div className="mx-auto  w-full overflow-hidden">
                    <img src={sirt} className="" />
                  </div>
                  <div className="font-rollgate text-[32px] mt-8" >SIRT CAMPUS</div>
                  <div className=" mt-2 trueText mt-6 text-[16px]" >
                    Sagar Institute of Research & Technology (SIRT), Bhopal is reputed as the top
                    engineering college in bhopal mp. we believe in the values and principles,
                    standards and qualities that an individual or group of people hold.
                  </div>
                </div>
                <div className="px-2 flex flex-col items-center">
                  <div className="mx-auto  w-full overflow-hidden">
                    <img src={sageIndore} className="" />
                  </div>
                  <div className="font-rollgate text-[32px] mt-8" >SAGE UNIVERSITY, INDORE</div>
                  <div className="mt-2 trueText mt-6 text-[16px] " >
                    SAGE University, Indore is a prominent association where technology innovation and
                    entrepreneurship come together to build an impactful learning environment. sage
                    focuses on the growth of every intellectual who is a part of the institution.
                  </div>
                </div>
              </Slider>
            </div>
          </>
        ) : group === "health" ? (
          <div className="w-full px-2 md:px-10">
            <div className="md:px-16">
              <div className="mx-auto h-[280px] md:h-[480px] w-full overflow-hidden">
                <img src={Apollo} className="h-full w-full object-fill" />
              </div>
              <div className="font-rollgate text-[32px] mt-8" >APOLLO SAGE HOSPITAL, BHOPAL</div>
              <div className="mt-2 trueText mt-6 text-[16px]">
                Our new venture in the healthcare vertical to provide the best healthcare
                facilities, Sagely, with more than 25 healthcare facilities and 350+ beds (100+
                critical care beds), 9 highly equipped operation theatres, flat panel cath lab, MRI,
                and CT scan machine.
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full px-2 md:px-10">
            <div className="md:px-16">
              <div className="mx-auto h-[280px] md:h-[480px] w-full overflow-hidden">
                <img src={power} className="h-full w-full object-fill" />
              </div>
              <div className=" font-rollgate text-[32px] mt-8">AGARWAL POWER PVT. LTD.</div>
              <div className="mt-2 trueText mt-6 text-[16px]">
                Agarwal Power Pvt. Ltd. is India’s leading solution provider of energy
                delivery, your trusted partners for design, detailed engineering, project
                management, construction, and operation and maintenance of power plants.
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default index;
