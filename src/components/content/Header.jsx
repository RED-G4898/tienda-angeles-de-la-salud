import '../app.css'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="sticky top-0 z-[2] grid grid-cols-12 bg-zinc-100">
            <Navbar />
        </header>
    );
}

export default Header;