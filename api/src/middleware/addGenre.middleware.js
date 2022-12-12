const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
let swap = true;

async function dataGenres() {
  const info = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
  return info.data;
}

module.exports = async (req, res, next) => {
  if (swap) {
    try {
      const allGenres = await dataGenres();
      allGenres.results.forEach((g) => {
        Genre.findOrCreate({
          where: {
            name: g.name,
          },
        });
      });
    } catch (e) {
      return res.status(404).send(e.message);
    }
  }
  next();
};
