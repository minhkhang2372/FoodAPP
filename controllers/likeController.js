const LikeRes = require('../models/LikeRes');

const likeRestaurant = async (req, res) => {
  const { user_id, res_id } = req.body;
  try {
    const like = await LikeRes.create({ user_id, res_id, date_like: new Date() });
    res.status(201).json(like);
  } catch (error) {
    res.status(500).json({ error: 'Error liking restaurant' });
  }
};

const unlikeRestaurant = async (req, res) => {
  const { user_id, res_id } = req.body;
  try {
    await LikeRes.destroy({ where: { user_id, res_id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error unliking restaurant' });
  }
};

const getLikesByRestaurant = async (req, res) => {
  const { resId } = req.params;
  try {
    const likes = await LikeRes.findAll({ where: { res_id: resId } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching likes' });
  }
};

const getLikesByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const likes = await LikeRes.findAll({ where: { user_id: userId } });
    res.json(likes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching likes' });
  }
};

module.exports = { likeRestaurant, unlikeRestaurant, getLikesByRestaurant, getLikesByUser };
