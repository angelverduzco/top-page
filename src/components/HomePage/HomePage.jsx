import { Banner } from '../Banner/Banner';
import { AlbumsSection } from '../AlbumsSection/AlbumsSection';
import { BandSection } from '../BandSection/BandSection';
import { MembersSection } from '../MembersSection/MembersSection';
import './HomePage.css';

export function HomePage() {
    
    return (
        <>
            <main>
                <Banner />
                <BandSection />
                <MembersSection />
                <AlbumsSection />
            </main>
        </> 
    )
}