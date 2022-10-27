import "../app.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="text-center font-neue text-2xl font-black text-fasgreen cursor-pointer">
				Tienda Ángeles de la Salud
			</h1>
			<section className="navbar-menu">
				<NavbarElement elementTitle="Genéricos" />
				<NavbarElement elementTitle="Naturales" />
				<NavbarElement elementTitle="Suministros Médicos" />
			</section>
			<section className="navbar-menu">
				<CartWidget/>
			</section>
		</nav>
	);
};

const NavbarElement = ({ elementTitle }) => {
    return (
        <div className="navbar-element">
            <p className="navbar-element__text">{elementTitle}</p>
        </div>
    );
}

export default Navbar;
