const { DataTypes, STRING } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

function randomNum() {
  const radom = Math.floor(Math.random() * 100000000);
  return radom;
}

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.INTEGER,
        defaultValue: randomNum,
        primaryKey: true,
      },
      // serial: {
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
        
      //   allowNull: false,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        // allowNull: false,
      },
      released: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      rating: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1.0,
          max: 5.0,
        },
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      genres: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        // allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
