import { AlbumBanner } from "../../components/AlbumBanner/AlbumBanner";
import { useParams } from "react-router";
import { ALBUMS, LIVE_ALBUMS, SINGLES, EXTENDED_PLAYS } from "../../data";
import "./AlbumPage.css";
import { Tracklist } from "../../components/Tracklist/Tracklist";
import { AlbumOptions } from "../../components/AlbumOptions/AlbumOptions";
import { useEffect } from "react";

export function AlbumPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { type, id } = useParams();

    // Mapeo de tipos a datos
    const dataMap = {
        albums: ALBUMS,
        "live-albums": LIVE_ALBUMS,
        "extended-plays": EXTENDED_PLAYS,
        singles: SINGLES,
    };

    // Obtener el conjunto de datos correspondiente
    const dataset = dataMap[type] || [];
    const album = dataset.find((a) => a.id === Number(id));

    // Manejo de errores si no se encuentra el álbum
    if (!album) {
        return <p>Album not found</p>;
    }

    return (
        <>
            <AlbumBanner album={album} />
            <main className="album-page">
                <div className="album-page-content">
                    <section className="about-section">
                        <h2 className="about-section-title">About it</h2>
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
