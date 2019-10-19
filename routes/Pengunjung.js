const express = require("express");
const perpus = express.Router();
const Pengunjung = require ('../database/pengunjung');
// Pengunjung
perpus.get("/delok", (req,res) => {
  Pengunjung.find()
    .then(lur=> res.json(lur))
    .catch(err => res.send(err));
});
  perpus.post("/pengunjungku",(req, response)=> {
    const pengunjung = new Pengunjung({
        nama: req.body.nama,
        kelas: req.body.kelas,
        keperluan: req.body.keperluan
    });
    pengunjung.save()
      .then(res => {
        response.json(res);
      })
      .catch(err => {
        res.send("error" + err);
      });
  });
  perpus.delete("/pengunjungke/:id",(req,res)=>{
    let id =  req.params.id
    Pengunjung.deleteOne({_id:id})
    .then(lur =>res.json(lur))
    .catch(err =>res.send("error"+err));
  });
  perpus.put("/pengunjungka/:id",(req,response)=>{
    let id = req.params.id
    let nama= req.body.nama
    let kelas= req.body.kelas
    let keperluan= req.body.keperluan
    Pengunjung.update({_id:id},{$set:{nama : nama,kelas : kelas, keperluan:keperluan}})
      .then(res=>{
        response.json(res)
      })
      .catch(err=>{
        res.send(err)
      })
      
  })
  module.exports = perpus