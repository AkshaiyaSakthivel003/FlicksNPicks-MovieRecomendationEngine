import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { title: 'USER PROFILES', link: '/user-profiles' },
    { title: 'USER REVIEW', link: '/user-review' },
    { title: 'PRIMARY RELEASES', link: '/crudhome' },
    { title: 'DESI PICKS', link: '/crudhome2' },
    { title: 'KIDS CORNER', link: '/crudhome3' },
  ];

  const sidebarRef = useRef();
  const navigate = useNavigate(); 

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', closeSidebarOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeSidebarOnOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="sidebar-content" ref={sidebarRef}>
        <h2>Flicks & Picks</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className="sidebar-item" onClick={() => navigate(item.link)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
