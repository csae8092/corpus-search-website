<script>
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
{#if !info }
	<p>{item.info}</p>
{:else}
	<p>Keine weitere Information vorhanden</p>
{/if}
