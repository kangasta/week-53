<script lang="ts">
	import { link } from "svelte-routing";
	import { getNextWeekRoute, getPreviousWeekRoute, withBaseUrl } from "../Utils/navigate";

	export let year;
	export let weekNumber;

	$: links = [
		{name: 'Previous', target: withBaseUrl(getPreviousWeekRoute(year, weekNumber)), },
		{name: 'Next', target: withBaseUrl(getNextWeekRoute(year, weekNumber)), },
		{name: 'Current week', target: withBaseUrl('/')}
	];
</script>

<style>
	a.nav {
		color: var(--text-blue);
		line-height: 2.5rem;
		margin-right: 1rem;
		text-decoration: none;
	}

	a.nav:visited {
		color: var(--text-blue);
	}

	a.nav:hover, a.nav:focus {
		outline: none;
		text-decoration: underline;
	}
</style>


{#each links as l}
	<a class="nav" href={l.target} use:link>{l.name}</a>
{/each}
