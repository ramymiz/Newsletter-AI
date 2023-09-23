import './Header.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const PurpleButton = styled(Button)({
    backgroundColor: '#673ab7',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '16px',
    color: 'white',
    '&:hover': {
        backgroundColor: '#8561c5',
        color: 'white'
    },
    borderRadius: '30px'
})

export default function Header({ loggedIn }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/login');
    }

    const handlePreferencesClick = () => {
        navigate('/preferences');
    }

    const handleSignUpClick = () => {
        navigate('/sign-up');
    }

    return (
        <div className='Header'>
            <button className="Header-logo-button" onClick={handleLogoClick}>
                <h2>Insight.AI</h2>
            </button>
            {
                loggedIn ? 
                <button className="Header-preferences-button" onClick={handlePreferencesClick}>
                    <h4>Preferences</h4>
                </button>
                :
                <PurpleButton style={{width: '100px'}}>Sign up</PurpleButton>
            }
        </div>
    )
}