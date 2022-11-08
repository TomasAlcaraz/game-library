const controller = {};
const gameContrl = require("./videogames.controller")
const genreContrl = require("./genres.controller")

controller.getByName = gameContrl.getByName;
controller.getById = gameContrl.getById;
controller.allGenres = genreContrl.allGenres;

module.exports = controller;