import { error } from '@sveltejs/kit';
import corpusData from '$lib/data/corpus-data.json';

export function entries() {
	return corpusData.map((item) => ({
		slug: item.name
	}));
}

export function load({ params }) {
	const item = corpusData.find((item) => item.name === params.slug);

	if (!item) error(404);

	return {
		item
	};
}
