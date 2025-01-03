import './Header.css';

export function Header() {
    return (
        <header className="header">
            <h1 className="header-title">TØP FAN</h1>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="list-item">Albums</li>
                    <li className="list-item">History</li>
                    <li className="list-item">Tour</li>
                    <li className="list-item">Archive</li>
                </ul>
            </nav>
        </header>
    )
}