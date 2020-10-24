<script lang="ts">
	import { getWeekdayName } from "../Utils/names";

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
</style>

<li>
	<b class:sunday>{date}</b> {weekday}
</li>
