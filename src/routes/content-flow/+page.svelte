<script>
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	
	let currentStateProblems = [
		'6+ month template changes',
		'Conflicting customer messages',
		'No single customer view',
		'Channel-first, not customer-first',
		'£10-20M annual waste',
		'~3 major incidents monthly'
	];
	
	let futureStateBenefits = [
		'Real-time content updates',
		'Consistent customer experience',
		'Single source of truth',
		'Customer-centric messaging',
		'Significant cost reduction',
		'Reduced incidents',
		'AI-driven personalization'
	];
	
	let horizontalSteps = [
		{ name: 'Content Creation', desc: 'Unified CMS\n(Headless)' },
		{ name: 'Content Management', desc: 'Templates\nAssets (DAM)' },
		{ name: 'Decisioning', desc: 'AI/Rules Engine\nPersonalization' },
		{ name: 'Orchestration', desc: 'Journey Management\nWorkflow Engine' }
	];
	
	let channels = [
		{ icon: '📧', name: 'Email', desc: 'Unified API' },
		{ icon: '📱', name: 'SMS', desc: 'Unified API' },
		{ icon: '🔔', name: 'Push', desc: 'Unified API' },
		{ icon: '🌐', name: 'Web', desc: 'Unified API' },
		{ icon: '📱', name: 'Mobile', desc: 'Unified API' },
		{ icon: '💬', name: 'In-App', desc: 'Unified API' }
	];
	
	let metrics = [
		{ number: '600M+', label: 'Monthly Messages' },
		{ number: '26+', label: 'Global Markets' },
		{ number: '1,900+', label: 'Templates' },
		{ number: '£10-20M', label: 'Annual Savings Target' }
	];
</script>

