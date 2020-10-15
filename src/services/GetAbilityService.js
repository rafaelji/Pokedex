import Api from './Api';

class GetAbilityService {
  async get(id) {
    try {
      const result = await Api.get(`/ability/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GetAbilityService();
