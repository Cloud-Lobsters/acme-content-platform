<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { 
		Mail, 
		MessageSquare, 
		Bell, 
		Globe, 
		TrendingUp, 
		Users, 
		Clock, 
		CheckCircle,
		AlertTriangle,
		BarChart3,
		Activity,
		Target
	} from '@lucide/svelte';

	let channelStats = [
		{
			channel: 'Email',
			icon: Mail,
			sent: '47.2M',
			delivered: '46.8M',
			opened: '14.1M',
			clicked: '2.3M',
			deliveryRate: 99.2,
			openRate: 30.1,
			clickRate: 4.9,
			color: 'bg-blue-500',
			bgColor: 'bg-blue-50',
			textColor: 'text-blue-700'
		},
		{
			channel: 'SMS',
			icon: MessageSquare,
			sent: '23.8M',
			delivered: '23.6M',
			opened: '21.2M',
			clicked: '4.7M',
			deliveryRate: 99.1,
			openRate: 89.8,
			clickRate: 19.7,
			color: 'bg-green-500',
			bgColor: 'bg-green-50',
			textColor: 'text-green-700'
		},
		{
			channel: 'Push',
			icon: Bell,
			sent: '18.9M',
			delivered: '17.1M',
			opened: '8.6M',
			clicked: '1.7M',
			deliveryRate: 90.5,
			openRate: 50.3,
			clickRate: 9.0,
			color: 'bg-purple-500',
			bgColor: 'bg-purple-50',
			textColor: 'text-purple-700'
		},
		{
			channel: 'Web',
			icon: Globe,
			sent: '89.4M',
			delivered: '87.2M',
			opened: '52.3M',
			clicked: '7.8M',
			deliveryRate: 97.5,
			openRate: 60.0,
			clickRate: 8.7,
			color: 'bg-orange-500',
			bgColor: 'bg-orange-50',
			textColor: 'text-orange-700'
		}
	];

	let campaignOverview = [
		{
			id: 'CC-2024-Q4',
			name: 'Premium Credit Card Launch',
			status: 'Active',
			channels: ['Email', 'SMS', 'Push'],
			audience: '12.5K',
			sent: '37.5K',
			performance: 'Excellent',
			ctr: '12.3%',
			statusColor: 'bg-green-100 text-green-800'
		},
		{
			id: 'SAV-2024-INT',
			name: 'Savings Account Interest Rate',
			status: 'Scheduled',
			channels: ['Email', 'Web'],
			audience: '245K',
			sent: '0',
			performance: 'Pending',
			ctr: 'N/A',
			statusColor: 'bg-blue-100 text-blue-800'
		},
		{
			id: 'MTG-2024-REM',
			name: 'Mortgage Payment Reminder',
			status: 'Completed',
			channels: ['SMS', 'Email'],
			audience: '89K',
			sent: '178K',
			performance: 'Good',
			ctr: '8.7%',
			statusColor: 'bg-gray-100 text-gray-800'
		}
	];

	let analyticsData = [
		{ metric: 'Total Messages Sent', value: '179.3M', change: '+12.3%', trend: 'up' },
		{ metric: 'Average Delivery Rate', value: '96.6%', change: '+0.8%', trend: 'up' },
		{ metric: 'Customer Engagement', value: '42.1%', change: '+5.2%', trend: 'up' },
		{ metric: 'Campaign Success Rate', value: '73.8%', change: '-1.1%', trend: 'down' }
	];

	let recentActivity = [
		{ time: '2 min ago', action: 'Premium Credit Card campaign sent to Hong Kong segment', type: 'success' },
		{ time: '15 min ago', action: 'SMS delivery issue resolved for Singapore market', type: 'warning' },
		{ time: '32 min ago', action: 'New template approved: Savings Account Promotion', type: 'info' },
		{ time: '1 hour ago', action: 'Campaign CC-2024-Q4 exceeded target CTR by 23%', type: 'success' },
		{ time: '2 hours ago', action: 'Scheduled: Mortgage reminder campaign for tomorrow 9 AM', type: 'info' }
	];

	let marketPerformance = [
		{ market: 'Hong Kong', messages: '45.2M', engagement: '47.3%', revenue: '£2.1M' },
		{ market: 'Singapore', messages: '32.1M', engagement: '43.8%', revenue: '£1.8M' },
		{ market: 'United Kingdom', messages: '28.9M', engagement: '39.2%', revenue: '£1.5M' },
		{ market: 'Canada', messages: '21.7M', engagement: '41.1%', revenue: '£1.2M' },
		{ market: 'Australia', messages: '18.4M', engagement: '44.6%', revenue: '£0.9M' }
	];
