<script lang="ts">
	import Navigation from "../Components/Navigation.svelte";
	import Week from "../Routes/Week.svelte";
	import { getWeeksInYear } from "../Utils/week";

	export let year: string;

	$: weekNumbers = [...Array(getWeeksInYear(Number(year)))].map((_, i) => i + 1);

	$: {
		document.title = `Weeks of ${year}`;
	};
</script>

<h1>{year}</h1>
{#each weekNumbers as weekNumber (`${year}-W${weekNumber}`)}
	<Week {year} weekNumber={String(weekNumber)} disableNavigation/>
{/each}
<Navigation year={Number(year)} />
