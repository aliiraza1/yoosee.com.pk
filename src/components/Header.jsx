import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo & Brand */}
        <NavLink to="/" className="flex items-center space-x-3 py-1.5">
          <img
            src={logo}
            alt="Yoosee Logo"
            className="w-40 h-15 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
          />
          <span className="text-xl font-bold tracking-wide"></span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {['/', '/products', '/cart', '/login'].map((path, index) => {
            const names = ['Home', 'Products', 'Cart', 'Login'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:text-teal-500 transform hover:scale-105 transition duration-300 hover:shadow-md hover:border hover:border-white p-1 ${
                    isActive ? 'underline font-bold' : ''
                  }`
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
