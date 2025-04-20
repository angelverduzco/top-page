import "./DiscographySection.css";
import { AlbumCard } from "../AlbumCard/AlbumCard";

function DiscographySection({ section, elements }) {
    return (
        <section className="discography-section">
            <h2 className="discography-section-title">{section}</h2>
            <div className="discography-section-elements">
                {elements.map((element) => (
                    <AlbumCard
                        key={element.id}
                        album={element}
                        route={section.toLowerCase().replace(" ", "-")}
                    />
                ))}
            </div>
        </section>
    );
}

export default DiscographySection;
