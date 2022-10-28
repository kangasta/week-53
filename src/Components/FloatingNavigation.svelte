<script lang="ts">
  import { getWeekNumber, getWeekYear } from "../Utils/week";
  import ToEndArrow from "./ToEndArrow.svelte";

  export let yearRect: DOMRect;
  export let currentWeekRect: DOMRect;

  const ySize = window.innerHeight;

  const currentWeek = getWeekNumber();
  const scrollToCurrentWeek = () => {
    const id = `week-${getWeekNumber()}-of-${getWeekYear()}`;
    const element = document.getElementById(id);
    element?.scrollIntoView();
  };

  const scrollToTop = () => window.scrollTo(0, 0);
  const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);

  $: showYearTop = yearRect?.top < -0.25 * ySize;
  $: showWeekTop = currentWeekRect?.bottom < 0;
  $: showYearBottom = yearRect?.bottom > 1.25 * ySize;
  $: showWeekBottom = currentWeekRect?.top > ySize;
</script>

<div class="floating-area top">
  {#if showYearTop}
    <button aria-label="Scroll to top" on:click={scrollToTop}
      ><ToEndArrow direction="top" /></button
    >
  {/if}
  {#if showWeekTop}
    <button aria-label="Scroll to current week" on:click={scrollToCurrentWeek}
      >{currentWeek}</button
    >
  {/if}
</div>

<div class="floating-area bottom">
  {#if showWeekBottom}
    <button aria-label="Scroll to current week" on:click={scrollToCurrentWeek}
      >{currentWeek}</button
    >
  {/if}
  {#if showYearBottom}
    <button aria-label="Scroll to bottom" on:click={scrollToBottom}
      ><ToEndArrow direction="bottom" /></button
    >
  {/if}
</div>

<style>
  div.floating-area {
    display: flex;
    flex-direction: column;
    position: fixed;
    text-align: right;
    max-width: 90%;
    width: 960px;
  }

  div.floating-area.top {
    top: 0;
  }

  div.floating-area.bottom {
    bottom: 0;
  }

  .floating-area.top button {
    margin-top: 0.666rem;
  }

  .floating-area.bottom button {
    margin-bottom: 0.666rem;
  }

  button {
    background: var(--text-red);
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.33);
    color: var(--background);
    cursor: pointer;
    font-size: 1.5rem;
    height: 3.5rem;
    line-height: 1rem;
    margin-left: auto;
    width: 3.5rem;
    padding: 0.125rem 0.5rem;
    text-align: center;
    border: none;
    border-radius: 100%;
    transition: all 250ms ease-in-out;
  }

  button:hover {
    box-shadow: 0 0.35rem 0.25rem rgba(0, 0, 0, 0.4);
  }

  button:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: 2px;
  }
</style>
