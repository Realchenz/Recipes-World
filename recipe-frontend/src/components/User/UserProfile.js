import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avatar from './Avatar';
import UserName from './UserName';
import UserEmail from './UserEmail';
import UserBio from './UserBio';

import './UserProfile.css';

const UserProfile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          // console.log('User data:', response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    alert('Logged out');
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  }


  return (
    <div className="user-profile">
      <Avatar initialAvatarUrl={user.avatarUrl} />
      <UserName name={user.name} />
      <UserEmail email={user.email} />
      <UserBio bio={user.bio} />
      <button onClick={handleLogout} className='logout-btn'>Logout</button>
    </div>
  );
};

export default UserProfile;
