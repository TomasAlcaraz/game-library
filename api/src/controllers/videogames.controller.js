const { Videogame, Genre } = require("../db");
const { APIKEY } = process.env;
const axios = require("axios");
const gameContrl = {};

async function dataGames(type, value) {
  let data;
  if (type === "name") {
    value = value.split(" ").join("-").toLowerCase();
    data = await axios.get(
      `https://api.rawg.io/api/games?search=${value}&key=${APIKEY}&page_size=15`
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
      try {
        const gamesAPI = await dataGames("name", name).map((game) => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
            genres: game.genres.map((g) => g.name),
          };
        });

        const games = [...gamesDB, ...gamesAPI];
        return games.splice(0, 16);
      } catch (e) {
        return res.status(404).send(`No se encuentran resultados de ${name}`);
      }
    }

    const games = await Videogame.findAll({ include: [Genre] });
    return res.json(games);
  } catch (e) {
    return res.status(404).send("No hay videojuegos disponibles");
  }
};

gameContrl.getById = async (req, res) => {
  const { idVideogame } = req.params;
  try {
    const gameDB = await Videogame.findOne({
      where: {
        id: idVideogame,
      },
      include: [Genre],
    });
    if (gameDB) return res.json(gameDB);

    const gameAPI = await dataGames("id", idVideogame);
    if (gameAPI) return res.json(gameAPI);

    return res.status(404).send("No hay resultados");
  } catch (e) {
    return res.status(404).send("Error");
  }
};

module.exports = gameContrl;
