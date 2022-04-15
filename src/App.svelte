<script>
	import Counter from './Counter.svelte';
	import { counters } from "./store.js"
	function add_counter() {
		$counters = [...$counters, {title: "new",count: 0, status: false}]
	}
	$: sum = $counters.map(item => item.count).reduce((a, b) => {
		return a + b;
	});
	$: titles = $counters.map(item => item.title).join(' , ');

</script>

<main>
	<div class="all_counter">
		{#each $counters as counter}
			<Counter bind:value={counter.title} bind:num={counter.count}/>
		{/each}
	</div>
	<button on:click={add_counter}>
		add_counter
	</button>
	<div>title list:{titles}</div>
	<div>num of sum:{sum}</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 400px;
		margin: 0 auto;
	}
</style>