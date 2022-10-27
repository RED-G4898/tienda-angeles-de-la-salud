import "../app.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1 className="row-span-1 row-start-1
							text-center font-neue text-2xl font-black text-fasgreen">
				Tienda Ángeles de la Salud
			</h1>
			<section className="row-span-1 row-start-2 flex justify-between">
				<NavbarElement elementTitle="Genéricos" />
				<NavbarElement elementTitle="Naturales" />
				<NavbarElement elementTitle="Suministros Médicos" />
			</section>
		</nav>
	);
};

const NavbarElement = ({ elementTitle }) => {
    return (
        <div className="navbar-element">
            <p>{elementTitle}</p>
        </div>
    );
}

export default Navbar;
