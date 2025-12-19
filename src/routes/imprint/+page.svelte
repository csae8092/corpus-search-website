<script>
	let { data } = $props();
    let imprintText = $derived(data.imprintText)
</script>
<svelte:head>
	<title>Imprint</title>
</svelte:head>

<main>
    <div class="container">
        <h1 class="text-center p-3">Imprint</h1>
        <div>{@html imprintText }</div>
    </div>
</main>