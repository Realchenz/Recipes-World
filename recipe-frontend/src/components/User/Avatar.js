import React, { useState, useEffect, useRef } from 'react';
import './UserProfile.css';
import Modal from './Modal';

const Avatar = ({ initialAvatarUrl }) => {
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    setAvatarUrl(initialAvatarUrl);
  }
  , [initialAvatarUrl]);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const urlInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log('File uploaded:', file);
    }else{
      console.log('URL submitted:', avatarUrl);
      setAvatarUrl(urlInputRef.current.value);
    }
  };

  return (
    <div className="avatar">
      <img src={avatarUrl} alt="User Avatar" />
      <button onClick={() => setShowModal(true) } class="avatar-btn">Edit Avatar</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form onSubmit={handleSubmit} className="input-group">
          <label htmlFor="avatarUrl">Avatar URL:</label>
          <input
            type="text"
            id="avatarUrl"
            ref={urlInputRef}
            placeholder="Enter image URL"
          />
          <label htmlFor="avatarFile">Upload Image:</label>
          <input
            type="file"
            id="avatarFile"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button type="submit">Update Avatar</button>
        </form>
      </Modal>
    </div>
  );
};

export default Avatar;
