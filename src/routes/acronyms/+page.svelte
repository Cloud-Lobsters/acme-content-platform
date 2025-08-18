<script>
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';

	let searchTerm = '';

	let acronyms = [
		{
			title: 'DEPAEM',
			meaning: 'Digital Experience Platform – Adobe Experience Manager',
			notes: "Acme Inc's hosted AEM instance"
		},
		{
			title: 'GPWS',
			meaning: 'Global Public Website Services',
			notes: 'Team owning content tooling for public sites'
		},
		{ title: 'PWS', meaning: 'Public Website Service', notes: 'Appears in Service Desk name' },
		{ title: 'D&A', meaning: 'Data & Analytics', notes: 'Central analytics function' },
		{
			title: 'CSC',
			meaning: 'Customer Service Centre',
			notes: 'On‑shore/off‑shore operations teams'
		},
		{
			title: 'MDP',
			meaning: 'Messaging Delivery Platform',
			notes: 'Acme Inc‑built SMS/push gateway'
		},
		{
			title: 'ICCM',
			meaning: 'IBM Campaign / Integrated Campaign & Content Management',
			notes: 'Legacy on‑prem email engine, 11mio'
		},
		{
			title: 'CIM',
			meaning: 'Customer Interaction Management',
			notes: 'Salesforce or PEGA add‑on for campaign management'
		},
		{
			title: 'Cinch',
			meaning: 'Third‑party email/SMS relay provider',
			notes: 'Often paired with campaign workflows'
		},
		{
			title: 'Numbinly',
			meaning: 'List‑management micro‑service',
			notes: 'Replaces mailing‑list spreadsheets'
		},
		{
			title: 'PEGA',
			meaning: 'Platform for Enterprise Grade Applications',
			notes: 'Decision and workflow engine'
		},
		{ title: 'AEM', meaning: 'Adobe Experience Manager', notes: 'Content management system' },
		{ title: 'GCP', meaning: 'Google Cloud Platform', notes: 'Cloud computing services' },
		{
			title: 'CMS',
			meaning: 'Content Management System',
			notes: 'General content management platform'
		},
		{
			title: 'CRM',
			meaning: 'Customer Relationship Management',
			notes: 'Customer data management system'
		},
		{
			title: 'DSP3',
			meaning: 'Digital Services Platform 3',
			notes: 'Acme Inc internal platform reference'
		},
		{ title: 'SMM', meaning: 'Social Media Management', notes: 'Content model reference' },
		{
			title: 'FQDN',
			meaning: 'Fully Qualified Domain Name',
			notes: 'New initiative led by Fernando H COSTA'
		},
		{ title: 'WPB', meaning: 'Wealth and Personal Banking', notes: 'Business division' }
	];

	$: filteredAcronyms = acronyms.filter(
		(acronym) =>
			acronym.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			acronym.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
			acronym.notes.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<svelte:head>
	<title>Acme Inc Acronyms Dictionary</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 print:bg-white">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 print:px-2 print:py-4">
		<!-- Search -->
		<div class="mb-8 text-center no-print">
			<div class="mx-auto max-w-md">
				<Input
					type="text"
					placeholder="Search acronyms..."
					bind:value={searchTerm}
					class="rounded-full border-2 border-gray-300 px-6 py-3 text-lg focus:border-[#db0011]"
				/>
			</div>
		</div>

		<!-- Stats -->
		<div class="mb-8 text-center text-gray-600 print:mb-4">
			<span class="text-lg font-semibold print:text-base">{filteredAcronyms.length}</span>
			{filteredAcronyms.length === 1 ? 'acronym' : 'acronyms'}
			{searchTerm ? 'found' : 'in total'}
		</div>

		<!-- Acronyms Grid -->
		{#if filteredAcronyms.length > 0}
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 print:grid-cols-2 print-grid-2 print:gap-3">
				{#each filteredAcronyms as acronym}
					<Card
						class="border-l-4 border-l-[#db0011] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg print-avoid-break"
					>
						<CardHeader class="pb-3">
							<CardTitle class="text-xl font-bold text-[#db0011]">
								{acronym.title}
							</CardTitle>
							<CardDescription class="text-base leading-relaxed font-medium text-gray-700">
								{acronym.meaning}
							</CardDescription>
						</CardHeader>
						<CardContent class="pt-0">
							<p class="text-sm leading-relaxed text-gray-600 italic">
								{acronym.notes}
							</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		{:else}
			<div class="py-16 text-center">
				<div class="mb-4 text-6xl text-gray-300">🔍</div>
				<p class="text-xl text-gray-600">No acronyms found matching your search.</p>
			</div>
		{/if}

		<!-- Back to Home -->
		<div class="mt-12 text-center no-print">
			<a
				href="/"
				class="inline-block rounded-lg bg-[#db0011] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a50000]"
			>
				← Back to Overview
			</a>
		</div>
	</div>
</div>

<style>
	@media print {
		@page {
			size: A4;
			margin: 15mm 20mm 15mm 20mm;
		}

		body {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
			color: black !important;
			font-size: 11pt;
		}

		/* Hide elements */
		.no-print {
			display: none !important;
		}

		/* Avoid page breaks */
		.print-avoid-break {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		/* Grid adjustments */
		.print-grid-2 {
			grid-template-columns: repeat(2, 1fr) !important;
		}

		/* Text and color adjustments */
		h1, h2, h3, h4, h5, h6 {
			color: black !important;
			font-weight: bold !important;
		}

		.text-\[\#db0011\] {
			color: black !important;
		}

		.text-muted-foreground, .text-gray-600, .text-gray-700 {
			color: #666 !important;
		}

		/* Card and layout adjustments */
		[class*="card"] {
			border: 1px solid #ccc !important;
			background: white !important;
			box-shadow: none !important;
		}

		/* Remove hover states */
		*:hover {
			transform: none !important;
			box-shadow: none !important;
		}

		/* Button styles */
		button, .btn, [class*="button"], input {
			display: none !important;
		}

		/* Links in print */
		a {
			color: black !important;
			text-decoration: none !important;
		}
	}
</style>
