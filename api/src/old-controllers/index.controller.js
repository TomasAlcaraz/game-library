const controller = {};
const gameContrl = require("./videogames.controller");
const genresContrl = require("./genres.controller");

controller.getGames = gameContrl.getGames;
controller.getById = gameContrl.getById;
controller.createGame = gameContrl.createGame;
controller.allGenres = genresContrl.allGenres;

module.exports = controller;
