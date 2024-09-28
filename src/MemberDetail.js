import React from 'react';
import { useParams } from 'react-router-dom';
import members from './membersData'; // Sample members data

function MemberDetail() {
  const { id } = useParams();
  const member = members.find(member => member.id === parseInt(id));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="member-detail">
      <img src={member.profilePicture} alt={member.name} className="large-profile-pic" />
      <h2>{member.name}</h2>
      <p>{member.description}</p>
    </div>
  );
}

export default MemberDetail;
