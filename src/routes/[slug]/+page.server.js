import { error } from '@sveltejs/kit';
import { fetchCorpusData } from '$lib/corpus';


export async function load({ params, parent }) {
	const { corpusData } = await parent();
	const item = corpusData.find((item) => item.name === params.slug);

	if (!item) error(404);

	return {
		item
	};
}
