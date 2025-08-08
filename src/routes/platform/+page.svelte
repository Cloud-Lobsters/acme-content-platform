<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { PlusCircle, FileText, Settings, BarChart3, Users, Calendar, Layers, MessageSquare } from '@lucide/svelte';

	let subRoutes = [
		{
			href: '/platform/content-creation',
			title: 'Content Creation',
			description: 'Create and manage content templates, campaigns, and messaging',
			icon: PlusCircle,
			color: 'bg-blue-500',
			features: ['Template Builder', 'Multi-channel Content', 'Dynamic Personalization', 'Brand Guidelines']
		},
		{
			href: '/platform/asset-management',
			title: 'Asset Management',
			description: 'Browse, organize, and manage all your content assets',
			icon: Layers,
			color: 'bg-green-500',
			features: ['Digital Library', 'Version Control', 'Asset Search', 'Usage Analytics']
		},
		{
			href: '/platform/campaign-management',
			title: 'Campaign Management',
			description: 'Schedule, deploy, and monitor campaigns across all channels',
			icon: Calendar,
			color: 'bg-purple-500',
			features: ['Campaign Scheduling', 'Channel Orchestration', 'Performance Tracking', 'A/B Testing']
		},
		{
			href: '/messaging',
			title: 'Messaging Engine',
			description: 'Real-time messaging dashboard with analytics across all channels',
			icon: MessageSquare,
			color: 'bg-red-500',
			features: ['Channel Overview', 'Real-time Analytics', 'Campaign Monitoring', 'Market Performance']
		}
	];

	let platformStats = [
		{ number: '1,847', label: 'Active Templates', icon: FileText },
		{ number: '26', label: 'Global Markets', icon: Users },
		{ number: '73%', label: 'Approval Rate', icon: BarChart3 },
		{ number: '2.3x', label: 'Faster Deployment', icon: Settings }
	];
</script>

<svelte:head>
	<title>Acme Inc - Content Platform Demo</title>
	<meta name="description" content="Unified content and messaging platform replacing Excel/Jira workflows" />
</svelte:head>

<style>
	@media print {
		.no-print {
			display: none !important;
		}
		
		.container {
			max-width: 100% !important;
			padding: 0 !important;
			margin: 0 !important;
		}
		
		.print-avoid-break {
			page-break-inside: avoid;
			break-inside: avoid;
		}
		
		.print-grid-2 {
			grid-template-columns: repeat(2, 1fr) !important;
		}
		
		* {
			color: black !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
		
		.print-bg {
			background-color: #f5f5f5 !important;
		}
		
		h1 {
			font-size: 28pt !important;
		}
		
		h2 {
			font-size: 20pt !important;
		}
		
		.hover\:shadow-lg {
			box-shadow: none !important;
		}
		
		.border-l-4 {
			border-left-width: 3pt !important;
		}
		
		.print-page-break {
			page-break-before: always;
		}
		
		a {
			text-decoration: none !important;
		}
		
		/* Hide buttons in print */
		button, .btn, [role="button"] {
			display: none !important;
		}
	}
</style>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="text-center mb-12">
		<div class="flex justify-center mb-6">
			<Badge variant="secondary" class="text-sm bg-[#db0011]/10 text-[#db0011] border-[#db0011]/20">Platform Demo</Badge>
		</div>
		<h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">
			Acme Inc Content Platform
		</h1>
		<p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
			Modern HTML5 platform replacing Excel/Jira workflows. Create, manage, and deploy content across all channels from one unified interface.
		</p>
	</div>

	<!-- Platform Statistics -->
	<div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 print-grid-2">
		{#each platformStats as stat}
			<Card class="text-center print-avoid-break">
				<CardHeader class="pb-2">
					<div class="flex justify-center mb-2">
						<div class="h-10 w-10 bg-[#db0011]/10 rounded-lg flex items-center justify-center">
							<svelte:component this={stat.icon} class="h-5 w-5 text-[#db0011]" />
						</div>
					</div>
					<CardTitle class="text-3xl font-bold text-[#db0011]">{stat.number}</CardTitle>
				</CardHeader>
				<CardContent class="pt-0">
					<CardDescription>{stat.label}</CardDescription>
				</CardContent>
			</Card>
		{/each}
	</div>

	<!-- Sub-Routes Navigation -->
	<div class="mb-12">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-bold text-foreground mb-4">Platform Modules</h2>
			<p class="text-muted-foreground">Explore the four core modules of our unified content platform</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 print-grid-2">
			{#each subRoutes as route}
				<Card class="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-gray-200 hover:border-l-[#db0011] print-avoid-break">
					<CardHeader>
						<div class="flex items-center justify-between mb-4">
							<div class="h-12 w-12 {route.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
								<svelte:component this={route.icon} class="h-6 w-6 text-white" />
							</div>
							<Badge variant="outline" class="text-xs">Module</Badge>
						</div>
						<CardTitle class="text-xl mb-2">{route.title}</CardTitle>
						<CardDescription class="text-sm">{route.description}</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="mb-6">
							<h4 class="text-sm font-semibold text-muted-foreground mb-3">Key Features:</h4>
							<ul class="space-y-1">
								{#each route.features as feature}
									<li class="text-sm text-muted-foreground flex items-center">
										<div class="h-1.5 w-1.5 bg-[#db0011] rounded-full mr-2"></div>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
						<Button 
							href={route.href}
							class="w-full bg-[#db0011] hover:bg-[#db0011]/90 group-hover:bg-[#a50000] transition-colors"
						>
							Explore {route.title}
						</Button>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Platform Benefits -->
	<Card class="bg-gradient-to-r from-[#db0011]/5 to-[#db0011]/10 border-[#db0011]/20 print-avoid-break print-bg">
		<CardHeader>
			<div class="text-center">
				<CardTitle class="text-2xl text-[#db0011] mb-2">Why This Platform?</CardTitle>
				<CardDescription>Replacing fragmented Excel/Jira workflows with a unified solution</CardDescription>
			</div>
		</CardHeader>
		<CardContent>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="text-center">
					<div class="h-12 w-12 bg-[#db0011]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
						<span class="text-2xl">⚡</span>
					</div>
					<h3 class="font-semibold mb-2">Speed</h3>
					<p class="text-sm text-muted-foreground">Deploy campaigns 2.3x faster with streamlined workflows</p>
				</div>
				<div class="text-center">
					<div class="h-12 w-12 bg-[#db0011]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
						<span class="text-2xl">🎯</span>
					</div>
					<h3 class="font-semibold mb-2">Consistency</h3>
					<p class="text-sm text-muted-foreground">Unified brand messaging across all channels and markets</p>
				</div>
				<div class="text-center">
					<div class="h-12 w-12 bg-[#db0011]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
						<span class="text-2xl">📊</span>
					</div>
					<h3 class="font-semibold mb-2">Insights</h3>
					<p class="text-sm text-muted-foreground">Real-time analytics and performance tracking</p>
				</div>
			</div>
		</CardContent>
	</Card>
</div>