import { Link, Outlet } from "react-router-dom";

const navClass = "justify-items-center";
const ulClass = "pt-1 px-5 flex";
const liClass = "flex-1 mr-2";
const linkClass = "text-center block border border-black rounded hover:border-gray-200 text-black-500 font-semibold text-xl hover:bg-black hover:text-white py-2 px-4 transition-all duration-200";


function Navigation() {
    return (
        <nav className={navClass}>
            <ul className={ulClass}>
                <li className={liClass}>
                    <Link className={linkClass} to="/">Home</Link>
                </li>
                <li className={liClass}>
                    <Link className={linkClass} to="/board">Board</Link>
                </li>
                <li className={liClass}>
                    <Link className={linkClass} to="/social">Social</Link>
                </li>
                <li className={liClass}>
                    <Link className={linkClass} to="/profile">Profile</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    );
}

export default Navigation;