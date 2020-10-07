<script>
  import { store } from '../store';
  import Thumbnail from './Thumbnail.svelte';
  export let data;
</script>

<style>
  .Portada {
    height: 100vh;
    user-select: none;
  }
  .Portada-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    position: relative;
    z-index: 1;
    color: var(--color);
    font-family: var(--font-family);
  }
  .title {
    font-weight: 900;
    font-size: 2.5rem;
  }
  .trailer {
    cursor: pointer;
  }
  .trailer i {
    font-size: 2.3rem;
    user-select: none;
  }
  .trailer span {
    color: var(--white);
    font-weight: 400;
    font-size: 1.5rem;
    user-select: none;
  }
  .details {
    text-decoration: none;
    width: 50%;
  }
  .more {
    margin-top: 10px;
    background: var(--secondary);
    color: var(--white);
    padding: 5px;
    border-radius: 7px;
    border: 2px solid var(--color);
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
  }
  .background {
    height: 100%;
    background-position: center !important;
  }
  .background::after {
    content: '';
    position: fixed;
    background: var(--dark-primary);
    filter: opacity(.65);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

</style>

<div class="Portada">
  <div class="background" style="background: url({$store.url}) no-repeat;">
    <div class="Portada-container">
      <div class="trailer">
        <i class="fab fa-youtube"/> <span>Ver trailer</span>
      </div>
      <div class="title">
        {$store.title}
      </div>
      <a href="details" class="details">
        <div class="more">Saber mas ...</div>
      </a>
    </div>
  </div>
  <Thumbnail {data} />
</div>