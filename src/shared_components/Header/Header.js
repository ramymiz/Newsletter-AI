import './Header.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {
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
            <button className="Header-preferences-button" onClick={handlePreferencesClick}>
                <h3>Preferences</h3>
            </button>
        </div>
    )
}