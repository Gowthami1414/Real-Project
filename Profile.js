import React, { useState } from 'react';
import {Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import ProfileContainer from './ProfileContainer';
import UserDetails from './UserDetails';
// Import other pages here

const Profile = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  let { path, url } = useRouteMatch();

  return (
    <div className="profile">
      <ProfileContainer onClick={toggleDetails} />

      {showDetails && (
        <div
          className="profile-details-container"
          style={{
            width: '374px',
            height: '854.34px',
            position: 'absolute',
            left: 0,
            top: '60px',
            zIndex: 1,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: '20px',
          }}
        >
          <ProfileContainer />
          <div className="profile-options">
          <ul>
              <li><Link to={`${url}/user`}>My Profile</Link></li>
            
              {/* Add other profile options here */}
            </ul>
          </div>
          <div className="profile-content">
            <Switch>
              <Route exact path={path}><h3>Select an option from the sidebar</h3></Route>
              <Route path={`${path}/user`} component={UserDetails} />
              {/* Add routes for other profile options here */}
            </Switch>
          </div>
        </div>
      )}

      <div className="profile-content">
        <Switch>
          {/* ... same as before */}
        </Switch>
      </div>
    </div>
  );
};

export default Profile;