const { Videogame, Genre } = require("../db");
require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");
const formatter = require("../functions/formatter");

async function allGames() {
  // data for ".next"
  // let gamesAPI = [];
  // let info = await axios.get(`https://api.rawg.io/api/games?key=${APIKEY}`);
  // for (let i = 1; i <= 5; i++) {
  //   gamesAPI = gamesAPI.concat(info.data.results);
  //   info = await axios.get(info.data.next);
  // }
  // return gamesAPI;

  // data for "Pomise.all"
  const arr = [];
  for (let i = 1; i <= 160; i++) {
    arr.push(i);
  }
  const pages = arr.map((page) => {
    return axios.get(
      `https://api.rawg.io/api/games?key=${APIKEY}&page=${page}`
    );
  });

  const games = await Promise.all(pages);
  const result = games.map((g) => g.data.results);
  const arrGames = result.flat();
  return arrGames;
}

let swap = true;

module.exports = async (req, res, next) => {
  if (swap) {
    try {
      const callApi = await allGames();
      const games = formatter(callApi, "games");
      await Videogame.bulkCreate(games);
      // .map((g) => g.name)
      // await Videogame.addGenre(games.genres);
      swap = false;
    } catch (e) {
      return res.status(404).send(e.message);
    }
  }
  next();
};
