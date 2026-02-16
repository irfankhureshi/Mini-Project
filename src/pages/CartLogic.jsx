import React, { useState } from 'react';
import { products } from '../data/Cart';
import { ShoppingCart, Plus, Minus, Trash2, LogIn, LogOut, CreditCard, Package } from 'lucide-react';

const CartLogic = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert('Please login to add items to cart');
      return;
    }

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increase = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decrease = (id) => {
    setCart(
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center gap-3">
          <ShoppingCart size={32} />
          E-Commerce Store
        </h1>
        <p className="text-gray-600">
          Browse products and manage your shopping cart. Login to start shopping!
        </p>
      </div>

      {/* Header with Login/Logout */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
            isLoggedIn
              ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg'
              : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg'
          }`}
        >
          {isLoggedIn ? <LogOut size={20} /> : <LogIn size={20} />}
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Products Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Package size={24} className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Available Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover-lift"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-green-600 mb-4">
                  ${product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  disabled={!isLoggedIn}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 ${
                    isLoggedIn
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg'
                      : 'bg-gray-300 cursor-not-allowed text-gray-500'
                  }`}
                >
                  <Plus size={20} />
                  {isLoggedIn ? 'Add to Cart' : 'Login Required'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingCart size={24} className="text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Shopping Cart</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart size={48} className="text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-gray-500">Your cart is empty</p>
                <p className="text-gray-400 mt-2">Add some products to get started!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1 mb-3 sm:mb-0">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">${item.price.toLocaleString()} each</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => decrease(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-gray-900 font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increase(item.id)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="text-right sm:ml-4">
                        <p className="text-lg font-bold text-green-600">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Total */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                    onClick={() => alert('Checkout functionality would go here!')}
                  >
                    <CreditCard size={20} />
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLogic;
