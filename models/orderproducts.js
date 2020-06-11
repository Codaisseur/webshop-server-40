'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderProducts = sequelize.define('orderProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  orderProducts.associate = function(models) {
    // associations can be defined here
  };
  return orderProducts;
};