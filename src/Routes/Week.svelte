<script lang="ts">
  import Week from "../Components/Week.svelte";
  import Navigation from "../Components/Navigation.svelte";

  export let year: string;
  export let weekNumber: string;

  $: {
    document.title = `Week ${weekNumber} of ${year}`;
  }
</script>

<Week year={Number(year)} weekNumber={Number(weekNumber)} />
<Navigation year={Number(year)} weekNumber={Number(weekNumber)} />
