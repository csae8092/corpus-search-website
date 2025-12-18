<script>
	let { data } = $props();
</script>

<main>
	<h1>Corpus Search</h1>
	<ul>
		{#each data.corpusData as x}
			<li>
				<a href="/{x.name}">{x.name}</a>
			</li>
		{/each}
	</ul>
</main>
