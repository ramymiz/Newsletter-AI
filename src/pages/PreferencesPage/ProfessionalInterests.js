import React from 'react';
import { Chip, Container, Typography, Box } from '@mui/material';

const interests = {
  Student: ['Computer Science', 'Math', 'Physics'],
  Tech: ['Software Engineer', 'Hardware Engineer', 'Algorithm Design'],
  Finance: ['Investment Banking', 'Private Equity'],
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
      <Box display="flex" flexDirection="column" alignItems="center" spacing={2} margin="0 auto" maxWidth="60%">
        <Typography variant="h4" gutterBottom>Professional Interests</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
          {availableInterests.map((interest) => (
            <Chip
              key={interest}
              label={interest}
              clickable
              style={selectedInterests.includes(interest) ? { backgroundColor: '#8561c5', color: 'white' } : {}}
              onClick={() => handleClick(interest)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProfessionalInterests;
