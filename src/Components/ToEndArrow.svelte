<script lang="ts">
  export let direction: "top" | "bottom";
</script>

<svg
  class={direction}
  viewBox="0 0 10 14"
  stroke-width="1.25"
  stroke="currentColor"
>
  <path d="M 5 2 L 1 6 M 5 2 L 9 6 M 1 1 L 9 1 M 5 1 L 5 13" />
</svg>

<style>
  svg {
    height: 1em;
  }

  svg.bottom {
    transform: rotate(180deg);
  }
</style>
