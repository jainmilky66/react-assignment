import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();

    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="cart-link">
                Cart ({cart.length})
            </Link>
        </nav>
    );
};

export default Navbar;
