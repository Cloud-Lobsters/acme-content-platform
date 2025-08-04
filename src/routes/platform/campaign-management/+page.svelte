<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { ArrowLeft, Calendar, Clock, Mail, MessageSquare, Bell, Globe, BarChart3, Users, Play, Pause, Eye, Edit, Copy } from '@lucide/svelte';

	let campaigns = [
		{
			id: '1',
			name: 'Premium Credit Card Launch - Q4 2024',
			status: 'active',
			type: 'Product Launch',
			channels: ['email', 'sms', 'push', 'web'],
			startDate: '2024-01-15',
			endDate: '2024-03-31',
			audience: 'High Net Worth',
			sent: 45678,
			opened: 13703,
			clicked: 3425,
			conversions: 456,
			progress: 75
		},
		{
			id: '2',
			name: 'Travel Rewards Promotion - Hong Kong',
			status: 'scheduled',
			type: 'Promotional',
			channels: ['email', 'push', 'web'],
			startDate: '2024-02-01',
			endDate: '2024-02-29',
			audience: 'Existing Customers',
			sent: 0,
			opened: 0,
			clicked: 0,
			conversions: 0,
			progress: 0
		},
		{
			id: '3',
			name: 'Account Security Update Notification',
			status: 'completed',
			type: 'Service Update',
			channels: ['email', 'sms'],
			startDate: '2023-12-01',
			endDate: '2023-12-31',
			audience: 'All Customers',
			sent: 156789,
			opened: 125431,
			clicked: 89234,
			conversions: 147625,
			progress: 100
		},
		{
			id: '4',
			name: 'Investment Portfolio Review - Q1',
			status: 'draft',
			type: 'Educational',
			channels: ['email'],
			startDate: '2024-03-01',
			endDate: '2024-03-15',
			audience: 'Investment Clients',
			sent: 0,
			opened: 0,
			clicked: 0,
			conversions: 0,
			progress: 25
		}
	];

	let channelStats = [
		{ channel: 'Email', icon: Mail, color: 'bg-blue-500', sent: 234567, openRate: '24.5%', clickRate: '3.2%' },
		{ channel: 'SMS', icon: MessageSquare, color: 'bg-green-500', sent: 89012, openRate: '98%', clickRate: '12.8%' },
		{ channel: 'Push', icon: Bell, color: 'bg-purple-500', sent: 156789, openRate: '45%', clickRate: '8.7%' },
		{ channel: 'Web', icon: Globe, color: 'bg-orange-500', sent: 67890, openRate: '76%', clickRate: '15.3%' }
	];

	function getStatusColor(status: string) {
		switch (status) {
			case 'active':
				return 'bg-green-100 text-green-800';
			case 'scheduled':
				return 'bg-blue-100 text-blue-800';
			case 'completed':
				return 'bg-gray-100 text-gray-800';
			case 'draft':
				return 'bg-yellow-100 text-yellow-800';
			case 'paused':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	function getChannelIcon(channel: string) {
		switch (channel) {
			case 'email':
				return Mail;
			case 'sms':
				return MessageSquare;
			case 'push':
				return Bell;
			case 'web':
				return Globe;
			default:
				return Mail;
		}
	}

	function formatNumber(num: number) {
		if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
		if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
		return num.toString();
	}

	function calculateRate(numerator: number, denominator: number) {
		if (denominator === 0) return '0%';
		return ((numerator / denominator) * 100).toFixed(1) + '%';
	}
</script>

<svelte:head>
	<title>Campaign Management - Acme Inc Platform</title>
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Header -->
	<div class="border-b bg-[#db0011] text-white">
		<div class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<Button variant="ghost" class="text-white hover:bg-white/20" href="/platform">
						<ArrowLeft class="h-4 w-4 mr-2" />
						Back to Platform
					</Button>
					<div class="h-6 w-px bg-white/30"></div>
					<h1 class="text-xl font-semibold">Campaign Management</h1>
				</div>
				<div class="flex items-center space-x-3">
					<Button variant="ghost" class="text-white hover:bg-white/20">
						<Calendar class="h-4 w-4 mr-2" />
						Schedule Campaign
					</Button>
					<Button class="bg-white text-[#db0011] hover:bg-gray-100" href="/platform/content-creation">
						<Play class="h-4 w-4 mr-2" />
						Create Campaign
					</Button>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 py-8">
		<!-- Channel Performance Overview -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			{#each channelStats as stat}
				<Card>
					<CardContent class="p-6">
						<div class="flex items-center justify-between mb-4">
							<div class="h-10 w-10 {stat.color} rounded-lg flex items-center justify-center">
								<svelte:component this={stat.icon} class="h-5 w-5 text-white" />
							</div>
							<Badge variant="secondary" class="text-xs">Channel</Badge>
						</div>
						<h3 class="font-semibold text-lg mb-2">{stat.channel}</h3>
						<div class="space-y-1 text-sm text-gray-600">
							<div class="flex justify-between">
								<span>Sent:</span>
								<span class="font-medium">{formatNumber(stat.sent)}</span>
							</div>
							<div class="flex justify-between">
								<span>Open Rate:</span>
								<span class="font-medium text-green-600">{stat.openRate}</span>
							</div>
							<div class="flex justify-between">
								<span>Click Rate:</span>
								<span class="font-medium text-blue-600">{stat.clickRate}</span>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>

		<!-- Campaign List -->
		<Card>
			<CardHeader>
				<div class="flex items-center justify-between">
					<div>
						<CardTitle class="text-xl">Campaign Dashboard</CardTitle>
						<CardDescription>Monitor and manage all your marketing campaigns</CardDescription>
					</div>
					<div class="flex items-center space-x-3">
						<Input placeholder="Search campaigns..." class="w-64" />
						<Button variant="outline">
							<BarChart3 class="h-4 w-4 mr-2" />
							Analytics
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each campaigns as campaign}
						<Card class="border border-gray-200 hover:shadow-md transition-shadow">
							<CardContent class="p-6">
								<div class="flex items-start justify-between mb-4">
									<div class="flex-1">
										<div class="flex items-center space-x-3 mb-2">
											<h3 class="font-semibold text-lg">{campaign.name}</h3>
											<Badge class="{getStatusColor(campaign.status)} capitalize">{campaign.status}</Badge>
											<Badge variant="outline" class="text-xs">{campaign.type}</Badge>
										</div>
										
										<div class="flex items-center space-x-6 text-sm text-gray-600 mb-3">
											<div class="flex items-center space-x-1">
												<Calendar class="h-4 w-4" />
												<span>{campaign.startDate} - {campaign.endDate}</span>
											</div>
											<div class="flex items-center space-x-1">
												<Users class="h-4 w-4" />
												<span>{campaign.audience}</span>
											</div>
										</div>

										<!-- Channel Icons -->
										<div class="flex items-center space-x-2 mb-4">
											<span class="text-sm text-gray-600">Channels:</span>
											{#each campaign.channels as channel}
												<div class="h-6 w-6 bg-gray-100 rounded flex items-center justify-center">
													<svelte:component this={getChannelIcon(channel)} class="h-3 w-3 text-gray-600" />
												</div>
											{/each}
										</div>

										<!-- Progress Bar -->
										{#if campaign.status === 'active' || campaign.status === 'completed'}
											<div class="mb-4">
												<div class="flex justify-between text-sm mb-1">
													<span>Campaign Progress</span>
													<span>{campaign.progress}%</span>
												</div>
												<div class="w-full bg-gray-200 rounded-full h-2">
													<div class="bg-[#db0011] h-2 rounded-full transition-all" style="width: {campaign.progress}%"></div>
												</div>
											</div>
										{/if}
									</div>

									<!-- Actions -->
									<div class="flex items-center space-x-2">
										<Button variant="ghost" size="sm">
											<Eye class="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="sm">
											<Edit class="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="sm">
											<Copy class="h-4 w-4" />
										</Button>
										{#if campaign.status === 'active'}
											<Button variant="ghost" size="sm">
												<Pause class="h-4 w-4" />
											</Button>
										{:else if campaign.status === 'scheduled' || campaign.status === 'draft'}
											<Button variant="ghost" size="sm">
												<Play class="h-4 w-4" />
											</Button>
										{/if}
									</div>
								</div>

								<!-- Performance Metrics -->
								{#if campaign.sent > 0}
									<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t">
										<div class="text-center">
											<div class="text-2xl font-bold text-[#db0011]">{formatNumber(campaign.sent)}</div>
											<div class="text-xs text-gray-600">Sent</div>
										</div>
										<div class="text-center">
											<div class="text-2xl font-bold text-blue-600">{formatNumber(campaign.opened)}</div>
											<div class="text-xs text-gray-600">Opened ({calculateRate(campaign.opened, campaign.sent)})</div>
										</div>
										<div class="text-center">
											<div class="text-2xl font-bold text-green-600">{formatNumber(campaign.clicked)}</div>
											<div class="text-xs text-gray-600">Clicked ({calculateRate(campaign.clicked, campaign.sent)})</div>
										</div>
										<div class="text-center">
											<div class="text-2xl font-bold text-purple-600">{formatNumber(campaign.conversions)}</div>
											<div class="text-xs text-gray-600">Conversions ({calculateRate(campaign.conversions, campaign.sent)})</div>
										</div>
									</div>
								{:else}
									<div class="pt-4 border-t text-center text-gray-500">
										<Clock class="h-8 w-8 mx-auto mb-2" />
										<div class="text-sm">Campaign not yet deployed</div>
									</div>
								{/if}
							</CardContent>
						</Card>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Scheduled Campaigns Calendar Preview -->
		<Card class="mt-8">
			<CardHeader>
				<CardTitle class="flex items-center">
					<Calendar class="h-5 w-5 mr-2 text-[#db0011]" />
					Upcoming Campaigns
				</CardTitle>
				<CardDescription>Scheduled campaigns for the next 30 days</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 md:grid-cols-7 gap-4">
					<!-- Mock calendar preview -->
					{#each Array(7) as _, dayIndex}
						<div class="border rounded-lg p-3 min-h-[120px] {dayIndex === 2 || dayIndex === 5 ? 'bg-[#db0011]/5 border-[#db0011]/20' : 'bg-gray-50'}">
							<div class="text-sm font-medium mb-2">
								{new Date(2024, 1, 15 + dayIndex).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' })}
							</div>
							{#if dayIndex === 2}
								<div class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded mb-1">
									Travel Rewards Launch
								</div>
							{/if}
							{#if dayIndex === 5}
								<div class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mb-1">
									Portfolio Review Send
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- A/B Testing Overview -->
		<Card class="mt-8">
			<CardHeader>
				<CardTitle>A/B Testing Results</CardTitle>
				<CardDescription>Performance comparison of campaign variants</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-3">
							<h4 class="font-semibold">Variant A - Current Design</h4>
							<Badge class="bg-green-100 text-green-800">Winner</Badge>
						</div>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span>Open Rate:</span>
								<span class="font-semibold text-green-600">28.4%</span>
							</div>
							<div class="flex justify-between">
								<span>Click Rate:</span>
								<span class="font-semibold text-green-600">4.7%</span>
							</div>
							<div class="flex justify-between">
								<span>Conversion Rate:</span>
								<span class="font-semibold text-green-600">1.2%</span>
							</div>
						</div>
					</div>
					
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-3">
							<h4 class="font-semibold">Variant B - New Design</h4>
							<Badge variant="secondary">Test</Badge>
						</div>
						<div class="space-y-2 text-sm">
							<div class="flex justify-between">
								<span>Open Rate:</span>
								<span class="font-semibold">24.1%</span>
							</div>
							<div class="flex justify-between">
								<span>Click Rate:</span>
								<span class="font-semibold">3.9%</span>
							</div>
							<div class="flex justify-between">
								<span>Conversion Rate:</span>
								<span class="font-semibold">0.8%</span>
							</div>
						</div>
					</div>
				</div>
				
				<div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
					<div class="flex items-center space-x-2">
						<div class="h-2 w-2 bg-green-500 rounded-full"></div>
						<span class="text-sm font-medium text-green-800">
							Variant A shows 18% better performance. Recommended to use for full campaign.
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</div>