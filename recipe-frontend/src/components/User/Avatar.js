import React from 'react';
import './UserProfile.css';

const Avatar = ({ avatarUrl }) => {
  return (
    <div className="avatar">
      <img src={avatarUrl} alt="User Avatar" />
    </div>
  );
};

export default Avatar;
