import { writable } from "svelte/store"

export const counters = writable([
    {title:'new', count:0},
    {title:'new', count:0}
])
