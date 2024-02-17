<svelte:head>
  <title>About Me - Jacob Sommer</title>
</svelte:head>
<div class="container">
  <div class="about">
    <div class="image">
      <img src="me.webp" alt="Jacob Sommer" />
    </div>
    <div class="content">
      <h1>Jacob Sommer</h1>
      <p>
        Hi, I'm Jacob. I'm a third-year at UC Irvine pursuing a BS in Computer Science. I've had a passion for
        technology ever since I was a child, first learning how to code at 11 years old by developing mods for
        Minecraft. Since then, I've learned many different programming languages and technologies through hobby projects
        and school projects I've worked on. Aside from coding, my other hobbies include photography, playing video
        games, building computers, and playing the guitar. I am always eager to learn!
      </p>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
  }

  .about {
    background-color: var(--overlay1);
    padding: 1em;
    border-radius: 0.5em;
    display: flex;
    flex-wrap: wrap;
  }

  .image {
    flex: 1;
  }

  .content {
    flex: 5;
  }

  @media screen and (min-width: 992px) {
    .about {
      margin-top: 3rem;
      margin-left: 2rem;
    }

    .content {
      margin-left: -1rem;
    }

    img {
      position: relative;
      left: -3rem;
      top: -3rem;
    }
  }

  @media screen and (max-width: 991px) {
    .about {
      display: block;
    }

    img {
      max-height: 10rem;
    }
  }
</style>
