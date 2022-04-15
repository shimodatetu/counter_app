<script>
	import { createEventDispatcher } from 'svelte';
    export let num = 0;
    export let value = "";
	const dispatch = createEventDispatcher();
	const plus = () => num += 1;
    const minus = () =>  num = num > 0 ? num - 1: num;
	const clear  = () => num = 0;
</script>

<div class="counter">
    <input bind:value>
    {num}
	<button on:click={plus}>+</button>
    <button disabled={!num} on:click={minus}>-</button>
	<button disabled={!num} on:click={clear}>0</button>
</div>

<style>

	button {
		margin: 0
	}
</style>