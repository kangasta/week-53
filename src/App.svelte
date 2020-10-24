<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Default from "./Routes/Default.svelte";
	import Week from "./Routes/Week.svelte";
	import { getBaseUrl } from './Utils/navigate';

	export let basepath = getBaseUrl();
</script>

<style>
	main {
		margin: 0 auto;
		max-width: 90%;
		width: 960px;
	}
</style>

<main>
	<Router basepath={basepath}>
		<Route path=":year/:weekNumber" component={Week} />
		<Route component={Default} />
	</Router>
</main>
