import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/example">About</Link></li>
                <li><Link to="/home">Contact</Link></li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Navigation;