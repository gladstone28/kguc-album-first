import React from 'react';
import members from './membersData';
import MemberCard from './components/MemberCard';

function MemberList() {
  return (
    <div className="member-list">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default MemberList;
