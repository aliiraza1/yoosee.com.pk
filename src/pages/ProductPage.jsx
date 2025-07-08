// src/pages/ProductPage.jsx
import ProductCard from '../components/ProductCard';
import dummyProducts from '../data/products';

function ProductPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shop All Products</h1>

      {dummyProducts.length === 0 ? (
        <p className="text-gray-500">No products available right now. Please check back later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductPage;
