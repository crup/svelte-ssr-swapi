<script>
    import CardList from '../components/CardList.svelte';
    const config = {
        title: "Species",
        endpoint: "species",
		titleKey: "name",
		icon: "fab fa-reddit-alien",
        items: [
			{ key: "classification", label: (v) => `Classification: ${v}` },
			{ key: "designation", label: (v) => `Designation: ${v}` },
			{ key: "average_height", label: (v) => `Average Height: ${v}` },
			{ key: "skin_colors", label: (v) => `Skin colors: ${v}` },
			{ key: "hair_colors", label: (v) => `Hair colors: ${v}` },
			{ key: "eye_colors", label: (v) => `Eye colors: ${v}` },
			{ key: "average_lifespan", label: (v) => `Lifespan: ${v}` },
			{ key: "language", label: (v) => `Language: ${v}` }
		]
    };
</script>

<CardList config={config} />