import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const imageUrl = product.images && product.images.length > 0
    ? product.images[0]
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
      <Link to={`/products/${product.id}`}>
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4 transform transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-blue-600 font-bold mb-4">
        PKR {product.price?.toLocaleString()}
      </p>
      <Link
        to={`/products/${product.id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;
