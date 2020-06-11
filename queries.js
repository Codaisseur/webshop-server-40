const Order = require("./models").order;
const Product = require("./models").product;

const getOrder = async id => {
  try {
    const order = await Order.findByPk(id, { include: [Product] });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
};

getOrder(1);
