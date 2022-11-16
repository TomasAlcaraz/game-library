const { Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const genresContrl = {};

async function dataGenres() {
  const data = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
  return data.results;
}

genresContrl.allGenres = async (req, res) => {
  try {
    const genresAPI = await dataGenres();
    genresAPI.forEach((g) => {
      Genre.findOrCreate({
        where: {
          name: g.name,
        },
      });
    });
    const genresDB = await Genre.findAll();
    return res.json(genresDB);
  } catch (e) {
    return res.status(404).send("Hubo un error con los géneros");
  }
};

module.exports = genresContrl;
