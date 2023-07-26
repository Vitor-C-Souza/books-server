const FavoritosService = require("../services/favorito.js");

class Favoritos {
  static getFavoritos(req, res) {
    try {
      const livros = FavoritosService.getTodosFavoritos();
      res.send(livros);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static postFavorito(req, res) {
    try {
      const { id } = req.params;
      FavoritosService.insereFavorito(id);
      res.status(201);
      res.send("Livro inserido com sucesso");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static deleteFavorito(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        FavoritosService.deletaFavoritoPorId(id);
        res.send("Favorito deletado com sucesso");
      } else {
        res.status(422);
        res.send("ID inválido");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}

module.exports = Favoritos;
