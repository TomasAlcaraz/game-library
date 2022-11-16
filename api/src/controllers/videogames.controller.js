const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const gameContrl = {};

// api calls function
async function allGames() {
  let games = [];
  for (let i = 1; i <= 5; i++) {
    data = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
    games = games.concat(data.data.results);
    data = data.data.next;
  }
  return games;
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
  return "Error";
}

// busca un juego por su nombre o devuelve los 100 primeros juegos
gameContrl.getGames = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      try {
        const gamesDB = await Videogame.findAll({
          where: { name: name },
          include: [Genre],
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

        const result = [...gamesDB, ...gamesAPI];
        return res.json(result);
      } catch (e) {
        return res.status(404).send(`The game: ${name} not found`);
      }
    }
    const games = await allGames();
    const result = games.map((game) => {
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
    return res.send(result);
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
        where: id,
        include: [Genre],
      });
      return res.json(gameDB);
    }

    const gameAPI = await dataGames("id", id);
    console.log(gameAPI);
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
  const { name, description, released, rating, platforms, image } = req.body;
  try {
    const gameCreated = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      image,
    });

    // const genreInDb = await Genre.findAll({
    //   where: { name: genres },
    // });
    // gameCreated.addGenre(genreInDb);
    res.send(gameCreated);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

// delate
// gameContrl.delateGame = async (req, res) => {
//   try {
//     await Videogame.delate()
//   } catch (e) {

//   }
// }

module.exports = gameContrl;
