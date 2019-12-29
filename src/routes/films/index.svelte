<script context="module">
    import commonPagesPreloader from "../../preloaders/common-pages";
	export function preload(page) {
        return commonPagesPreloader.call(this, page);
	}
</script>

<script>
    import CardList from '../../components/CardList.svelte';
    export let cards;
    
    const config = {
        title: "Starwars: Films 🎬🍿📽",
        endpoint: "films",
        titleKey: "title",
        icon: "🍿",
        items: [
			{ key: "director", label: (v) => `Director: ${v}` },
			{ key: "producer", label: (v) => `Producer: ${v}` },
			{ key: "release_date", label: (v) => `Release Date: ${v}` }
        ],
        cards
    };
</script>

<CardList config={config} />