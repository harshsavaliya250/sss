import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleRight,
  FaWhatsapp,
} from "react-icons/fa";
import { TbMinusVertical, TbCopyright } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="spacer-b bg-dark">
        <div className="p-4">
          <div className="container">
            <div className="row align-items-center">
              <div className=" col-3 d-flex align-items-center">
                <div className="logo">
                  <a>
                    <img
                      src={require("./Images/Company Image/Logo 1.png")}
                      width={"100px"}
                    ></img>
                  </a>
                </div>
                {/* <div className='logo'>
                <a><img src={require('./Images/Company Image/Side logo 1.png')} width={'220px'}></img></a>
            </div> */}
              </div>
              <form className="col-6">
                <div className="d-flex">
                  <div className="submit">
                    <input
                      type="email"
                      required="required"
                      placeholder="Your Email address"
                    ></input>
                  </div>
                  <div>
                    <button type="submit" className="submit-butn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div className="col-3 d-flex fs-2">
                <div className="col text-end whatsapp">
                  <a href="https://wa.me/8828380900" className="social_icon" target='_blank'>
                    <FaWhatsapp className="text-light overflow-hidden"/>
                  </a>
                </div>
                <div className="col text-end facebook">
                  <a href="https://www.facebook.com/shreesaisurgical" className="social_icon" target='_blank'>
                    <FaFacebookF />
                  </a>
                </div>
                <div className="col text-end instagram p-0">
                  <a href="https://www.instagram.com/shreesaisurgical/" className="social_icon" target='_blank'>
                    <FaInstagramSquare />
                  </a>
                </div>
              </div>
            </div>
            <hr className="text-light"></hr>
            <div className="row bg-dark text-light mt-5 mb-5 fields">
              <div className="col-3 filds-1   ">
                <h5 className="mb-4">Contect Us</h5>
                <a className="d-flex mb-3 text-light">
                  <div className="me-3">
                    <FaHome />
                  </div>
                  <div>
                    1A,Ratna kunj apt, C S road, Near Sanji hotel,Daishar
                    (E),mumbai,68.
                  </div>
                </a>
                <a className="d-flex mb-3 text-light">
                  <div className="me-3">
                    <FaPhoneAlt />
                  </div>
                  <div>+91 8652369412</div>
                </a>
                <a className="d-flex text-light">
                  <div className="me-3">
                    <FaEnvelope />
                  </div>
                  <div>shreesaisurgical2@Gmail.Com</div>
                </a>
              </div>
              <div className="col-3">
                <h5 className="mb-4">Help</h5>
                <ul className="m-0 p-0">
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Search
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Help
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Information
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Shipping Details
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h5 className="mb-4">Support</h5>
                <ul className="m-0 p-0">
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Contect Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Refunds & Returns
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Deliveries
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3">
                <h5 className="mb-4">information</h5>
                <ul className="m-0 p-0">
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Advanced Search
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Search Terms
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Help & faq's
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Store location
                    </a>
                  </li>
                  <li className="mb-2">
                    <a>
                      <FaAngleRight />
                      Orders & Returns
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="text-light"></hr>
            <div className="text-center text-light align-items-center">
              <a>
                Search <TbMinusVertical />
              </a>
              <a>
                Help <TbMinusVertical />
              </a>
              <a>
                Information <TbMinusVertical />
              </a>
              <a>Shipping Details</a>
            </div>
          </div>
        </div>
        <div className="copy_write">
        <div className="container">
          <div className="row text-aligns-center">
            <div className="col-6">
              <p className="pt-4">
                <TbCopyright /> 2022 Sri Sai Surgical
              </p>
            </div>
            <div className="col-6 d-flex align-items-center">
               <div className="col text-end">
                  <a href="#"><img src={require('./Images/asset 26.png')}></img></a>
                </div>  
               <div className="col text-end">
                  <a href="#"><img src={require('./Images/asset 27.png')}></img></a>
                </div>  
               <div className="col text-end">
                  <a href="#"><img src={require('./Images/asset 29.png')}></img></a>
                </div>  
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