</script>

<svelte:head>
	<title>Acme Inc - Messaging Engine</title>
	<meta name="description" content="Unified messaging engine dashboard showing real-time analytics across all channels" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<!-- Header -->
	<div class="text-center mb-12">
		<div class="flex justify-center mb-6">
			<Badge variant="secondary" class="text-sm">Messaging Engine</Badge>
		</div>
		<h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">
			Unified Messaging Dashboard
		</h1>
		<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
			Real-time overview of message delivery across all channels, campaigns, and markets
		</p>
	</div>

	<!-- Channel Overview -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-foreground mb-6">Channel Performance</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each channelStats as channel}
				<Card class="border-l-4 border-l-[#db0011]">
					<CardHeader class="{channel.bgColor} pb-2">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="h-10 w-10 {channel.color} rounded-lg flex items-center justify-center">
									<svelte:component this={channel.icon} class="h-5 w-5 text-white" />
								</div>
								<CardTitle class="{channel.textColor} text-lg">{channel.channel}</CardTitle>
							</div>
							<Badge variant="outline" class="text-xs">This Month</Badge>
						</div>
					</CardHeader>
					<CardContent class="pt-4">
						<div class="space-y-3">
							<div class="flex justify-between items-center">
								<span class="text-sm text-muted-foreground">Sent</span>
								<span class="font-semibold">{channel.sent}</span>
							</div>
							<div class="flex justify-between items-center">
								<span class="text-sm text-muted-foreground">Delivered</span>
								<span class="font-semibold">{channel.delivered}</span>
							</div>
							<div class="space-y-2">
								<div class="flex justify-between items-center">
									<span class="text-sm text-muted-foreground">Delivery Rate</span>
									<span class="font-semibold text-green-600">{channel.deliveryRate}%</span>
								</div>
								<Progress value={channel.deliveryRate} class="h-2" />
							</div>
							<div class="flex justify-between items-center">
								<span class="text-sm text-muted-foreground">Open Rate</span>
								<span class="font-semibold">{channel.openRate}%</span>
							</div>
							<div class="flex justify-between items-center">
								<span class="text-sm text-muted-foreground">Click Rate</span>
								<span class="font-semibold">{channel.clickRate}%</span>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Analytics Overview -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-foreground mb-6">Key Metrics</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each analyticsData as metric}
				<Card>
					<CardHeader class="pb-2">
						<CardDescription class="text-xs">{metric.metric}</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="flex items-center justify-between">
							<div class="text-2xl font-bold text-[#db0011]">{metric.value}</div>
							<div class="flex items-center gap-1 {metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}">
								{#if metric.trend === 'up'}
									<TrendingUp class="h-4 w-4" />
								{:else}
									<TrendingUp class="h-4 w-4 rotate-180" />
								{/if}
								<span class="text-sm font-medium">{metric.change}</span>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
		<!-- Active Campaigns -->
		<div class="lg:col-span-2">
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Target class="h-5 w-5 text-[#db0011]" />
						Active Campaigns
					</CardTitle>
					<CardDescription>Current and recent campaign performance</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each campaignOverview as campaign}
							<div class="border rounded-lg p-4">
								<div class="flex items-center justify-between mb-3">
									<div>
										<h4 class="font-semibold">{campaign.name}</h4>
										<p class="text-sm text-muted-foreground">ID: {campaign.id}</p>
									</div>
									<Badge class="{campaign.statusColor}">{campaign.status}</Badge>
								</div>
								<div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
									<div>
										<span class="text-muted-foreground">Channels:</span>
										<div class="font-medium">{campaign.channels.join(', ')}</div>
									</div>
									<div>
										<span class="text-muted-foreground">Audience:</span>
										<div class="font-medium">{campaign.audience}</div>
									</div>
									<div>
										<span class="text-muted-foreground">Sent:</span>
										<div class="font-medium">{campaign.sent}</div>
									</div>
									<div>
										<span class="text-muted-foreground">CTR:</span>
										<div class="font-medium">{campaign.ctr}</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Recent Activity -->
		<div>
			<Card>
				<CardHeader>
					<CardTitle class="flex items-center gap-2">
						<Activity class="h-5 w-5 text-[#db0011]" />
						Recent Activity
					</CardTitle>
					<CardDescription>Latest system events and updates</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each recentActivity as activity}
							<div class="flex items-start gap-3">
								<div class="mt-1">
									{#if activity.type === 'success'}
										<CheckCircle class="h-4 w-4 text-green-500" />
									{:else if activity.type === 'warning'}
										<AlertTriangle class="h-4 w-4 text-yellow-500" />
									{:else}
										<Clock class="h-4 w-4 text-blue-500" />
									{/if}
								</div>
								<div class="flex-1">
									<p class="text-sm">{activity.action}</p>
									<p class="text-xs text-muted-foreground">{activity.time}</p>
								</div>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>
	</div>

	<!-- Market Performance -->
	<div class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<BarChart3 class="h-5 w-5 text-[#db0011]" />
					Market Performance
				</CardTitle>
				<CardDescription>Messaging performance across global markets</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="overflow-x-auto">
					<table class="w-full">
						<thead>
							<tr class="border-b">
								<th class="text-left py-3 font-semibold">Market</th>
								<th class="text-left py-3 font-semibold">Messages Sent</th>
								<th class="text-left py-3 font-semibold">Engagement Rate</th>
								<th class="text-left py-3 font-semibold">Revenue Impact</th>
								<th class="text-left py-3 font-semibold">Performance</th>
							</tr>
						</thead>
						<tbody>
							{#each marketPerformance as market, i}
								<tr class="border-b">
									<td class="py-3 font-medium">{market.market}</td>
									<td class="py-3">{market.messages}</td>
									<td class="py-3">{market.engagement}</td>
									<td class="py-3 font-semibold text-green-600">{market.revenue}</td>
									<td class="py-3">
										<div class="flex items-center gap-2">
											<div class="h-2 w-16 bg-gray-200 rounded-full">
												<div 
													class="h-2 bg-[#db0011] rounded-full" 
													style="width: {85 - i * 5}%"
												></div>
											</div>
											<span class="text-sm text-muted-foreground">{85 - i * 5}%</span>
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>
	</div>

	<!-- Quick Actions -->
	<Card class="bg-gradient-to-r from-[#db0011] to-[#a50000] text-white">
		<CardContent class="text-center py-12">
			<h2 class="text-3xl font-bold mb-4">Messaging Engine Control Center</h2>
			<p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
				Monitor, analyze, and optimize your unified messaging campaigns across all channels and markets
			</p>
			<div class="flex gap-4 justify-center">
				<Button size="lg" variant="secondary">
					<BarChart3 class="mr-2 h-4 w-4" />
					View Detailed Analytics
				</Button>
				<Button size="lg" variant="outline" class="text-white border-white hover:bg-white hover:text-[#db0011]">
					<Users class="mr-2 h-4 w-4" />
					Manage Campaigns
				</Button>
			</div>
		</CardContent>
	</Card>
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

		.text-\[\#db0011\], .text-foreground {
			color: black !important;
		}

		.text-muted-foreground, .text-gray-600, .text-blue-600, .text-green-600, .text-purple-600 {
			color: #666 !important;
		}

		/* Card and layout adjustments */
		[class*="card"] {
			border: 1px solid #ccc !important;
			background: white !important;
			box-shadow: none !important;
		}

		/* Badge styling */
		[class*="badge"] {
			border: 1px solid #666 !important;
			background: white !important;
			color: black !important;
		}

		/* Progress bars */
		[class*="progress"] {
			background: #f0f0f0 !important;
			border: 1px solid #ccc !important;
		}

		/* Icons and buttons */
		button, .btn, [class*="button"] {
			display: none !important;
		}

		/* SVG icons - make them black */
		svg {
			color: black !important;
			fill: black !important;
		}

		/* Remove hover states */
		*:hover {
			transform: none !important;
			box-shadow: none !important;
		}

		/* Table styling */
		table {
			border-collapse: collapse !important;
		}

		table th, table td {
			border: 1px solid #ccc !important;
			padding: 4px 8px !important;
		}
	}
</style>