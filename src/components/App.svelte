<script>
  import { Router, Route } from 'svelte-routing';
  
  import Helps from './Helps.svelte';
  import Home from './Home.svelte';
  import Page404 from './Page404.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/helps" component={Helps} />
  <Route component={Page404} />
</Router>