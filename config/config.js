
module.exports = {
  development: {
   username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'board-backend',
    host: 'localhost',
    dialect: 'mysql',
  },
};


