import "./BandSection.css";
import logoBlack from "../../assets/logo-black.png";

export function BandSection() {
  return (
    <section className="band-section">
      <h2 className="band-section-title">The Banditos&apos; Voice</h2>
      <div className="band-section-content">
        <p className="band-section-text">
          Twenty One Pilots is an American band formed in 2009 in Columbus,
          Ohio, by Tyler Joseph alongside former members Nick Thomas and Chris
          Salih. The current lineup consists of Tyler and Josh Dun, who joined
          in 2011. Their music blends genres like alternative pop, hip-hop,
          rock, and electronic, featuring profound lyrics that explore mental
          health, inner struggles, and hope. Known for their emotional
          connection with fans and versatile style, the band has achieved
          worldwide acclaim.
          <br />
          <br />
          Their most notable albums include Vessel (2013), Blurryface (2015),
          Trench (2018), Scaled and Icy (2021) and more recently Clancy (2024)
          and Breach (2025). They have also created a unique narrative universe,
          particularly in Trench, where the Banditos fight against the
          oppressive regime of Dema, a metaphor for internal battles. With their
          cultural impact and high-energy live performances, Twenty One Pilots
          has become a global phenomenon.
        </p>
        <img
          className="band-section-img"
          src={logoBlack}
          alt="Logo of Twenty One Pilots"
        />
      </div>
    </section>
  );
}
