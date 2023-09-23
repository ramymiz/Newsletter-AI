import React from 'react';
import PurpleButton from '../../shared_components/Buttons/PurpleButton';
import { Chip, Container, Typography, Box } from '@mui/material';

const interests = {
    Student: ['Computer Science', 'Math', 'Physics', 'Biology', 'History', 'Economics', 'Psychology', 'Art', 'Music'],
    Tech: ['Software Engineer', 'Hardware Engineer', 'Algorithm Design', 'Data Science', 'Cybersecurity', 'Web Development', 'Mobile Development', 'Game Development'],
    Finance: ['Investment Banking', 'Private Equity', 'Asset Management', 'Financial Planning', 'Insurance', 'Real Estate Finance', 'Corporate Finance', 'Financial Analysis'],
    Consulting: ['Management Consulting', 'Strategy Consulting', 'IT Consulting', 'HR Consulting', 'Environmental Consulting', 'Education Consulting', 'Healthcare Consulting'],
    Healthcare: ['Nursing', 'Physician', 'Pharmacy', 'Dentistry', 'Physical Therapy', 'Occupational Therapy', 'Public Health', 'Health Administration'],
    Education: ['Teaching', 'School Administration', 'Counseling', 'Special Education', 'Curriculum Development', 'Educational Technology', 'Higher Education'],
    Legal: ['Corporate Law', 'Criminal Law', 'Family Law', 'Environmental Law', 'Intellectual Property Law', 'Labor Law', 'Immigration Law', 'Civil Rights Law'],
    Marketing: ['Digital Marketing', 'Brand Management', 'Market Research', 'Public Relations', 'Advertising', 'Content Marketing', 'SEO', 'Social Media Marketing'],
    Arts: ['Visual Arts', 'Performing Arts', 'Music', 'Film', 'Photography', 'Graphic Design', 'Fashion Design', 'Creative Writing'],
    Nonprofit: ['Community Outreach', 'Fundraising', 'Program Development', 'Volunteer Management', 'Advocacy', 'Environmental Conservation', 'Humanitarian Aid'],
    Government: ['Public Administration', 'Policy Analysis', 'Urban Planning', 'Public Safety', 'Environmental Policy', 'Economic Development', 'Legislative Affairs'],
    Entrepreneur: ['Startup Development', 'Business Planning', 'Venture Capital', 'Product Development', 'Marketing Strategy', 'Innovation', 'E-commerce'],
    Research: ['Scientific Research', 'Market Research', 'Social Science Research', 'Humanities Research', 'Medical Research', 'Environmental Research'],
    Manufacturing: ['Production Management', 'Quality Assurance', 'Supply Chain Management', 'Product Design', 'Industrial Engineering', 'Operational Excellence'],
    Agriculture: ['Crop Production', 'Livestock Management', 'Agricultural Science', 'Sustainable Agriculture', 'Agricultural Marketing', 'Agricultural Technology'],
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
        <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>Professional Interests</Typography>
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center" marginBottom={2}>
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
        <Box display="flex" justifyContent="center" width="100%" gutterTop style={{ marginTop: '10px' }}>
          <PurpleButton onClick={() => {
            // Handle the submit action here, e.g., routing to another page
          }}>
            Submit
          </PurpleButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfessionalInterests;
