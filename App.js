import React from'react';
import Navbar from "./components/Navbar";
import{BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ProfileContainer />
        <div className="content-container"></div>
        <Navbar />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/profile" component={ProfileContainer} /> {/* Define the route for the profile page */}
          {/* Add routes for other components/pages here */}
      </div>
    </Router>
  );
};

export default App;