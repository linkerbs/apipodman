const mongoose = require('mongoose');
//Definimos la conexion usando el contenedor
const connectionString = 'mongodb://mongo:27017/cinema';
//Vamos a usar mongoose
mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
