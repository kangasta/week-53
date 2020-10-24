<script lang="ts">
	import { getWeekdayName } from "../Utils/names";
	import { isToday } from "../Utils/week";

	export let day: Date;

	$: date = day.getDate();
	$: weekday = getWeekdayName((day.getDay() + 6));
	$: sunday = day.getDay() === 0;
</script>

<style>
	b {
		color: var(--text-grey);
		display: inline-block;
		font-size: 1.25em;
		width: 3ch;
	}

	b.sunday {
		color: var(--text-red);
	}

	li {
		border-bottom: 1px solid var(--text-secondary);
		color: var(--text-primary);
		font-size: 1rem;
		height: 2.5rem;
		line-height: 2.5rem;
		list-style: none;
	}

	span.today {
		background: var(--text-blue);
		color: var(--background);
		display: inline-block;
		font-size: 1rem;
		line-height: normal;
		margin: 0 0.5em;
		padding: 0.125rem 0.5em;
		text-align: center;

		border-radius: 0.75rem;
	}
</style>

<li>
	<b class:sunday>{date}</b> {weekday}
	{#if isToday(day)}
		<span class="today">Today</span>
	{/if}
</li>
