import axios from '../config/api.config';
import endpoints from '../config/endpoints.config';
import { failed, succeed } from '../config/response.config';

const getTodo = async (id) => {
  try {
    const response = await axios.get(endpoints.getTodo(id));
    return succeed(response);
  }
  catch (error) {
    return failed(error);
  }
};

export default getTodo;