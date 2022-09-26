const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

const { DB_NAME, DB_USER, DB_PASSWORD, JAWSDB_URL } =
  process.env;

  if (JAWSDB_URL) {
    console.log("Attempting to connect with connection url");
    sequelize = new Sequelize(JAWSDB_URL);

} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD, {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
        //port for mySQL connection
    );
}

module.exports = sequelize;