const { Room, GamePlay } = require("../../models");
const logic = require("./result");

const wait = {};

const data = {}; // Ini ceritanya model disimpen ke database

function waitEnemyResponse(id) {
  return new Promise((resolve) => {
    wait[id] = { resolve };
  });
}

exports.get = async (req, res) => {
  const roomId = await Room.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(roomId);
};

// let result;
exports.fight = async (req, res) => {
  const id = req.params.id;
  const room = await Room.findOne({
    where: {
      id,
    },
    include: "game",
  });
  if (!room) return res.json({ message: "room doesn't exist" });
  const availableRoom = await GamePlay.findAll({ where: { roomId: id } });

  console.log(availableRoom[availableRoom.length - 1]);
  if (
    availableRoom.length >= 3 &&
    availableRoom[availableRoom.length - 1].player2 !== null
  )
    return res.json({ message: "room expired", score: room });

  const gameNow = await GamePlay.findOne({
    where: {
      player2: null,
      roomId: id,
    },
  });
  if (!gameNow) {
    await GamePlay.create({
      player1: req.body.choose,
      player2: null,
      roomId: id,
    });
  } else {
    await GamePlay.update(
      { player2: req.body.choose },
      {
        where: {
          player2: null,
          roomId: id,
        },
      }
    );
  }

  if (!wait[id]) {
    await waitEnemyResponse(id);
  } else {
    wait[id].resolve();
    delete wait[id];
  }
  const player = await GamePlay.findOne({
    where: {
      roomId: id,
    },
  });
  const hasil = logic(player.player1, player.player2);
  res.json({ room });
};
