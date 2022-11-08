const { Genre } = require("../db");
const { APIKEY } = process.env;
const axios = require("axios");
const genreContrl = {};

async function dataGenres() {
  const data = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
  return data.results;
}

genreContrl.allGenres = async (req, res) => {
  try {
    const genresDB = await Genre.findAll();
    if (genresDB.length) {
      return res.json(genresDB);
    } else {
      const genresAPI = await dataGenres();
      await Genre.bulkCreate(genresAPI);
    }
  } catch (e) {
    return res.status(404).send("Hubo un error con los géneros");
  }
};

module.exports = genreContrl;
