import React from 'react';
import youngManImage from '../images/young man holding laptop and pointing up.png';
import userImage from '../images/user.png';
import familyImage from '../images/Defend Family.png';
import employeeImage from '../images/user.png'; 
import com from '../images/msg.png';
import per from '../images/Growth.png';
import pri from '../images/Prize.png'; // Import user image
import { Link } from 'react-router-dom';
import { Layout } from 'antd'; // Import Layout component from Ant Design

const ProfileContainer = ({ onClick }) => {
  // Set container size directly using inline styles
  const containerStyle = {
    width: '299px',
    height: '500px',
    position: 'fixed',
    top: '60px', // Adjust according to your navbar height
    left: '0',
    zIndex: 10,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  };

  return (
    <Layout.Header style={containerStyle}>
      {/* Profile container content */}
      <div className="profile-container px-4 py-4">
        <img src={youngManImage} alt="Young Man" />
        <div className="profile-details flex items-center"> {/* Added flexbox for alignment */}
          <img src={userImage} alt="User" className="mr-2 rounded-full w-8 h-8" /> {/* Added image styles */}
          <Link to="/my-profile" className="block mb-2"> My Profile </Link>
        </div>
        <hr className="my-2" /> {/* Added margin for horizontal line */}
        <div className="profile-links">
          <div className="flex items-center mb-2"> {/* Group Family Details link and image */}
            <img src={familyImage} alt="Family" className="mr-2 rounded-full w-8 h-8" />
            <Link to="/family-details" className="block"> Family Details </Link>
          </div>
          <Link to="/employee-info" className="block mb-2">
            <div className="flex items-center"> {/* Group Employee Info link and image */}
              <img src={employeeImage} alt="Employee" className="mr-2 rounded-full w-8 h-8" />
              Employee Info
            </div>
          </Link>
          <Link to="/compensation" className="block mb-2">
            <div className="flex items-center"> {/* Group Employee Info link and image */}
              <img src={com} alt="compensation" className="mr-2 rounded-full w-8 h-8" />
             Compensation
            </div>
          </Link>
          <Link to="/performance" className="block mb-2"> 
            <div className="flex items-center"> {/* Group Employee Info link and image */}
              <img src={per} alt="compensation" className="mr-2 rounded-full w-8 h-8" />
          Performance 
            </div>
          </Link>
          <Link to="/rewards" className="block mb-2">
            <div className="flex items-center"> {/* Group Employee Info link and image */}
              <img src={pri} alt="compensation" className="mr-2 rounded-full w-8 h-8" />
             Rewards 
             </div>
          </Link>
        </div>
      </div>
    </Layout.Header>
  );
};

export default ProfileContainer;
