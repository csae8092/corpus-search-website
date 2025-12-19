<script>
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import 'bootstrap/dist/css/bootstrap.min.css';
	import '../styles/style.css';
	import CorpusNav from '$lib/components/CorpusNav.svelte';

	if (typeof window !== 'undefined') {
		import('bootstrap');
	}
	let { data, children } = $props();
</script>

<svelte:head>
	<title>Corpus Search</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="{base}/">Home</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="{base}/"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Corpora
					</a>
					<CorpusNav corpusData={data.corpusData} />
				</li>
			</ul>
			<!-- <form class="d-flex" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form> -->
		</div>
	</div>
</nav>
<main class="flex-shrink-0 flex-grow-1">
	<div class="container">
		{@render children()}
	</div>
</main>
<footer class="bg-light pt-3 pb-2">
	<p class="text-center text-body-secondary">
		<a href="{base}/imprint">Imprint</a> |
		<a href="https://github.com/csae8092/corpus-search-website">CodeRepo</a>
	</p>
</footer>
