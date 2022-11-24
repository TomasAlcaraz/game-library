const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const gameContrl = {};

// api calls function

async function allGames() {
  let gamesAPI = [];
  let info = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
  for (let i = 1; i <= 5; i++) {
    gamesAPI = gamesAPI.concat(info.data.results);
    info = await axios.get(info.data.next);
  }

  return gamesAPI;

  // Pomise.all
  // const pages = [1, 2, 3, 4, 5].map((page) => {
  //   return axios.get(
  //     `https://api.rawg.io/api/games?key=${APIKEY}&page=${page}`
  //   );
  // });

  // const games = await Promise.all(pages);
  // console.log(games);
  // return games;
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
        const gamesAPI = callAPI.map((game) => {
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

        const result = gamesDB.concat(gamesAPI);
        return res.json(result);
      } catch (e) {
        return res.status(404).send(`The game: ${name} not found`);
      }
    }
    const gamesDB = await Videogame.findAll({
      include: [{ model: Genre }],
    });

    const callAPI = await allGames();
    const gamesAPI = callAPI.map((game) => {
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
    const games = gamesDB.concat(gamesAPI);
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

    const gameAPI = await dataGames("id", id);

    if (gameAPI) {
      let formated = {
        id: gameAPI.id,
        name: gameAPI.name,
        description: gameAPI.description,
        image: gameAPI.background_image,
        released: gameAPI.released,
        rating: gameAPI.rating,
        genres: gameAPI.genres.map((g) => g.name),
        platforms: gameAPI.platforms.map((g) => g.platform.name),
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
