const express = require("express");
const perpus = express.Router();
const Buku = require ('../database/buku');
// Buku
  perpus.get("/delok", (req,res) => {
    Buku.find()
      .then(lur=> res.json(lur))
      .catch(err => res.send(err));
  });
  perpus.post("/bukuku",(req, response)=> {
    const buku = new Buku({
        buku: req.body.buku,
        penulis: req.body.penulis,
        terbit: req.body.terbit
    });
    buku.save()
      .then(res => {
        response.json(res);
      })
      .catch(err => {
        res.send("error" + err);
      });
  });
  perpus.delete("/bukuke/:id",(req,res)=>{
    let id =  req.params.id
    Buku.deleteOne({_id:id})
    .then(lur =>res.json(lur))
    .catch(err =>res.send("error"+err));
  });
  perpus.put("/bukuka/:id",(req,response)=>{
    let id = req.params.id
    let buku= req.body.buku
    let penulis= req.body.penulis
    let terbit= req.body.terbit
    Buku.update({_id:id},{$set:{buku : buku,penulis : penulis, terbit:terbit}})
      .then(res=>{
        response.json(res)
      })
      .catch(err=>{
        res.send(err)
      })
      
  })
  module.exports = perpus 