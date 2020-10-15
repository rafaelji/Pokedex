import Api from './Api';

class GetPokemonService {
  async get(id) {
    try {
      const result = await Api.get(`/pokemon/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GetPokemonService();
