<script>
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Mail, Building2, Users, Calendar, FileText, ExternalLink, DollarSign, Target, Shield, AlertCircle, CheckCircle } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Statement of Work - HSBC Engagement</title>
</svelte:head>

<div class="container mx-auto py-6 space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Statement of Work</h1>
			<p class="text-muted-foreground mt-2">HSBC Template Compliance & Innovation Banking</p>
		</div>
		<Badge variant="default" class="text-lg px-3 py-1">
			Fixed Price Contract
		</Badge>
	</div>

	<!-- Delivery Framework Notice -->
	<div class="rounded-md bg-red-700 p-4 text-white">
		<p class="font-medium">
			<strong>Delivery:</strong> Via Mansion House Consulting's Tier 1 Financial Services framework for additional assurance.
		</p>
	</div>

	<!-- Scope of Work -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Target class="h-5 w-5" />
				Scope of Work
			</CardTitle>
		</CardHeader>
		<CardContent>
			<ul class="space-y-4">
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#db0011]"></span>
					<div>
						<strong class="text-lg">Template Compliance Assessment:</strong>
						<p class="text-muted-foreground mt-1">Comprehensive review and analysis of 3000-4000 existing templates for regulatory compliance</p>
					</div>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#db0011]"></span>
					<div>
						<strong class="text-lg">Innovation Banking Workflow Optimisation:</strong>
						<p class="text-muted-foreground mt-1">Collaborate with Innovation House to understand requirements and develop MVP to inform long-term robust solution development</p>
					</div>
				</li>
			</ul>
		</CardContent>
	</Card>

	<!-- Project Details and Key Deliverables -->
	<div class="grid md:grid-cols-2 gap-6">
		<!-- Project Details -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<FileText class="h-5 w-5" />
					Project Details
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="flex justify-between border-b pb-2">
					<span class="font-medium">Team Size:</span>
					<span class="font-semibold">5 FTEs</span>
				</div>
				<div class="flex justify-between border-b pb-2">
					<span class="font-medium">Duration:</span>
					<span class="font-semibold">3 Months</span>
				</div>
				<div class="flex justify-between border-b pb-2">
					<span class="font-medium">Contract Type:</span>
					<span class="font-semibold">Fixed Price</span>
				</div>
				<div class="flex justify-between">
					<span class="font-medium">Total Investment:</span>
					<span class="font-semibold text-[#db0011] text-lg">£30,000</span>
				</div>
			</CardContent>
		</Card>

		<!-- Key Deliverables -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<CheckCircle class="h-5 w-5" />
					Key Deliverables
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="flex items-center justify-between border-b pb-2">
					<div class="flex items-center gap-3">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
							<FileText class="h-4 w-4 text-gray-600" />
						</div>
						<span class="font-medium">Templates Assessed</span>
					</div>
					<span class="text-xl font-bold">3000-4000</span>
				</div>
				<div class="flex items-center justify-between border-b pb-2">
					<div class="flex items-center gap-3">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
							<Target class="h-4 w-4 text-gray-600" />
						</div>
						<span class="font-medium">Core Systems Enhanced</span>
					</div>
					<span class="text-xl font-bold">2</span>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
							<Shield class="h-4 w-4 text-gray-600" />
						</div>
						<span class="font-medium">Regulatory Focus</span>
					</div>
					<span class="text-xl font-bold text-[#db0011]">Priority</span>
				</div>
			</CardContent>
		</Card>
	</div>

	<!-- Payment Terms -->
	<Card class="border-purple-200 bg-purple-50">
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<DollarSign class="h-5 w-5 text-purple-600" />
				Payment Terms
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-3">
			<p>
				<strong>Currency & VAT:</strong> All prices are quoted in GBP (£) and are exclusive of VAT. VAT will be added at the prevailing rate where applicable.
			</p>
			<p>
				<strong>Payment Schedule:</strong> Invoices are payable one month in arrears from the date of invoice.
			</p>
			<p>
				<strong>Deliverable Independence:</strong> Payments are not tied to specific deliverables. The client may, upon mutual agreement, propose a set of deliverables for payment milestones; however, for the purposes of this Statement of Work, we will proceed with time-based billing.
			</p>
		</CardContent>
	</Card>

	<!-- HSBC Internal Resource Requirements -->
	<Card class="border-yellow-200 bg-yellow-50">
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<AlertCircle class="h-5 w-5 text-yellow-600" />
				HSBC Internal Resource Requirements
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-3">
			<p>
				<strong>Template Compliance:</strong> 1 FTE from compliance/risk team with template governance knowledge.
			</p>
			<p>
				<strong>Innovation Banking:</strong> 1 FTE with workflow expertise for MVP development.
			</p>
			<p>
				<strong>Knowledge Transfer:</strong> Leverage existing HSBC developers for capability development.
			</p>
			<p class="text-sm text-muted-foreground italic mt-4">
				Essential for project success and seamless integration.
			</p>
		</CardContent>
	</Card>

	<!-- Technical Requirements & Infrastructure Access -->
	<Card class="border-blue-200 bg-blue-50">
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Shield class="h-5 w-5 text-blue-600" />
				Technical Requirements & Infrastructure Access
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-3">
			<p>
				<strong>Tooling:</strong> Flexibility to use proven UI frameworks (Svelte 5) and AI tooling (Anthropic).
			</p>
			<p>
				<strong>Infrastructure:</strong> Access to HSBC development/staging environments with deployment permissions.
			</p>
			<p>
				<strong>Security:</strong> Subject to HSBC security policies and banking regulatory compliance.
			</p>
			<p class="text-sm text-muted-foreground italic mt-4">
				Enables efficient delivery whilst maintaining security standards.
			</p>
		</CardContent>
	</Card>

	<!-- Technology Stack -->
	<Card class="border-indigo-200 bg-indigo-50">
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Settings class="h-5 w-5 text-indigo-600" />
				Technology Stack
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="flex flex-wrap gap-2">
				<!-- TypeScript -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
					</svg>
					<span>TypeScript</span>
				</div>
				
				<!-- Svelte -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.166Z"/>
					</svg>
					<span>Svelte</span>
				</div>
				
				<!-- SvelteKit -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-medium text-orange-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.166Z"/>
					</svg>
					<span>SvelteKit</span>
				</div>
				
				<!-- Tailwind CSS -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1.5 text-sm font-medium text-cyan-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
					</svg>
					<span>Tailwind CSS</span>
				</div>
				
				<!-- shadcn-svelte -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
						<path d="M9 9h6v6H9z"/>
					</svg>
					<span>shadcn-svelte</span>
				</div>
				
				<!-- Python -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 text-sm font-medium text-yellow-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
					</svg>
					<span>Python</span>
				</div>
				
				<!-- UV -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10"/>
						<path d="M8 12h8"/>
						<path d="M12 8v8"/>
					</svg>
					<span>UV</span>
				</div>
				
				<!-- Golang -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1.5 text-sm font-medium text-teal-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.771.105-.129.198-.269.315-.433H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.047-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
					</svg>
					<span>Go</span>
				</div>
				
				<!-- VS Code -->
				<div class="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800">
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
						<path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
					</svg>
					<span>VS Code</span>
				</div>
			</div>
		</CardContent>
	</Card>

	<!-- Additional Terms -->
	<Card class="border-green-200 bg-green-50">
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<AlertCircle class="h-5 w-5 text-green-600" />
				Additional Terms
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-3">
			<p>
				<strong>Travel:</strong> We do not anticipate having to travel for this engagement. However, any travel outside of London will be at additional cost to HSBC and would require a separate Statement of Work.
			</p>
			<p>
				<strong>Administration:</strong> Mansion House Consulting administration costs (2%) will be borne by HSBC as part of their framework delivery model.
			</p>
		</CardContent>
	</Card>

	<!-- Contract Summary -->
	<Card class="border-[#db0011] bg-red-50">
		<CardHeader>
			<CardTitle class="text-[#db0011] flex items-center gap-2">
				<DollarSign class="h-5 w-5" />
				Contract Summary
			</CardTitle>
		</CardHeader>
		<CardContent>
			<p class="text-lg leading-relaxed">
				3-month fixed-price engagement delivering Template Compliance Assessment and Innovation Banking optimisation. 
				Streamline messaging workflows, assess Adobe/PEGA functionality for potential in-housing, implement AI-driven 
				compliance solutions.
			</p>
		</CardContent>
	</Card>

	<!-- Vendor & Contact Information -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Building2 class="h-5 w-5" />
				Vendor & Contact Information
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid md:grid-cols-2 gap-6">
				<!-- Cloud Lobsters -->
				<div class="space-y-4">
					<h3 class="font-semibold text-lg">Cloud Lobsters</h3>
					<div class="space-y-3">
						<div class="border-l-2 border-gray-200 pl-4">
							<h4 class="font-semibold">Duncan Elliot</h4>
							<p class="text-sm text-muted-foreground">Co-Founder</p>
							<a href="mailto:duncan@cloudlobsters.com" class="flex items-center gap-2 text-sm text-blue-600 hover:underline">
								<Mail class="h-3 w-3" />
								duncan@cloudlobsters.com
							</a>
						</div>
						<div class="border-l-2 border-gray-200 pl-4">
							<h4 class="font-semibold">Tara Whitaker</h4>
							<p class="text-sm text-muted-foreground">Co-Founder</p>
							<a href="mailto:tara@cloudlobsters.com" class="flex items-center gap-2 text-sm text-blue-600 hover:underline">
								<Mail class="h-3 w-3" />
								tara@cloudlobsters.com
							</a>
						</div>
					</div>
					<div class="text-sm space-y-1 pt-2 border-t">
						<p class="text-muted-foreground">Techspace - Home of the London AI Hub</p>
						<p class="text-muted-foreground">140 Goswell Road, London, EC1V 7DY</p>
						<p>T: +44 7585554498</p>
					</div>
				</div>

				<!-- Mansion House Consulting -->
				<div class="space-y-4">
					<h3 class="font-semibold text-lg">Mansion House Consulting</h3>
					<div class="border-l-2 border-gray-200 pl-4">
						<h4 class="font-semibold">John Smith</h4>
						<p class="text-sm text-muted-foreground">Partner</p>
						<a href="mailto:john.smith@mansion-house.co.uk" class="flex items-center gap-2 text-sm text-blue-600 hover:underline">
							<Mail class="h-3 w-3" />
							john.smith@mansion-house.co.uk
						</a>
					</div>
					<div class="text-sm space-y-1 pt-2 border-t">
						<p class="text-muted-foreground">38 Grosvenor Gardens</p>
						<p class="text-muted-foreground">London, SW1W 0EB</p>
						<p>T: +44 (0) 20 3523 9454</p>
						<p>M: +44 (0) 7867 369 949</p>
						<a href="https://www.mansion-house.co.uk" target="_blank" class="flex items-center gap-1 text-blue-600 hover:underline">
							<ExternalLink class="h-3 w-3" />
							www.mansion-house.co.uk
						</a>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>

	<!-- HSBC Lead Contact -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Users class="h-5 w-5" />
				HSBC Lead Contacts
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<h3 class="text-xl font-semibold">Fernando H COSTA</h3>
					<p class="text-muted-foreground">Chief of Staff</p>
					<p class="text-sm">WPB Tech Digital Platforms</p>
					<a href="mailto:fernando.h.costa@hsbc.com" class="flex items-center gap-2 text-sm text-blue-600 hover:underline">
						<Mail class="h-4 w-4" />
						fernando.h.costa@hsbc.com
					</a>
				</div>
				<div class="space-y-4">
					<h4 class="font-semibold">Additional Stakeholders</h4>
					<div class="space-y-3">
						<div class="flex items-start gap-3">
							<div class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold">
								YC
							</div>
							<div>
								<p class="font-medium">Yagnam CHANDRA SHEKAR</p>
								<p class="text-sm text-muted-foreground">India Operations</p>
								<a href="mailto:yagnamchandrashekar@hsbc.co.in" class="text-sm text-blue-600 hover:underline">
									yagnamchandrashekar@hsbc.co.in
								</a>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<div class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold">
								SD
							</div>
							<div>
								<p class="font-medium">Sunil DS</p>
								<p class="text-sm text-muted-foreground">India Operations</p>
								<a href="mailto:sunil.ds@hsbc.co.in" class="text-sm text-blue-600 hover:underline">
									sunil.ds@hsbc.co.in
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>

	<!-- Back to Home -->
	<div class="flex justify-center pt-4">
		<Button variant="outline" href="/">
			← Back to Overview
		</Button>
	</div>
</div>