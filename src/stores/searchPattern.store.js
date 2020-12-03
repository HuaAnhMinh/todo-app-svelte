import { writable } from 'svelte/store';

const _searchPattern = () => {
  let {subscribe, set} = writable('');

  return {
    subscribe,
    set: (pattern='') => {
      if (typeof pattern !== 'string') {
        throw new Error('Type of search pattern must be string.');
      }

      set(pattern);
    },
  }
}

const searchPattern = _searchPattern();
export default searchPattern;