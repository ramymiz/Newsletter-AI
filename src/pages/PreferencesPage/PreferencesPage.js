import React, { useState } from 'react';
import { Button } from '@mui/material';
import RoleSelection from './RoleSelection';
import ProfessionalInterests from './ProfessionalInterests';

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
          <Button variant="contained" color="primary" onClick={handleContinue}>
            Continue
          </Button>
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
