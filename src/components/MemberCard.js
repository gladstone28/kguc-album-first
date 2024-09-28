import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const MemberCard = ({ member }) => {
  return (
    <div className="member-card">
      <Link to={`/member/${member.id}`}>
        <img src={member.profilePicture} alt={member.name} className="profile-pic" />
        <h3>{member.name}</h3>
      </Link>
    </div>
  );
};

export default MemberCard;
