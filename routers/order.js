const { Router } = require("express");
const router = new Router();
const Order = require("../models").order;
const Customer = require("../models").customer;
const Book = require("../models").book;
const OrderItem = require("../models").orderItem;

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).send({ message: "Order placed!", orders });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const { customerId, bookIds } = req.body
  try {
    const newOrder = await Order.create({ customerId });

    const orderBookCreatePromises = bookIds.map(async (bId) => {
      console.log(bId);
      await OrderItem.create({ orderId: newOrder.id, bookId: parseInt(bId) });
    });

    await Promise.all(orderBookCreatePromises);

    const orderWithBook = await Order.findByPk(newOrder.id, {
      include: [Book, Customer],
    });

    res.send(orderWithBook);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
