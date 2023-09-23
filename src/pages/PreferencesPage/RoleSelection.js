import React from 'react';
import { Chip, Container, Typography, Box } from '@mui/material';

const roles = ['Student', 'Finance', 'Tech', 'Consulting'];

const RoleSelection = ({ selectedRoles, onSelectRole }) => {
  const handleClick = (role) => {
    onSelectRole(prevRoles => 
      prevRoles.includes(role) ? prevRoles.filter(r => r !== role) : [...prevRoles, role]
    );
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" spacing={2} margin="0 auto" maxWidth="60%">
        <Typography variant="h4" gutterBottom>What is your role?</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
          {roles.map((role) => (
            <Chip
              key={role}
              label={role}
              clickable
              color={selectedRoles.includes(role) ? 'primary' : 'default'}
              onClick={() => handleClick(role)}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default RoleSelection;
