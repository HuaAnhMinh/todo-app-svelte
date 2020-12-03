import axios from '../config/api.config';
import endpoints from '../config/endpoints.config';
import { failed, succeed } from '../config/response.config';

const removeTodo = async (id) => {
  try {
    const response = await axios.delete(endpoints.deleteTodo(id));
    return succeed(response);
  }
  catch (error) {
    return failed(error);
  }
};

export default removeTodo;