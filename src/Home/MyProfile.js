import React, { useState, useRef, useEffect } from 'react';
import './MyProfile.css';
import Favorites from './Favorites';
import { AiOutlinePlus } from 'react-icons/ai';

function MyProfile() {
  const [image, setImage] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    const savedImageUrl = localStorage.getItem('profileImage');
    const isFileSelected = localStorage.getItem('isFileSelected') === 'true';

    if (savedImageUrl) {
      setImage(savedImageUrl);
    }

    if (isFileSelected) {
      setIsFileSelected(true);
    }
    if (!savedImageUrl) {
      setIsFileSelected(false);
    } else {
      setIsFileSelected(isFileSelected);
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
      localStorage.setItem('profileImage', imageUrl);
      setIsFileSelected(true);
      localStorage.setItem('isFileSelected', 'true');
    }
  };

  const handleClickChooseFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="user-profile">
    <h2>Profiles</h2>
      <div className="profile-picture">
        <img src={image} alt="Profile" />
      </div>
      <div className="profile-content">
        <button
          className="choose-file-button"
          onClick={handleClickChooseFile}
          disabled={isFileSelected}
        >
          {isFileSelected ? 'Profile Updated !' : 'Choose Profile'}
        </button>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <div className="add-profile-container" onClick={handleClickChooseFile}>
          <div className="add-profile-icon">
            <AiOutlinePlus />
          </div>
        </div>
      </div>

      <Favorites />
    </div>
  );
}

export default MyProfile;