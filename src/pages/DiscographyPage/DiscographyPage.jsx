import "./DiscographyPage.css";
import DiscographySection from "../../components/DiscographySection/DiscographySection";
import useDiscography from "../../hooks/useDiscography";

export function DiscographyPage() {
  const discography = useDiscography();

  const SECTIONS = [
    { section: "Albums", elements: discography.ALBUMS },
    { section: "Live Albums", elements: discography.LIVE_ALBUMS },
    { section: "Extended Plays", elements: discography.EXTENDED_PLAYS },
    { section: "Singles", elements: discography.SINGLES },
  ];

  return (
    <main className="discography-page">
      <h1 className="discography-title">Twenty One Pilots&apos; Discography</h1>
      {SECTIONS.map(({ section, elements }, index) => (
        <DiscographySection key={index} section={section} elements={elements} />
      ))}
    </main>
  );
}
