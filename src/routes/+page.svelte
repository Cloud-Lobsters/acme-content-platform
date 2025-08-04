<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { ArrowRight, FileText, Settings } from '@lucide/svelte';

	let acronymCards = [
		{
			letter: 'L',
			word: 'Lifecycle',
			description: 'Own the complete content lifecycle from creation to retirement. End-to-end journey management across all touchpoints.'
		},
		{
			letter: 'I',
			word: 'Integration',
			description: 'Connect content management and message delivery into one seamless workflow. No more silos between platforms.'
		},
		{
			letter: 'N',
			word: 'Normalization',
			description: 'Standardize processes across all global markets. Single codebase, consistent workflows, unified customer experience.'
		},
		{
			letter: 'K',
			word: 'Knowledge',
			description: 'Single source of truth about customers. Unified data platform enabling AI-driven hyper-personalization and consistent messaging.'
		}
	];

	let stats = [
		{ number: '600M+', label: 'Monthly Customer Communications' },
		{ number: '26+', label: 'Global Markets' },
		{ number: '1,900+', label: 'Existing Templates' },
		{ number: '£20M', label: 'Annual Potential Savings' }
	];

	let problems = [
		{ title: 'Template Change Delays', desc: '6+ months required to update messaging templates' },
		{ title: 'Conflicting Customer Messages', desc: 'Uncoordinated communications across channels' },
		{ title: 'No Single Customer View', desc: 'Fragmented data prevents unified customer experience' },
		{ title: 'Channel-First Approach', desc: 'Technology-driven rather than customer-centric design' },
		{ title: 'Annual Technology Waste', desc: '£10-20M spent on redundant marketing systems' },
		{ title: 'System Reliability Issues', desc: '~3 major messaging platform incidents monthly' }
	];

	let benefits = [
		{ title: 'Horizontal Content Flow', desc: 'Creation → Management → Decisioning → Orchestration' },
		{ title: 'Vertical Distribution', desc: 'Unified messaging across all channels' },
		{ title: 'Customer-Centric', desc: 'Single view, coordinated experience' },
		{ title: 'AI-Powered', desc: 'Hyper-personalization and predictive content' }
	];
</script>

<svelte:head>
	<title>Acme Inc - Content & Messaging Strategy</title>
	<meta name="description" content="Venkat's strategic initiative to transform Acme Inc's fragmented content and messaging ecosystem into a unified, customer-centric platform" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<div class="text-center mb-12">
		<div class="flex justify-center mb-6">
			<Badge variant="secondary" class="text-sm">Content & Messaging Rationalization</Badge>
		</div>
		<h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">
			Rationalizing Messaging in the Organization
		</h1>
		<p class="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
			Venkat's strategic initiative to transform Acme Inc's fragmented content and messaging ecosystem into a unified, customer-centric platform
		</p>
		<div class="flex gap-4 justify-center">
			<a href="/platform">
				<Button size="lg" class="bg-[#db0011] hover:bg-[#db0011]/90">
					<FileText class="mr-2 h-4 w-4" />
					View Content Platform
				</Button>
			</a>
			<a href="/architecture">
				<Button variant="outline" size="lg">
					<Settings class="mr-2 h-4 w-4" />
					Technical Architecture
				</Button>
			</a>
		</div>
	</div>

	<!-- LINK Acronym Section -->
	<div class="mb-16">
		<div class="text-center mb-8">
			<h2 class="text-3xl font-bold text-foreground mb-4">What Does "LINK" Mean?</h2>
			<p class="text-muted-foreground">The four pillars of our content and messaging transformation</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each acronymCards as card}
				<Card class="border-l-4 border-l-[#db0011] hover:shadow-lg transition-shadow">
					<CardHeader>
						<div class="text-4xl font-bold text-[#db0011] mb-2">{card.letter}</div>
						<CardTitle class="text-xl">{card.word}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							{card.description}
						</CardDescription>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Venkat's Vision Quote -->
	<div class="bg-muted/50 border-l-4 border-l-[#db0011] p-6 mb-12 rounded-r-lg">
		<blockquote class="text-lg italic text-muted-foreground">
			<strong class="text-foreground">Venkat:</strong> "We need to own the journeys...the content creation and content ideation is horizontal...the distribution is vertical. It's more like a T-shaped thing."
		</blockquote>
	</div>

	<!-- Key Statistics -->
	<div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
		{#each stats as stat}
			<Card class="text-center">
				<CardHeader>
					<CardTitle class="text-3xl font-bold text-[#db0011]">{stat.number}</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>{stat.label}</CardDescription>
				</CardContent>
			</Card>
		{/each}
	</div>

	<!-- Current Problems vs Vision -->
	<div class="flex flex-col lg:flex-row gap-8 mb-16 items-start">
		<!-- Current Problems -->
		<Card class="border-red-200 bg-red-50/50 flex-1 max-w-lg">
			<CardHeader>
				<CardTitle class="text-red-700 flex items-center">
					🚨 Current State Problems
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					{#each problems as problem}
						<div class="bg-white p-3 rounded border-l-4 border-red-500">
							<strong>{problem.title}</strong><br>
							<span class="text-sm text-muted-foreground">{problem.desc}</span>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Venkat's Vision -->
		<Card class="border-green-200 bg-green-50/50 flex-1 max-w-lg">
			<CardHeader>
				<CardTitle class="text-green-700 flex items-center">
					🎯 Venkat's Integrated Vision
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-sm text-muted-foreground mb-4">Transform from fragmented silos to an integrated T-shaped platform where:</p>
				<div class="space-y-3">
					{#each benefits as benefit}
						<div class="bg-white p-3 rounded border-l-4 border-green-500">
							<strong>{benefit.title}</strong><br>
							<span class="text-sm text-muted-foreground">{benefit.desc}</span>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>
	</div>

	<!-- Quick Actions / Navigation -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
		<a href="/platform">
			<Card class="hover:shadow-lg transition-shadow cursor-pointer group">
				<CardHeader>
					<div class="h-12 w-12 bg-[#db0011]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#db0011]/20 transition-colors">
						<FileText class="h-6 w-6 text-[#db0011]" />
					</div>
					<CardTitle class="text-lg">Content Platform</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription class="mb-4">
						Modern HTML5 interface replacing Excel/Jira workflows
					</CardDescription>
					<Button variant="ghost" size="sm" class="p-0 h-auto text-[#db0011] hover:text-[#db0011]/80">
						Explore Platform <ArrowRight class="ml-1 h-4 w-4" />
					</Button>
				</CardContent>
			</Card>
		</a>

		<a href="/architecture">
			<Card class="hover:shadow-lg transition-shadow cursor-pointer group">
				<CardHeader>
					<div class="h-12 w-12 bg-[#db0011]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#db0011]/20 transition-colors">
						<Settings class="h-6 w-6 text-[#db0011]" />
					</div>
					<CardTitle class="text-lg">Architecture</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription class="mb-4">
						Technical specifications and system integration details
					</CardDescription>
					<Button variant="ghost" size="sm" class="p-0 h-auto text-[#db0011] hover:text-[#db0011]/80">
						View Docs <ArrowRight class="ml-1 h-4 w-4" />
					</Button>
				</CardContent>
			</Card>
		</a>
	</div>

</div>