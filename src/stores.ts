// import { persist, localStorage, type PersistentStore } from "@macfja/svelte-persistent-store"
import { writable } from "svelte/store"

// const storedLang: string = localStorage.getItem("language")!.toString();
// export const language = writable(storedLang);
// language.subscribe((value: string) => {
//     localStorage.setItem("language", value === 'id' ? 'en' : 'id');
// });

// const storedLight: string = localStorage.getItem("prefersLight")!.toString();
// export const prefersLight: boolean = writable(storedLight)?==="true"?true:false;
// language.subscribe((value: boolean) => {
//     localStorage.setItem("prefersLight", value ? true : false);
// });

// export const language: PersistentStore<boolean> = persist(writable(true), localStorage(), 'language')
// export const prefersLight: PersistentStore<boolean> = persist(writable(true), localStorage(), 'prefersLight')
// export const language = writable(false)
// export const prefersLight = writable(false)
export const alert = writable('Welcome to the to-do list app!')