import './AlbumCard.css';

export function AlbumCard({ album }) {

    return (
        <div className='album-card' style={{backgroundColor: album.color}}>
            <img className='album-card-img' src={album.urlCover} alt={`${album.name}'s cover`} />
            <h3 className='album-card-name'>{album.name}</h3>
            <p className='album-card-release'>{ album.release }</p>
        </div>
    )
}