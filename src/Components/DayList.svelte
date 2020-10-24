<script lang="ts">
	import Day from "../Components/Day.svelte"
	import { getMonthName } from "../Utils/names";

	export let monthIndex: number;
	export let days: Date[];
</script>

<style>
	h3 {
		border-bottom: 1px solid var(--text-secondary);;
		color: var(--text-secondary);
		font-size: 1rem;
		line-height: 1.25rem;
		margin: 0;
		padding: 1.25rem 0 0 0;
	}

	ul {
		margin: 0;
		padding: 0;
	}
</style>

<h3>{getMonthName(monthIndex)}</h3>
<ul class="day-list">
	{#each days as day (day.getTime())}
		<Day day={day} />
	{/each}
</ul>
