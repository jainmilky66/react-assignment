import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>

            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map(item => (
                        <li key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.title}
                            />
                            <span>{item.title}</span>
                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
