const mongoose = require('mongoose');

const peeralsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  peeralsBalance: {
    type: Number,
    default: 0
  },
  transactions: [
    {
      type: {
        type: String,
        enum: ['Sign-Up Bonus', 'Shopping Bonus', 'Redemption'],
        required: true
      },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      details: { type: String }
    }
  ]
});

// Mongoose post-save hook to add peerals on user registration
peeralsSchema.post('save', async function (doc) {
  if (doc.isNew) {
    const peerals = doc;
    // Assign 200 peerals on first registration (equivalent to 200 PKR)
    peerals.peeralsBalance = 200;

    // Add a transaction record for the sign-up bonus
    peerals.transactions.push({
      type: 'Sign-Up Bonus',
      amount: 200,
      details: 'Initial Sign-Up Bonus (200 PKR equivalent)',
    });

    await peerals.save();
  }
});

// Method to calculate and add shopping bonus based on the amount spent
peeralsSchema.methods.addShoppingBonus = async function (amountSpent) {
  const peerals = this;

  // Calculate the shopping bonus (5% of the amount spent)
  const peeralsToAdd = (amountSpent * 5) / 100;

  // Add the calculated peerals to the user's balance
  peerals.peeralsBalance += peeralsToAdd;

  // Add a transaction record for the shopping bonus
  peerals.transactions.push({
    type: 'Shopping Bonus',
    amount: peeralsToAdd,
    details: `Shopping Bonus for spending Rs. ${amountSpent}`,
  });

  // Save the updated peerals document
  await peerals.save();
};

const Peerals = mongoose.model('Peerals', peeralsSchema);
module.exports = Peerals;
