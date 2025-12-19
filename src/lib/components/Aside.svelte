<script>
	import { base } from '$app/paths';

	let { corpusData, currentName } = $props();
</script>

<div>
	<h2>Corpora</h2>
	<ul>
		{#each corpusData as x}
			{#if x.name == currentName}
				<li><a href="{base}/{x.name}"><strong>{x.name}</strong></a></li>
			{:else}
				<li><a href="{base}/{x.name}">{x.name}</a></li>
			{/if}
		{/each}
	</ul>
</div>
