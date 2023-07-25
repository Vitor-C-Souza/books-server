const fs = require("fs");

class LivrosService {
  static PegarLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
  }
}

module.exports = LivrosService;
