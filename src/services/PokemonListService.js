import Api from './Api';

class PokemonListService {
  async listAll(offset) {
    try {
      const result = await Api.get(`/pokemon?offset=${offset}&limit=20`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PokemonListService();
