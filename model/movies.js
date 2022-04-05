module.exports = (sequelize,Sequelize) => {
  const Movies = sequelize.define("tb_movies", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    }
  });

  return Movies;
};
