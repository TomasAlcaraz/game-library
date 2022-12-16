module.exports = function formatter(value, type) {
  if (type === "id") {
    const result = {
      id: value.id,
      name: value.name,
      image: value.background_image,
      genres: value.genres.map((g) => g.name),
      description: value.description,
      released: value.released,
      platforms: value.platforms.map((g) => g.platform.name),
      rating: value.rating,
    };
    return result;
  }
  if (type === "games") {
    const result = value.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres.map((g) => g.name),
        released: game.released,
        platforms: game.platforms.map((g) => g.platform.name),
        rating: game.rating,
      };
    });
    return result;
  }
};
