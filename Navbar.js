import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ProfileContainer from '../components/Profile/ProfileContainer';
import LeaveContainer from '../components/Leave/LeaveContainer';

import a from "../components/Profile/images/Alarm.png";
import b from"../components/Profile/images/Male User.png";
import c from"../components/Profile/images/Communicate.png";

import '../App.css';


const Navbar = () => {
  const [showProfileContainer, setShowProfileContainer] = useState(false);
  const [showLeaveContainer, setShowLeaveContainer] = useState(false);

  // eslint-disable-next-line
  const handleProfileClick = () => {
    setShowProfileContainer(!showProfileContainer);
    setShowLeaveContainer(false);
  };

  const handleLeaveClick = () => {
    setShowLeaveContainer(!showLeaveContainer);
    setShowProfileContainer(false);
  };

  return (
    <div className="navbar">
      <div className="border-2 border-[#FF858D] py-2 px-4 mx-56 my-4 rounded-full items-center">
        <ul className="flex flex-row text-[#F71735] items-center justify-around">
          <Link to=""><li>Dashboard</li></Link>
          <Link to="/hr"><li>HR</li></Link>
          <Link to="/time"><li>Time</li></Link>
          <Link to="/leave" onClick={handleLeaveClick}>Leave</Link>
          <Link to="/profile" onClick={handleProfileClick}>Profile</Link>

          <li> <img src={b} alt ='Male user' style={{height:'75%' ,width:'50%'}}></img> </li>
          <li><img src= {c} alt='communicate' style={{height:'75%' ,width:'50%'}}></img></li>
          <li><img src= {a} alt ='c' style={{height:'75%' ,width:'50%'}}></img> </li>
          {/* Add other icons */}
        </ul>
      </div>
      {showProfileContainer ? <ProfileContainer /> : null}
      <LeaveContainer show={showLeaveContainer} />
    </div>
  );
}

export default Navbar;
