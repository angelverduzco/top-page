import './ButtonLink.css';
import { Link } from 'react-router';

export default function Button({ children, to }) { 
    return (
        <Link to={to} className='button'>{ children }</Link>
    )
}