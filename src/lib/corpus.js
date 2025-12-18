export async function fetchCorpusData() {
	const response = await fetch('https://corpus-search.acdh.oeaw.ac.at/bonito/run.cgi/corpora');
	const responseData = await response.json();
	return responseData.data;
}
