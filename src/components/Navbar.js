import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar">
            <ul className="navMenu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><Link to="/pagination">News</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;