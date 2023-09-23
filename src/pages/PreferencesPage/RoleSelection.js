import React from 'react';
import { Chip, Container, Typography } from '@mui/material';

const roles = ['Student', 'Finance', 'Tech', 'Consulting'];

const RoleSelection = ({ selectedRoles, onSelectRole }) => {
  const handleClick = (role) => {
    onSelectRole(prevRoles => 
      prevRoles.includes(role) ? prevRoles.filter(r => r !== role) : [...prevRoles, role]
    );
  };

  return (
    <Container>
      <Typography variant="h4">What is your role?</Typography>
      <div>
        {roles.map((role) => (
          <Chip
            key={role}
            label={role}
            clickable
            color={selectedRoles.includes(role) ? 'primary' : 'default'}
            onClick={() => handleClick(role)}
          />
        ))}
      </div>
    </Container>
  );
};

export default RoleSelection;