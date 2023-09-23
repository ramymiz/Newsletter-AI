import React from 'react';
import { Chip, Container, Typography } from '@mui/material';

const interests = {
  Student: ['Computer Science', 'Math', 'Physics'],
  Tech: ['Software Engineer', 'Hardware Engineer', 'Algorithm Design'],
  Finance: ['Investment Banking', 'Private Equity'],
  Consulting: ['Mangement Consulting', 'Tech Consulting', 'Sustainability Consulting']
};

const ProfessionalInterests = ({ selectedRoles, selectedInterests, onSelectInterest }) => {
  const availableInterests = selectedRoles.flatMap(role => interests[role] || []);
  const handleClick = (interest) => {
    onSelectInterest(prevInterests => 
      prevInterests.includes(interest) ? prevInterests.filter(i => i !== interest) : [...prevInterests, interest]
    );
  };

  return (
    <Container>
      <Typography variant="h4">Professional Interests</Typography>
      <div>
        {availableInterests.map((interest) => (
          <Chip
            key={interest}
            label={interest}
            clickable
            color={selectedInterests.includes(interest) ? 'primary' : 'default'}
            onClick={() => handleClick(interest)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProfessionalInterests;