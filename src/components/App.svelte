<script>
	export let name;
	let isClicked = false;
	let count = 0;

	const handleClick = () => {
		isClicked = true;
		++count;
	}
</script>

<style lang="scss">
	@import '../styles/App.scss';

	.main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		.main {
			max-width: none;
		}
	}
</style>

<div class="main">
	<h1 class="no-select">Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#if isClicked}
		<p>You have clicked the button {count} times.</p>
	{/if}

	<button class="btn btn-primary" on:click={handleClick}>
		Click me
	</button>
</div>