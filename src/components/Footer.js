import React from 'react';
import logo from '../assets/images/HCAHouston-FC-Logo.svg';
import fb from '../assets/images/fb.svg';
import insta from '../assets/images/insta.svg';
import twitter from '../assets/images/twitter.svg';

const Footer = ()=> {

    const footerItems = [
        'Notice of Privacy Practices',
        'Terms & Conditions',
        'Notice at Collection',
        'Privacy Policy',
        'Do Not Sell My Personal Information Social Media Policy.',
        'Acceptable Use Policy',
        'HCA Nondiscrimination Notice',
        'Accessibility.',
        'Responsible Disclosure'
      ];

    return(
        <>
        <footer>
            <div className='container'>
                <section className='footerTop'>
                    <div className='footerTopLeft'>
                    <img src={logo} alt="HCA Houston Healthcare" width={200} />
                        <div className='address'>
                            <div>HCA Houston Healthcare</div>
                            <div>3737 Buffalo Speedway</div>
                            <div>Suite 1400</div>
                            <div>Houston, TX 77098</div>
                        </div>    
                    </div>
                    <div className='footerTopMid'>
                        <div>About Us</div>
                        <ul>
                            <li><a href='#'>About HCA Houston</a></li>
                            <li><a href='#'>Phone Directory</a></li>
                            <li><a href='#'>Maps & Directions</a></li>
                            <li><a href='#'>Media Center</a></li>
                            <li><a href='#'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='footerTopRight'>
                        <div>Follow Us</div>
                        <ul className='social-icons'>
                            <li><a href='#' aria-label="Follow us on Facebook"><img src={fb} alt="HCA Houston Healthcare" /></a></li>
                            <li><a href='#' aria-label="Follow us on Instagram"><img src={insta} alt="HCA Houston Healthcare" /></a></li>
                            <li><a href='#' aria-label="Follow us on Twitter"><img src={twitter} alt="HCA Houston Healthcare" /></a></li>
                        </ul>
                    </div>
                </section>
            </div>    
                <section className='footerBottom'>
                    <div className='container footerBottomInner'>
                        <div className='footerBottomleft'>
                            Copyright 1999-2021&nbsp; 
                            <span>C-HCA Inc</span>
                            ; All rights reserved.
                        </div>
                        <div className='footerBottomRight'>
                            {footerItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <span className='footerBotRightCont'>&nbsp;{item}&nbsp;</span>
                                    {index < footerItems.length - 1 && <span className='footerVerticalBar'>|</span>}
                                </React.Fragment>
                            ))}
                            </div>
                    </div>
                </section>
        </footer>
        </>
    )
}

export default Footer;