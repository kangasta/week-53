<script lang="ts">
  import { getFromEnv } from "../Utils/navigate";

  const tag = getFromEnv("TAG");
  const commit = getFromEnv("COMMIT").slice(0, 8);
</script>

<footer>
  <a
    href="https://github.com/kangasta/week-53.git"
    rel="noreferrer"
    target="_blank"
  >
    kangasta / week-53
  </a>
  {#if commit || tag}
    <span>at {tag} {commit}</span>
  {/if}
</footer>

<style>
  footer {
    padding: 2rem 0 1rem 0;
    text-align: center;
  }
</style>
