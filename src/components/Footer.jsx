import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Yoosee.pk</h2>
          <p className="text-gray-400 text-sm">
            Pakistan's #1 Smart WiFi Camera Store. Secure your home with our next-gen surveillance tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="/products" className="hover:underline text-gray-300">Shop</a></li>
            <li><a href="/login" className="hover:underline text-gray-300">Login</a></li>
            <li><a href="/register" className="hover:underline text-gray-300">Register</a></li>
            <li><a href="/contact" className="hover:underline text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" className="text-blue-500 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="text-pink-500 hover:text-white">
              <FaInstagram />
            </a>
            <a href="https://wa.me/923000000000" className="text-green-500 hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Yoosee.pk — All Rights Reserved. Made with ❤️ in Pakistan.
      </div>
    </footer>
  );
}

export default Footer;
