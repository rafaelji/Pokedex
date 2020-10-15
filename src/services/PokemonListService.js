import Api from './Api';

class PokemonListService {
  async listAll() {
    try {
      const result = await Api.get('/pokemon');
      return result.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PokemonListService();
