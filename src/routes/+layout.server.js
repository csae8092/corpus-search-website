import { fetchCorpusData } from '$lib/corpus';

export const prerender = true;

export async function load() {
	const corpusData = await fetchCorpusData();
	
	return {
		corpusData
	};
}
