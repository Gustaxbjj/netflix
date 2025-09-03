import { filmes, filmes2, filmesNum } from "./FilmesMock.js";

class FilmesService {

    constructor() {
        this.todosFilmes = [...filmes, ...filmes2, ...filmesNum];
    }

    getById(id) {
        return this.todosFilmes.find(filme => filme.id === id) || null;
    }

    getRandomFilme() {
        const random = Math.floor(Math.random() * (this.todosFilmes.length));
        return this.todosFilmes[random];
    }
}

export default new FilmesService();
