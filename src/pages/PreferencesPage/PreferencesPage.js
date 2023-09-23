import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import RoleSelection from './RoleSelection';
import ProfessionalInterests from './ProfessionalInterests';

const CustomButton = styled(Button)({
    backgroundColor: '#673ab7',
    color: 'white',
    '&:hover': {
      backgroundColor: '#8561c5' ,
      color: 'white'
    },
    borderRadius: '30px'
})

export default function PreferencesPage() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showInterests, setShowInterests] = useState(false);

  const handleContinue = () => {
    if (selectedRoles.length > 0) {
      setShowInterests(true);
    }
  };

  return (
    <div>
      {!showInterests ? (
        <>
          <RoleSelection selectedRoles={selectedRoles} onSelectRole={setSelectedRoles} />
          <CustomButton variant="contained" color="primary" onClick={handleContinue}>
            Continue
          </CustomButton>
        </>
      ) : (
        <ProfessionalInterests
          selectedRoles={selectedRoles}
          selectedInterests={selectedInterests}
          onSelectInterest={setSelectedInterests}
        />
      )}
    </div>
  );
}
