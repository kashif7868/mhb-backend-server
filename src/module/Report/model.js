const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    totalOrders: {
      type: Number,
      default: 0,
    },
    totalCompletedOrders: {
      type: Number,
      default: 0,
    },
    totalPendingOrders: {
      type: Number,
      default: 0,
    },
    totalCancelledOrders: {
      type: Number,
      default: 0, // Tracking cancelled orders
    },
    sales: {
      weekly: {
        type: Number,
        default: 0,
      },
      monthly: {
        type: Number,
        default: 0,
      },
      yearly: {
        type: Number,
        default: 0,
      },
    },
    orders: {
      weekly: {
        type: Number,
        default: 0,
      },
      monthly: {
        type: Number,
        default: 0,
      },
      yearly: {
        type: Number,
        default: 0,
      },
    },
    totalUsers: {
      type: Number,
      default: 0,
    },
    overallIncome: {
      type: Number,
      default: 0,
    },
    targetGoal: {
      type: Number,
      default: 10000000,
    },
    progressToGoal: {
      type: Number,
      default: 0,
    },
    totalProductsSold: {
      type: Number,
      default: 0, // Tracking total products sold
    },
    totalCategories: {
      type: Number,
      default: 0, // Tracking the number of product categories
    },
    discountsApplied: {
      type: Number,
      default: 0, // Tracking total discounts applied
    },
    shippingStatus: {
      type: String,
      enum: ['pending', 'shipped', 'delivered', 'returned'],
      default: 'pending',
    },
    inventoryStatus: {
      type: String,
      enum: ['in_stock', 'out_of_stock', 'low_stock'],
      default: 'in_stock',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Method to update total orders
reportSchema.methods.updateTotalOrders = function (completed, pending, cancelled) {
  this.totalCompletedOrders = completed;
  this.totalPendingOrders = pending;
  this.totalCancelledOrders = cancelled;
  this.totalOrders = completed + pending + cancelled;
};

// Method to update sales
reportSchema.methods.updateSales = function (weekly, monthly, yearly) {
  this.sales.weekly = weekly;
  this.sales.monthly = monthly;
  this.sales.yearly = yearly;
};

// Method to update orders
reportSchema.methods.updateOrders = function (weekly, monthly, yearly) {
  this.orders.weekly = weekly;
  this.orders.monthly = monthly;
  this.orders.yearly = yearly;
};

// Method to update users and income
reportSchema.methods.updateUsersAndIncome = function (users, income) {
  this.totalUsers = users;
  this.overallIncome = income;
  this.updateProgressToGoal(income);
};

// Method to calculate and update progress toward the goal
reportSchema.methods.updateProgressToGoal = function (income) {
  if (this.targetGoal !== 0) {
    this.progressToGoal = (income / this.targetGoal) * 100;
  } else {
    this.progressToGoal = 0;
  }
};

// Method to update total products sold and categories
reportSchema.methods.updateProductStats = function (sold, categories) {
  this.totalProductsSold = sold;
  this.totalCategories = categories;
};

// Method to update discounts applied
reportSchema.methods.updateDiscountsApplied = function (discount) {
  this.discountsApplied = discount;
};

// Method to update shipping status
reportSchema.methods.updateShippingStatus = function (status) {
  this.shippingStatus = status;
};

// Method to update inventory status
reportSchema.methods.updateInventoryStatus = function (status) {
  this.inventoryStatus = status;
};

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
