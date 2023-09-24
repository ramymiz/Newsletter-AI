import './Header.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled, Avatar } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

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

export default function Header({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/login');
        setLoggedIn(false);
    }

    const handleLogout = () => {
        navigate('/login');
        setLoggedIn(false);
    }

    const handleSignUpClick = () => {
        navigate('/sign-up');
    }

    return (
        <div className='Header'>
            <button className="Header-logo-button" onClick={handleLogoClick}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Avatar style={{ margin: 8, backgroundColor: '#8A2BE2' }}>
                        <MenuBookIcon />
                    </Avatar>
                    <h2 style={{marginLeft: '6px'}}>insight</h2>
                </div>
            </button>
            {
                loggedIn ?
                    <button className="Header-preferences-button" onClick={handleLogout}>
                        <h3>Logout</h3>
                    </button>
                    :
                    <PurpleButton onClick={handleSignUpClick} style={{ width: '100px' }}>Sign up</PurpleButton>
            }
        </div>
    )
}