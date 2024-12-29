const express = require('express');
const router = express.Router();
const validate = require('../../middlewares/validate');
const {
  addItemValidation,
  updateItemValidation,
} = require('./validation');
const cartController = require('./controller');

// Get cart for a user
router.get('/:userId', cartController.getCart);

// Add item to cart
router.post('/:userId', validate(addItemValidation), cartController.addItemToCart);

// Update cart item
router.patch('/:userId', validate(updateItemValidation), cartController.updateCartItem);

// Remove item from cart
router.delete('/:userId/:productId', cartController.removeCartItem);

// Clear cart
router.delete('/:userId', cartController.clearCart);

module.exports = router;
