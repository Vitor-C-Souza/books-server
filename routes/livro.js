const { Router } = require("express");
const Livros = require("../controllers/livro.js");


const router = Router();

router.get("/", Livros.getLivros);

router.get("/:id", Livros.getLivrosPorId);

router.post("/", Livros.postLivro);

router.patch("/:id", Livros.patchLivro);

router.delete("/:id", Livros.deleteLivro);


module.exports = router;