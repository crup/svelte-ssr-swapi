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
        title: "Starwars: Vehicles 🚙🏍🚲",
        endpoint: "vehicles",
		titleKey: "name",
		icon: "🏍",
        items: [
			{ key: "model", label: (v) => `Model: ${v}` },
			{ key: "manufacturer", label: (v) => `Manufacturer: ${v}` },
			{ key: "vehicle_class", label: (v) => `Vehicles Class: ${v}` },
			{ key: "consumables", label: (v) => `Consumables: ${v}` },
			{ key: "length", label: (v) => `length: ${v}` },
			{ key: "passengers", label: (v) => `Passengers: ${v}` },
			{ key: "cargo_capacity", label: (v) => `Cargo Capacity: ${v}` },
			{ key: "cost_in_credits", label: (v) => `Cost: ${v}` }
		],
		cards
    };
</script>

<CardList config={config} />