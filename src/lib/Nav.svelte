<script lang="ts">
	import { getContext } from 'svelte';
	import { get, type Writable } from 'svelte/store';
	import type { Theme } from './types';

	let y: number;
	let expanded = false;

	const theme: Writable<Theme> = getContext('theme');
	let darkMode = get(theme) === 'dark';
	theme.subscribe((value) => {
		darkMode = value === 'dark';
	});

	function toggleExpand() {
		expanded = !expanded;
		if (expanded) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}

	function close() {
		expanded = false;
		document.body.style.overflow = 'auto';
	}

	function toggleTheme() {
		theme.update((value) => {
			return value === 'light' ? 'dark' : 'light';
		});
	}
</script>

<svelte:window bind:scrollY={y} />

<header class:expanded class:scrolled={y}>
	<nav class="container">
		<div class="header">
			<a class="icon" href="/"
				><img src={darkMode ? 'favicon-white.png' : 'favicon.png'} alt="js" /></a
			>
			<button class="hamburger" on:click={toggleExpand}></button>
		</div>
		<ul>
			<li>
				<a href="/" on:click={close}>about me</a>
			</li>
			<li>
				<a href="/experience" on:click={close}>experience</a>
			</li>
			<li>
				<a href="/projects" on:click={close}>projects</a>
			</li>
			<li>
				<a href="/resume.pdf" target="_blank">resume</a>
			</li>
			<li>
				<a href="/photos" on:click={close}>photos</a>
			</li>
			<li>
				<button class="theme-toggle" on:click={toggleTheme}><span class={'fas ' + (darkMode ? 'fa-moon' : 'fa-sun')}></span></button>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		background-color: transparent;
		transition: 0.3s;
		padding: 10px 0;
		z-index: 1;

		&.scrolled {
			background-color: var(--overlay1);
			box-shadow: 0 1px 10px var(--box-shadow);
			padding: 5px 0;
		}
	}

	nav {
		display: flex;
	}

	.icon {
		display: flex;
		margin: auto 0;
	}

	.icon img {
		height: 2rem;
	}

	.theme-toggle {
		border: none;
		background: none;
		cursor: pointer;
		display: flex;
	}

	.theme-toggle span:hover {
		color: var(--text1);
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		gap: 1em;
		margin-left: auto;
	}

	li {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	li a {
		color: var(--text2);
		text-decoration: none;

		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}

	.hamburger {
		display: none;
		background: none;
		border: none;
		position: relative;

		&::before,
		&&::after {
			display: block;
			content: '';
			width: 1.5em;
			height: 2px;
			background-color: var(--text2);
			transition: 0.3s;
		}

		&::before {
			transform: translateY(-0.25em);
		}

		&::after {
			transform: translateY(0.25em);
		}
	}

	.header {
		display: flex;
		flex-direction: row;
	}

	@media screen and (max-width: 575px) {
		.hamburger {
			display: block;
			margin-left: auto;
		}

		.header {
			width: 100%;
		}

		.expanded .hamburger::before {
			transform: rotate(45deg) translateY(1px);
		}

		.expanded .hamburger::after {
			transform: rotate(-45deg) translateY(-1px);
		}

		ul {
			display: none;
			height: 0;
			transition: 0.3s;
		}

		.expanded {
			height: 100vh;
			width: 100%;
			background-color: var(--overlay1);
		}

		.expanded nav {
			flex-direction: column;
		}

		.expanded ul {
			display: flex;
			margin: 0;
			padding: 1rem;
			flex-direction: column;
			gap: 1.5rem;
			height: 100%;
		}

		.expanded ul a {
			font-size: x-large;
		}
	}
</style>
