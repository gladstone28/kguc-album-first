import React from 'react';
import { useParams } from 'react-router-dom';
import members from './membersData';
import MemberCard from './components/MemberCard';

function FilteredMembersList() {
  const { skill } = useParams();

  // Filter members who have the selected skill
  const filteredMembers = members.filter((member) =>
    member.skills.includes(skill)
  );

  return (
    <div className="filtered-members-list">
      <h2>Members with the skill: {skill}</h2>
      {filteredMembers.length > 0 ? (
        <div className="member-list">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p>No members found with this skill.</p>
      )}
    </div>
  );
}

export default FilteredMembersList;
