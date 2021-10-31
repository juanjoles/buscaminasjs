const dbConfig = require ('../config/db.config');

const Sequelize = require ('sequelize');
const sequelize = new Sequelize(dbConfig.DB_NAME,dbConfig.DB_USERNAME,dbConfig.DB_PASSWORD,{
    host:dbConfig.DB_HOST,
    dialect:dbConfig.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.juego = require("./buscaminas.model.js")(sequelize,Sequelize);
module.exports = db;