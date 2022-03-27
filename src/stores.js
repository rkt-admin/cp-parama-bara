import { writable } from 'svelte/store';
function createLang() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toggle: () => update(lang => !lang),
		reset: () => set(false)
	};
}

export const language = createLang();
export const alert = writable('Welcome to the to-do list app!')