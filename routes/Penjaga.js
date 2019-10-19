const express = require("express");
const perpus = express.Router();
const Penjaga = require ('../database/penjaga');
// Penjaga
perpus.get("/delok", (req,res) => {
  Penjaga.find()
    .then(lur=> res.json(lur))
    .catch(err => res.send(err));
});
  perpus.post("/penjagaKi",(req, response)=> {
    const penjaga = new Penjaga({
        nama: req.body.nama,
        jabatan: req.body.jabatan,
        kelas: req.body.kelas
    });
    penjaga.save()
      .then(res => {
        response.json(res);
      })
      .catch(err => {
        res.send("error" + err);
      });
  });
  perpus.delete("/penjagake/:id",(req,res)=>{
    let id =  req.params.id
    Penjaga.deleteOne({_id:id})
    .then(lur =>res.json(lur))
    .catch(err =>res.send("error"+err));
  });
  perpus.put("/penjagaKa/:id",(req,response)=>{
    let id = req.params.id
    let nama= req.body.nama
    let jabatan= req.body.jabatan
    let kelas= req.body.kelas
    Penjaga.update({_id:id},{$set:{nama: nama,jabatan : jabatan, kelas:kelas}})
      .then(res=>{
        response.json(res)
      })
      .catch(err=>{
        res.send(err)
      })
      
  })
  module.exports = perpus