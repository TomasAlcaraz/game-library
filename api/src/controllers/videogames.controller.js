const { Videogame, Genre } = require("../db");
const { APIKEY } = process.env;
const axios = require("axios");
const gameContrl = {};

async function dataGames(type, value) {
  let data;
  if (type === "name") {
    value = value.split(" ").join("-").toLowerCase();
    data = await axios.get(
      `https://api.rawg.io/api/games?search=${value}&key=${APIKEY}`
    );
    return data.results;
  }
  if (type === "id") {
    data = await axios.get(
      `https://api.rawg.io/api/games/${value}?key=${APIKEY}`
    );
    return data.results;
  }
  data = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
  return data.results;
}

gameContrl.getByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const gamesDB = await Videogame.findAll({ where: { name: name } });
      if (gamesDB) return res.json(gamesDB);
      try {
        const gamesAPI = await dataGames("name", name).map((game) => {
          return {
            id: gamesAPI.id,
            name: gamesAPI.name,
            description: gamesAPI.description,
            image: gamesAPI.background_image,
            released: gamesAPI.released,
            rating: gamesAPI.rating,
            genres: gamesAPI.genres.map((g) => g.name),
            platforms: gamesAPI.platforms.map((g) => g.platform.name),
          };
        });
        if (gamesAPI) return res.json(gamesAPI);
        else throw new Error();
      } catch (e) {
        return res.status(404).send(`No se encuentran resultados de ${name}`);
      }
    }

    const games = await Videogame.findAll({ include: [Genre] });
    return res.json(games.splice(0, 16));
  } catch (e) {
    return res.status(404).send("No video games available");
  }
};

gameContrl.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const gameDB = await Videogame.findOne({
      where: {
        id: id,
      },
      include: [Genre],
    });
    if (gameDB) return res.json(gameDB);

    const gameAPI = await dataGames("id", id);
    if (gameAPI) {
      let formated = [
        {
          id: gameAPI.id,
          name: gameAPI.name,
          description: gameAPI.description,
          image: gameAPI.background_image,
          released: gameAPI.released,
          rating: gameAPI.rating,
          genres: gameAPI.genres.map((g) => g.name),
          platforms: gameAPI.platforms.map((g) => g.platform.name),
        },
      ];
      formated.length
        ? res.status(200).json(formated)
        : res.status(404).send("Did not find game by Id");
    }
    return res.status(404).send("No results found");
  } catch (e) {
    return res.status(404).send("Error");
  }
};

module.exports = gameContrl;
