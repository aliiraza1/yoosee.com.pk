import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import dummyProducts from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const found = dummyProducts.find((p) => p.id === id);
    if (found) {
      setProduct(found);
    }
  }, [id]);

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  if (!product) {
    return <div className="p-10 text-center text-gray-600">Product not found...</div>;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2 text-sm text-gray-600">
        <nav className="flex items-center space-x-2">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span>/</span>
          <Link to="/products" className="text-blue-600 hover:underline">Products</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Image Preview */}
        <div>
          <div
            className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-zoom-in"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={product.images[photoIndex]}
              alt={product.name}
              className="w-full h-[400px] object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <Swiper slidesPerView={3} spaceBetween={10} className="mt-4">
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  onClick={() => setPhotoIndex(idx)}
                  className={`w-24 h-24 object-cover rounded-lg border-2 cursor-pointer ${
                    photoIndex === idx ? "border-blue-600" : "border-transparent"
                  }`}
                  alt={`Thumbnail ${idx + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>

          <ul className="mb-6 space-y-2">
            {product.features.map((feat, i) => (
              <li key={i} className="text-gray-700 flex items-center">
                <span className="mr-2">✅</span> {feat}
              </li>
            ))}
          </ul>

          <p className="text-2xl text-blue-600 font-bold mb-6">
            PKR {product.price.toLocaleString()}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <img
            src={product.images[photoIndex]}
            alt={product.name}
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
