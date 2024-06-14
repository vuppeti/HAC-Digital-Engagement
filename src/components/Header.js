import React, { useState } from 'react';
import logo from '../assets/images/HCAHouston-FC-Logo-white.svg';
import home from '../assets/images/home.svg';
import calendar from '../assets/images/calendar.svg';
import alert from '../assets/images/alert.svg';
import searchIcon from '../assets/images/searchicon.png';
import search from '../assets/images/search.svg';
import searchButton from '../assets/images/searchbar.svg';
import clockIcon from '../assets/images/clock-icon.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <section className='headerTop'>
          <div>
            <img src={logo} alt="HCA Houston Healthcare" width={200} />
          </div>
          <button 
            className="hamburger" 
            onClick={toggleMenu} 
            aria-expanded={isOpen} /* Added aria-expanded */
            aria-controls="primary-navigation" /* Added aria-controls */
            aria-label="Toggle navigation" /* Added aria-label */
          >
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
            <span className={`line ${isOpen ? 'open' : ''}`}></span>
          </button>
          
              <ul className={isOpen ? 'open' : ''} role="menu">
                <li role="menuitem"><a><img src={home} alt="HCA Houston Healthcare" width={20} /></a></li>
                <li role="menuitem"><a>My Health Resources</a></li>
                <li role="menuitem"><a>Specialities</a></li>
                <li role="menuitem"><a>Location</a></li>
                <li role="menuitem"><a>Patients & Vistors</a></li>
                <li role="menuitem"><a>Careers</a></li>
                <li role="menuitem"><a>About US</a></li>
                <li role="menuitem"><a>Find A Doctor</a></li>
                <li role="menuitem"><a>Manage Your Account</a></li>
                <li role="menuitem"><a>MyHealthONE</a></li>
                <li role="menuitem" id='moreItems'><a>...</a></li>
                <li role="search">
                  <input type='text' aria-label="Search" placeholder='Search' style={{ backgroundImage: `url(${search})` }}></input>
                </li>
              </ul>
          
        </section>
        <section className='headerBottom'>
          <div className='headerBottomLeft'>
            <img src={clockIcon} alt="HCA Houston Healthcare" width={15}></img>
            View All ER Wait Times
          </div>
          <div className='headerBottomRight'>
            <button><img src={calendar} alt="HCA Houston Healthcare" width={15} /> Make an appointment</button>
            <button><img src={alert} alt="HCA Houston Healthcare" width={15} /> Alerts<span id='alertCount'>2</span></button>
          </div>
        </section>
      </header>
      <section className='searchSection'>
        <div className='searchSectionDiv container'>
          <div className='searchLeftAligned'>
            <div>Find Care</div>
            <div className='searchContainer'>
              <input type='text' placeholder='What are you looking for?' aria-label="Search Care" ></input>
              <button className="searchButton" aria-label="Search">
                <img src={searchButton} width={15} alt="Search"></img>
              </button>
            </div>
          </div>
          <div>Need help? We're here.</div>
        </div>
      </section>
    </>
  );
};

export default Header;

