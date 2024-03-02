import React from 'react';
import {Link} from 'react-router-dom';
import youngManImage from '../../components/Profile/images/young man holding laptop and pointing up.png';
import userImage from '../../components/Profile/images/user.png';
import familyImage from '../../components/Profile/images/Defend Family.png';
import employeeImage from '../../components/Profile/images/user.png'; 
import com from '../../components/Profile/images/msg.png';
import per from '../../components/Profile/images/Growth.png';
import pri from '../../components/Profile/images/Prize.png';
const ProfileContainer = () => {
  return (
    <div className="profile-container" style={{ position: 'absolute', top: '60px', left: 0, height: '500px', width: '250px' }}>
      <img src={youngManImage} alt="Young Man Holding Laptop" style={{ width: '400px', alignItems: 'center', height: '200px' }} />
      <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center' }}>
        <img src={userImage} alt="User" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <span>My Profile</span>
      </div>
      <div style={{ marginTop: '8px',display: 'inline-flex', alignItems: 'center'}}>
        <img src={familyImage} alt="Family" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
        <Link to="/familydetails"><li>Family Details</li></Link>
      </div>
      <div style={{ marginTop: '8px',display: 'inline-flex', alignItems: 'center'}}>
        <img src={employeeImage} alt="Family" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
        <span>Employee Info</span>
      </div>
      <div style={{ marginTop: '8px',display: 'inline-flex', alignItems: 'center'}}>
        <img src={com} alt="Family" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
        <span>Compensation</span>
      </div>
      <div style={{ marginTop: '8px',display: 'inline-flex', alignItems: 'center'}}>
        <img src={per} alt="Family" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
        <span>Performance</span>
      </div>
      <div style={{ marginTop: '8px',display: 'inline-flex', alignItems: 'center'}}>
        <img src={pri} alt="Family" style={{ width: '40px', height: '40px', marginRight: '20px' }} />
        <span>Rewards</span>
      </div>
    </div>
  );
}

export default ProfileContainer;
