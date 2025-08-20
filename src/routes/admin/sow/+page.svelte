<script>
	import PageBreak from '$lib/components/PageBreak.svelte';
	import Page from '../../+page.svelte';
	import A4 from './A4.svelte';
</script>

<svelte:head>
	<title>Statement of Work - HSBC Engagement</title>
</svelte:head>

<!-- Statement of Work -->
<A4
	border={true}
	borderRadius="8px"
	backgroundColor="white"
	padding="2rem"
	pageBreak={false}
	autoScale={false}
	minScale={0.4}
	printSimulation={true}
>
	<section class="print-avoid-break w-full">
		<div class="mb-6 text-center print:mb-4">
			<h2 class="text-2xl font-bold text-red-700 print:text-xs">Statement of Work</h2>
			<div class="mx-auto mt-2 h-1 w-24 bg-red-600 print:mt-1 print:h-0.5 print:w-16"></div>
		</div>

		<!-- Delivery Framework Disclaimer -->
		<div class="mb-4 rounded-md bg-red-700 p-2 print:mb-2 print:bg-red-800 print:p-1">
			<p class="text-sm font-medium text-red-100 print:text-xs">
				<strong>Delivery:</strong> Via Mansion House Consulting's Tier 1 Financial Services framework
				for additional assurance.
			</p>
		</div>

		<div class="space-y-4 print:space-y-2">
			<!-- Scope of Work -->
			<div
				class="rounded-lg bg-gray-50 p-4 print:border print:border-gray-300 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">Scope of Work</h3>
				<ul class="space-y-3 text-gray-800 print:space-y-0 print:text-xs print:leading-tight">
					<li class="flex items-start gap-2">
						<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
						></span>
						<span
							><strong>Template Compliance Assessment:</strong> An AI-assisted review and analysis of
							3,000-4,000 existing templates for regulatory and business compliance</span
						>
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
						></span>
						<span
							><strong>Innovation Banking Workflow Optimisation:</strong> Collaborate with Innovation
							Banking to understand requirements and develop MVP to inform long-term robust solution
							development</span
						>
					</li>
				</ul>
			</div>

			<!-- Project Details with Key Deliverables -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 print:grid-cols-2 print:gap-2">
				<!-- Project Details -->
				<div
					class="rounded-lg bg-gray-50 p-4 print:border print:border-gray-300 print:bg-white print:p-2"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						Project Details
					</h3>
					<div class="space-y-4 text-gray-800 print:space-y-1 print:text-xs">
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Team Size:</span>
							<span class="font-semibold">5 FTEs</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Duration:</span>
							<span class="font-semibold">3 Months</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Contract Type:</span>
							<span class="font-semibold">Fixed Price</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Total Investment:</span>
							<span class="font-semibold text-red-700">£30,000 (Ex VAT)</span>
						</div>
						<div class="flex justify-between">
							<span class="font-medium">Payment Terms:</span>
							<span class="font-semibold">Monthly in arrears</span>
						</div>
					</div>
				</div>

				<!-- Key Deliverables -->
				<div
					class="rounded-lg bg-gray-50 p-4 print:border print:border-gray-300 print:bg-white print:p-2"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						Key Deliverables
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs">
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span
								><strong>Template Compliance Assessment</strong> - AI-powered analysis of 3,000-4,000
								templates with regulatory compliance ratings and remediation roadmap</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span
								><strong>Innovation Banking Workflow MVP</strong> - Optimised content management prototype
								with implementation strategy and knowledge transfer</span
							>
						</li>
					</ul>
				</div>
			</div>

			<!-- Payment Terms -->
			<div
				class="rounded-lg bg-purple-50 p-4 print:border print:border-purple-400 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">Payment Terms</h3>
				<div class="space-y-2 text-gray-800 print:space-y-0 print:text-xs">
					<p>
						<strong>Currency & VAT:</strong> All prices are quoted in GBP (£) and are exclusive of VAT.
						VAT will be added at the prevailing rate where applicable.
					</p>
					<p>
						<strong>Payment Schedule:</strong> Invoices are payable one month in arrears from the date
						of invoice.
					</p>
					<p>
						<strong>Deliverable Independence:</strong> Payments are not tied to specific deliverables.
						The client may, upon mutual agreement, propose a set of deliverables for payment milestones;
						however, for the purposes of this Statement of Work, we will proceed with time-based billing.
					</p>
				</div>
			</div>
			<!-- Technical Requirements & Infrastructure Access -->
			<div
				class="rounded-lg bg-blue-50 p-4 print:border print:border-blue-400 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
					Technical Requirements & Infrastructure Access
				</h3>
				<div class="space-y-2 text-gray-800 print:space-y-0 print:text-xs">
					<p>
						<strong>Tooling:</strong> Freedom to use Svelte (UI framework), Claude-Code from Anthropic
						(AI coding assistant) and Figma (design collaboration tool).
					</p>
					<p>
						<strong>Infrastructure:</strong> Access to HSBC development/staging environments with deployment
						permissions. Access to Apple Macs
					</p>
				</div>
			</div>
			<!-- Technology Stack -->
			<div
				class="rounded-lg bg-indigo-50 p-4 print:border print:border-indigo-400 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
					Technology Stack for Platform Development
				</h3>
				<div class="flex flex-wrap gap-2 print:gap-1">
					<!-- Node.js -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.016l2.256 1.339c.082.045.199.045.276 0l8.795-5.076c.082-.047.135-.14.135-.241V6.921c0-.103-.054-.198-.137-.243l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.045-.139.139-.139.241v10.15c0 .1.055.194.137.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.66.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.943.924 1.603v10.15c0 .66-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247zm7.101-10.007c0-1.9-1.284-2.406-3.987-2.763-2.731-.361-3.009-.548-3.009-1.187 0-.528.235-1.233 2.258-1.233 1.807 0 2.473.389 2.747 1.607.024.115.124.199.241.199h1.133c.067 0 .13-.028.177-.076.047-.048.078-.113.074-.182-.177-2.098-1.571-3.076-4.388-3.076-2.508 0-4.004 1.058-4.004 2.833 0 1.925 1.488 2.457 3.895 2.695 2.88.282 3.103.703 3.103 1.269 0 .983-.789 1.402-2.642 1.402-2.327 0-2.839-.584-3.011-1.742-.018-.124-.11-.215-.236-.215H9.906c-.131 0-.237.106-.237.236 0 1.482.806 3.248 4.666 3.248 2.794.001 4.397-1.098 4.397-3.015z"
							/>
						</svg>
						<span>Node.js</span>
					</div>

					<!-- TypeScript -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
							/>
						</svg>
						<span>TypeScript</span>
					</div>

					<!-- Svelte -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.166Z"
							/>
						</svg>
						<span>Svelte</span>
					</div>

					<!-- SvelteKit -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.166Z"
							/>
						</svg>
						<span>SvelteKit</span>
					</div>

					<!-- Tailwind CSS -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-medium text-cyan-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
							/>
						</svg>
						<span>Tailwind CSS</span>
					</div>

					<!-- shadcn-svelte -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg
							class="h-4 w-4 print:h-3 print:w-3"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
							<path d="M9 9h6v6H9z" />
						</svg>
						<span>shadcn-svelte</span>
					</div>

					<!-- Python -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-medium text-yellow-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
							/>
						</svg>
						<span>Python</span>
					</div>

					<!-- UV -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg
							class="h-4 w-4 print:h-3 print:w-3"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="10" />
							<path d="M8 12h8" />
							<path d="M12 8v8" />
						</svg>
						<span>UV</span>
					</div>

					<!-- Golang -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1.5 text-sm font-medium text-teal-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.771.105-.129.198-.269.315-.433H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.047-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"
							/>
						</svg>
						<span>Go</span>
					</div>

					<!-- PostgreSQL -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M23.559 14.433c-.119.254-.369.428-.645.428-.087 0-.174-.022-.257-.067-1.84-1.019-3.45-1.528-4.799-1.528-.39 0-.761.046-1.111.132.79-.494 1.489-1.129 2.068-1.881.982-1.273 1.514-2.805 1.514-4.425C20.329 3.178 17.15 0 13.237 0c-.229 0-.472.013-.709.039C11.25.183 9.937.732 8.762 1.613c-1.021-.381-2.107-.581-3.237-.581C2.464 1.032 0 3.491 0 6.545c0 .494.063.98.189 1.445-.435.462-.787 1.01-1.022 1.599C-.913 9.766.704 13.795 4.579 16.564c2.525 1.805 5.799 3.033 9.556 3.616.251.039.501.058.747.058 1.75 0 3.426-.955 4.613-2.623.595-.836 1.006-1.798 1.224-2.836.288.197.567.349.829.456.264.108.524.163.785.163.505 0 .979-.196 1.297-.538.082-.089.164-.179.238-.278.404-.539.53-1.332.351-2.139v-.01zM2.372 10.283c.113-.29.291-.561.526-.781-.021.207-.035.416-.035.628 0 1.863.914 3.516 2.318 4.552-.438-.174-.876-.377-1.302-.611-1.362-.75-2.21-1.777-2.253-2.747-.006-.134.02-.276.056-.391-.121.174-.253.343-.392.507.246-.315.524-.604.839-.851l-.003-.003c.078-.092.163-.203.246-.303zm8.204-7.444c.366.014.729.049 1.084.104.016-.294.047-.597.098-.895.061-.353.147-.689.257-1.002C11.176.732 10.155.622 9.04.807c-.906.15-1.721.494-2.375.974.845-.307 1.756-.486 2.703-.526.073-.005.143-.008.214-.008l.994.008zM11.96 3.74a7.353 7.353 0 00-1.804-.573 6.782 6.782 0 00-1.636-.039c-1.228.146-2.329.585-3.192 1.267a5.435 5.435 0 011.471-.437 5.821 5.821 0 012.021.041c.712.155 1.377.421 1.962.786.496.31.922.685 1.267 1.108a5.166 5.166 0 00-.089-2.153zm-1.052 6.957c-.094-.065-.193-.123-.295-.175.215-.455.341-.957.341-1.484 0-1.026-.447-1.945-1.156-2.577-.227-.201-.476-.374-.742-.513a3.486 3.486 0 01.747-.083c.387 0 .759.066 1.103.185.581.201 1.089.573 1.428 1.046.338.474.521 1.026.521 1.597 0 .856-.405 1.617-1.033 2.099.043-.031.084-.062.127-.095h-.041zm7.878 2.593c-.255.425-.765.694-1.314.694-.165 0-.327-.026-.482-.074-.485-.15-.877-.447-1.233-.877.208.055.416.097.624.126.627.087 1.256.039 1.862-.099.577-.132 1.119-.359 1.603-.654a1.543 1.543 0 01-.308.452l-.01.009a1.32 1.32 0 01-.742.423z"
							/>
						</svg>
						<span>PostgreSQL</span>
					</div>

					<!-- Ubuntu -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm3.279 17.68c-.766.441-1.029 1.422-.586 2.189.441.765 1.422 1.028 2.188.584.766-.441 1.029-1.422.585-2.189-.441-.765-1.421-1.028-2.187-.584zm-3.279-1c-.705 0-1.373-.157-1.971-.435L8.916 18.24c.93.459 1.978.721 3.084.721.646 0 1.268-.091 1.86-.256.104-.643.485-1.234 1.095-1.587.609-.351 1.313-.386 1.92-.156 1.186-1.163 1.957-2.749 2.07-4.515l-2.285-.033c-.21 2.391-2.215 4.266-4.66 4.266zM7.32 12c0-1.583.787-2.981 1.99-3.83L8.14 6.209c-1.404.93-2.445 2.369-2.881 4.035-.436 1.667-.286 3.434.424 4.991.122-.461.363-.898.725-1.257.363-.358.803-.601 1.263-.705-1.163-1.163-1.957-2.749-2.07-4.515L7.32 12zm10.324-7.82c-.767.442-1.029 1.422-.586 2.188s1.422 1.029 2.189.585c.765-.441 1.028-1.422.584-2.189-.441-.765-1.421-1.028-2.187-.584zm-.986 1.426c.495.286.815.795.88 1.35.064.552-.135 1.07-.495 1.444-.361.375-.846.559-1.33.559-.705 0-1.373.157-1.97.436l1.138 1.996c.93-.459 1.978-.721 3.084-.721.646 0 1.268.091 1.859.256.104.644.485 1.235 1.095 1.587.609.352 1.313.387 1.92.156-1.185-1.164-1.956-2.75-2.07-4.516l-2.285.033c.21-2.391-2.215-4.266-4.66-4.266 1.606 0 3.026.802 3.872 2.025l1.716-1.51c-.411-.503-.915-.94-1.495-1.283-.58-.342-1.21-.582-1.866-.699v.002c-.437.122-.855.34-1.217.655-.363.358-.624.795-.725 1.256z"
							/>
						</svg>
						<span>Ubuntu</span>
					</div>

					<!-- macOS -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10c5.5 0 10-4.49 10-10s-4.5-10-10-10zm0 1.29c4.81 0 8.71 3.9 8.71 8.71s-3.9 8.71-8.71 8.71-8.71-3.9-8.71-8.71 3.9-8.71 8.71-8.71zm0 2.26c-3.55 0-6.45 2.9-6.45 6.45s2.9 6.45 6.45 6.45 6.45-2.9 6.45-6.45-2.9-6.45-6.45-6.45z"
							/>
						</svg>
						<span>macOS</span>
					</div>

					<!-- VS Code -->
					<div
						class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 print:px-2 print:py-1 print:text-xs"
					>
						<svg class="h-4 w-4 print:h-3 print:w-3" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
							/>
						</svg>
						<span>VS Code</span>
					</div>
				</div>
			</div>

			<!-- HSBC Internal Resource Requirements -->
			<div
				class="rounded-lg bg-yellow-50 p-4 print:border print:border-yellow-400 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
					HSBC Internal Resource Requirements
				</h3>
				<div class="space-y-2 text-gray-800 print:space-y-0 print:text-xs">
					<p>
						<strong>Template Compliance:</strong> 1 FTE from compliance/risk team with template governance
						knowledge.
					</p>
					<p>
						<strong>Innovation Banking:</strong> 1 FTE with workflow expertise for MVP development.
					</p>
					<p>
						<strong>Knowledge Transfer:</strong> Leverage existing HSBC developers for capability development.
					</p>
					<p class="text-xs text-gray-600 italic print:text-xs">
						Essential for project success and seamless integration.
					</p>
				</div>
			</div>

			<!-- Additional Terms -->
			<div
				class="rounded-lg bg-green-50 p-4 print:border print:border-green-400 print:bg-white print:p-2"
			>
				<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
					Additional Terms
				</h3>
				<div class="space-y-2 text-gray-800 print:space-y-0 print:text-xs">
					<p>
						<strong>Travel:</strong> We do not anticipate having to travel for this engagement. However,
						any travel outside of London will be at additional cost to HSBC and would require a separate
						Statement of Work.
					</p>
					<p>
						<strong>Pricing:</strong> All prices quoted are exclusive of VAT. VAT will be added at the
						prevailing rate where applicable.
					</p>
					<p>
						<strong>Administration:</strong> Mansion House Consulting administration costs (2%) will
						be borne by HSBC as part of their framework delivery model.
					</p>
				</div>
			</div>
		</div>

		<!-- Contract Summary -->
		<div
			class="contract-summary mt-6 rounded-lg bg-red-50 p-6 text-gray-900 print:mt-4 print:bg-red-50 print:p-4"
		>
			<h3 class="mb-3 text-xl font-bold text-red-700 print:mb-1 print:text-xs">Contract Summary</h3>
			<p class="leading-relaxed text-gray-800 print:text-xs print:leading-tight">
				Three-month fixed-price engagement delivering Template Compliance Assessment and Innovation
				Banking optimisation. Streamline messaging workflows, assess Adobe/PEGA functionality for
				potential in-housing, implement AI-driven compliance solutions.
			</p>
		</div>
	</section>
