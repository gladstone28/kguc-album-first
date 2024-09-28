import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import members from './membersData';
import Button from './components/Button';

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the current member based on the id from URL params
  const memberId = parseInt(id);
  const member = members.find((m) => m.id === memberId);
  
  if (!member) {
    return <div>Member not found</div>;
  }
  
  // Calculate previous and next member IDs
  const currentIndex = members.findIndex((m) => m.id === memberId);
  const prevMemberId = currentIndex > 0 ? members[currentIndex - 1].id : null;
  const nextMemberId = currentIndex < members.length - 1 ? members[currentIndex + 1].id : null;

  return (
    <div className="member-detail">
      <img src={member.profilePicture} alt={member.name} className="large-profile-pic" />
      <h2>{member.name}</h2>
      <p>{member.description}</p>
      
      <div className="navigation-buttons">
        {prevMemberId && (
          <Button label="Previous" onClick={() => navigate(`/member/${prevMemberId}`)} />
        )}
        {nextMemberId && (
          <Button label="Next" onClick={() => navigate(`/member/${nextMemberId}`)} />
        )}
      </div>
    </div>
  );
}

export default MemberDetail;
