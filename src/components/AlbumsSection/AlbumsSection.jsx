import "./AlbumsSection.css";
import { AlbumCard } from "../AlbumCard/AlbumCard";
import ButtonLink from "../Button/ButtonLink";
import useDiscography from "../../hooks/useDiscography";

export function AlbumsSection() {
    const albums = useDiscography().ALBUMS;

    return (
        <section className="albums-section">
            <h2 className="albums-section-title">Discography</h2>
            <div className="albums-section-cards">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} route={"albums"} />
                ))}
            </div>
            <ButtonLink to={"/discography"}>View all</ButtonLink>
        </section>
    );
}
