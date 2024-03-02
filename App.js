import React from'react';
import Navbar from "./components/Navbar";
import{BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProfileContainer from './components/Profile/ProfileContainer';
import ProfileForm from './components/Profile/ProfileForm';





const App = () => {
  return (
    <div className='bg-[#E3F2FD]'>
    <Router className='bg-[#E3F2FD]'>
      <div className="app-container">
        <div className="left-container">  
  
        </div>
        <div className='bg-[#E3F2FD]'></div>
          <Navbar />
          <Route path="/Dashboard" component={Dashboard} className='bg-[#E3F2FD]'/>
          <Route path="/profile" component={ProfileContainer} className='bg-[#E3F2FD]' />
          <Route path="/ProfileForm" component={ProfileForm} className='bg-[#E3F2FD]'/>
           {/* Define the route for the profile page */}
          {/* Add routes for other components/pages here */}
      </div>
    </Router>
    </div>
  );
};

export default App;
