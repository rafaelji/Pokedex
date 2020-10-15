import Api from './Api';

class GetFormsService {
  async get(id) {
    try {
      const result = await Api.get(`/pokemon-form/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new GetFormsService();