</A4>
<PageBreak />
<!-- Workstream 1: Template Compliance Assessment Timeline -->
<A4
	border={false}
	borderRadius="8px"
	backgroundColor="white"
	padding="1.5rem"
	pageBreak={true}
	autoScale={false}
	minScale={0.4}
	printSimulation={true}
>
	<section class="print-avoid-break w-full">
		<div class="mb-4 text-center print:mb-2">
			<h2 class="text-xl font-bold text-red-700 print:text-xs">
				Workstream 1: Template Compliance Assessment
			</h2>
			<div class="mx-auto mt-1 h-0.5 w-20 bg-red-600 print:mt-1 print:h-0.5 print:w-16"></div>
			<p class="mt-1 text-xs text-red-600 print:text-xs">
				AI-Powered Template Analysis & Compliance Platform
			</p>
		</div>

		<!-- Monthly Timeline -->
		<div class="space-y-4 print:space-y-2">
			<!-- Month 1 -->
			<div
				class="rounded-lg bg-red-50 p-3 print:border print:border-red-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">1</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-red-700 print:text-xs">
							Month 1 - Discovery & Platform Setup
						</h3>
						<p class="text-xs text-red-600 print:text-xs">
							Template identification, access setup, and platform foundation
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-red-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-red-700 print:mb-1 print:text-xs">
							Template Discovery & Access
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Identify scope of templates across HSBC systems</li>
							<li>✓ Map template locations and access requirements</li>
							<li>✓ Secure access permissions and integration protocols</li>
							<li>✓ Stand up compilation platform for all templates</li>
						</ul>
					</div>
					<div class="rounded border-l-4 border-orange-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-orange-700 print:mb-1 print:text-xs">
							Testing & Extraction Framework
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Write automated tests for template cycling</li>
							<li>✓ Build information extraction capabilities</li>
							<li>✓ Perform sample testing and validation</li>
							<li>
								✓ Refine the template data extraction until we achieve 90%+ data extraction accuracy
								to move onto the next step
							</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-red-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-red-800 print:mb-1 print:text-xs">
						Month 1 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-red-700 print:text-xs">
						<li>• Template Discovery & Access MVP</li>
						<li>• Compilation Platform Prototype</li>
						<li>• Automated Testing Framework MVP</li>
						<li>• Sample Testing Results & Validation Findings</li>
					</ul>
					<div class="mt-1 rounded bg-red-200 p-1 print:p-1">
						<p class="text-xs font-bold text-red-800 print:text-xs">
							Invoice Trigger: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>

			<!-- Month 2 -->
			<div
				class="rounded-lg bg-orange-50 p-3 print:border print:border-orange-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">2</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-orange-700 print:text-xs">
							Month 2 - Taxonomy & AI Implementation
						</h3>
						<p class="text-xs text-orange-600 print:text-xs">
							Classification system and AI-powered assessment engine
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-orange-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-orange-700 print:mb-1 print:text-xs">
							Classification & Interface Development
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Build template categorisation nomenclature</li>
							<li>✓ Create taxonomy for narrowing rule application</li>
							<li>✓ Build operative interface for rule application</li>
							<li>✓ Enable granular template categorisation</li>
						</ul>
					</div>
					<div class="rounded border-l-4 border-purple-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-purple-700 print:mb-1 print:text-xs">
							AI LLM Setup & Training
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Select and deploy AI LLM platform</li>
							<li>✓ Train LLM for taxonomy-based assessment</li>
							<li>✓ Build test execution and recording interface</li>
							<li>✓ Implement failure analysis</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-orange-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-orange-800 print:mb-1 print:text-xs">
						Month 2 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-orange-700 print:text-xs">
						<li>• Template Taxonomy & Classification System</li>
						<li>• Operative Rule Application Interface</li>
						<li>• AI LLM Platform & Refining the output of the LLM</li>
						<li>• Test Execution Interface & Database Schema</li>
					</ul>
					<div class="mt-1 rounded bg-orange-200 p-1 print:p-1">
						<p class="text-xs font-bold text-orange-800 print:text-xs">
							Invoice Trigger: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>

			<!-- Month 3 -->
			<div
				class="rounded-lg bg-green-50 p-3 print:border print:border-green-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">3</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-green-700 print:text-xs">
							Month 3 - Security & Human-in-Loop Integration
						</h3>
						<p class="text-xs text-green-600 print:text-xs">
							Permissions, human oversight, and continuous improvement
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-green-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-green-700 print:mb-1 print:text-xs">
							Security & Human Oversight
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Deploy MVP onto a VM provided by Infrastructure</li>
							<li>✓ Build human assessment interface for LLM scoring</li>
							<li>✓ Create feedback incorporation mechanism</li>
							<!-- <li>✓ Enable LLM iteration and improvement</li> -->
						</ul>
					</div>
					<div class="rounded border-l-4 border-teal-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-teal-700 print:mb-1 print:text-xs">
							Individual Testing & Final Integration
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Enable individual template testing capability</li>
							<li>✓ Batch template assessment will be attempted</li>
							<li>✓ Risk categorisation matrix implementation</li>
							<li>✓ Compliance scoring system finalisation</li>
							<li>✓ Full system integration and testing</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-green-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-green-800 print:mb-1 print:text-xs">
						Month 3 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-green-700 print:text-xs">
						<li>• Permission-Based Security System</li>
						<li>• Human-in-Loop Assessment Interface</li>
						<li>• Individual Template Testing Capability</li>
						<li>• Complete Compliance Platform MVP</li>
					</ul>
					<div class="mt-1 rounded bg-green-200 p-1 print:p-1">
						<p class="text-xs font-bold text-green-800 print:text-xs">
							Invoice Trigger: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Success Metrics -->
		<!-- <div
			class="mt-3 rounded-lg bg-blue-50 p-2 print:mt-2 print:border print:border-blue-300 print:bg-white print:p-1"
		>
			<h3 class="mb-1 text-sm font-bold text-blue-800 print:mb-1 print:text-xs">
				Platform Capabilities & Outcomes
			</h3>
			<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
				<ul class="space-y-0 text-xs text-blue-700 print:text-xs">
					<li>✓ Complete template discovery and access platform</li>
					<li>✓ Automated testing and extraction framework</li>
					<li>✓ AI-powered compliance assessment system</li>
					<li>✓ Template taxonomy and rule application interface</li>
				</ul>
				<ul class="space-y-0 text-xs text-blue-700 print:text-xs">
					<li>✓ Permission-based security and access control</li>
					<li>✓ Human oversight and feedback integration</li>
					<li>✓ Individual template testing capability</li>
					<li>✓ Continuous improvement and iteration system</li>
				</ul>
			</div>
		</div> -->

		<!-- Caveat Box -->
		<div
			class="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 p-2 print:mt-2 print:border print:border-yellow-300 print:bg-white print:p-1"
		>
			<h3 class="mb-1 text-sm font-bold text-yellow-800 print:mb-1 print:text-xs">
				⚠️ Important Caveat
			</h3>
			<p class="text-xs text-yellow-700 print:text-xs">
				The above deliverables and timeline are contingent upon the availability and responsiveness
				of HSBC's FTEs (Full-Time Employees) for requirements gathering, testing, and feedback
				provision.
			</p>
		</div>
	</section>
