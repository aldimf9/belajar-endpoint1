const mongoose = require("mongoose");//mengimport mongoose
const Schema = mongoose.Schema;

const pengunjungSchema = new Schema({
  nama: {
    type: String
  },
  kelas : {
    type : String
  },
  keperluan:{
      type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Pengunjung = mongoose.model("pengunjung", pengunjungSchema);
