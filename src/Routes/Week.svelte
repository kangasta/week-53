<script lang="ts">
	import { onMount } from "svelte";

	import DayList from "../Components/DayList.svelte";
	import Navigation from "../Components/Navigation.svelte";
	import { getWeekByMonth } from "../Utils/week";

	export let year: number;
	export let weekNumber: number;

	$: week = getWeekByMonth(year, weekNumber);
	$: months = Object.entries(week).map(([index, days]) => ({monthIndex: Number(index), days}));

	$: {
		// December should come before January
		if (months[0]?.monthIndex === 0 && months[1]?.monthIndex === 11) {
			months.reverse();
		}
	}

	onMount(() => {
		document.title = `Week ${weekNumber} of ${year}`;
	});
</script>

<style>
	h1 {
		color: var(--text-secondary);
		font-size: 1.5rem;
		margin: 2rem 0 0 0;
	}

	h2 {
		margin: 0 0 1rem 0;
		font-size: 2rem;
	}

	div.whitespace {
		height: 2.5rem;
		margin-bottom: 1px;
	}
</style>

<h1>{year}</h1>
<h2>Week {weekNumber}</h2>
{#each months as month}
	<DayList {...month} />
{/each}
{#if months.length === 1}
	<div class="whitespace" />
{/if}
<Navigation {year} {weekNumber}/>
