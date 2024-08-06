const Orders = require('../models/Orders');

const createOrder = async (req, res) => {
  const { user_id, food_id, amount, code, arr_sub_id } = req.body;
  try {
    const order = await Orders.create({ user_id, food_id, amount, code, arr_sub_id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
};

const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Orders.findAll({ where: { user_id: userId } });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
};

module.exports = { createOrder, getOrdersByUser };