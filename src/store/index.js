import { writable } from 'svelte/store';

const state = {
  id: null,
  url: null,
  title: null,
  actors: null,
  message: null,
  type: null,
  show: false,
  youtube: false,
  trailer: null
};
export const store = writable(state);