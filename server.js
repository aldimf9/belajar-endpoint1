const express = require("express"); // mengimpor express
const bodyparser = require("body-parser");//mengimpor bodyParser
const mongoose = require("mongoose");
var app = express();//mendeklarasikan express
const port = process.env.PORT || 7000;//port node
const mongoUrl = "mongodb://localhost:27017/perpustakaan";//url database dan nama database
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })//menghubungkan  mongoose
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
// menghubungkan router dan database buku
const Buku = require("./routes/Buku");
app.use("/buku", Buku);
// menghubungkan router dan database penjaga
const Penjaga = require('./routes/Penjaga');
app.use("/penjaga",Penjaga)
// menghubungkan router dan database pengunjung
const Pengunjung = require('./routes/Pengunjung');
app.use('/pengunjung',Pengunjung)
app.listen(port, () => console.log("mlaku"));