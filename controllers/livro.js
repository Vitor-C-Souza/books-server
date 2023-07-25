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

  static getLivrosPorId(req, res) {
    const { id } = req.params;
    try {
      if(id && Number(id)) {
        const livro = LivrosService.PegarLivroPorId(id);
        res.send(livro);
      } else {
        res.status(422);
        res.send("Id inválido");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static postLivro(req, res) {
    const livroNovo = req.body;
    try {

      if(req.body.nome) {
        LivrosService.insereLivro(livroNovo);
  
        res.status(201);
        res.send("Livro inserido com sucesso.");
      } else {
        res.status(422);
        res.send("O campo nome é obrigatório");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static patchLivro(req, res) {
    try {
      const id = req.params.id;

      if(id && Number(id)) {
        const body = req.body;
  
        LivrosService.modificaLivro(body, id);
        res.send("Item modificado com sucesso");
      } else {
        res.status(422);
        res.send("Id inválido");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static deleteLivro(req, res) {
    const { id } = req.params;

    try {

      if(id && Number(id)) {
        LivrosService.deletaLivro(id);
  
        res.send("livro deletado com sucesso!");
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

module.exports = Livros;
