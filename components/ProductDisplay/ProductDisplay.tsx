import type { ProductDisplayProps, Product } from "../../types";

export function ProductDisplay() {
    const product = {
        id: '1',
        name: 'Wireless Headphones',
        price: 199.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        imageUrl: 'https://example.com/headphones.jpg',
        inStock: true
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
}