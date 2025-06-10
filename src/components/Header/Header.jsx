import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="catalog">Catalog</NavLink>
        </div>
    );
};
export default Header;
