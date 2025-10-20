import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMusic,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./ConcertCard.css";

export default function ConcertCard({ concert }) {
  return (
    <div className="concert-card">
      <div className="concert-card-info">
        <span className="concert-card-date">
          <FontAwesomeIcon
            className="concert-card-icon"
            icon={faCalendar}
            color="#cb5252"
          />
          {concert.date}
        </span>
        <span className="concert-card-venue">
          <FontAwesomeIcon className="concert-card-icon" icon={faMusic} />
          {concert.venue}
        </span>
        <span className="concert-card-location">
          <FontAwesomeIcon className="concert-card-icon" icon={faLocationDot} />
          {concert.location}
        </span>
      </div>
      <a
        className="concert-card-tickets"
        href={concert.tickets}
        target="_blank"
        rel="noopener noreferrer"
      >
        TICKETS
      </a>
    </div>
  );
}
