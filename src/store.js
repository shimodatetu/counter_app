import { writable } from "svelte/store"

export const CounterList = writable([
    {title:'new', num:0, deleted:false},
    {title:'new', num:0, deleted:false}
])

