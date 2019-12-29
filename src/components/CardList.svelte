<script>
    import Card from '../components/Card.svelte';
    import CardLoading from '../components/CardLoading.svelte';
    import { onMount } from "svelte";
    import { isSSR } from "../store";
    export let config;
    export let cards = config.cards;
    export let cardList = undefined;
    export let asyncCardList = undefined;

    onMount(() => {
        if($isSSR) {
            isSSR.set(false);
        } else {
            cardList = async () => {
                const baseUrl = "https://swapi.co/api/";
                const response = await fetch(`${baseUrl}${config.endpoint}`)
                if(response.ok) {
                    const responseJson = await response.json();
                    return responseJson.results;
                } else {
                    throw new Error("Something went wrong");
                }
            }
            asyncCardList = cardList();
        }
    });
    
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
    {#if asyncCardList}
        {#await asyncCardList}
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
        {/await}
    {/if}
    {#if cards}
        {#each cards as card}
            <p>ssr cards</p>
            <Card 
                titleKey={config.titleKey} 
                data={card}
                items={config.items}
                icon={config.icon}
            />
        {/each}
    {/if}
</div>
