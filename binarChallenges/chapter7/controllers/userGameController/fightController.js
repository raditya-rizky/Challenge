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

let result;
exports.fight = async (req, res) => {
  const id = req.params.id;
  const room = await Room.findOne({
    where: {
      id,
    },
    include: "game",
  });
  if (!room) return res.json({ msg: "room doesn't exist" });
  // const { p1Id, p2Id, p1choose, p2choose } = req.body;
  const isAvailable = await GamePlay.findAll({ where: { roomId: id } });

  console.log(isAvailable[isAvailable.length - 1]);
  if (
    isAvailable.length >= 3 &&
    isAvailable[isAvailable.length - 1].player2 !== null
  )
    return res.json({ msg: "room expired", score: room });

  if (!wait[id]) {
    // p1 = p1choose;
    GamePlay.create({
      roomId: id,
      player1: req.body.choose,
      // p1Id,
      // p1choose,
    });
    // Player 1 menunggu respons player 2
    await waitEnemyResponse(id);
  } else {
    const player1 = await GamePlay.findOne({
      where: {
        roomId: id,
      },
    });
    const player2 = await GamePlay.findOne({
      where: {
        roomId: id,
      },
    });
    result = logic(player1.player1, player2.player2);
    // Player 2 merespons ke player 1 untuk selesai menunggu
    GamePlay.update(
      {
        player2: req.body.choose,
        // p2Id,
        // p2choose,
        // condition: logicFight(p1, p2choose),
      },
      {
        where: {
          roomId: id,
          player2: null,
          // p2Id: null,
          // p2choose: null,
          // condition: null,
        },
      }
    );
    wait[id].resolve();
    delete wait[id];
  }
  res.json(result);
};
