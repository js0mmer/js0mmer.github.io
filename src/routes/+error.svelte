<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="container">
  <h1>{$page.status}</h1>
  <p>{$page.error?.message}</p>
</div>
