import logo from '../logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import nav_logo from '../assets/img/nav_logo.png';
import DownOutline from '../assets/img/DownOutline.png';
import bg_landing from '../assets/img/bg-landing.jpg';
import certification1 from '../assets/img/certification1.svg';
import certification2 from '../assets/img/certification2.svg';
import certification3 from '../assets/img/certification3.svg';
import image from '../assets/img/image.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/image3.png';
import image2a from '../assets/img/image2a.svg';
import image2b from '../assets/img/image2b.svg';
import image2c from '../assets/img/image2c.svg';
import image2d from '../assets/img/image2d.svg';
import image2e from '../assets/img/image2e.svg';
import Ellipse_24 from '../assets/img/Ellipse_24.png';
import Ellipse_25 from '../assets/img/Ellipse_25.png';
import Ellipse_26 from '../assets/img/Ellipse_26.png';
import facebook from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
import ig from '../assets/img/ig.png';
import twitter from '../assets/img/twitter.png';
import phone from '../assets/img/phone.png';
import email from '../assets/img/email.png';
import location from '../assets/img/location.png';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    console.log('Signin button clicked!');
    navigate('/signin', { replace: true });
    console.log('Navigating to signin route...');
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">

      <header className="bg-white fixed w-full h-[45px] md:h-[72px] z-100">
        <nav className="container mx-auto flex flex-wrapitems-center p-2 md:py-4 md:pl-8 md:pr-4">
          <div className="">
            <a href="#home" className="flex">
              <img src={nav_logo} alt="Logo" className="w-6 h-6 md:w-10 md:h-10 object-cover"/>
              <div className="ml-2">
                <h1 className="font-sans text-[12px] md:text-lg font-bold -mt-[2px] md:-mt-1">SAGARA</h1>
                <h1 className="font-sans text-[12px] md:text-lg font-bold -mt-2">TECH.</h1>
              </div>
            </a>
          </div>
          <ul className="flex items-start md:flex-row md:space-x-4 md:ml-8">
            <li><a href="#certification" className="block py-2 text-[8px] md:text-[14px] font-sans pl-6 md:px-4 text-gray-400 hover:text-gray-900">IT CERTIFICATION</a></li>
            <li>
              <div className="relative flex flex-col items-center" ref={dropdownRef}>
                <a href="#careers" onClick={toggleDropdown} className="flex items-center block py-2 text-[8px] md:text-[14px] font-sans px-2 md:px-4 text-gray-400 hover:text-gray-900">
                  CAREERS
                  <img src={DownOutline} className="none w-3 md:w-5 h-3 md:h-5 items-center -ml-1 md:ml-3" />
                </a>
                {isDropdownOpen && (
                <ul className="absolute bg-white border border-gray-200 mt-2 py-2 rounded-md shadow-lg w-48">
                  <li>
                    <a href="#front-end" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Front End Developer</a>
                  </li>
                  <li>
                    <a href="#back-end" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Back End Developer</a>
                  </li>
                  <li>
                    <a href="#qualityassurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Quality Assurance</a>
                  </li>
                  <li>
                    <a href="#ui/ux" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">UI/UX Design</a>
                  </li>
                </ul>
              )}
              </div>
            </li>
            <li><a href="#contact" className="block py-2 text-[8px] md:text-[14px] font-sans px-2 md:px-4 text-gray-400 hover:text-gray-900">FAQ</a></li>
          </ul>
          <div className="ml-auto md:mt-2">
            <button
              onClick={handleSignInClick}
              className="bg-red-900 text-[8px] md:text-[14px] py-2 font-sans font-bold px-4 md:px-8 rounded-md text-white hover:text-black">
              SIGN IN
            </button>
          </div>
        </nav>
      </header>

      <main id='home' className="flex flex-col items-center justify-center text-center pt-[72px] py-0 px-0">
        <div className="bg-cover bg-center w-full h-screen md:h-[484px]" style={{ backgroundImage: `url(${bg_landing})` }}>
          <div className="h-full bg-black bg-opacity-30 items-center justify-center py-[150px] md:pt-[70px] px-[50px] md:pl-[129px]">
            <div className="flex-col text-left">
              <div className="text-white font-sans text-2xl md:text-6xl">
                <span className="text-med mr-2">Live</span>
                <span className="text-bold mr-3">Your Best</span>
                <span className="text-med">Life</span>
              </div>
              <div className="text-white font-sans text-2xl md:text-6xl">
                <span className="text-med mr-2">Using</span>
                <span className="text-bold">Your Strengths</span>
              </div>
            </div>
            <div className="flex flex-col text-left text-white font-sans text-[10px] md:text-[18px] pt-[30px]">
              <span>Meet some of the people who have complated the Sagara Technology</span>
              <span>and use their result to maximize their potential at work</span>
              <span>anywhere else.</span>
            </div>
            <div className="mt-14 text-left">
              <a href="#" className="bg-red-900 text-[8px] md:text-[14px] py-3 md:py-5 font-sans font-bold px-4 md:px-14 rounded-md text-white hover:text-black">Get Certification</a>
            </div>
          </div>
        </div>

        <div className="md:flex w-full items-center justify-center px-5 pt-8 md:pb-0 md:px-[120px] pb-[50px]">
          <div class="w-full md:w-1/5 flex flex-col items-center md:items-start">
            <div className="h-1 w-[110px] bg-black rounded-full my-4"></div>
            <span className="text-left text-black font-sans text-lg uppercase text-med">about us</span>
          </div>

          <div class="w-full md:w-4/5 mt-10 md:mt-16 flex flex-col mx-auto items-center md:items-start">
            <span className="text-left text-[#A51535] font-sans text-lg md:text-2xl uppercase text-med">sagara it certification</span>
            <div className="flex-col font-sans text-xl md:text-4xl text-justify md:text-left mt-5">
              <span className="text-bold text-[#A51535] mr-1">Join Thousands</span>
              <span className="text-med text-[#353535]">of professionals who have elevated their skills and carved out success in the technology industri. Start your journey to exchellence with us today!</span>
            </div>
            <span className="text-justify md:text-left text-[#9E9E9E] font-sans text-lg md:text-[24px] pt-[20px]">Boost your career prospects in the digital era with industry-recignized information technology certifications from Sagara IT Certification.</span>
          </div>
        </div>

        <div className="md:flex w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
          <div class="w-full md:w-1/2 pr-[30px] flex flex-col items-starts text-left">
            <div id="certification" className="flex flex-col text-bold text-2xl md:text-[40px] text-[#A51535] uppercase md:py-2">
              <span className="md:pb-5">Why Sagara</span>
              <span>IT certification?</span>
            </div> 
            <div className="flex py-4">
              <img src={certification1} className="w-[60px] h-[60px] mr-4"/>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[20px] text-[#A51535] text-med">Global Credibility Boost</span>
                <span className="font-sans text-[16px] text-[#353535]">Our certifications are globally recognized, enhancing your credibility, and opening doors to new opportunities.</span>
              </div>
            </div>
            <div className="flex py-4">
              <img src={certification2} className="w-[60px] h-[60px] mr-4"/>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[20px] text-[#A51535] text-med">Empowering Careers</span>
                <span className="font-sans text-[16px] text-[#353535]">Equipped to advance your career, secure promotions, and pursue new job opportunities in the ever-evolving tech industry.</span>
              </div>
            </div>
            <div className="flex py-4">
              <img src={certification3} className="w-[60px] h-[60px] mr-4"/>
              <div className="flex flex-col text-left">
                <span className="font-sans text-[20px] text-[#A51535] text-med">Expertise Validation</span>
                <span className="font-sans text-[16px] text-[#353535]">Showcase your expertise and validate your skills with globally recognized certifications that employers trust.</span>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 flex flex-col mx-auto items-center md:items-start">
            <img src={image} className="w-full h-full"/>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
          <div className="flex flex-col items-center">
            <div className="h-1 w-[70px] bg-[#A51535] rounded-full my-4"></div>
            <span className="text-[#A51535] font-sans text-[30px] md:text-[40px] pt-10">How Sagara</span>
            <span className="text-[#A51535] font-sans text-[30px] md:text-[40px] text-bold">IT-Certification Works</span>
          </div>
          <div className="md:flex w-full md:pt-10">
            <div class="w-full flex flex-col mx-auto items-center md:items-start justify-center p-6">
              <img src={image2} className="w-full h-auto"/>
            </div>
            <div classname="w-full md:w-1/2 mt-0 md:-ml-16 flex flex-col items-center justify-center md:items-starts text-left">
              <div classname="w-full md:w-1/2 mt-0 md:-ml-16 flex flex-col items-center justify-center md:items-starts text-left">
                <div className="flex">
                  <img src={image2a} className="w-[140px] h-[140px] "/>
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-sans text-[18px] md:text-[24px] text-[#A51535] text-med mr-3">#1</span>
                      <span className="font-sans text-[18px] md:text-[24px] text-[#1A202C] text-med">Register Account</span>
                    </div>                 
                    <span className="font-sans text-[13px] md:text-[16px] text-[#9E9E9E]">Begin your journey by creating an account on Sagara IT Certification platform. Simply fill out the registration form to get started.</span>
                  </div>
                </div>
                <div className="flex md:-mt-2">
                  <img src={image2b} className="w-[140px] h-[140px] "/>
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-sans text-[18px] md:text-[24px] text-[#A51535] text-med mr-3">#2</span>
                      <span className="font-sans text-[18px] md:text-[24px] text-[#1A202C] text-med">Select the Type</span>
                    </div>                 
                    <span className="font-sans text-[13px] md:text-[16px] text-[#9E9E9E]">Choose from a variety of IT certification options tailored to your career goals and interests.  Select the certification that aligns with your expertise.</span>
                  </div>
                </div>
                <div className="flex md:-mt-2">
                  <img src={image2c} className="w-[140px] h-[140px] "/>
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-sans text-[18px] md:text-[24px] text-[#A51535] text-med mr-3">#3</span>
                      <span className="font-sans text-[18px] md:text-[24px] text-[#1A202C] text-med">Register and Pay</span>
                    </div>                 
                    <span className="font-sans text-[13px] md:text-[16px] text-[#9E9E9E]">Enroll in your chosen certification program by completing the registration process and making payment securely through our platform.</span>
                  </div>
                </div>
                <div className="flex md:-mt-2">
                  <img src={image2d} className="w-[140px] h-[140px] "/>
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-sans text-[18px] md:text-[24px] text-[#A51535] text-med mr-3">#4</span>
                      <span className="font-sans text-[18px] md:text-[24px] text-[#1A202C] text-med">Take Test</span>
                    </div>                 
                    <span className="font-sans text-[13px] md:text-[16px] text-[#9E9E9E]">Prepare for your certification exam and schedule a convenient time to take the test online.</span>
                  </div>
                </div>
                <div className="flex md:-mt-7">
                  <img src={image2e} className="w-[140px] h-[140px] "/>
                  <div className="flex flex-col text-left">
                    <div className="flex">
                      <span className="font-sans text-[18px] md:text-[24px] text-[#A51535] text-med mr-3">#5</span>
                      <span className="font-sans text-[18px] md:text-[24px] text-[#1A202C] text-med">Get the certificate</span>
                    </div>                 
                    <span className="font-sans text-[13px] md:text-[16px] text-[#9E9E9E]">Upon successful completion of the exam, receive your certification digitally, instantly validating your skills and expertise in the chosen IT field.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
          <div className="flex flex-col items-center">
            <div className="h-1 w-[70px] bg-[#A51535] rounded-full my-4"></div>
            <span className="text-[#A51535] font-sans text-[30px] md:text-[40px] pt-10">Empower Yourself with</span>
            <span className="text-[#A51535] font-sans text-[30px] md:text-[40px] text-bold">Our Certification</span>
            <div className="flex flex-wrap justify-center gap-3 md:gap-2 xl:gap-5">
              <div className="mt-5 md:mt-14 text-left">
                <a href="#front-end"
                  id = "front-end-button"
                  className="bg-[#A51535] text-[8px] md:text-[8px] xl:text-[20px] py-3 md:py-4 font-bold font-sans px-4 md:px-5 rounded-md text-white uppercase active:border active border-[#D0D5DD] active:bg-white active:text-[#344054] hover:bg-[#A51535] hover:text-white">
                  front-end developer
                </a>
              </div>
              <div className="mt-5 md:mt-14 text-left">
                <a href="#backend-end"
                  className="bg-white border border-[#D0D5DD] text-[8px] md:text-[8px] xl:text-[20px] py-3 md:py-4 font-sans px-4 md:px-5 rounded-md text-[#344054] uppercase active:bg-[#A51535] active:text-white active:font-bold hover:bg-[#A51535] hover:text-white">
                  back end developer
                </a>
              </div>
              <div className="mt-5 md:mt-14 text-left">
                <a href="#qualityassurance"
                  className="bg-white border border-[#D0D5DD] text-[8px] md:text-[8px] xl:text-[20px] py-3 md:py-4 font-sans px-4 md:px-5 rounded-md text-[#344054] uppercase active:bg-[#A51535] active:text-white active:font-bold hover:bg-[#A51535] hover:text-white">
                  quality assurance
                </a>
              </div>
              <div className="mt-5 md:mt-14 text-left">
                <a href="#ui/ux"
                  className="bg-white border border-[#D0D5DD] text-[8px] md:text-[8px] xl:text-[20px] py-3 md:py-4 font-sans px-4 md:px-5 rounded-md text-[#344054] uppercase active:bg-[#A51535] active:text-white active:font-bold hover:bg-[#A51535] hover:text-white">
                  ui/ux design
                </a>
              </div>
            </div>
          </div>
          <div id="front-end" className="md:flex w-full pt-10">
            <div class="w-full md:w-1/2 flex flex-col mx-auto items-center md:items-start">
              <img src={image3} className="w-full h-full"/>
            </div>
            <div class="w-full md:w-1/2 md:pr-[30px] flex flex-col items-starts justify-center text-left md:px-8 md:mb-5">
              <div className="flex flex-col text-bold text-2xl md:text-[40px] text-[#A51535] md:py-2">
                <span className="md:pb-5">Front End Certification</span>
              </div> 
              <div className="flex items-center py-4">
                <img src={Ellipse_24} className="w-[26px] h-[26px] mr-4"/>
                <div className="flex flex-col text-justify text-left">
                  <span className="font-sans text-[16px] text-[#353535]">This program equips you with the essential skills and knowledge to create visuallLandingPageealing websites or applications.</span>
                </div>
              </div>
              <div className="flex items-center py-4">
                <img src={Ellipse_25} className="justify-center w-[28px] h-[28px] mr-4"/>
                <div className="flex flex-col text-justify text-left">
                  <span className="font-sans text-[16px] text-[#353535]">Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.</span>
                </div>
              </div>
              <div className="flex items-center py-4">
                <img src={Ellipse_26} className="justify-center w-[28px] h-[24px] mr-4"/>
                <div className="flex flex-col text-justify text-left">
                  <span className="font-sans text-[16px] text-[#353535]">Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.</span>
                </div>
              </div>
              <div className="mt-10 text-center">
                <a href="#" className="bg-[#A51535] text-[12px] md:text-[18px] py-3 md:py-5 font-sans font-bold px-12 md:px-24 rounded-md text-white hover:text-black">Get Detail</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1C1C1C] flex flex-col w-full items-center justify-center px-5 md:px-[120px] py-[50px] md:py-[100px]">
        <div className="md:flex w-full">
            <div class="md:w-2/5 flex flex-col mx-auto items-start">
              <div className="flex text-left">
                <img src={nav_logo} alt="Logo" className="w-10 h-10 md:w-14 md:h-14 object-cover"/>
                <div className="ml-2">
                  <h1 className="font-sans text-white text-[18px] md:text-3xl font-bold -mt-[2px] md:-mt-1">SAGARA</h1>
                  <h1 className="font-sans text-white text-[18px] md:text-3xl font-bold -mt-2">TECH.</h1>
                </div>
              </div>
              <span className="md:w-4/5 text-left font-sans text-[#F2F2F2] text-[14px] my-1 md:my-4">Plan, build, grow digital products. Continuously delivering impact.</span>
              <div className="flex mt-1 mb-5 md:mb-0 md:mt-8">
                <a href="#">
                  <img src={facebook} className="w-[14px] h-[14px] mr-1"/>
                </a>
                <a href="#">
                  <img src={twitter} className="w-[14px] h-[14px] mx-3"/>
                </a>
                <a href="#">
                  <img src={linkedin} className="w-[14px] h-[14px] mx-3"/>
                </a>
                <a href="#">
                  <img src={ig} className="w-[14px] h-[14px] mx-3"/>
                </a>
              </div> 
            </div>
            <div class="md:w-3/5 flex justify-between gap-[5px] mx-auto items-start">
              <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                <span className="font-sans text-white text-[15px] md:text-[20px] text-med">Pages</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">IT Certification</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">Careers</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">FAQ</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">Terms & Condition</span>
              </div>
              <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                <span className="font-sans text-white text-[15px] md:text-[20px] text-med">Careers</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">Front End Developer</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">Back End Developer</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">Quality Assurance</span>
                <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">UI/UX Design</span>
              </div>
              <div class="flex-1 flex flex-col h-full justify-around mx-auto items-start">
                <span id="contact" className="font-sans text-white text-[15px] md:text-[20px] text-med">Contact</span>
                <a href="#" className="flex">
                  <img src={phone} className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mr-2 mt-[2px]"/>
                  <span className="font-sans text-[#DDDDDD] text-[8px] md:text-[14px] ">+62 856-4097-7356</span>
                </a>
                <a href="#" className="flex">
                  <img src={email} className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mr-2 mt-[2px]"/>
                  <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">consult@sagara.asia</span>
                </a>
                <a href="#" className="flex text-left">
                  <img src={location} className="w-[12px] h-[12px] md:w-[16px] md:h-[16px] mr-2 mt-[2px]"/>
                  <span className="font-sans text-[#DDDDDD] text-[9px] md:text-[14px] ">South Jakarta and Bandung, Indonesia.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#1C1C1C] shadow-none">
        <div className="container mx-auto text-center text-white py-6 px-4">
          <p>Copyright &copy; 2024 PT. Sagara Asia Teknologi</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;