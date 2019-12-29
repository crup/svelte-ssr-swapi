<script>
    import CardList from '../components/CardList.svelte';
    const config = {
        title: "People",
        endpoint: "people",
        titleKey: "name",
        icon: "fa-users",
        items: [
            { key: "height", label: (v) => `Height: ${v}cm` },
            { key: "mass", label: (v) => `Weight: ${v}kg` },
            { key: "birth_year", label: (v) => `Birth Year: ${v}` }
        ]
    };
</script>

<CardList config={config} />