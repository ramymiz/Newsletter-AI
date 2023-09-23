// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Your existing primary color
    },
    loginButton: {
      main: '#8A2BE2', // Your custom login button color
    },
  },
  // Add other theme configurations as needed
});

export default theme;
