const Cart = require('./entity/model');

const getCart = async (userId) => {
  return await Cart.findOne({ userId }).populate('items.productId', 'productName price media');
};

const addItemToCart = async (userId, itemData) => {
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = new Cart({ userId, items: [itemData] });
  } else {
    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === itemData.productId
    );
    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].qty += itemData.qty || 1;
    } else {
      cart.items.push(itemData);
    }
  }
  return await cart.save();
};

const updateCartItem = async (userId, itemData) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error('Cart not found');
  const itemIndex = cart.items.findIndex((item) => item.productId.toString() === itemData.productId);
  if (itemIndex >= 0) {
    cart.items[itemIndex] = { ...cart.items[itemIndex], ...itemData };
  } else {
    throw new Error('Item not found in cart');
  }
  return await cart.save();
};

const removeCartItem = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error('Cart not found');
  cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
  return await cart.save();
};

const clearCart = async (userId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) throw new Error('Cart not found');
  cart.items = [];
  return await cart.save();
};

module.exports = {
  getCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCart,
};
