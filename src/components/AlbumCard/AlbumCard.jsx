import { Link } from "react-router";
import "./AlbumCard.css";

export function AlbumCard({ album, route }) {
    return (
        <Link
            to={`/discography/${route}/${album.id}`}
            className="album-card"
            style={{ backgroundColor: album.color }}
        >
            <img
                className="album-card-img"
                src={album.cover}
                alt={`${album.name}'s cover`}
            />
            <h3 className="album-card-name">{album.name}</h3>
            <p className="album-card-release">{album.release}</p>
        </Link>
    );
}
