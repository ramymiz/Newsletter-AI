import './Header.css';
import { useNavigate, useOutletContext } from 'react-router-dom';


export default function Header({ loggedIn }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/login');
    }

    const handlePreferencesClick = () => {
        navigate('/preferences');
    }

    return (
        <div className='Header'>
            <button className="Header-logo-button" onClick={handleLogoClick}>
                <h2>News AI</h2>
            </button>
            {
                loggedIn ? 
                <button className="Header-preferences-button" onClick={handlePreferencesClick}>
                    <h3>Preferences</h3>
                </button>
                :
                <button className="Header-signup-button">
                    <h3>Sign up</h3>
                </button>
            }
        </div>
    )
}