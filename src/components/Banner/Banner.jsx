import "./Banner.css";
import banner from "../../assets/banner.png";

export function Banner() {
    return (
        <section
            className="banner"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <h1 className="banner-title">Welcome to the Resistance</h1>
            <p className="banner-text">
                Together, we push on through. Welcome to a world where the
                Banditos thrive.
            </p>
        </section>
    );
}
