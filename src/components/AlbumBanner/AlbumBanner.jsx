import './AlbumBanner.css';
import { Link, useParams } from 'react-router';
import { ALBUMS } from '../../constants';

export function AlbumBanner() {
    const { albumId } = useParams();
    const album = ALBUMS.find((a) => a.id === Number(albumId));

    return (
        <section className='album-banner' style={{ backgroundImage: `url(${album.urlCover})` }}>
            <Link
                className='album-banner-btn'
                to={'/discography'}
                style={{ '--album-color': album.color }}
            >
                &#60; Back to albums
            </Link>
            <h2 className='album-banner-title' style={{ color: album.color }}>{album.name}</h2>
            <p className='album-banner-date' style={{ color: album.color }}>Released at {album.release}</p>
        </section>
    );
}