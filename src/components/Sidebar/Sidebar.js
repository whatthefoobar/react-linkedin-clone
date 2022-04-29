import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Jane Doe</h2>
        <h4>jane.doe@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat"></div>
        <div className="sidebar__stat"></div>
      </div>
    </div>
  );
};

export default Sidebar;
