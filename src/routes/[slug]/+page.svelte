<script>
	import Aside from '$lib/components/Aside.svelte';
	import { loremIpsum } from 'lorem-ipsum';
	let { data } = $props();
	let item = $derived(data.item);
	let info = $derived(item.name === item.info);
	const dummyText = $derived(loremIpsum({
		count: 10,
		units: 'paragraphs',
		seed: item.name
	}));
	const pageTitle = $derived(
		item.name === item.info ? item.name : item.info
	)
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<h1 class="text-center p-3">{pageTitle}</h1>

<div class="row">
	<div class="col-md-2">
		<Aside corpusData={data.corpusData} currentName={item.name} />
	</div>
	<div class="col-md-10"><p>{dummyText}</p></div>
</div>
