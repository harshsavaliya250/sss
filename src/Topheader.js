import React from 'react'
import { FaPhoneAlt,FaEnvelope,FaLocationArrow} from "react-icons/fa";

const Topheader = () => {
  return (
    <>
    <header className='py-2'>
        <div className='container align-items-center'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-3 d-flex'>
                        <div className=''>
                            <a href='/'>
                                <img src={require('./Images/Company Image/Logo 1.png')} alt="s" style={{maxWidth:'70px'}}></img>
                            </a>
                        </div>
                        <div className='align-items-center'>
                            <a href='/'>
                                <img src={require('./Images/Company Image/Side logo 1.png')} alt="s" style={{maxWidth:'170px'}}></img>
                            </a>    
                        </div>
                </div>
                <div className='col-7 d-flex justify-content-between'>
                    <div className=''>
                        <a className='icon'>
                            <FaPhoneAlt/> 
                            <span className='info-text'>+ 91 8652369412</span>
                       </a>
                    </div>
                    <div className=''>
                        <a className='icon'>
                            <FaEnvelope/>
                            <span className='info-text'> shreesaisurgical2@gmail.com</span>
                       </a>
                    </div>
                    <div className=''>
                        <a className='icon'>
                            <FaLocationArrow/>
                            <span className='info-text'> Store Location</span>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <hr className='m-0'></hr>
    </>
  )
}

export default Topheader