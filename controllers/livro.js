const LivrosService = require("../services/livro.js");

class Livros {
  static getLivros(req, res) {
    try {
      const livros = LivrosService.PegarLivros();
      res.send(livros);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}

module.exports = Livros;
