import './AlbumsSection.css';
import { AlbumCard } from '../AlbumCard/AlbumCard';

export function AlbumsSection({ albums }) {
    return (
        <section className='albums-section'>
            <h2 className='albums-section-title'>Discography</h2>
            <div className='albums-section-cards'>
                {albums.map(album => <AlbumCard key={album.id} album={album} />)}
            </div>
        </section>
    )
}