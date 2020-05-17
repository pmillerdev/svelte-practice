<script>
  import { Route, Router } from "svelte-routing";

  import Create from "./components/Create.svelte";
  import Detail from "./components/Detail.svelte";
  import Library from "./components/Library.svelte";

  export let url = "";
</script>

<style>
  main {
    padding: var(--spacingLarge);
  }
</style>

<Router {url}>
  <main>
    <Route path="/create">
      <Create />
    </Route>
    <Route path="/books/:id" let:params>
      <Detail id={params.id} />
    </Route>
    <Route path="/">
      <Library />
    </Route>
  </main>
</Router>
