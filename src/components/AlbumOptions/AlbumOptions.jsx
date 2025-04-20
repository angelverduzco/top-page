import "./AlbumOptions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple } from "@fortawesome/free-brands-svg-icons";

export function AlbumOptions({ album }) {
    return (
        <aside className="album-options">
            <img
                className="album-options-img"
                src={album.cover}
                alt={`${album.name} cover`}
            />
            <a
                className="btn-spotify"
                href={album.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon
                    className="btn-icon"
                    icon={faSpotify}
                ></FontAwesomeIcon>
                Listen on Spotify
            </a>
            {album.links.appleMusic !== "" ? (
                <a
                    className="btn-apple"
                    href={album.links.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        className="btn-icon"
                        icon={faApple}
                    ></FontAwesomeIcon>
                    Listen on Apple Music
                </a>
            ) : null}
        </aside>
    );
}
