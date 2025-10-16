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
          <li className="list-item">
            <NavLink className="list-link" to="/discography">
              Discography
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className="list-link" to="/journey">
              Journey
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className="list-link" to="/tour">
              Tour
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink className="list-link" to="/archive">
              Archive
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
