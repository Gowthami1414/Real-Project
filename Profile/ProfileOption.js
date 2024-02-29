import React from 'react';

const ProfileOption = ({ option, isActive, onClick }) => {
  return (
    <li className={`profile-option ${isActive ? 'active' : ''}`} onClick={onClick}>
      {option}
    </li>
  );
};

export default ProfileOption;
