<svelte:head>
	<title>About Me | Jacob Sommer</title>
</svelte:head>
<div class="container">
	<div class="about row">
			<div class="col-sm-2">
				<img src="me.webp" alt="Jacob Sommer" />
			</div>
			<div class="col-sm-10">
				<h1>Jacob Sommer</h1>
				<p>
					Hi, I'm Jacob. I'm a third-year at UC Irvine pursuing a BS in Computer Science. I've had a
					passion for technology ever since I was a child, first learning how to code at 11 years
					old by developing mods for Minecraft. Since then, I've learned many different programming
					languages and technologies through hobby projects and school projects I've worked on.
					Aside from coding, my other hobbies include photography, playing video games, building
					computers, and playing the guitar. I am always eager to learn!
				</p>
		</div>
	</div>
</div>

<style>
	.container {
		margin: auto;
	}

	.about {
		background-color: var(--gray-secondary);
		padding: 1em;
		border-radius: 0.5em;
		margin-top: 3rem;
		margin-left: 2rem;
	}

	.col-sm-10 {
		margin-left: -2rem;
	}

	img {
		position: relative;
		left: -3rem;
		top: -3rem;
	}
</style>
