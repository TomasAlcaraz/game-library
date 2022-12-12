const { Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const genresContrl = {};

async function dataGenres() {
  const info = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
  return info.data;
}

genresContrl.allGenres = async (req, res) => {
  try {
    const localGenres = await Genre.findAll();
    if (localGenres.length) return res.json(localGenres)
    
    const genresAPI = await dataGenres();
    genresAPI.results.forEach((g) => {
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
