const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      process.env.URI_DATABASE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log('MongoDB CONECT!'))
    .catch((erro) =>
      console.log('Erro ao conectar com MongoDB!!, erro: ${erro}'),
    );
};

module.exports = connectToDatabase;