<svelte:head>
	<title>Venkat's Content & Messaging Vision</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
		<!-- Comparison Section -->
		<div class="space-y-10 mb-16">
			<!-- Current State -->
			<Card class="border-l-4 border-l-red-500">
				<CardHeader class="bg-red-50">
					<CardTitle class="text-2xl text-red-700 flex items-center gap-3">
						❌ Current State: Fragmented & Siloed
					</CardTitle>
				</CardHeader>
				<CardContent class="p-6 space-y-6">
					<div class="flex flex-wrap items-center justify-center gap-4">
						<div class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center min-w-[180px]">
							<h3 class="font-semibold text-red-800 mb-2">Marketing Team</h3>
							<p class="text-sm text-red-700">Creates campaign brief<br>Uses own processes</p>
						</div>
						<div class="text-red-500 text-2xl">➡️</div>
						
						<div class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center min-w-[180px]">
							<h3 class="font-semibold text-red-800 mb-2">Adobe AEM Team</h3>
							<p class="text-sm text-red-700">Builds templates<br>Takes months to change</p>
						</div>
						<div class="text-red-500 text-2xl">➡️</div>
						
						<div class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center min-w-[180px]">
							<h3 class="font-semibold text-red-800 mb-2">PEGA Team</h3>
							<p class="text-sm text-red-700">Handles decisioning<br>Separate from content</p>
						</div>
						<div class="text-red-500 text-2xl">➡️</div>
						
						<div class="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center min-w-[180px]">
							<h3 class="font-semibold text-red-800 mb-2">Multiple Messaging Teams</h3>
							<p class="text-sm text-red-700">Email: ICCM, Cinch<br>SMS: MDP<br>Push: PEGA<br>Web: DEP</p>
						</div>
					</div>
					
					<div class="bg-red-100 border border-red-200 rounded-lg p-4">
						<h4 class="font-semibold text-red-800 mb-3">Problems:</h4>
						<div class="space-y-2">
							{#each currentStateProblems as problem}
								<div class="flex items-start gap-2">
									<span class="text-red-500 text-sm">•</span>
									<span class="text-sm text-red-700">{problem}</span>
								</div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Future State -->
			<Card class="border-l-4 border-l-green-500">
				<CardHeader class="bg-green-50">
					<CardTitle class="text-2xl text-green-700 flex items-center gap-3">
						✅ Venkat's Vision: Integrated T-Shape
					</CardTitle>
				</CardHeader>
				<CardContent class="p-6 space-y-6">
					<div>
						<h3 class="text-lg font-semibold text-gray-800 mb-4">Horizontal Content Flow</h3>
						<div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
							<div class="flex flex-wrap items-center justify-center gap-2">
								{#each horizontalSteps as step, i}
									<div class="bg-white border-2 border-blue-300 rounded-lg p-3 text-center text-xs min-w-[140px] flex-shrink-0">
										<div class="font-semibold text-blue-800 mb-1">{step.name}</div>
										<div class="text-blue-600 whitespace-pre-line">{step.desc}</div>
									</div>
									{#if i < horizontalSteps.length - 1}
										<div class="text-blue-600 text-xl font-bold">→</div>
									{/if}
								{/each}
							</div>
						</div>
					</div>
					
					<div class="text-center text-green-600 text-3xl">⬇️</div>
					
					<!-- UMS Central Hub -->
					<div class="flex justify-center mb-6">
						<div class="bg-gradient-to-r from-[#db0011] to-[#a50000] text-white rounded-lg p-6 text-center max-w-md">
							<div class="text-2xl mb-2">🔄</div>
							<h3 class="text-lg font-bold mb-2">UMS</h3>
							<h4 class="text-sm font-semibold mb-1">Unified Messaging System</h4>
							<p class="text-xs opacity-90">Central orchestration hub routing all content to appropriate channels</p>
						</div>
					</div>
					
					<div class="text-center text-green-600 text-3xl">⬇️</div>
					
					<div>
						<h3 class="text-lg font-semibold text-gray-800 mb-4">Vertical Distribution (All Channels)</h3>
						<div class="grid grid-cols-3 gap-3 mb-4">
							{#each channels as channel}
								<div class="bg-green-50 border-2 border-green-300 rounded-lg p-3 text-center text-xs">
									<div class="text-lg mb-1">{channel.icon}</div>
									<div class="font-semibold text-green-800">{channel.name}</div>
									<div class="text-green-600">{channel.desc}</div>
								</div>
							{/each}
						</div>
					</div>
					
					<div class="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 text-center">
						<h4 class="font-semibold text-orange-800 mb-2">🎯 Single Customer View</h4>
						<p class="text-sm text-orange-700">All channels coordinated • No conflicting messages • Hyper-personalized experience</p>
					</div>
					
					<div class="bg-green-100 border border-green-200 rounded-lg p-4">
						<h4 class="font-semibold text-green-800 mb-3">Benefits:</h4>
						<div class="space-y-2">
							{#each futureStateBenefits as benefit}
								<div class="flex items-start gap-2">
									<span class="text-green-500 text-sm">•</span>
									<span class="text-sm text-green-700">{benefit}</span>
								</div>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Key Insight -->
		<Card class="mb-12 border-l-4 border-l-[#db0011]">
			<CardContent class="p-8">
				<p class="text-lg italic text-gray-700 text-center">
					<strong>The "Link":</strong> Content and messaging become one seamless workflow where content flows horizontally through creation, management, and decisioning, then distributes vertically across all channels as coordinated, personalized customer experiences.
				</p>
			</CardContent>
		</Card>

		<!-- Success Metrics -->
		<Card>
			<CardHeader class="text-center">
				<CardTitle class="text-2xl text-gray-800">Key Success Metrics</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
					{#each metrics as metric}
						<div class="text-center">
							<div class="text-3xl font-bold text-[#db0011] mb-2">{metric.number}</div>
							<div class="text-sm text-gray-600">{metric.label}</div>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Navigation -->
		<div class="text-center mt-12 space-x-4">
			<a href="/" class="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
				← Back to Overview
			</a>
			<a href="/platform" class="inline-block bg-[#db0011] hover:bg-[#a50000] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
				View Platform Demo →
			</a>
		</div>
	</div>
</div>