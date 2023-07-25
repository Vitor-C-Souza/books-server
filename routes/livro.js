const { Router } = require("express");
const Livros = require("../controllers/livro.js");


const router = Router();

router.get("/", Livros.getLivros);

router.post("/", (req, res) => {
  res.send("Você fez uma requisição do tipo POST");
});

router.patch("/", (req, res) => {
  res.send("Você fez uma requisição do tipo PATCH");
});

router.delete("/", (req, res) => {
  res.send("Você fez uma requisição do tipo DELETE");
});


module.exports = router;