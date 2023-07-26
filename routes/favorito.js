const { Router } = require("express");
const Favoritos = require("../controllers/favoritos.js");

const router = Router();

router.get("/", Favoritos.getFavoritos);
router.post("/:id", Favoritos.postFavorito);
router.delete("/:id", Favoritos.deleteFavorito);

module.exports = router;
