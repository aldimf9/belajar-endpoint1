const mongoose = require("mongoose");//mengimport mongoose
const Schema = mongoose.Schema;

const bukuSchema = new Schema({
  buku: {
    type: String
  },
  penulis: {
    type: String
  },
  terbit: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Buku = mongoose.model("buku", bukuSchema);
