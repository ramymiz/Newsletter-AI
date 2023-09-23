import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import RoleSelection from './RoleSelection';
import ProfessionalInterests from './ProfessionalInterests';
import PurpleButton from '../../shared_components/Buttons/PurpleButton';

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
        <Box display="flex" flexDirection="column" alignItems="center" maxWidth="60%" margin="0 auto">
          <RoleSelection selectedRoles={selectedRoles} onSelectRole={setSelectedRoles} />
          <Box display="flex" justifyContent="flex-end" width="100%">
            <PurpleButton variant="contained" color="primary" onClick={handleContinue}>
              Continue
            </PurpleButton>
          </Box>
        </Box>
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
