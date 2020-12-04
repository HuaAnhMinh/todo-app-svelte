import { writable } from 'svelte/store';

const _listTodos = () => {
  let {subscribe, set, update} = writable([]);

  return {
    subscribe,
    set: (listTodos=[]) => {
      if (!Array.isArray(listTodos)) {
        throw new Error('Type of list todos must be array.');
      }

      set(listTodos);
    },
    update,
  }
}

const listTodos = _listTodos();
export default listTodos;