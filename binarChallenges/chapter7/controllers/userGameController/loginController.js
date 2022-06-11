const { UserGame } = require("../../models");

exports.login = async (req, res) => {
  try {
    const user = await UserGame.authenticate(req.body);
    const { id, username } = user;
    res.json({ id, username, accessToken: user.generateToken() });
  } catch (err) {
    res.json(err);
  }
};
