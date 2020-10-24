<script lang="ts">
	import { getFromEnv } from "../Utils/navigate";

	const tag = getFromEnv('TAG');
	const commit = getFromEnv('COMMIT').slice(0, 8);
</script>

<style>
	a, span {
		margin-right: 0.5rem;
	}

	footer {
		margin: 2rem 0 1rem 0;
		text-align: center;
	}
</style>

<footer>
	<a href="https://github.com/kangasta/week-53.git" target="_blank">
		Source code
	</a>
	{#if commit || tag}
		<span>Version: {tag} {commit}</span>
	{/if}
</footer>
