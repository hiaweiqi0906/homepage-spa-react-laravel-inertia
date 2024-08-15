import React, { useState } from 'react';
import './index.css';
import { LogOutIcon } from '@images';

const Topbar = ({ userPersonalData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="topbar">
      <div className="logo">
        {/* We can put the logo here in the future */}
      </div>
      <div className="nav-links">
        {/* We can put some links here in the future */}
      </div>
      <div className="profile-section" onClick={toggleDropdown}>
        <img src={userPersonalData.profile_picture_url} alt="Profile" className="profile-pic" />
        <span className="username">{userPersonalData.name}</span>
        
        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <div style={{ display: 'flex', flexDirection: "row", borderBottom: '1px solid #D0D2D6', gap: '16px', paddingBottom: '12px' }}>
            <img src={userPersonalData.profile_picture_url} alt="" style={{ borderRadius: '50%', width: '48px', height: "48px" }} />
            <div>
              <p className='name'>{userPersonalData.name}</p>
              <p className='description'>Recipient</p>
            </div>
          </div>
          <a href="/login" style={{ padding: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <img src={LogOutIcon} />
              Logout
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;