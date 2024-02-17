<script lang="ts">
  import Project from './Project.svelte';
</script>

<svelte:head>
  <title>Projects - Jacob Sommer</title>
</svelte:head>

<div class="container">
  <h1>Projects</h1>
  <div class="projects">
    <Project
      title="PeterPortal"
      date="November 2022 - Present"
      img="peterportal.webp"
      content="A website for UC Irvine students to browse classes and create their 4-year plans. Features include: a drag and drop planner with automatic prerequisite checking and unit counting, browsing course and professor catalogues, reviewing/rating courses & professors, and viewing past grade distributions. Developed alongside 5-10 peers as a project under UC Irvine's Information & Computer Sciences Student Council. Built with TypeScript, React, Express, and MongoDB. Deployed on AWS."
      links={[
        {
          icon: 'fas fa-external-link-alt',
          href: 'https://peterportal.org',
          label: 'peterportal'
        },
        {
          icon: 'fab fa-github',
          href: 'https://github.com/icssc/peterportal-client',
          label: 'github repository'
        }
      ]}
    />
    <Project
      title="PlayPic"
      date="February 2022"
      img="playpic.webp"
      content="A website that creates a Spotify playlist that matches the mood of the image you upload. Built with React and Express."
      links={[
        {
          icon: 'fas fa-external-link-alt',
          href: 'https://devpost.com/software/hackuci-jwe3al',
          label: 'devpost'
        },
        {
          icon: 'fab fa-github',
          href: 'https://github.com/js0mmer/hackuci2022',
          label: 'github repository'
        }
      ]}
    />
    <Project
      title="Hangman"
      date="January 2021"
      img="hangman.webp"
      content="An online multiplayer game of hangman. Written using React + Socket.IO."
      links={[
        {
          icon: 'fab fa-github',
          href: 'https://github.com/js0mmer/hangman',
          label: 'github repository'
        }
      ]}
    />
    <Project
      title="Star Tracker"
      date="October - November 2019"
      img="startracker.webp"
      content="A barn door star tracker enabling you to take longer exposures of the night sky and capture deep sky objects with a DSLR. Runs on a Raspberry Pi connected to a WiFi network, controlled from the Blynk app."
      links={[
        {
          icon: 'fab fa-github',
          href: 'https://github.com/js0mmer/startracker',
          label: 'github repository'
        }
      ]}
    />
  </div>
</div>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
</style>
