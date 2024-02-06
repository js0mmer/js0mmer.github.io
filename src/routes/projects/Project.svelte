<script lang="ts">
	interface Link {
		icon: string;
		href: string;
		label: string;
	}

	export let title: string;
	export let date: string;
	export let content: string;
	export let links: Link[] = [];
	export let img: string;
</script>

<article>
	<div class="row">
		<div class="col-xl-6">
			<h2>{title}</h2>
			<p>{date}</p>
			<p>{content}</p>
			{#each links as link}
				<a class={`${link.icon} fa-2x`} href={link.href} target="_blank" aria-label={link.label}
				></a>
			{/each}
		</div>
		<div class="col-xl-6 image-col">
			<img src={img} alt={title} />
		</div>
	</div>
</article>

<style>
	article {
		background-color: var(--gray-secondary);
		padding: 0 1em;
		border-radius: 0.5em;
	}

	a {
		color: var(--white-secondary);
		text-decoration: none;
		margin-right: 0.5em;

		&:hover,
		&:focus {
			color: #ff3a3a;
		}
	}

	.image-col {
		display: flex;
	}

	@media screen and (min-width: 1200px) {
		img {
			position: relative;
			top: -1.5rem;
			right: -3rem;
			width: 100%;
			margin-left: auto;
		}
	}

	@media screen and (max-width: 1199px) {
		img {
			margin: 1rem auto;
		}
	}
</style>
