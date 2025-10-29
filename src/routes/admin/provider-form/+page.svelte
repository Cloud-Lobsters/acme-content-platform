<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { Printer } from '@lucide/svelte';

	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<title>Placement Provider Information Form - Cloud Lobsters</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-5xl">
	<!-- Print Button -->
	<div class="flex justify-end mb-4 print-hidden">
		<Button onclick={handlePrint} style="background-color: #002147; color: white;" class="hover:opacity-90">
			<Printer class="mr-2 h-4 w-4" />
			Print to A4
		</Button>
	</div>

	<!-- Header -->
	<div class="mb-3 text-center">
		<h1 class="text-2xl font-bold mb-2" style="color: #002147;">Placement Provider Information Form</h1>
		<p class="text-xs text-gray-600 mb-2">Thank you for offering to host a placement student(s) from Imperial College London.</p>
		<p class="text-xs text-gray-600">Imperial regards a placement as a three-way partnership between the placement provider, the student and Imperial. The responsibilities of each party are outlined in Imperial's Placement Learning Policy.</p>
	</div>

	<!-- Section 1: Contact Details -->
	<div class="bg-white rounded-lg shadow-md p-3 mb-3">
		<h3 class="text-base font-semibold mb-2 pb-1" style="color: #002147; border-bottom: 1px solid #003E74;">Section 1: Contact Details</h3>
		<div class="space-y-2">
			<div>
				<label class="block text-xs font-medium text-gray-600 mb-0.5">Name of Organisation ('Placement Provider')</label>
				<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">Cloud Lobsters</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Official Address (Location 1)</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">140 Goswell Road, EC1V 7DY</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Country</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">United Kingdom</div>
				</div>
			</div>

			<p class="text-xs font-medium text-gray-700 mt-2">Address of location(s) where students can be hosted (if different from above):</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Location 2</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">N/A</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Country</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm"></div>
				</div>
			</div>

			<p class="text-xs font-medium text-gray-700 mt-2">Person at placement provider with overall responsibility for placement students:</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Name</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">Duncan</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Email</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">duncan@cloudlobsters.com</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Job Title</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">CTO</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Tel No</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">07801638162</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Location</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">London</div>
				</div>
			</div>

			<div class="mt-2">
				<label class="block text-xs font-medium text-gray-600 mb-0.5">Will your organisation be solely responsible for the management of this placement(s)?</label>
				<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">☑ YES  ☐ NO</div>
			</div>
		</div>
	</div>

	<!-- Section 2: Health, Safety and Insurance -->
	<div class="bg-white rounded-lg shadow-md p-3 mb-3">
		<h3 class="text-base font-semibold mb-2 pb-1" style="color: #002147; border-bottom: 1px solid #003E74;">Section 2: Health, Safety and Insurance</h3>
		<div class="space-y-1.5 text-xs">
			<div class="flex items-start">
				<span class="mr-2 font-medium">1.</span>
				<div class="flex-1">
					<span>Do you have a written health and safety policy?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>
			<div class="flex items-start">
				<span class="mr-2 font-medium">2.</span>
				<div class="flex-1">
					<span>Do you have an on-site health and safety advisor/officer?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>
			<div class="flex items-start">
				<span class="mr-2 font-medium">3.</span>
				<div class="flex-1">
					<span>Do you have a procedure for providing general health and safety training for people working for you, including use of equipment, vehicles etc?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>
			<div class="flex items-start">
				<span class="mr-2 font-medium">4.</span>
				<div class="flex-1">
					<span>Will you provide specific health and safety training for the placement student as it is relevant to their placement, especially a start of placement (Day 1) induction?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>
			<div class="flex items-start">
				<span class="mr-2 font-medium">5.</span>
				<div class="flex-1">
					<span>Do you have a procedure for recording and reporting accidents and incidents?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>

			<div class="mt-2">
				<p class="font-medium mb-1">6. Person with responsibility for health and safety:</p>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-2 ml-4">
					<div>
						<label class="block text-xs text-gray-600">Name</label>
						<div class="p-1 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">Tara Whitaker</div>
					</div>
					<div>
						<label class="block text-xs text-gray-600">Email</label>
						<div class="p-1 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">tara@cloudlobsters.com</div>
					</div>
					<div>
						<label class="block text-xs text-gray-600">Job Title</label>
						<div class="p-1 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">COO</div>
					</div>
					<div>
						<label class="block text-xs text-gray-600">Location</label>
						<div class="p-1 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">London</div>
					</div>
				</div>
			</div>

			<div class="mt-2">
				<p class="font-medium mb-1">7. INSURANCE: Organisations in the United Kingdom:</p>
				<div class="ml-4 space-y-1">
					<div class="flex items-start">
						<span class="mr-2">a.</span>
						<div class="flex-1">
							<span>Do you hold Public and Employer's Liability Insurance?</span>
							<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
						</div>
					</div>
					<div class="flex items-start">
						<span class="mr-2">b.</span>
						<div class="flex-1">
							<span>Would your organisation's insurances cover liability arising from injury sustained by a placement student as a result of their duties as an employee or trainee?</span>
							<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Page Break -->
	<div class="page-break"></div>

	<!-- Section 3: Site Visits & Other Issues -->
	<div class="bg-white rounded-lg shadow-md p-3 mb-3 section-after-break">
		<h3 class="text-base font-semibold mb-2 pb-1" style="color: #002147; border-bottom: 1px solid #003E74;">Section 3: Site Visits & Other Issues</h3>
		<div class="space-y-1.5 text-xs">
			<div class="flex items-start">
				<span class="mr-2 font-medium">1.</span>
				<div class="flex-1">
					<span>Will you allow the Placement Manager/Tutor from Imperial to undertake a site visit?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
				</div>
			</div>

			<div class="flex items-start">
				<span class="mr-2 font-medium">2.</span>
				<div class="flex-1">
					<span>Do you foresee any issues relating to confidentiality and disclosure which will affect the procedures used by Imperial for assessing the work/project/study undertaken by a student(s) on placement?</span>
					<div class="ml-2 inline-block">☐ YES  ☑ NO</div>
				</div>
			</div>

			<div class="flex items-start">
				<span class="mr-2 font-medium">3.</span>
				<div class="flex-1">
					<span>Will your organisation require the signing of a specific placement agreement or training agreement?</span>
					<div class="ml-2 inline-block">☐ YES  ☑ NO</div>
				</div>
			</div>

			<div class="flex items-start">
				<span class="mr-2 font-medium">4.</span>
				<div class="flex-1">
					<span>Will your organisation instruct our student(s) as to the appropriate (correct) immigration requirements they should follow?</span>
					<div class="ml-2 inline-block">☑ YES  ☐ NO</div>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] mt-1 text-xs filled-content">We will provide guidance on UK work authorization requirements for international students.</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Section 4: Authorisation -->
	<div class="bg-white rounded-lg shadow-md p-3">
		<h3 class="text-base font-semibold mb-2 pb-1" style="color: #002147; border-bottom: 1px solid #003E74;">Section 4: Authorisation by Placement Provider</h3>
		<div class="space-y-2">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Name of Individual Completing Form</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">Duncan Elliot</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Position</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">CTO</div>
				</div>
			</div>

			<p class="text-xs text-gray-700 mt-2">I, the undersigned, declare that the above statements are true to the best of my knowledge.</p>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Signature</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[2.5rem] flex items-center">
						<img src="/Duncan-Elliot-SignatureGenerator (1).svg" alt="Duncan Elliot Signature" class="h-10" />
					</div>
				</div>
				<div>
					<label class="block text-xs font-medium text-gray-600 mb-0.5">Date</label>
					<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[1.5rem] text-sm filled-content">07/10/2025</div>
				</div>
			</div>

			<div class="mt-2">
				<label class="block text-xs font-medium text-gray-600 mb-0.5">Company/Organisation Stamp (if available)</label>
				<div class="p-1.5 bg-gray-50 rounded border border-gray-200 min-h-[3rem] text-sm italic text-gray-400">[Company stamp to be applied]</div>
			</div>
		</div>
	</div>

	<!-- Footer note -->
	<div class="mt-3 text-xs text-gray-600 text-center">
		<p>Please return to: Industrial Liaison Team, Department of Computing, Imperial College London,</p>
		<p>South Kensington Campus, London, SW7 2AZ or docilt@ic.ac.uk</p>
	</div>
</div>

<style>
	/* Filled content styling */
	.filled-content {
		font-family: 'Courier New', monospace;
		font-weight: 500;
		color: #1a1a1a;
		font-size: 0.7rem;
		line-height: 1.3;
	}

	@media print {
		.print-hidden {
			display: none !important;
		}

		.page-break {
			page-break-before: always;
			break-before: page;
		}

		.section-after-break {
			margin-top: 1.5rem;
		}

		.container {
			max-width: 100%;
			padding: 0.4in;
		}

		/* A4 paper size */
		@page {
			size: A4;
			margin: 0.4in;
		}

		/* Remove shadows for print */
		.shadow-md {
			box-shadow: none !important;
		}

		/* Adjust colors for print */
		.bg-gray-50 {
			background-color: white !important;
			border: 1px solid #e5e7eb !important;
		}

		/* Tighter spacing for print */
		.mb-3 {
			margin-bottom: 0.5rem !important;
		}

		.p-3 {
			padding: 0.5rem !important;
		}
	}
</style>
