const CartService = require('./service');

// Get cart for a user
const getCart = async (req, res) => {
  try {
    const cart = await CartService.getCart(req.params.userId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.status(200).json({ data: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add item to cart
const addItemToCart = async (req, res) => {
  try {
    const cart = await CartService.addItemToCart(req.params.userId, req.body);
    res.status(200).json({ message: 'Item added to cart', data: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update item in cart
const updateCartItem = async (req, res) => {
  try {
    const cart = await CartService.updateCartItem(req.params.userId, req.body);
    res.status(200).json({ message: 'Cart item updated', data: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove item from cart
const removeCartItem = async (req, res) => {
  try {
    const cart = await CartService.removeCartItem(req.params.userId, req.params.productId);
    res.status(200).json({ message: 'Item removed from cart', data: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Clear cart
const clearCart = async (req, res) => {
  try {
    const cart = await CartService.clearCart(req.params.userId);
    res.status(200).json({ message: 'Cart cleared', data: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
};
