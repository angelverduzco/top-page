import "./TrackCard.css";

export function TrackCard({ track }) {
  return (
    <div className="track-card">
      <div className="track-card-info">
        <span className="track-card-number">{track.id}</span>
        <h3 className="track-card-title">{track.title}</h3>
      </div>
      <div>
        <span className="track-card-duration">{track.duration}</span>
      </div>
    </div>
  );
}
