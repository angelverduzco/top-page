import { Banner } from '../Banner/Banner';
import { AlbumsSection } from '../AlbumsSection/AlbumsSection';
import { BandSection } from '../BandSection/BandSection';
import './HomePage.css';

export function HomePage({ albums }) {
    
    return (
        <>
            <Banner />
            <BandSection />
            <AlbumsSection albums={albums} />
        </> 
    )
}