const { database } = require("../config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);
// const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
//   host: database.HOST,
//   dialect: database.dialect,
//   operatorsAliases: false,
//   pool: {
//     max: database.pool.max,
//     min: database.pool.min,
//     acquire: database.pool.acquire,
//     idle: database.pool.idle
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require("./movies.js")(sequelize, Sequelize);
//db.users.belongsTo(db.role);

module.exports = db;