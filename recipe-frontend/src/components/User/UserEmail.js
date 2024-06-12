import React from 'react';
import './UserProfile.css';

const UserEmail = ({ email }) => {
  return (
    <div className="user-email">
      <p>{email}</p>
    </div>
  );
};

export default UserEmail;
