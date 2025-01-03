import { Banner } from '../Banner/Banner';
import { AlbumsSection } from '../AlbumsSection/AlbumsSection';
import './HomePage.css';

export function HomePage({ albums }) {
    
    return (
        <>
            <Banner />
            <AlbumsSection albums={albums} />
        </> 
    )
}