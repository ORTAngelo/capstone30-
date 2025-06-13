import { useLocation } from "react-router-dom";
import data from "../Data/data";
import '../Style/SearchPage.css';

export default function SearchPage() {
    const queryParams = new URLSearchParams(useLocation().search);
    const searchQuery = queryParams.get('q'); // Get the search query from the URL

    // Filter products based on title or description matching the search query
    const filteredResults = data.productData.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="search-page">
            <h1>Search Results</h1>
            <p>Showing results for: "{searchQuery}"</p>

            {filteredResults.length > 0 ? (
                <ul className="product-list">
                    {filteredResults.map((product) => (
                        <li key={product.id} className="product-item">
                            <img src={product.img} alt={product.title} />
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>{product.desc}</p>
                                <p>Price: ${product.price}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}
