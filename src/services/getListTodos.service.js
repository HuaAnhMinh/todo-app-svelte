import axios from '../config/api.config';
import endpoints from '../config/endpoints.config';
import { failed, succeed } from '../config/response.config';

const getListTodos = async () => {
  try {
    const response = await axios.get(endpoints.getListTodos());
    return succeed(response);
  }
  catch (error) {
    return failed(error);
  }
};

export default getListTodos;