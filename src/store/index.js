import { writable } from 'svelte/store';

const state = {
  id: null,
  url: null,
  title: null,
  actors: null,
  movies: []
};

export const store = writable(state);
