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
        title: "Planets",
        endpoint: "planets",
		titleKey: "name",
		icon: "fa-globe-asia",
        items: [
			{ key: "rotation_period", label: (v) => `Rotation Period: ${v}` },
			{ key: "orbital_period", label: (v) => `Orbital Period: ${v}` },
			{ key: "diameter", label: (v) => `Diameter Height: ${v}` },
			{ key: "climate", label: (v) => `Climate: ${v}` },
			{ key: "terrain", label: (v) => `Terrain: ${v}` },
			{ key: "surface_water", label: (v) => `Surface Water: ${v}` },
			{ key: "population", label: (v) => `Population: ${v}` },
			{ key: "gravity", label: (v) => `Gravity: ${v}` }
		],
		cards
    };
</script>

<CardList config={config} />