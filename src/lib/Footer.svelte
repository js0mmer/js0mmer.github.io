<footer class="container">
	<p>
		Made with <span class="fa fa-heart fa-lg"></span> by Jacob
	</p>
	<div class="icons">
		<a class="fa-stack fa-lg" href="https://github.com/js0mmer" target="_blank" aria-label="github">
			<span class="fa fa-circle fa-stack-2x"></span>
			<span class="slide-up-effect">
				<span class="fab fa-github fa-stack-1x"></span>
				<span class="fab fa-github fa-stack-1x"></span>
			</span>
		</a>
		<a
			class="fa-stack fa-lg"
			href="https://www.linkedin.com/in/js0mmer/"
			target="_blank"
			aria-label="linkedin"
		>
			<span class="fa fa-circle fa-stack-2x"></span>
			<span class="slide-up-effect">
				<span class="fab fa-linkedin fa-stack-1x"></span>
				<span class="fab fa-linkedin fa-stack-1x"></span>
			</span>
		</a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		padding-top: 1.75rem;
		padding-bottom: 1.25rem;
		margin-top: auto;
	}

	p {
		font-weight: bold;
	}

	.icons {
		display: flex;
		margin-left: auto;
	}

	.fa-heart {
		color: #ff3a3a;
	}

	.fa-circle {
		color: white;
	}

	.fa-github,
	.fa-linkedin {
		color: #212529;
	}

	.fa-stack {
		overflow: hidden;
		clip-path: circle(1em);
		margin: auto 0;
	}

	.slide-up-effect span {
		transition: 0.3s;
	}

	.slide-up-effect span:last-child {
		transform: translateY(100%);
	}

	.slide-up-effect:hover span:first-child {
		transform: translateY(-100%);
	}

	.slide-up-effect:hover span:last-child {
		transform: translateY(0%);
	}
</style>
