<script>
	import Aside from '$lib/components/Aside.svelte';
	let { data } = $props();
	let item = $derived(data.item);
	let info = $derived(item.name === item.info);
</script>

<svelte:head>
	<title>{item.name}</title>
	{#if !info}
		<meta name="description" content={item.info} />
	{/if}
</svelte:head>

<h1 class="text-center">{item.name}</h1>
<p class="text-center lead">
	{#if !info }
		{item.info}
	{:else}
		Keine weitere Information vorhanden
		{/if}
	</p>
<Aside corpusData={data.corpusData} currentName={item.name} />
