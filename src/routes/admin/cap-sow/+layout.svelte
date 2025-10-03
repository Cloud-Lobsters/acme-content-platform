<div class="contract-layout">
	<slot />
</div>

<style>
	.contract-layout {
		max-width: 1200px; /* A4 width */
		margin: 0 auto;
		padding: 2.54cm; /* Standard 1-inch margins */
		background: white;
	}

	:global(.contract-layout .section) {
		margin-bottom: 2rem;
	}

	@media print {
		.contract-layout {
			width: 21cm;
			min-height: 29.7cm; /* A4 height */
			padding: 2.54cm;
			margin: 0;
		}
	}
</style>
