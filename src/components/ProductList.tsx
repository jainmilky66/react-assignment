import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { cart, addToCart } = useCart(); // Added `cart` for checking duplicates

    useEffect(() => {
        axios.get<Product[]>('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddToCart = (product: Product) => {
        const isAlreadyInCart = cart.some((item) => item.id === product.id);

        if (isAlreadyInCart) {
            alert(`❗ ${product.title} is already in the cart!`);
        } else {
            addToCart(product);
            alert(`✅ ${product.title} added to cart!`);
        }
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
