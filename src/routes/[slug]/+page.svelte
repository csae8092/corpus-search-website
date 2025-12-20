<script>
	import { onMount } from 'svelte';
	import Aside from '$lib/components/Aside.svelte';
	import { loremIpsum } from 'lorem-ipsum';
	import { NoskeSearch } from 'acdh-noske-search';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	let { data } = $props();
	let item = $derived(data.item);
	let info = $derived(item.name === item.info);
	let corpusName = $derived(data.item.name);

	const dummyText = $derived(
		loremIpsum({
			count: 10,
			units: 'paragraphs',
			seed: item.name
		})
	);
	const pageTitle = $derived(item.name === item.info ? item.name : item.info);

	let search;

	function initializeSearch() {
		search = new NoskeSearch({
			container: 'noskeDiv',
			autocomplete: false,
			wordlistattr: ['word', 'landingPageURI']
		});
		search.minQueryLength = 2;

		search.search({
			debug: false,
			client: {
				base: 'https://corpus-search.acdh.oeaw.ac.at/',
				corpname: corpusName,
				attrs: 'word,landingPageURI',
				structs: 'sen'
			},
			hits: {
				id: 'hitsBox',
				css: {
					div: 'grid grid-cols-5 gap-4'
				}
			},
			pagination: {
				id: 'noskePagination'
			},
			searchInput: {
				id: 'noskeInput',
				placeholder: 'Suche nach Wörter, Phrase oder CQL-Query (Regex erlaubt)',
				button: 'Suchen',
				css: {
					div: 'd-flex align-items-center gap-2 pt-3 container',
					input: 'form-control flex-grow-1',
					select: 'form-select w-auto',
					button: 'btn btn btn-primary w-auto'
				}
			},
			config: {
				tableView: true,
				customUrlTransform: function (lines) {
					let kwic_attr = lines.kwic_attr?.split('http')[1];
					let backlink = `http${kwic_attr}`;
					return backlink;
				}
			},
			stats: {
				id: 'noskeStats'
			}
		});
	}
	function resetSearch() {
		const currentPath = base ? `${base}/${corpusName}` : `/${corpusName}`;
		window.location.href = currentPath;
	}
	onMount(() => {
		initializeSearch();
	});
	$effect(() => {
		if (corpusName && search) {
			initializeSearch();
		}
	});
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<h1 class="text-center p-3">{pageTitle}</h1>

<div class="row">
	<div class="col-md-2">
		<Aside corpusData={data.corpusData} currentName={item.name} />
	</div>
	<div class="col-md-10">
		<div id="noskeDiv"></div>
		<div class="text-center p-2" id="reset-button">
			<button id="noskeReset" class="btn btn-primary" onclick={resetSearch}>Reset</button>
		</div>
		<div id="hitsBox"></div>
		<div class="mx-auto">
			<div id="noskePagination"></div>
			<div id="noskeStats"></div>
		</div>
	</div>
</div>
