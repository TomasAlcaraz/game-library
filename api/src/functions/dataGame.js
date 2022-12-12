require("dotenv").config();
const { APIKEY } = process.env;
const axios = require("axios");

module.exports = async function dataGame(id) {
  try {
    const game = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${APIKEY}`
    );
    return game.data;
  } catch (e) {
    return res.status(404).send(e.message);
  }
};
