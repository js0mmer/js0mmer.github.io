<span><slot /></span>

<style>
  span {
    background-color: var(--tag);
    color: white;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 0.75em;
    display: inline-block;
    transition: 0.25s all;
  }

  span:hover {
    background-color: var(--tag-hover);
  }
</style>
