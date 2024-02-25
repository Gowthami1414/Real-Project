import React from'react';
import Navbar from "./components/Navbar";
import{BrowserRouter as Router,Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Profile from  "./components/Profile";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          {/* Add routes for other components/pages here */}
      </div>
    </Router>
  );
};

export default App;