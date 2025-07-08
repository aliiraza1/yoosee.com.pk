import ProductCard from './ProductCard';
import productimg1 from '../assets/product-img2.png';
import productimg2 from '../assets/product-img3.png';

const dummyProducts = [
  {
    id: "1",
    name: "Yoosee GW-C10 Indoor Camera",
    price: 4500,
    description: "Indoor WiFi camera",
    images: [productimg1, productimg2],
  },
  {
    id: "2",
    name: "Yoosee GW-C20 PTZ Camera",
    price: 5200,
    description: "PTZ camera with 360° rotation",
    images: [productimg2, productimg1],
  },
];

function Products({ showOnly }) {
  const displayedProducts = showOnly
    ? dummyProducts.slice(0, showOnly)
    : dummyProducts;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Explore Our Smart Cameras</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
