import { writable } from 'svelte/store';

export const isSSR = writable(true);