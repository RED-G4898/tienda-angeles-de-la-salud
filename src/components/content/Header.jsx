import '../app.css'
import Navbar from './NavBar'

const Header = () => {
    return (
        <header className="sticky top-0 z-[2] grid grid-cols-12 justify-center items-center bg-slate-200 h-[8vh]">
            <Navbar />
        </header>
    );
}

export default Header;