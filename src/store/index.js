import { writable } from 'svelte/store';

const state = {
  id: null,
  url: null,
  title: null,
  actors: null
};
export const store = writable(state);