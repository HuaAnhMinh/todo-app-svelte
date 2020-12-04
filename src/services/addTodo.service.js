import axios from '../config/api.config';
import endpoints from '../config/endpoints.config';
import { failed, succeed } from '../config/response.config';

const addTodo = async (newTodo={}) => {
  try {
    const response = await axios.post(endpoints.createTodo(), newTodo);
    return succeed(response);
  }
  catch (error) {
    return failed(error);
  }
};

export default addTodo;