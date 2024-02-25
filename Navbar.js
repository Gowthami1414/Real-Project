 import React from 'react'
 import a from "../images/Alarm.png";
 import b from"../images/Male User.png";
 import c from"../images/Communicate.png";
 import {Link} from 'react-router-dom';
 import '../App.css';

 
 const Navbar = () => {
   return (
     <div className="navbar" >
      <div class=" border-2 border-[#FF858D] py-2 px-4 mx-56 my-4 rounded-full items-center"> 
      <ul className="flex flex-row text-[#F71735] items-clenter justify-around  ">
      <Link to="/dashboard"><li  >Dashboard</li></Link>
      <Link to="/hr"><li  >HR</li></Link>
      <Link to="/time"><li  >Time</li></Link>
      <Link to="/leave"><li  > Leave</li></Link>
      <Link to="/profile"><li  >Profile</li></Link>
      
      <li> <img src={b} alt ='Male user' style={{height:'75%' ,width:'50%'}}></img> </li>
      <li><img src= {c} alt='communicate' style={{height:'75%' ,width:'50%'}}></img></li>
      <li><img src= {a} alt ='c' style={{height:'75%' ,width:'50%'}}></img> </li></ul> 
      </div>
      </div>

   )
 }
 
 export default Navbar