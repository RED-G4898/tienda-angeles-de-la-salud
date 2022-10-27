import '../app.css'
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div className="navbar-element">
            <BsCart className="navbar-element__icon" size={30}/>
        </div>
    );
}

export default CartWidget;
