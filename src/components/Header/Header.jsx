import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/logo.jsx";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.navActive);
};

const Header = () => {
    return (
        <div className={s.header}>
            <Logo />
            <div className={s.navigation}>
                <NavLink to="/" className={buildLinkClass}>
                    Home
                </NavLink>
                <NavLink to="catalog" className={buildLinkClass}>
                    Catalog
                </NavLink>
            </div>
        </div>
    );
};
export default Header;
