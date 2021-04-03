const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const model = mongoose.model;

const listaSchema = new mongoose.Schema(
    {
      nome: {type: String},
      decricao: {type: String},
      data: {type: String}
    },
    {
        timestamps: true
    }
);

module.exports = new mongoose.model('lista', listaSchema);