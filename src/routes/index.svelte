<script context="module">
	import { get } from 'svelte/store';
	export async function preload() {
		let data = [];
		if (Array.isArray(get(store).movies) && get(store).movies.length > 0) {
			data = get(store).movies;
			console.log('-------DATA-----------------------------');
			console.log(data);
			console.log('------------------------------------');
		} else {
			let response = await this.fetch('https://imdb8.p.rapidapi.com/title/find?q=avengers', {
				'method': 'GET',
				'headers': {
					'x-rapidapi-host': 'imdb8.p.rapidapi.com',
					'x-rapidapi-key': '1603af8c5cmshd11e56ea821abc3p1fbedfjsn347efb3202d7'
				}
			});
			response = await response.json();
			data = [...response.results].reduce((container, movie) => {
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
			store.update(state => ({
				...state,
				movies: data
			}));
		}
		return { data };
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { store } from '../store';
	import Page from '../components/Page.svelte';

	export let data = [];
	const elem = data[0];
	store.update(state => ({
		...state,
		id: elem.id,
		url: elem.url,
		title: elem.title,
		actors: elem.actors
	}))
	// $store.id = elem.id;
	// $store.url = elem.url;
	// $store.title = elem.title;
	// $store.actors = elem.actors;
</script>

<svelte:head>
	<title>movieSvelte</title>
</svelte:head>

<main>
	{#if data.length > 0}
		<div transition:fade>
			<Page {data} />
		</div>
	{:else}
		<div class="loading">Cargando datos...</div> 		 
	{/if}
</main>
