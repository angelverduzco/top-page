import { CONCERTS } from "../../data";
import ConcertCard from "../../components/ConcertCard/ConcertCard";
import "./TourPage.css";

export default function TourPage() {
  return (
    <main className="tour-page">
      <h1 className="tour-title">The Clancy Tour: Breach</h1>
      <section className="tour-dates">
        {CONCERTS.map((concert) => (
          <ConcertCard concert={concert} key={concert.date} />
        ))}
      </section>
    </main>
  );
}
