import mongoose from 'mongoose';

const ListaSchema = new mongoose.Schema(
  {
    nome: { type: String },
    decricao: { type: String },
    data: { type: String }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Lista', ListaSchema);