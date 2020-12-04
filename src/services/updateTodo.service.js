import axios from '../config/api.config';
import endpoints from '../config/endpoints.config';
import { failed, succeed } from '../config/response.config';

const updateTodo = async (id='', updatedPart={}) => {
  try {
    const response = await axios.patch(endpoints.updateTodo(id), updatedPart);
    return succeed(response);
  }
  catch (error) {
    return failed(error);
  }
};

export default updateTodo;