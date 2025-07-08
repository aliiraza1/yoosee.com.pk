import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cartItems } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!form.name || !form.email || !form.address) {
      alert("Please fill out all fields.");
      return;
    }

    // Simulate order placement
    alert(`Order placed successfully for ${form.name}!`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 grid md:grid-cols-2 gap-10">
      {/* Left: User Info */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Shipping address"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
        >
          Place Order
        </button>
      </form>

      {/* Right: Cart Summary */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <div>
                  <h4 className="font-medium text-gray-700">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <p className="text-blue-600 font-bold">PKR {item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Checkout;
