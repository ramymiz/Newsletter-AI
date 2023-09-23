import React from 'react';
import { Chip, Container, Typography, Box } from '@mui/material';

const roles = [
  'Student', 
  'Finance', 
  'Tech', 
  'Consulting', 
  'Healthcare', 
  'Education', 
  'Legal', 
  'Marketing', 
  'Arts', 
  'Nonprofit', 
  'Government', 
  'Entrepreneur', 
  'Research', 
  'Real Estate',
  'Manufacturing',
  'Agriculture',
];

const RoleSelection = ({ selectedRoles, onSelectRole }) => {
  const handleClick = (role) => {
    onSelectRole(prevRoles => 
      prevRoles.includes(role) ? prevRoles.filter(r => r !== role) : [...prevRoles, role]
    );
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" spacing={2} margin="0 auto" maxWidth="60%">
        <Typography variant="h4" gutterBottom>What area do you work in?</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
          {roles.map((role) => (
            <Chip
              key={role}
              label={role}
              clickable
              style={selectedRoles.includes(role) ? { backgroundColor: '#8561c5', color: 'white' } : {}}
              onClick={() => handleClick(role)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default RoleSelection;
