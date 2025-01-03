import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>Made by: Angel Verduzco</p>
            <div className='footer-links'>
                <a className='footer-link' href=""><FontAwesomeIcon className='footer-icon' icon={faGithub} style={{color: '#000000'}} /></a>
                <a className='footer-link' href=""><FontAwesomeIcon className='footer-icon' icon={faLinkedin} style={{color: '#000000'}}/></a>
            </div>
        </footer>
    )
}