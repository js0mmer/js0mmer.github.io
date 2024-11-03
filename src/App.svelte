<script lang="ts">
  import Project from './lib/Project.svelte';
  import me from './assets/me.webp';
</script>

<main>
  <div class="container">
    <section class="about">
      <div class="text">
        <h1>Jacob Sommer</h1>
        <p>
          Hi, I'm Jacob. I'm a fourth-year at UC Irvine pursuing a BS in Computer Science. I've had a passion for
          technology ever since I was a child, first learning how to code at 11 years old by developing mods for
          Minecraft. Since then, I've learned many different programming languages and technologies through hobby
          projects and school projects I've worked on. Aside from coding, my other hobbies include photography, playing
          video games, building computers, and playing the guitar. I am always eager to learn!
        </p>
        <div class="socials">
          <a class="button" href="https://www.linkedin.com/in/js0mmer/" target="_blank">
            <span class="fa-brands fa-linkedin fa-lg"></span> LinkedIn
          </a>
          <a class="button" href="https://github.com/js0mmer" target="_blank">
            <span class="fa-brands fa-github fa-lg"></span> GitHub
          </a>
          <a class="button" href="resume.pdf" target="_blank">
            <span class="fa-solid fa-file-pdf fa-lg"></span> Resume
          </a>
        </div>
      </div>
      <div class="img">
        <img src={me} alt="Jacob Sommer" />
      </div>
    </section>
    <section class="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        <Project
          title="PeterPortal"
          img="peterportal.webp"
          content="An enhanced course catalogue and 4-year planner for UC Irvine students, by UC Irvine students. Developed alongside 3-10 peers under UC Irvine's Information & Computer Sciences Student Council. Leading the project as of September 2023."
          links={[
            {
              title: 'Live Site',
              url: 'https://peterportal.org',
              icon: 'fa-solid fa-arrow-up-right-from-square'
            },
            {
              title: 'GitHub',
              url: 'https://github.com/icssc/peterportal-client',
              icon: 'fa-brands fa-github'
            }
          ]}
          tags={['TypeScript', 'React', 'Express', 'tRPC', 'PostgreSQL', 'Drizzle ORM', 'AWS', 'SST', 'AWS CDK']}
        />
        <Project
          title="UCI Syllabus Finder"
          img="syllabusfinder.webp"
          content="A web application to search and access syllabi from previous offerings of a course, assisting in making informed course selections."
          links={[
            {
              title: 'Live Site',
              url: 'https://uci-syllabus-finder.vercel.app/',
              icon: 'fa-solid fa-arrow-up-right-from-square'
            },
            {
              title: 'GitHub',
              url: 'https://github.com/js0mmer/uci-syllabus-finder',
              icon: 'fa-brands fa-github'
            }
          ]}
          tags={['TypeScript', 'SvelteKit', 'PostgreSQL', 'Drizzle ORM']}
        />
        <Project
          title="PlayPic"
          img="playpic.webp"
          content="A website that creates a Spotify playlist that matches the mood of the image you upload. Developed with a team of 3 peers at the HackUCI 2022 hackathon."
          links={[
            {
              title: 'Live Site',
              url: 'https://playpic-demo.vercel.app/',
              icon: 'fa-solid fa-arrow-up-right-from-square'
            },
            {
              title: 'DevPost',
              url: 'https://devpost.com/software/hackuci-jwe3al',
              icon: 'fa-solid fa-arrow-up-right-from-square'
            },
            {
              title: 'GitHub',
              url: 'https://github.com/js0mmer/hackuci2022',
              icon: 'fa-brands fa-github'
            }
          ]}
          tags={['JavaScript', 'React', 'Express']}
        />
        <Project
          title="Star Tracker"
          img="startracker.webp"
          content="A barn door star tracker enabling you to take longer exposures of the night sky and capture deep sky objects with a DSLR."
          links={[
            {
              title: 'GitHub',
              url: 'https://github.com/js0mmer/startracker',
              icon: 'fa-brands fa-github'
            }
          ]}
          tags={['Python', 'Raspberry Pi']}
        />
      </div>
    </section>
  </div>
</main>

<style>
  section {
    padding-top: 1em;
  }

  section h1 {
    font-size: 2.25em;
  }

  section h2 {
    font-size: 1.75em;
    margin-bottom: 0.5em;
  }

  .container {
    width: 960px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0.5em;
  }

  .about {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .about .text {
    flex: 2;
  }

  .about .img {
    flex: 1;
    max-width: 150px;
  }

  .about .img img {
    border-radius: 0.5em;
  }

  .socials {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .projects-grid {
    display: grid;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    .about {
      flex-flow: column-reverse;
      gap: 0;
    }
  }
</style>
