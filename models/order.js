'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    date: DataTypes.STRING
  }, {});
  order.associate = function(models) {
    // associations can be defined here
  };
  return order;
};