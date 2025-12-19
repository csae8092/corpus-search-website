export async function load(params) {
    const response = await fetch('https://imprint.acdh.oeaw.ac.at/25921');
	const imprintText = await response.text();
	return { imprintText };
}