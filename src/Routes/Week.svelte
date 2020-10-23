<script lang="ts">
	import DayList from "../Components/DayList.svelte";
	import { getWeekByMonth } from "../Utils/week";

	export let year: number;
	export let weekNumber: number;

	const week = getWeekByMonth(year, weekNumber);
	const months = Object.entries(week).map(([index, days]) => ({monthIndex: Number(index), days}));

	$: {
		// December should come before January
		if (months[1]?.monthIndex === 11) {
			months.reverse();
		}
	}
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
</style>

<h1>{year}</h1>
<h2>Week {weekNumber}</h2>
{#each months as month}
	<DayList {...month} />
{/each}
