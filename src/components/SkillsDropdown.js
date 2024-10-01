import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure CSS is applied for dropdown

const SkillsDropdown = ({ skills }) => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const navigate = useNavigate();

  const handleSkillChange = (event) => {
    const skill = event.target.value;
    setSelectedSkill(skill);
    if (skill) {
      navigate(`/skills/${skill}`);
    }
  };

  return (
    <div className="skills-dropdown">
      <select value={selectedSkill} onChange={handleSkillChange}>
        <option value="">Select a Skill</option>
        {skills.map((skill, index) => (
          <option key={index} value={skill}>
            {skill}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SkillsDropdown;
