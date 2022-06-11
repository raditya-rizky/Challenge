const { Room, GamePlay } = require("../../models");

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

exports.fight = async (req, res) => {
  const id = req.params.id;
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
      {
        player2: req.body.choose,
      },
      {
        where: {
          player2: null,
          roomId: id,
        },
      }
    );

    if (!wait[id]) {
      // Player 1 menunggu respons player 2
      await waitEnemyResponse(id);
    } else {
      // Player 2 merespons ke player 1 untuk selesai menunggu
      wait[id].resolve();
      delete wait[id];
    }

    res.json(gameNow);
  }
};
