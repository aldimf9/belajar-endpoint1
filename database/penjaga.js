const mongoose = require("mongoose");//mengimport mongoose
const Schema = mongoose.Schema;

const penjagaSchema = new Schema({
  nama: {
    type: String
  },
  jabatan: {
    type: String
  },
  kelas: {
    type: String,
  },  
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Penjaga = mongoose.model("penjaga", penjagaSchema);
