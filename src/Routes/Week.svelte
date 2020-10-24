<script lang="ts">
	import DayList from "../Components/DayList.svelte";
	import Navigation from "../Components/Navigation.svelte";
	import { getWeekByMonth } from "../Utils/week";

	export let year: string;
	export let weekNumber: string;
	export let disableNavigation = false;

	$: week = getWeekByMonth(Number(year), Number(weekNumber));
	$: months = Object.entries(week).map(([index, days]) => ({monthIndex: Number(index), days}));

	$: {
		if (!disableNavigation) {
			document.title = `Week ${weekNumber} of ${year}`;
		}

		// December should come before January
		if (months[0]?.monthIndex === 0 && months[1]?.monthIndex === 11) {
			months.reverse();
		}
	}
</script>

<style>
	div.whitespace {
		height: 2.5rem;
		margin-bottom: 1px;
	}
</style>

{#if !disableNavigation}
	<h1>{year}</h1>
{/if}
<h2>Week {weekNumber}</h2>
{#each months as month}
	<DayList {...month} />
{/each}
{#if months.length === 1 || disableNavigation}
	<div class="whitespace" />
{/if}
{#if !disableNavigation}
	<Navigation year={Number(year)} weekNumber={Number(weekNumber)}/>
{/if}
