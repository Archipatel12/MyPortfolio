import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'P P SAVANI UNIVERSITY',
      degree: 'Bachelor of Science in Computer Engineering',
      year: '2021 - 2025',
      CGPA: '8.45'
    },
    
    // Add more education items here
  ];

  return (
    <div className="education-page">
      <h1>Education</h1>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <h2>{item.institution}</h2>
            <p className="degree">{item.degree}</p>
            <p className="year">{item.year}</p>
            
            <p className="CGPA" >CGPA : {item.CGPA}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
