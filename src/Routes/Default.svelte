
<script lang="ts">
	import { onMount } from 'svelte';
	import { navigate } from 'svelte-routing';
	import { getWeekNumber, getWeekYear } from '../Utils/week';

	const currentWeek = getWeekNumber();
	const currentYear = getWeekYear();

	onMount(() => {
		navigate(`${process.env.PUBLIC_URL || ''}/${currentYear}/${currentWeek}`, {replace: true});
	});
</script>

<p>Redirecting to current week...</p>
