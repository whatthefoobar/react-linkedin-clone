import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';

const Sidebar = () => {
  // get user from redux store to showcase who is logged in here
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="background"
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        {/* if no picture use the first character of the email */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,973</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3,478</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('test')}
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
      </div>
    </div>
  );
};

export default Sidebar;
