<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { store } from './store';
	import Portada from './components/Portada.svelte';

  let data = [];
  onMount(async () => {
    let response = await fetch('https://imdb8.p.rapidapi.com/title/find?q=avengers infinity war', {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '1603af8c5cmshd11e56ea821abc3p1fbedfjsn347efb3202d7'
      }
    });
		response = await response.json();
    response = [...response.results].reduce((container, movie) => {
			if (movie.image) {
				const objMovie = {
					id: movie.id,
					url: movie.image.url,
					title: movie.title,
					actors: movie.principals
				};
				container.push(objMovie);
			}
			return container;
		}, []);
		const elem = response[0];
		$store.id = elem.id;
		$store.url = elem.url;
		$store.title = elem.title;
		$store.actors = elem.actors;
		data = response;
  });
</script>

<style>
	:global(:root) {
		--primary: #3e2723;
		--light-primary: #d3b8ae;
		--dark-primary: #1b0000;
		--secondary: #bb4d00;
		--dark-secondary: #ac1900;
		--white: #FFF;
		--color: #ffc107;
		--font-family: 'Orbitron', sans-serif;
	}
	main {
		padding: 0;
		margin: 0;
		height: 100%;
	}
	.loading {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: var(--primary);
    filter: opacity(.85);
    color: var(--white);
  }
</style>

<main>
	{#if data.length > 0}
		<div transition:fade>
			<Portada {data} />
		</div>
	{:else}
		<div class="loading">Cargando datos...</div> 		 
	{/if}
</main>
