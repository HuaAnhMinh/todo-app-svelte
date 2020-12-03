import { writable } from 'svelte/store';

const _todo = () => {
  let {subscribe, set, update} = writable('');

  return {
    subscribe,
    set: (todo={}) => {
      if (typeof todo !== 'object') {
        throw new Error('Type of todo must be object');
      }

      if (typeof todo._id !== 'string' ||
        typeof todo.title !== 'string' ||
        typeof todo.description !== 'string' ||
        typeof todo.deadline !== 'number' ||
        typeof todo.isFinished !== 'boolean') {
        throw new Error('Format of todo is invalid.');
      }

      set(todo);
    },
    update,
  }
}

const todo = _todo();
export default todo;