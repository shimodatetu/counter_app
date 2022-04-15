<script>
	import Counter from './Counter.svelte';
	import { CounterList } from "./store.js"
	function add_counter() {
		$CounterList = [...$CounterList, {title: "new",num: 0, status: false}]
	}
	$: $CounterList = $CounterList.filter(item => !(item.deleted == true));
	$: sum = !$CounterList.length ? 0: $CounterList.map(counter => counter.num).reduce((a, b) => {
		return a + b;
	});
	$: titles = $CounterList.map(counter => counter.title).join(' , ');
	
</script>

<main>
	<h2>Multiple Counter</h2>
	{#if $CounterList.length}
	<div class="all_counter">
		{#each $CounterList as counter}
			<Counter bind:title={counter.title} bind:num={counter.num} bind:deleted={counter.deleted}/>
		{/each}
	</div>
	{/if}
	<button on:click={add_counter}>
		add_counter
	</button>
	<div>title list : {titles}</div>
	<div>num of sum : {sum}</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 400px;
		margin: 0 auto;
	}
	button {
		width:100%;
	}
</style>