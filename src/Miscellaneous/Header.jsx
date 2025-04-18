import "./Header.css";

const Header = function () {
    return (
        <div className="header-container">
            <div className="header-logo">JEMAH</div>
            <ul className="header-content">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}

export default Header;