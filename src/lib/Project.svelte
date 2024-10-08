<script lang="ts">
  import Tag from './Tag.svelte';

  interface Link {
    title: string;
    url: string;
    icon: string;
  }

  export let title: string;
  export let img: string;
  export let content: string;
  export let links: Link[];
  export let tags: string[];
</script>

<article>
  <div class="content">
    <h3>{title}</h3>
    <p>{content}</p>
    <div class="tags">
      {#each tags as tag}
        <Tag>{tag}</Tag>
      {/each}
    </div>
    <div class="links">
      {#each links as link}
        <a class="button" href={link.url} target="_blank">
          <span class={link.icon + ' fa-lg'}></span> {link.title}
        </a>
      {/each}
    </div>
  </div>
  <div class="image">
    <img src={img} alt={title} />
  </div>
</article>

<style>
  article {
    display: flex;
    padding: 1em;
    gap: 20px;
    background: var(--card);
    border-radius: 0.5em;
  }

  h3 {
    margin-top: 0;
    font-size: 1.5em;
  }

  img {
    border-radius: 0.5em;
    width: 100%;
  }

  .content {
    flex: 5;
  }

  .image {
    flex: 4;
  }

  .links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    article {
      flex-direction: column;
    }
  }
</style>
