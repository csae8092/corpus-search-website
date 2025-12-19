<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	
	let { data } = $props();
	let chartContainer;
	
	// Extract corpus names and token counts
	const corpusNames = $derived(data.corpusData.map(corpus => corpus.name));
	const tokenCounts = $derived(data.corpusData.map(corpus => corpus.sizes.tokencount));
	
	let options = $derived({
        chart: {
            type: 'bar',
            height: "80%"
        },
        title: {
            text: 'Corpus Token Counts'
        },
        xAxis: {
            categories: corpusNames,
            title: {
                text: 'Corpus'
            },
            labels: {
                useHTML: true,
                formatter: function() {
                    const label = this.value;
                    const path = `${base}/${label}`;
                    return `<a class="fs-5" href="${path}" class="corpus-label">${label}</a>`;
                }
            }
        },
        yAxis: {
            title: {
                text: 'Token Count'
            }
        },
        series: [{
            name: 'Tokens',
            data: tokenCounts
        }],
    });
	
	
	onMount(async () => {
		if (browser && chartContainer) {
			const Highcharts = await import('highcharts');
			await import('highcharts/modules/exporting');
			Highcharts.default.chart(chartContainer, options);
		}
	});
	
</script>

<h1 class="text-center p-4 display-1">ACDH Corpus Search</h1>
<div bind:this={chartContainer}></div>