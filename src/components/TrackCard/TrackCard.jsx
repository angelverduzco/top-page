import "./TrackCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple } from "@fortawesome/free-brands-svg-icons";

export function TrackCard({ track }) {
    return (
        <div className="track-card">
            <div className="track-card-info">
                <span className="track-card-number">{track.id}</span>
                <h3 className="track-card-title">{track.title}</h3>
            </div>
            <div>
                {track.links.spotify && (
                    <a
                        className="track-card-link"
                        href={track.links.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="track-card-icon"
                            icon={faSpotify}
                            size="lg"
                        />
                    </a>
                )}
                {track.links.appleMusic && (
                    <a
                        className="track-card-link"
                        href={track.links.appleMusic}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="track-card-icon"
                            icon={faApple}
                            size="lg"
                        />
                    </a>
                )}
                <span className="track-card-duration">{track.duration}</span>
            </div>
        </div>
    );
}
