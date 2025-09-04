import "./Tracklist.css";
import { TrackCard } from "../TrackCard/TrackCard";

export function Tracklist({ tracks }) {
  return (
    <section className="tracklist-section">
      <h2 className="tracklist-title">Tracklist</h2>
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </section>
  );
}
