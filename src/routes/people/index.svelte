<script context="module">
    import commonPagesPreloader from "../../preloaders/common-pages";
	export function preload(props) {
        return commonPagesPreloader.call(this, props);
	}
</script>

<script>
    import CardList from '../../components/CardList.svelte';
    export let cards;
    
    const config = {
        title: "People",
        endpoint: "people",
        titleKey: "name",
        icon: "fa-users",
        items: [
            { key: "height", label: (v) => `Height: ${v}cm` },
            { key: "mass", label: (v) => `Weight: ${v}kg` },
            { key: "birth_year", label: (v) => `Birth Year: ${v}` }
        ],
        cards
    };
</script>

<CardList config={config} />