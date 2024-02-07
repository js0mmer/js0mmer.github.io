<script lang="ts">
	import '../app.css';
	import 'normalize.css/normalize.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
	import { writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';
	import { type Theme } from '$lib/types';

	const theme = writable<Theme>('light');
	setContext('theme', theme);
	theme.set('light');
	onMount(() => {
		theme.set(
			(localStorage.getItem('theme') as Theme) ??
				window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
		);
		theme.subscribe((value) => {
			document.querySelector('html')!.dataset.theme = value;
			localStorage.setItem('theme', value);
		});
		const savedTheme = localStorage.getItem('theme') as Theme;
		if (savedTheme) {
			theme.set(savedTheme);
		}
	});
</script>

<svelte:head>
	<meta name="description" content="Jacob Sommer's portfolio" />
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
