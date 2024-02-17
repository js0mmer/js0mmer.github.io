<script lang="ts">
  import { getContext } from 'svelte';
  import { page } from '$app/stores';

  const close = getContext('closeNav') as () => void;

  export let href: string;
  export let target: string | undefined = undefined;

  let path = $page.url.pathname;
  page.subscribe((value) => {
    path = value.url.pathname;
  });
</script>

<li>
  <a class:active={path === href} {href} {target} on:click={close}><slot /></a>
</li>

<style>
  a {
    color: var(--text2);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  a.active {
    color: #ff3a3a;
  }
</style>
