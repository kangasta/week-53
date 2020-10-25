<script lang="ts">
	import { link } from "svelte-routing";
	import { getWeekRoute, getYearRoute, withBasePath } from "../Utils/navigate";

	export let year: number;
	export let weekNumber: number | null = null;

	const getNeighbour = weekNumber !== null ? getWeekRoute : (year: number, _: number, i: number) => getYearRoute(year, i);

	$: links = [
		{name: 'Previous', target: withBasePath(getNeighbour(year, weekNumber, -1)), },
		{name: 'Next', target: withBasePath(getNeighbour(year, weekNumber, 1)), },
		{name: 'Current week', target: withBasePath('/')},
		...(weekNumber !== null ? [{name: 'Year', target: withBasePath(getYearRoute(year))}] : []),
	];
</script>

<style>
	a.nav {
		line-height: 2.5rem;
		margin-right: 1rem;
	}
</style>

{#each links as l}
	<a class="nav" href={l.target} use:link>{l.name}</a>
{/each}
