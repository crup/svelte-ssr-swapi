<script>
    import Card from '../components/Card.svelte';
    import CardLoading from '../components/CardLoading.svelte';
    export let config;
    export let isLoading;

    // const cardList = async ()=>{
    //     const baseUrl = "https://swapi.co/api/";
    //     const response = await fetch(`${baseUrl}${config.endpoint}`)
    //     if(response.ok) {
    //         const responseJson = await response.json();
    //         return responseJson.results;
    //     } else {
    //         throw new Error("Something went wrong");
    //     }
    // }
    // const asyncCardList = cardList();
</script>

<style>
    .card-holder {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
</style>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1>{config.title}</h1>
<div class="card-holder">
    <!-- {#await asyncCardList}
        {#each (new Array(10)) as card}
            <CardLoading />
        {/each}
    {:then cards}
        {#each cards as card}
            <Card 
				titleKey={config.titleKey} 
				data={card}
				items={config.items}
                icon={config.icon}
			/>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await} -->
    {#if isLoading}
        {#each (new Array(10)) as card}
            <CardLoading />
        {/each}
    {:else}
        {#each config.cards as card}
            <Card 
                titleKey={config.titleKey} 
                data={card}
                items={config.items}
                icon={config.icon}
            />
        {/each}
    {/if}
</div>
