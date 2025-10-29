<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { Printer } from '@lucide/svelte';

	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<title>Industrial Placement / Internship - Cloud Lobsters</title>
</svelte:head>

<div class="container mx-auto max-w-5xl p-6">
	<!-- Print Button -->
	<div class="print-hidden mb-4 flex justify-end">
		<Button
			onclick={handlePrint}
			style="background-color: #002147; color: white;"
			class="hover:opacity-90"
		>
			<Printer class="mr-2 h-4 w-4" />
			Print to A4
		</Button>
	</div>

	<!-- Header -->
	<div class="mb-1 text-center">
		<h1 class="mb-0 text-2xl font-bold" style="color: #002147;">Department of Computing</h1>
		<h2 class="mb-0 text-lg font-semibold text-gray-700">
			Industrial Placement / Internship Advert and Job Description
		</h2>
	</div>

	<!-- Company Information Section -->
	<div class="mb-1 rounded-lg bg-white p-2 shadow-md">
		<h3
			class="mb-1 pb-1 text-base font-semibold"
			style="color: #002147; border-bottom: 1px solid #003E74;"
		>
			Your Company
		</h3>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
			<div class="space-y-1.5">
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Company name</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						Cloud Lobsters
					</div>
				</div>
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Website address</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						www.cloudlobsters.com
					</div>
				</div>
			</div>
			<div class="space-y-1.5">
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Location</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						140 Goswell Road, EC1V 7DY
					</div>
				</div>
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Contact</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						internships@cloudlobsters.com
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Industrial Placement Opportunity Section -->
	<div class="mb-1 rounded-lg bg-white p-2 shadow-md">
		<h3
			class="mb-1 pb-0.5 text-base font-semibold"
			style="color: #002147; border-bottom: 1px solid #003E74;"
		>
			Industrial Placement Opportunity
		</h3>
		<div class="space-y-1">
			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600">Job title</label>
				<div
					class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Software Development Intern
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600"
					>Job description and key responsibilities</label
				>
				<div
					class="filled-content min-h-[3rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Work alongside our development team on real-world projects, designing, building and
					deploying production systems. We use AI both in our products and to help speed up
					development. We build systems for primarily financial services clients but also have
					projects in other sectors, we are always looking for exciting new challenges. At Cloud
					Lobsters, you will experience all aspects of the development lifecycle from conception to
					deployment.
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600"
					>Placement opportunity open to:</label
				>
				<div class="space-y-0.5 rounded border border-blue-200 bg-blue-50 p-1.5 text-xs">
					<div class="flex items-start">
						<span class="mr-1">•</span>
						<div>
							<strong>MEng Computing 6 months:</strong> 30th March – 11th September 2026
							<span class="text-xs text-gray-600"
								>(24 weeks standard, 20 weeks minimum accepted)</span
							>
						</div>
					</div>
					<div class="flex items-start">
						<span class="mr-1">•</span>
						<div>
							<strong>MEng Joint Maths Computing 4 months:</strong> 9th June – 19th September 2026
							<span class="text-xs text-gray-600"
								>(16 weeks standard, 12 weeks minimum accepted)</span
							>
						</div>
					</div>
					<div class="flex items-start">
						<span class="mr-1">•</span>
						<div>
							<strong>MSc Artificial Intelligence 4 months:</strong> ~11th May – ~4th September 2026
						</div>
					</div>
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600"
					>Candidate profile (e.g., skills, programming languages)</label
				>
				<div
					class="filled-content min-h-[2.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Strong JavaScript skills are essential. Python and other languages are a plus. Experience
					with web development, version control (Git), and an interest in cloud technologies. We use
					Svelte as our frontend framework — experience with this powerful and elegant framework is
					a definite plus! Good problem-solving abilities and eagerness to learn.
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600">Salary and benefits</label>
				<div
					class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Competitive salary, flexible working arrangements, mentorship from experienced developers,
					and opportunity for career progression.
				</div>
			</div>
		</div>
	</div>

	<!-- Application Procedure Section -->
	<div class="rounded-lg bg-white p-2 shadow-md">
		<h3
			class="mb-1 pb-0.5 text-base font-semibold"
			style="color: #002147; border-bottom: 1px solid #003E74;"
		>
			Application Procedure
		</h3>
		<div class="space-y-1">
			<div class="grid grid-cols-1 gap-2 md:grid-cols-2">
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Applications open</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						07/10/2025
					</div>
				</div>
				<div>
					<label class="mb-0.5 block text-xs font-medium text-gray-600">Closing date</label>
					<div
						class="filled-content min-h-[1.5rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
					>
						31/12/2025
					</div>
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600"
					>Application procedure (e.g., online/email with CV & cover letter)</label
				>
				<div
					class="filled-content min-h-[2rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Send us an email at internships@cloudlobsters.com with your CV and cover letter. Once we
					have reviewed your application, we'll invite you to come and see us at our office to
					discuss your experience and interests.
				</div>
			</div>

			<div>
				<label class="mb-0.5 block text-xs font-medium text-gray-600">Other relevant details</label>
				<div
					class="filled-content min-h-[2rem] rounded border border-gray-200 bg-gray-50 p-1.5 text-sm"
				>
					Placement starts 30th March 2026. We welcome applications from all eligible students and
					look forward to meeting you!
				</div>
			</div>
		</div>
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

		.container {
			max-width: 100%;
			padding: 0.3in;
		}

		/* A4 paper size */
		@page {
			size: A4;
			margin: 0.3in;
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

		.bg-blue-50 {
			background-color: white !important;
			border: 1px solid #dbeafe !important;
		}

		/* Tighter spacing for print */
		.mb-1 {
			margin-bottom: 0.2rem !important;
		}

		.mb-1\.5 {
			margin-bottom: 0.2rem !important;
		}

		.mb-2 {
			margin-bottom: 0.2rem !important;
		}

		.p-2 {
			padding: 0.3rem !important;
		}

		.space-y-0\.5 > * + * {
			margin-top: 0.1rem !important;
		}

		.space-y-1 > * + * {
			margin-top: 0.15rem !important;
		}

		.space-y-1\.5 > * + * {
			margin-top: 0.15rem !important;
		}
	}
</style>
