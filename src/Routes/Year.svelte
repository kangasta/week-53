<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import FloatingNavigation from "../Components/FloatingNavigation.svelte";
	import Navigation from "../Components/Navigation.svelte";
	import Week from "../Components/Week.svelte";

	import { getWeekNumber, getWeeksInYear, getWeekYear } from "../Utils/week";

	export let year: string;

	$: weekNumbers = [...Array(getWeeksInYear(Number(year)))].map((_, i) => i + 1);

	$: {
		document.title = `Weeks of ${year}`;
	};

	const currentWeekId = `week-${getWeekNumber()}-of-${getWeekYear()}`;

	let yearRect: DOMRect
	let currentWeekRect: DOMRect

	const updateRects = () => {
		yearRect = document.getElementById(`year-${year}`)?.getBoundingClientRect()
		currentWeekRect = document.getElementById(currentWeekId)?.getBoundingClientRect()
	}

	onMount(() => {
		document.addEventListener('scroll', updateRects);
		updateRects()
	})

	onDestroy(() => {
		document.removeEventListener('scroll', updateRects);
	})
</script>

<div id={`year-${year}`}>
	<h1>{year}</h1>
	{#each weekNumbers as weekNumber (`${year}-W${weekNumber}`)}
		<Week year={Number(year)} weekNumber={weekNumber} hideYear forceBottomWhitespace />
	{/each}
	<Navigation year={Number(year)} />
	<FloatingNavigation yearRect={yearRect} currentWeekRect={currentWeekRect}/>
</div>
