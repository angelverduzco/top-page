import { NavLink } from "react-router";
import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <NavLink className="header-title" to="/">
                The Bandito Outpost
            </NavLink>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <NavLink className="list-item" to="/discography">
                        Discography
                    </NavLink>
                    <NavLink className="list-item" to="/journey">
                        Journey
                    </NavLink>
                    <NavLink className="list-item" to="/tour">
                        Tour
                    </NavLink>
                    <NavLink className="list-item" to="/archive">
                        Archive
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}
