import heroImage from '../assets/product-img.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/product-img3.png';
import img2 from '../assets/product-img4.png';
import img3 from '../assets/product-img5.png';
import dummyProducts from '../data/products';

const featuredProducts = [
  {
    id: 1,
    name: 'Yoosee GW-C10',
    desc: 'Indoor camera with motion tracking',
    price: 4000,
    image: img1,
  },
  {
    id: 2,
    name: 'Yoosee GW-C20',
    desc: '360° HD Pan Tilt with Night Vision',
    price: 8000,
    image: img2,
  },
  {
    id: 3,
    name: 'Yoosee 4G Solar GW-A10',
    desc: 'Solar-powered 4G LTE outdoor camera',
    price: 12000,
    image: img3,
  },
];

function Home() {
  return (
    <div className="px-4 md:px-12 py-10 bg-gradient-to-b from-white to-gray-50 text-gray-800 max-w-screen-xl mx-auto">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-blue-700 leading-snug mb-4">
            Smart WiFi Cameras for Every Home
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            24/7 monitoring, mobile control, night vision & more. Designed for smart homes in Pakistan. Stay connected and protected.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 shadow-md transition"
          >
            Shop Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Yoosee Camera Promo"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Featured Cameras
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 + index * 0.2 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
              <p className="text-blue-600 font-bold text-md mb-3">
                PKR {product.price}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                View Product
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
