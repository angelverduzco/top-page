import "./DiscographyPage.css";
import { ALBUMS, LIVE_ALBUMS, EXTENDED_PLAYS, SINGLES } from "../../data";
import DiscographySection from "../../components/DiscographySection/DiscographySection";

export function DiscographyPage() {
    const SECTIONS = [
        { section: "Albums", elements: ALBUMS },
        { section: "Live Albums", elements: LIVE_ALBUMS },
        { section: "Extended Plays", elements: EXTENDED_PLAYS },
        { section: "Singles", elements: SINGLES },
    ];

    return (
        <main className="discography-page">
            <h1 className="discography-title">
                Twenty One Pilots&apos; Discography
            </h1>
            {SECTIONS.map(({ section, elements }, index) => (
                <DiscographySection
                    key={index}
                    section={section}
                    elements={elements}
                />
            ))}
        </main>
    );
}
