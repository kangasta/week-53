<script lang="ts">
  import { onMount } from "svelte";
  import { navigate } from "../Utils/navigate";
  import { getWeekNumber, getWeekYear } from "../Utils/week";

  const currentWeek = getWeekNumber();
  const currentYear = getWeekYear();

  onMount(() => {
    navigate(`/${currentYear}/${currentWeek}`, { replace: true });
  });
</script>

<p>Redirecting to current week...</p>
