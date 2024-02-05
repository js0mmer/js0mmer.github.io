<script lang="ts">
	let y: number;
	let expanded = false;

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
</script>

<svelte:window bind:scrollY={y} />

<header class:expanded class:scrolled={y}>
	<nav class="container">
		<div class="header">
			<a class="icon" href="/"><img src="favicon-white.png" alt="js" /></a>
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
			background-color: var(--gray-secondary);
			box-shadow: 0 1px 10px #0f0f0f;
			padding: 5px 0;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
	}

	.icon {
		display: flex;
		font-size: 1.5em;
		margin: auto 0;
		font-family: 'Montserrat';
		font-weight: bold;
		color: var(--white-primary);
		text-decoration: none;
	}

	.icon img {
		height: 2rem;
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
		color: var(--white-secondary);
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
			background-color: var(--white-secondary);
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
			background-color: var(--gray-secondary);
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

		/* .expanded .icon {
			margin: 0.25rem;
		} */

		.expanded ul a {
			font-size: x-large;
		}
	}
</style>
