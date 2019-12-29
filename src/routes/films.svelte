<script>
    import CardList from '../components/CardList.svelte';
    const config = {
        title: "Films",
        endpoint: "films",
        titleKey: "title",
        icon: "fa-video",
        items: [
			{ key: "director", label: (v) => `Director: ${v}` },
			{ key: "producer", label: (v) => `Producer: ${v}` },
			{ key: "release_date", label: (v) => `Release Date: ${v}` }
		]
    };
</script>

<CardList config={config} />