import React from 'react';
import { Link } from 'react-router-dom';
import members from './membersData';

function MemberList() {
  return (
    <div className="member-list">
      {members.map((member) => (
        <Link to={`/member/${member.id}`} key={member.id} className="member-item">
          <img src={member.profilePicture} alt={member.name} className="profile-pic" />
          <h3>{member.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default MemberList;

