<script>
	import { base } from '$app/paths';
	let { corpusData } = $props();
</script>

<ul class="dropdown-menu">
    {#each corpusData as x}
        <li>
            <a class="dropdown-item" href="{base}/{x.name}"> {x.name }</a>
        </li>
    {/each}
</ul>