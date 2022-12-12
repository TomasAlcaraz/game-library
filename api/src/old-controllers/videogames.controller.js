const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const gameContrl = {};

function formatter(arr) {
  const result = arr.map((game) => {
    return {
      id: game.id,
      name: game.name,
      image: game.background_image,
      genres: game.genres.map((g) => g.name),
      description: game.description,
      released: game.released,
      platforms: game.platforms.map((g) => g.platform.name),
      rating: game.rating,
    };
  });
  return result;
}

async function dataGames(type, value) {
  let data;
  if (type === "name") {
    value = value.split(" ").join("-").toLowerCase();
    data = await axios.get(
      `https://api.rawg.io/api/games?search=${value}&key=${APIKEY}`
    );
    return data.data.results;
  }
  if (type === "id") {
    data = await axios.get(
      `https://api.rawg.io/api/games/${value}?key=${APIKEY}`
    );
    return data.data;
  }
  return allGames();
}

// busca un juego por su nombre o devuelve los 100 primeros juegos
gameContrl.getGames = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      try {
        const gamesDB = await Videogame.findAll({
          where: { name: name },
          includes: [{ model: Genre }],
        });

        const callAPI = await dataGames("name", name);
        const gamesAPI = formatter(callAPI);

        const result = gamesDB.concat(gamesAPI);
        return res.json(result);
      } catch (e) {
        return res.status(404).send(`The game: ${name} not found`);
      }
    }
    const gamesDB = await Videogame.findAll({
      include: [{ model: Genre }],
    });

    let formated = [];
    gamesDB.forEach((g) => {
      formated.push({ ...g, Genres: g.Genres.map((h) => h.name) });
    });

    const callAPI = await allGames();
    const gamesAPI = formatter(callAPI);
    const games = formated.concat(gamesAPI);
    return res.send(games);
  } catch (e) {
    return res.status(404).send("No videogames available");
  }
};

// buscar un juego por su id
gameContrl.getById = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      const gameDB = await Videogame.findOne({
        where: { id: id },
        include: [{ model: Genre }],
      });
      return res.json(gameDB);
    }

    const game = await dataGames("id", id);

    if (game) {
      let formated = {
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres.map((g) => g.name),
        description: game.description,
        released: game.released,
        platforms: game.platforms.map((g) => g.platform.name),
        rating: game.rating,
      };
      return res.json(formated);
    }
    return res.status(404).send("No results found");
  } catch (e) {
    return res.status(404).send("Error");
  }
};

// crear un juego
gameContrl.createGame = async (req, res) => {
  const { name, description, released, rating, platforms, image, genres } =
    req.body;
  try {
    const gameCreated = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      image,
    });

    const genreInDb = await Genre.findAll({
      attributes: ["id"],
      where: { name: genres },
    });
    gameCreated.addGenre(genreInDb);

    res.send(gameCreated);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = gameContrl;
