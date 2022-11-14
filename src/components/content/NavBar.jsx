import { NavLink, Link } from "react-router-dom";
import "../app.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="text-center font-neue text-2xl font-black text-fasgreen cursor-pointer">
				<Link to="/">Tienda Ángeles de la Salud</Link>
			</h1>
			<section className="navbar-menu">
				<NavbarElement elementTitle="Genéricos" linkTo="/category/genericos" />
				<NavbarElement elementTitle="Naturales" linkTo="/category/naturales" />
				<NavbarElement elementTitle="Suministros Médicos" linkTo="/category/suministros" />
			</section>
			<section className="navbar-menu">
				<CartWidget/>
			</section>
		</nav>
	);
};

const NavbarElement = (props) => {
    return (
        <div className="navbar-element">
            <NavLink className="navbar-element__text" to={props.linkTo}>{props.elementTitle}</NavLink>
        </div>
    );
}

export default Navbar;
