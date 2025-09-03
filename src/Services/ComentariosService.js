import { comentarios } from "./ComentariosMock.js";

class ComentarioService {
  getByFilmeId(idFilme) {
    return comentarios.filter(c => c.idFilme === idFilme);
  }
}

export default new ComentarioService();
