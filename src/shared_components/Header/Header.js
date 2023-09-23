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
                <button className="Header-signup-button" onClick={handleSignUpClick}>
                    <p className="Header-signup-button-content">Sign up</p>
                </button>
            }
        </div>
    )
}