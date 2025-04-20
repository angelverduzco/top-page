import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">Made by: Angel Verduzco</p>
            <div className="footer-links">
                <a
                    className="footer-link"
                    href="https://github.com/AngelManuelVerduzcoGonzalez"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        className="footer-icon"
                        icon={faGithub}
                        style={{ color: "#fce51d" }}
                    />
                </a>
                <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/angelverduzco"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        className="footer-icon"
                        icon={faLinkedin}
                        style={{ color: "#fce51d" }}
                    />
                </a>
            </div>
        </footer>
    );
}
