import React from 'react';
import './UserProfile.css';

const UserBio = ({ bio }) => {
  return (
    <div className="user-bio">
      <p>{bio}</p>
    </div>
  );
};

export default UserBio;