</A4>
<PageBreak />
<!-- Workstream 2: Innovation Banking Workflow Optimisation Timeline -->
<A4
	border={false}
	borderRadius="8px"
	backgroundColor="white"
	padding="1.5rem"
	pageBreak={false}
	autoScale={false}
	minScale={0.4}
	printSimulation={true}
>
	<section class="print-avoid-break w-full">
		<div class="mb-4 text-center print:mb-2">
			<h2 class="text-xl font-bold text-blue-700 print:text-xs">
				Workstream 2: Innovation Banking Workflow Optimisation
			</h2>
			<div class="mx-auto mt-1 h-0.5 w-20 bg-blue-600 print:mt-1 print:h-0.5 print:w-16"></div>
			<p class="mt-1 text-xs text-blue-600 print:text-xs">MVP Strategy & Development</p>
		</div>

		<!-- Monthly Timeline -->
		<div class="space-y-4 print:space-y-2">
			<!-- Month 1 -->
			<div
				class="rounded-lg bg-blue-50 p-3 print:border print:border-blue-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">1</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-blue-700 print:text-xs">
							Month 1 - Business Discovery & Solution Design
						</h3>
						<p class="text-xs text-blue-600 print:text-xs">
							Business walkthrough, as-is analysis, and quick win identification
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-blue-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-blue-700 print:mb-1 print:text-xs">
							Business Process Discovery
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Perform a walkthrough to understand the problem</li>
							<li>✓ Document the as-is end to end process flow</li>
							<li>✓ Identify processes with highest ROI potential</li>
							<li>✓ Map integration points for existing systems</li>
						</ul>
					</div>
					<div class="rounded border-l-4 border-purple-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-purple-700 print:mb-1 print:text-xs">
							Solution Planning & Specification
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Formulate quick win solution approach</li>
							<li>✓ Write MVP specification for process integration</li>
							<li>✓ Create requirement document for MVP</li>
							<li>✓ Design database schema for MVP</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-blue-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-blue-800 print:mb-1 print:text-xs">
						Month 1 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-blue-700 print:text-xs">
						<li>• Business Walkthrough Findings & As-Is Process Map</li>
						<li>• Quick Win Solution Plan & ROI Analysis</li>
						<li>• Platform Specification & Requirements Document</li>
						<li>• Database Schema Design & Integration Strategy</li>
					</ul>
					<div class="mt-1 rounded bg-blue-200 p-1 print:p-1">
						<p class="text-xs font-bold text-blue-800 print:text-xs">
							Included in Month 1 Invoice: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>

			<!-- Month 2 -->
			<div
				class="rounded-lg bg-purple-50 p-3 print:border print:border-purple-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">2</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-purple-700 print:text-xs">
							Month 2 - MVP Development & Integration
						</h3>
						<p class="text-xs text-purple-600 print:text-xs">
							End-to-end MVP build with existing system integration
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-purple-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-purple-700 print:mb-1 print:text-xs">
							End-to-End MVP Development
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Implement database schema for MVP</li>
							<li>✓ Build MVP with basic functionality covering whole flow</li>
							<li>✓ Implement roles management system (creation/review/authorisation)</li>
							<li>✓ Integrate with existing systems/APIs where possible</li>
						</ul>
					</div>
					<div class="rounded border-l-4 border-teal-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-teal-700 print:mb-1 print:text-xs">
							User Testing & Deployment
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Internal testing and quality assurance</li>
							<li>✓ Adobe/PEGA integration where not replaced</li>
							<li>✓ Performance and security validation</li>
							<li>✓ Prepare deployment environment</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-purple-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-purple-800 print:mb-1 print:text-xs">
						Month 2 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-purple-700 print:text-xs">
						<li>• End-to-End MVP with Basic Functionality</li>
						<li>• System Integration & API Connections</li>
						<li>• UAT Results & User Feedback Analysis</li>
						<li>• Select User Deployment & Performance Metrics</li>
					</ul>
					<div class="mt-1 rounded bg-purple-200 p-1 print:p-1">
						<p class="text-xs font-bold text-purple-800 print:text-xs">
							Included in Month 2 Invoice: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>

			<!-- Month 3 -->
			<div
				class="rounded-lg bg-teal-50 p-3 print:border print:border-teal-300 print:bg-white print:p-2"
			>
				<div class="mb-2 flex items-center gap-2 print:mb-1">
					<div
						class="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-white print:h-5 print:w-5 print:text-xs"
					>
						<span class="text-sm font-bold">3</span>
					</div>
					<div>
						<h3 class="text-sm font-bold text-teal-700 print:text-xs">
							Month 3 - Real-World Testing & Feedback
						</h3>
						<p class="text-xs text-teal-600 print:text-xs">
							Live system testing and MVP iteration based on feedback
						</p>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
					<div class="rounded border-l-4 border-teal-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-teal-700 print:mb-1 print:text-xs">
							Real-World Testing & Iteration
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ User Acceptance Testing (UAT) on MVP</li>
							<li>✓ Deploy to select number of users</li>
							<li>✓ Test system on small subset of real messages</li>
							<li>✓ Gather functionality and effectiveness feedback</li>
						</ul>
					</div>
					<div class="rounded border-l-4 border-green-500 bg-white p-2 print:p-1">
						<h4 class="mb-1 text-xs font-bold text-green-700 print:mb-1 print:text-xs">
							Final Delivery & Handover
						</h4>
						<ul class="space-y-0 text-xs text-gray-700 print:text-xs">
							<li>✓ Document final system capabilities</li>
							<li>✓ Provide scaling recommendations</li>
							<li>✓ Train HSBC team on system operation</li>
						</ul>
					</div>
				</div>

				<div class="mt-2 rounded-lg bg-teal-100 p-2 print:mt-1 print:p-1">
					<h4 class="mb-1 text-xs font-bold text-teal-800 print:mb-1 print:text-xs">
						Month 3 Deliverable Package
					</h4>
					<ul class="space-y-0 text-xs text-teal-700 print:text-xs">
						<li>• Real-World Testing Results & Performance Data</li>
						<li>• User Feedback Analysis & System Improvements</li>
						<li>• Production-Ready MVP with Final Iterations</li>
						<li>• System Operation Training & Scaling Recommendations</li>
					</ul>
					<div class="mt-1 rounded bg-teal-200 p-1 print:p-1">
						<p class="text-xs font-bold text-teal-800 print:text-xs">
							Included in Month 3 Invoice: £3,333 (Ex VAT)
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Success Metrics -->
		<!-- <div
			class="mt-3 rounded-lg bg-indigo-50 p-2 print:mt-2 print:border print:border-indigo-300 print:bg-white print:p-1"
		>
			<h3 class="mb-1 text-sm font-bold text-indigo-800 print:mb-1 print:text-xs">
				Process Integration MVP Outcomes
			</h3>
			<div class="grid grid-cols-1 gap-2 md:grid-cols-2 print:grid-cols-2 print:gap-1">
				<ul class="space-y-0 text-xs text-indigo-700 print:text-xs">
					<li>✓ End-to-end MVP covering unified process flow</li>
					<li>✓ Integration with existing systems and APIs</li>
					<li>✓ Real-world testing with actual message subset</li>
					<li>✓ User feedback integration and system iteration</li>
				</ul>
				<ul class="space-y-0 text-xs text-indigo-700 print:text-xs">
					<li>✓ Highest ROI processes identified and implemented</li>
					<li>✓ Production-ready system validated by users</li>
					<li>✓ Scaling strategy and operational training delivered</li>
					<li>✓ Foundation for full-scale process rationalisation</li>
				</ul>
			</div>
		</div> -->

		<!-- Caveat Box -->
		<div
			class="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 p-2 print:mt-2 print:border print:border-yellow-300 print:bg-white print:p-1"
		>
			<h3 class="mb-1 text-sm font-bold text-yellow-800 print:mb-1 print:text-xs">
				⚠️ Important Caveat
			</h3>
			<p class="text-xs text-yellow-700 print:text-xs">
				The above deliverables and timeline are contingent upon the availability and responsiveness
				of HSBC's FTEs (Full-Time Employees) for requirements gathering, testing, and feedback
				provision.
			</p>
		</div>
	</section>
</A4>
