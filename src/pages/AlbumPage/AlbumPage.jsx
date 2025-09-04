import { AlbumBanner } from "../../components/AlbumBanner/AlbumBanner";
import { useParams } from "react-router";
import useDiscography from "../../hooks/useDiscography";
import "./AlbumPage.css";
import { Tracklist } from "../../components/Tracklist/Tracklist";
import { AlbumOptions } from "../../components/AlbumOptions/AlbumOptions";
import { useEffect } from "react";

export function AlbumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const discography = useDiscography();

  const { type, id } = useParams();

  const dataMap = {
    albums: discography.ALBUMS,
    "live-albums": discography.LIVE_ALBUMS,
    "extended-plays": discography.EXTENDED_PLAYS,
    singles: discography.SINGLES,
  };

  const dataset = dataMap[type] || [];
  const album = dataset.find((a) => a.id === Number(id));

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
            <p className="about-section-desc">{album.description}</p>
          </section>
          <Tracklist tracks={album.tracks} />
        </div>
        <AlbumOptions album={album} />
      </main>
    </>
  );
}
