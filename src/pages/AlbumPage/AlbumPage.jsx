import { AlbumBanner } from "../../components/AlbumBanner/AlbumBanner";
import { useParams } from "react-router";
import { ALBUMS } from "../../data";
import "./AlbumPage.css";
import { Tracklist } from "../../components/Tracklist/Tracklist";
import { AlbumOptions } from "../../components/AlbumOptions/AlbumOptions";

export function AlbumPage() {
    const { albumId } = useParams();
    const album = ALBUMS.find((a) => a.id === Number(albumId));

    return (
        <>
            <AlbumBanner album={album} />
            <main className="album-page">
                <div className="album-page-content">
                    <section className="about-section">
                        <h2 className="about-section-title">About the album</h2>
                        <p className="about-section-desc">
                            {album.description}
                        </p>
                    </section>
                    <Tracklist tracks={album.tracks} />
                </div>
                <AlbumOptions album={album} />
            </main>
        </>
    );
}
