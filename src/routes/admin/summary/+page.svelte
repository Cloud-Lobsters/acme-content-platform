<script>
	import ArrowBanner from '$lib/components/ArrowBanner.svelte';
</script>

<svelte:head>
	<title>DEP FSA Executive Summary - HSBC Admin</title>
</svelte:head>

<div class="container mx-auto p-6 max-w-7xl">
	<!-- Header -->
	<div class="mb-8 text-center">
		<h1 class="text-3xl font-bold text-red-700 mb-2">DEP: DEP FSA Executive Summary</h1>
		<p class="text-sm text-gray-600">2024 Capability Overview</p>
	</div>

	<!-- DEP Objectives Section -->
	<div class="mb-6">
		<h2 class="text-lg font-semibold text-gray-800 mb-4">DEP objectives</h2>
		<div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
			<div class="bg-blue-50 p-3 rounded text-center">
				<div class="text-sm font-medium text-blue-800">Reduce time to make changes</div>
			</div>
			<div class="bg-blue-50 p-3 rounded text-center">
				<div class="text-sm font-medium text-blue-800">Reduce time to deploy completed changes across channels</div>
			</div>
			<div class="bg-blue-50 p-3 rounded text-center">
				<div class="text-sm font-medium text-blue-800">Improve delivery experience and agility of marketing teams</div>
			</div>
			<div class="bg-blue-50 p-3 rounded text-center">
				<div class="text-sm font-medium text-blue-800">Personalisation capability for enhanced relevance/response rates</div>
			</div>
			<div class="bg-blue-50 p-3 rounded text-center">
				<div class="text-sm font-medium text-blue-800">Drive internal efficiency and automation where possible</div>
			</div>
		</div>
	</div>

	<!-- Main Content Grid - 4 Columns with Vertical Swimlanes -->
	<div class="rounded-lg overflow-hidden">
		<!-- Column Headers Row with Arrow Banners -->
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-0 mb-2">
			<!-- Empty space for section labels column -->
			<div class="bg-white p-4"></div>
			<!-- Arrow Banner Headers -->
			<div class="col-span-3 flex items-center justify-center space-x-2">
				<div class="flex-1">
					<ArrowBanner text="Current State" color="red" hasArrow={true} />
				</div>
				<div class="flex-1 -ml-6">
					<ArrowBanner text="Key Delivery Initiatives" color="blue" hasArrow={true} />
				</div>
				<div class="flex-1 -ml-6">
					<ArrowBanner text="Target State" color="red" hasArrow={false} />
				</div>
			</div>
		</div>

		<!-- Business Capabilities Row -->
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-0">
			<!-- Section Header -->
			<div class="bg-gray-50 p-4 flex items-center justify-center">
				<div class="bg-white border border-gray-400 rounded-lg p-3 text-center w-full shadow-sm">
					<h3 class="text-sm font-semibold text-gray-800">Business Capabilities</h3>
				</div>
			</div>
			<!-- Content Columns Container with Border -->
			<div class="col-span-3 border-2 border-gray-300 border-t-0 grid grid-cols-3 gap-0">
				<!-- Current State Content -->
				<div class="bg-red-50 border-r-2 border-gray-300 p-4">
					<h4 class="font-semibold text-red-700 mb-3">Business Assessment</h4>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Business content production</span>
							<span class="font-medium">Medium</span>
						</div>
						<div class="flex justify-between">
							<span>Digital marketing production process</span>
							<span class="font-medium">Medium</span>
						</div>
						<div class="flex justify-between">
							<span>Content production process flows</span>
							<span class="font-medium">Low</span>
						</div>
						<div class="flex justify-between">
							<span>Multi-channel content deployment</span>
							<span class="font-medium">Low</span>
						</div>
					</div>
				</div>
				<!-- Key Delivery Initiatives Content -->
				<div class="bg-blue-50 border-r-2 border-gray-300 p-4">
					<h4 class="font-semibold text-blue-700 mb-3">2024 Core Foundational Capabilities</h4>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Channel Funding</span>
							<span class="font-medium">2.1</span>
						</div>
						<div class="flex justify-between">
							<span>Organizational Funding</span>
							<span class="font-medium">2.2</span>
						</div>
						<div class="flex justify-between">
							<span>Data Platform Development</span>
							<span class="font-medium">2.3</span>
						</div>
					</div>
				</div>
				<!-- Target State Content -->
				<div class="bg-red-50 p-4">
					<div class="space-y-2 text-sm">
						<p>Channel managers are able to optimise experiences using in platform tools, have access to unified content management capabilities and are serviced by enhanced global personalised content deployment capabilities.</p>
						<p>Support teams are able to efficiently manage the global deployment of content via modern improved technical platforms.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Technology Capabilities Row -->
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-0">
			<!-- Section Header -->
			<div class="bg-gray-50 p-4 flex items-center justify-center">
				<div class="bg-white border border-gray-400 rounded-lg p-3 text-center w-full shadow-sm">
					<h3 class="text-sm font-semibold text-gray-800">Technology Capabilities</h3>
				</div>
			</div>
			<!-- Content Columns Container with Border -->
			<div class="col-span-3 border-x-2 border-b-2 border-gray-300 grid grid-cols-3 gap-0">
				<!-- Current State Content -->
				<div class="bg-red-50 border-r-2 border-gray-300 p-4">
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Digital platform capabilities outside of teams in shop</span>
							<span class="font-medium">Low</span>
						</div>
						<div class="flex justify-between">
							<span>Large content pool technical deployment capabilities</span>
							<span class="font-medium">Low</span>
						</div>
						<div class="flex justify-between">
							<span>Digital governance and process coordination</span>
							<span class="font-medium">Low</span>
						</div>
					</div>
				</div>
				<!-- Key Delivery Initiatives Content -->
				<div class="bg-blue-50 border-r-2 border-gray-300 p-4">
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>WGMS</span>
							<span class="font-medium">2.3</span>
						</div>
						<div class="flex justify-between">
							<span>Optimization Tool</span>
							<span class="font-medium">2.4</span>
						</div>
						<div class="flex justify-between">
							<span>State Tool Omni-Channel</span>
							<span class="font-medium">2.1</span>
						</div>
						<div class="flex justify-between">
							<span>Platform Enhancement</span>
							<span class="font-medium">2.1</span>
						</div>
					</div>
				</div>
				<!-- Target State Content -->
				<div class="bg-red-50 p-4">
					<div class="space-y-2 text-sm">
						<p>DEP as a strategic platform with advanced threat generation, content delivery platform and high efficiency technical operation is competitive advantage in the marketplace.</p>
						<p>Reduce time to live from 6+hours to 2hours; Technology improvements deliver speed in the deployment process.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Operating Model Impact Row -->
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-0">
			<!-- Section Header -->
			<div class="bg-gray-50 p-4 flex items-center justify-center">
				<div class="bg-white border border-gray-400 rounded-lg p-3 text-center w-full shadow-sm">
					<h3 class="text-sm font-semibold text-gray-800">Operating Model Impact</h3>
				</div>
			</div>
			<!-- Content Columns Container with Border -->
			<div class="col-span-3 border-x-2 border-b-2 border-gray-300 grid grid-cols-3 gap-0">
				<!-- Current State Content -->
				<div class="bg-red-50 border-r-2 border-gray-300 p-4">
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Operating of Shop PDFM Channelling Proposition and Performance team</span>
							<span class="font-medium">Medium</span>
						</div>
						<div class="flex justify-between">
							<span>Operational resiliency and effectiveness</span>
							<span class="font-medium">Low</span>
						</div>
						<div class="flex justify-between">
							<span>Operating team effectiveness</span>
							<span class="font-medium">Low</span>
						</div>
					</div>
				</div>
				<!-- Key Delivery Initiatives Content -->
				<div class="bg-blue-50 border-r-2 border-gray-300 p-4">
					<h4 class="font-semibold text-blue-700 mb-3">2024 Best Practice Development</h4>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span>Template Funding</span>
							<span class="font-medium">11.0</span>
						</div>
						<div class="flex justify-between">
							<span>Operational Funding</span>
							<span class="font-medium">19.5</span>
						</div>
						<div class="flex justify-between border-t border-blue-300 pt-2 mt-2">
							<span class="font-bold">Grand Total</span>
							<span class="font-bold text-blue-800">30.5</span>
						</div>
					</div>
				</div>
				<!-- Target State Content -->
				<div class="bg-red-50 p-4">
					<div class="space-y-2 text-sm">
						<p>Improve workflow across digital marketing channels – reduce operational content deployment delays at key contact points.</p>
						<p>Increased support options for DEP integration in global personalised content deployment solutions as marketing channel development capabilities from internal service systems.</p>
						<p>Improve positioning of digital marketing channels to cross-sell & upsell via content performance analytics.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>