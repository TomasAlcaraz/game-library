const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");
const controller = {};
const dataGame = require("../functions/dataGame");
const formatter = require("../functions/formatter");

controller.getGames = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const formated = name.split(" ").join("-").toLowerCase();
      const games = await Videogame.findAll({
        include: [{ model: Genre, through: { attributes: [] } }],
        where: { name: { [Op.iLike]: `%${formated}%` } },
      });
      return res.json(games);
    }
    const games = await Videogame.findAll({
      include: { model: Genre, through: { attributes: [] } },
    });
    console.log(games.length);
    return res.json(games);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

controller.getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    return res.json(genres);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

controller.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await dataGame(id);
    const game = formatter(data, "id");
    return res.json(game);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

controller.createGame = async (req, res) => {
  try {
    const gameCreated = await Videogame.create(req.body);
    // await Videogame.addGenre(req.genres);
    req.body.genres.forEach(async (g) => {
        let genderDB = await Genre.findAll({ where: { name: g } });
        gameCreated.addGenres(genderDB);
      });
      return res.json(gameCreated);
    // return gameCreated;
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

// "genres": [{"name": "Action"}, {"name":"Indie"}]

module.exports = controller;
