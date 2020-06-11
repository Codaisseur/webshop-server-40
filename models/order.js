"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      date: DataTypes.STRING,
    },
    {}
  );
  order.associate = function (models) {
    order.belongsToMany(models.product, {
      through: "orderProducts",
      foreignKey: "orderId",
    });
  };
  return order;
};
