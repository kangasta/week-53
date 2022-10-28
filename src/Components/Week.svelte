<script lang="ts">
  import DayList from "./DayList.svelte";
  import { getWeekByMonth, validateWeekNumber } from "../Utils/week";

  export let year: number;
  export let weekNumber: number;
  export let hideYear = false;
  export let forceBottomWhitespace = false;

  $: week = getWeekByMonth(year, weekNumber);
  $: months = Object.entries(week).map(([index, days]) => ({
    monthIndex: Number(index),
    days,
  }));
  $: validated = validateWeekNumber(year, weekNumber);

  $: {
    // December should come before January
    if (months[0]?.monthIndex === 0 && months[1]?.monthIndex === 11) {
      months.reverse();
    }
  }
</script>

<div id={`week-${validated.weekNumber}-of-${validated.year}`}>
  {#if !hideYear}
    <h1>{validated.year}</h1>
  {/if}
  <h2>Week {validated.weekNumber}</h2>
  {#each months as month}
    <DayList {...month} />
  {/each}
  {#if months.length === 1 || forceBottomWhitespace}
    <div class="whitespace" />
  {/if}
</div>

<style>
  div.whitespace {
    height: 2.5rem;
    margin-bottom: 1px;
  }
</style>
