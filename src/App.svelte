<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Footer from "./Components/Footer.svelte";
  import Default from "./Routes/Default.svelte";
  import Week from "./Routes/Week.svelte";
  import Year from "./Routes/Year.svelte";
  import { getBasePath } from "./Utils/navigate";

  export let basepath = getBasePath();
</script>

<main>
  <Router {basepath}>
    <Route path=":year/:weekNumber" component={Week} />
    <Route path=":year" component={Year} />
    <Route component={Default} />
  </Router>
</main>
<Footer />

<style>
  main {
    flex: 1;
    margin: 0 auto;
    max-width: 90%;
    width: 960px;
  }
</style>
