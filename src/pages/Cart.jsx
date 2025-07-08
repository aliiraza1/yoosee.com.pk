import {useCart} from '../context/CartContext';
import {Link } from 'react-router-dom';

function Cart() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className='p-10 text-center'>
        <h2 className='text-xl font-bold mb-4'>Your cart is empty</h2>
        <Link to="/products" className='text-blue-600 underline'>Shop Products</Link>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-6 py-10'>
      <h1 className='text-3xl font-bold mb-6'>Your Cart</h1>
      <ul className='space-y-4'>
        {cartItems.map((item) => (
          <li key={item.id} className='flex justify-between border-b pb-3'>
            <div>
              <h3 className='text-lg font-semibold'>{item.name}</h3>
              <p className='text-sm text-gray-600'>{item.description}</p>
            </div>
            <p className='text-blue-600 font-bold'>PKR {item.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <div className="text-right mt-6">
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
