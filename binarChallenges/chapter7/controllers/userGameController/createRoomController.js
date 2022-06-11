const { Room, GamePlay } = require("../../models");

exports.get = (req, res) => {
  const currentUser = req.user;
  res.json(currentUser);
};

exports.create = async (req, res) => {
  try {
    const createRoom = await Room.create({
      roomName: req.body.roomName,
    });
    // const createGamePlay = await GamePlay.create({
    //   roomId: createRoom.id,
    // });
    res.json(createRoom);
  } catch (err) {
    res.json(err);
  }
};
