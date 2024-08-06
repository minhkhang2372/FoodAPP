const RateRes = require('../models/RateRes');

const addRating = async (req, res) => {
  const { user_id, res_id, amount } = req.body;
  try {
    const rating = await RateRes.create({ user_id, res_id, amount, date_rate: new Date() });
    res.status(201).json(rating);
  } catch (error) {
    res.status(500).json({ error: 'Error adding rating' });
  }
};

const getRatingsByRestaurant = async (req, res) => {
  const { resId } = req.params;
  try {
    const ratings = await RateRes.findAll({ where: { res_id: resId } });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ratings' });
  }
};

const getRatingsByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const ratings = await RateRes.findAll({ where: { user_id: userId } });
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching ratings' });
  }
};

module.exports = { addRating, getRatingsByRestaurant, getRatingsByUser };