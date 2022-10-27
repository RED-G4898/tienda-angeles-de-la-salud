import "../app.css";
import NavbarElement from "./NavbarElement";

const Navbar = () => {
	return (
		<nav className="col-span-8 col-start-3 grid w-full grid-cols-1 grid-rows-2 gap-3 bg-zinc-200">
			<h1 className="row-span-1 row-start-1 text-center font-neue text-2xl font-black text-fasgreen">
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

export default Navbar;
