const base = 'http://localhost:8000';

const endpoints = {
  base: () => base,
  createTodo: () => `${base}/todos`,
  getListTodos: () => `${base}/todos`,
  getTodo: (id) => `${base}/todos/${id}`,
  updateTodo: (id) => `${base}/todos/${id}`,
  deleteTodo: (id) => `${base}/todos/${id}`,
};

export default endpoints;