const { UserGame } = require("../../models");

exports.register = async (req, res) => {
  try {
    const user = await UserGame.register(req.body);
    res.json(user);
  } catch (err) {
    res.json({ error: err.message });
  }
};
