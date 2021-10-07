const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// modificar aqui se necessário
const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

// esse é o nome do banco de dados utilizado neste projeto
const DB_NAME = 'StoreManager';

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((connection) => {
        db = connection.db(DB_NAME);
        return db;
      });
};

module.exports = connection;
