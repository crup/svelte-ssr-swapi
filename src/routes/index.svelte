<script>
	export const items = [
		{ path: "people", label: "People" },
		{ path: "films", label: "Films" },
		{ path: "starships", label: "Starships" },
		{ path: "vehicles", label: "Vehicles" },
		{ path: "species", label: "Species" },
		{ path: "planets", label: "Planets" },
	]
</script>
<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	nav {
		display: flex;
		justify-content: center;
	}
	nav a{
		margin-right: 30px;
	}
</style>

<svelte:head>
	<title>StarWars</title>
</svelte:head>

<h1>StarWars</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
</figure>
<nav>
{#each items as item}
	<a href="{item.path}">{item.label}</a>
{/each}
</nav>

<p><strong>Do your vagjin hang like sleeve of wizard?</strong></p>
