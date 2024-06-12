import React from 'react';
import './UserProfile.css';

const UserName = ({ name }) => {
  return (
    <div className="user-name">
      <h2>{name}</h2>
    </div>
  );
};

export default UserName;
