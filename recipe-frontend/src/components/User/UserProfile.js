import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Avatar from './Avatar';
import UserName from './UserName';
import UserEmail from './UserEmail';
import UserBio from './UserBio';

import './UserProfile.css';



const UserProfile = () => {
  const [user, setUser] = useState({
    username: '',
    avatarUrl: '',
    name: '',
    email: '',
    bio: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/api/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      <Avatar avatarUrl={user.avatarUrl} />
      <UserName name={user.name} />
      <UserEmail email={user.email} />
      <UserBio bio={user.bio} />
    </div>
  );
};

export default UserProfile;
