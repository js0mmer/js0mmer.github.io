<script lang="ts">
  import '../app.css';
  import 'normalize.css/normalize.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import Nav from '$lib/nav/Nav.svelte';
  import Footer from '$lib/Footer.svelte';
  import { writable } from 'svelte/store';
  import { setContext } from 'svelte';
  import { type Theme } from '$lib/types';
  import { browser } from '$app/environment';

  const theme = writable<Theme>('light');
  setContext('theme', theme);

  if (browser) {
    const themePref =
      (localStorage.getItem('theme') as Theme) ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    theme.set(themePref);
    theme.subscribe((value) => {
      document.documentElement.dataset.theme = value;
      localStorage.setItem('theme', value);
    });
  }
</script>

<svelte:head>
  <meta name="description" content="Jacob Sommer's portfolio" />
  <script>
    // set using script in head to avoid light theme flash
    const themePref =
      localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = themePref;
  </script>
</svelte:head>

<div class="site">
  <Nav />
  <slot />
  <Footer />
</div>

<style>
  .site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
