const fs = require("fs");

class LivrosService {
  static PegarLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
  }

  static PegarLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter((livro) => livro.id === id);
    return livroFiltrado;
  }

  static insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [...livros, livroNovo];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
  }

  static modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

    const conteudoMudado = {
      ...livrosAtuais[indiceModificado],
      ...modificacoes,
    };

    livrosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
  }

  static deletaLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = livrosAtuais.filter((livro) => livro.id !== id);

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
  }
}

module.exports = LivrosService;
