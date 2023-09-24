import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const FeedbackButtons = () => {
  const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);

  const handleThumbsUp = () => {
    // Toggle thumbs up state
    setThumbsUpSelected(!thumbsUpSelected);
    // If thumbs down is selected, deselect it
    if (thumbsDownSelected) setThumbsDownSelected(false);
  };

  const handleThumbsDown = () => {
    // Toggle thumbs down state
    setThumbsDownSelected(!thumbsDownSelected);
    // If thumbs up is selected, deselect it
    if (thumbsUpSelected) setThumbsUpSelected(false);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box>
        <Button 
          onClick={handleThumbsUp} 
          style = {{ 
            color: thumbsUpSelected ? '#66BB6A' : '#66BB6A', // Softer off-white and green
            backgroundColor: thumbsUpSelected ? '#363C39' : 'transparent', 
            marginRight: '10px'}}
        >
          <ThumbUpIcon />
        </Button>
        <Button 
          onClick={handleThumbsDown} 
          style={{ 
            color: thumbsDownSelected ? '#CC6666' : '#CC6666', // Softer off-white and red
            backgroundColor: thumbsDownSelected ? '#363C39' : 'transparent'}}
        >
          <ThumbDownIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default FeedbackButtons;
