<script>
	import '../app.css';
	import 'normalize.css/normalize.css';
	import 'bootstrap/dist/css/bootstrap-grid.min.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

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
