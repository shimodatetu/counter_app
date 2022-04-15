<script>
    export let num = 0;
    export let title = "";
    export let deleted = false;
	const plus = () => num += 1;
    const minus = () =>  num = num > 0 ? num - 1: num;
	const clear  = () => num = 0;
    const erase = () => deleted = true;
</script>

<div class="counter">
    <input bind:value={title}>
    {num}
	<button on:click={plus}>+</button>
    <button disabled={!num} on:click={minus}>-</button>
	<button disabled={!num} on:click={clear}>0</button>
	<button on:click={erase}>✖️</button>
</div>

<style>
    .counter{
        border:solid thin #ddd;
        border-radius:5px;
        margin-bottom:5px;
    }
	button,input {
		margin: 2px
	}
</style>