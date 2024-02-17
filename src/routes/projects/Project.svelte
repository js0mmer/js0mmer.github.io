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
  <div class="content">
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{content}</p>
    {#each links as link}
      <a class={`${link.icon} fa-2x`} href={link.href} target="_blank" aria-label={link.label}></a>
    {/each}
  </div>
  <div class="image">
    <img src={img} alt={title} />
  </div>
</article>

<style>
  article {
    display: flex;
    flex-wrap: wrap;
    background-color: var(--overlay1);
    padding: 0 1rem;
    border-radius: 0.5rem;
  }

  a {
    color: var(--text2);
    text-decoration: none;
    margin-right: 0.5em;
    margin-bottom: 1rem;

    &:hover,
    &:focus {
      color: #ff3a3a;
    }
  }

  .content {
    flex: 3;
  }

  .image {
    /* display: flex; */
    flex: 2;
  }

  @media screen and (min-width: 992px) {
    img {
      position: relative;
      top: -1.5rem;
      right: -3rem;
      width: 100%;
      margin-left: auto;
    }

    article {
      margin-right: 2rem;
    }
  }

  @media screen and (max-width: 991px) {
    img {
      margin: 1rem auto;
    }

    article {
      display: block;
    }
  }
</style>
