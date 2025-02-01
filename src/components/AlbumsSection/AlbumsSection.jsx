import './AlbumsSection.css';
import { AlbumCard } from '../AlbumCard/AlbumCard';
import { ALBUMS } from '../../constants';
import ButtonLink from '../Button/ButtonLink';

export function AlbumsSection() {
    return (
        <section className='albums-section'>
            <h2 className='albums-section-title'>Discography</h2>
            <div className='albums-section-cards'>
                {ALBUMS.map(album => <AlbumCard key={album.id} album={album} />)}
            </div>
            <ButtonLink to={'/discography'}>View all</ButtonLink>
        </section>
    )
}