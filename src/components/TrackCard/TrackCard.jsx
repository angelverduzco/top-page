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
                <a className="track-card-link" href={track.spotify}>
                    <FontAwesomeIcon
                        className="track-card-icon"
                        icon={faSpotify}
                        size="lg"
                    />
                </a>
                {track.appleMusic ? (
                    <a className="track-card-link" href={track.appleMusic}>
                        <FontAwesomeIcon
                            className="track-card-icon"
                            icon={faApple}
                            size="lg"
                        />
                    </a>
                ) : null}
                <span className="track-card-duration">{track.duration}</span>
            </div>
        </div>
    );
}
