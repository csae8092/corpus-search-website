export const prerender = true;

import corpusData from '$lib/data/corpus-data.json';

export function load() {
	return {
		corpusData
	};
}
