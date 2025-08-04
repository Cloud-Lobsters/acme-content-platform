<script>
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Progress } from '$lib/components/ui/progress';

	let selectedContentType = 'email';
	let campaignName = 'Premium Credit Card Launch - Q4 2024';
	let selectedMarket = 'hong-kong';
	let selectedAudience = 'high-net-worth';
	let isDraftSaved = false;

	let contentTypes = [
		{ id: 'email', name: 'Email Campaign', active: true },
		{ id: 'sms', name: 'SMS Broadcast', active: false },
		{ id: 'push', name: 'Push Notification', active: false },
		{ id: 'in-app', name: 'In-App Message', active: false },
		{ id: 'web', name: 'Web Banner', active: false }
	];

	let audiences = [
		{ id: 'high-net-worth', name: 'High Net Worth (>$1M)' },
		{ id: 'credit-card', name: 'Existing Credit Card Holders' },
		{ id: 'premium', name: 'Premium Banking Customers' },
		{ id: 'investment', name: 'Investment Account Holders' }
	];

	let markets = [
		{ id: 'hong-kong', name: 'Hong Kong' },
		{ id: 'singapore', name: 'Singapore' },
		{ id: 'uk', name: 'United Kingdom' },
		{ id: 'canada', name: 'Canada' },
		{ id: 'australia', name: 'Australia' }
	];

	let workflowSteps = [
		{ id: 1, name: 'Content Creation', status: 'completed', icon: '✓' },
		{ id: 2, name: 'Review & Approval', status: 'active', icon: '2' },
		{ id: 3, name: 'Legal Sign-off', status: 'pending', icon: '3' },
		{ id: 4, name: 'Schedule & Deploy', status: 'pending', icon: '4' },
		{ id: 5, name: 'Monitor & Report', status: 'pending', icon: '5' }
	];

	let quickActions = [
		{ icon: '📧', title: 'Email Template', desc: 'Create responsive email' },
		{ icon: '📱', title: 'SMS Message', desc: 'Short text campaign' },
		{ icon: '🔔', title: 'Push Notification', desc: 'Mobile app alert' },
		{ icon: '🌐', title: 'Web Banner', desc: 'Online banking banner' }
	];

	let channelPreviews = [
		{
			icon: '📧',
			name: 'Email',
			subject: 'Your exclusive Premium Card invitation',
			content: 'Introducing Acme Inc Premium Credit Card...'
		},
		{
			icon: '📱',
			name: 'SMS',
			content:
				"Acme Inc: You're pre-approved for our Premium Credit Card. Apply by Sep 30 for exclusive benefits. Reply STOP to opt out."
		},
		{
			icon: '🔔',
			name: 'Push Notification',
			title: 'Premium Card Available',
			content: "You're pre-approved! Apply now for exclusive travel rewards."
		},
		{
			icon: '🌐',
			name: 'Online Banking',
			content: 'Banner will appear on login page and accounts overview for targeted customers.'
		}
	];

	function selectContentType(type) {
		selectedContentType = type;
		contentTypes = contentTypes.map((ct) => ({ ...ct, active: ct.id === type }));
	}

	function saveDraft() {
		isDraftSaved = true;
		setTimeout(() => (isDraftSaved = false), 2000);
	}

	function submitForReview() {
		alert(
			'Campaign submitted successfully! You will receive an email notification when the review is complete.'
		);
	}
</script>

<svelte:head>
	<title>Acme Inc Content Creation Platform</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 bg-[#db0011] shadow-lg">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between py-4">
				<div class="text-xl font-bold text-white">Acme Inc Content Creation Platform</div>
				<div class="hidden space-x-6 md:flex">
					<a href="/" class="rounded-md px-3 py-2 text-white hover:bg-white/20"
						>← Back to Overview</a
					>
					<Button variant="ghost" class="text-white hover:bg-white/20">Create Content</Button>
					<Button variant="ghost" class="text-white hover:bg-white/20">My Campaigns</Button>
					<Button variant="ghost" class="text-white hover:bg-white/20">Templates</Button>
					<Button variant="ghost" class="text-white hover:bg-white/20">Analytics</Button>
				</div>
			</div>
		</div>
	</nav>

	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
			<!-- Sidebar -->
			<div class="lg:col-span-1">
				<Card class="sticky top-24">
					<CardContent class="space-y-6 p-6">
						<!-- Content Types -->
						<div>
							<h3 class="mb-3 flex items-center gap-2 text-sm font-semibold text-[#db0011]">
								📝 Content Types
							</h3>
							<div class="space-y-2">
								{#each contentTypes as type}
									<button
										class="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors {type.active
											? 'border border-blue-200 bg-blue-50 text-blue-800'
											: 'hover:bg-gray-50'}"
										on:click={() => selectContentType(type.id)}
									>
										{type.name}
									</button>
								{/each}
							</div>
						</div>

						<Separator />

						<!-- Audience -->
						<div>
							<h3 class="mb-3 flex items-center gap-2 text-sm font-semibold text-[#db0011]">
								🎯 Audience
							</h3>
							<div class="space-y-2">
								{#each audiences.slice(0, 5) as audience}
									<div
										class="cursor-pointer rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
									>
										{audience.name}
									</div>
								{/each}
							</div>
						</div>

						<Separator />

						<!-- Markets -->
						<div>
							<h3 class="mb-3 flex items-center gap-2 text-sm font-semibold text-[#db0011]">
								🌍 Markets
							</h3>
							<div class="space-y-2">
								{#each markets.slice(0, 5) as market}
									<div
										class="cursor-pointer rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
									>
										{market.name}
									</div>
								{/each}
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Main Content -->
			<div class="lg:col-span-3">
				<!-- Header -->
				<Card class="mb-6">
					<div class="rounded-t-lg bg-gradient-to-r from-[#db0011] to-[#a50000] text-white">
						<div class="flex items-center justify-between p-6">
							<h1 class="text-2xl font-light">New Credit Card Launch Campaign</h1>
							<div class="flex gap-3">
								<Button
									variant="secondary"
									class="border-white/30 bg-white/20 text-white hover:bg-white/30"
									on:click={saveDraft}
								>
									{isDraftSaved ? 'Draft Saved ✓' : 'Save Draft'}
								</Button>
								<Button
									class="bg-white text-[#db0011] hover:bg-gray-100"
									on:click={submitForReview}
								>
									Submit for Review
								</Button>
							</div>
						</div>
					</div>
				</Card>

				<!-- Workflow Status -->
				<Card class="mb-6">
					<CardHeader>
						<CardTitle class="flex items-center gap-2">
							<span class="text-xl">🔄</span>
							Campaign Workflow
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="flex items-center justify-between">
							{#each workflowSteps as step, i}
								<div
									class="relative flex flex-col items-center {i < workflowSteps.length - 1
										? 'flex-1'
										: ''}"
								>
									<div
										class="mb-2 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold {step.status ===
										'completed'
											? 'bg-green-500 text-white'
											: step.status === 'active'
												? 'bg-[#db0011] text-white'
												: 'bg-gray-300 text-gray-600'}"
									>
										{step.icon}
									</div>
									<span class="text-center text-xs text-gray-600">{step.name}</span>
									{#if i < workflowSteps.length - 1}
										<div
											class="absolute top-5 left-1/2 h-0.5 w-full {step.status === 'completed'
												? 'bg-green-500'
												: step.status === 'active'
													? 'bg-gradient-to-r from-green-500 to-gray-300'
													: 'bg-gray-300'} -z-10"
										></div>
									{/if}
								</div>
							{/each}
						</div>
					</CardContent>
				</Card>

				<!-- Quick Actions -->
				<Card class="mb-6">
					<CardHeader>
						<CardTitle>Quick Actions</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
							{#each quickActions as action}
								<button
									class="rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-[#db0011] hover:shadow-md"
								>
									<div class="mb-2 text-2xl">{action.icon}</div>
									<h4 class="mb-1 text-sm font-semibold">{action.title}</h4>
									<p class="text-xs text-gray-600">{action.desc}</p>
								</button>
							{/each}
						</div>
					</CardContent>
				</Card>

				<div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
					<!-- Campaign Form -->
					<div class="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Campaign Details</CardTitle>
							</CardHeader>
							<CardContent class="space-y-4">
								<div>
									<Label for="campaign-name">Campaign Name</Label>
									<Input
										id="campaign-name"
										bind:value={campaignName}
										placeholder="Enter campaign name"
									/>
								</div>

								<div class="grid grid-cols-2 gap-4">
									<div>
										<Label for="market">Target Market</Label>
										<select
											id="market"
											class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
											bind:value={selectedMarket}
										>
											{#each markets as market}
												<option value={market.id}>{market.name}</option>
											{/each}
										</select>
									</div>
									<div>
										<Label for="priority">Priority Level</Label>
										<select
											id="priority"
											class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
										>
											<option>High</option>
											<option>Medium</option>
											<option>Low</option>
										</select>
									</div>
								</div>

								<div>
									<Label for="description">Campaign Description</Label>
									<Textarea
										id="description"
										placeholder="Describe the campaign objectives and key messages"
										value="Launch of new Premium Credit Card targeting high-net-worth individuals in Hong Kong. Key benefits include travel rewards, concierge service, and exclusive dining privileges."
									/>
								</div>

								<div class="grid grid-cols-2 gap-4">
									<div>
										<Label for="start-date">Launch Date</Label>
										<Input type="date" id="start-date" value="2024-09-01" />
									</div>
									<div>
										<Label for="end-date">End Date</Label>
										<Input type="date" id="end-date" value="2024-12-31" />
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Content Template</CardTitle>
							</CardHeader>
							<CardContent class="space-y-4">
								<div
									class="cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-8 text-center transition-colors hover:border-[#db0011] hover:bg-red-50"
								>
									<p class="mb-2 text-lg">📋 Drag & Drop Template Builder</p>
									<p class="mb-4 text-sm text-gray-600">
										Create your email template using our visual editor
									</p>
									<Button class="bg-[#db0011] text-white hover:bg-[#a50000]">
										Open Template Editor
									</Button>
								</div>

								<div class="rounded-lg border border-gray-200 bg-white p-4">
									<div class="mb-4 flex items-center justify-between border-b border-gray-200 pb-2">
										<strong>Email Preview</strong>
										<span class="text-xs text-gray-500">Last updated: 2 hours ago</span>
									</div>
									<div class="rounded border border-gray-200 bg-gray-50 p-4">
										<h4 class="mb-2 font-semibold text-[#db0011]">
											Introducing the Acme Inc Premium Credit Card
										</h4>
										<p class="mb-2 text-sm">Dear [CUSTOMER_NAME],</p>
										<p class="mb-4 text-sm">
											We're excited to introduce our new Premium Credit Card, designed exclusively
											for our valued customers in Hong Kong...
										</p>
										<div class="rounded bg-[#db0011] py-3 text-center text-white">
											<strong>Apply Now - Limited Time Offer</strong>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<!-- Right Column -->
					<div class="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Targeting & Personalization</CardTitle>
							</CardHeader>
							<CardContent class="space-y-4">
								<div>
									<Label for="audience">Target Audience</Label>
									<select
										id="audience"
										class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
										bind:value={selectedAudience}
									>
										{#each audiences as audience}
											<option value={audience.id}>{audience.name}</option>
										{/each}
									</select>
								</div>

								<div>
									<Label for="segmentation">Customer Segmentation</Label>
									<Textarea
										id="segmentation"
										placeholder="Define your target criteria"
										value="- Annual income > HK$500,000&#10;- Existing relationship > 2 years&#10;- Active credit card usage&#10;- No recent card applications"
									/>
								</div>

								<div>
									<Label>Personalization Rules</Label>
									<div class="rounded-lg bg-gray-50 p-4">
										<p class="mb-2 text-sm font-semibold">Dynamic Content:</p>
										<ul class="space-y-1 text-sm text-gray-700">
											<li>• Customer name and title</li>
											<li>• Current relationship tenure</li>
											<li>• Preferred language (EN/ZH)</li>
											<li>• Relevant product recommendations</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Multi-Channel Preview</CardTitle>
							</CardHeader>
							<CardContent>
								<div class="space-y-4">
									{#each channelPreviews as channel}
										<div class="overflow-hidden rounded-lg border border-gray-200">
											<div
												class="flex items-center gap-2 bg-gray-50 px-4 py-2 text-sm font-semibold"
											>
												{channel.icon}
												{channel.name}
											</div>
											<div class="p-4 text-sm">
												{#if channel.subject}
													<div class="mb-2"><strong>Subject:</strong> {channel.subject}</div>
												{/if}
												{#if channel.title}
													<div class="mb-2"><strong>Title:</strong> {channel.title}</div>
												{/if}
												<div>
													{@html channel.content.includes('\n')
														? channel.content.replace('\n', '<br>')
														: channel.content}
												</div>
											</div>
										</div>
									{/each}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Delivery Schedule</CardTitle>
							</CardHeader>
							<CardContent class="space-y-4">
								<div>
									<Label for="send-time">Send Time</Label>
									<select
										id="send-time"
										class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
									>
										<option>9:00 AM HKT</option>
										<option>12:00 PM HKT</option>
										<option>6:00 PM HKT</option>
										<option>Custom time...</option>
									</select>
								</div>

								<div>
									<Label for="frequency">Campaign Frequency</Label>
									<select
										id="frequency"
										class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
									>
										<option>One-time send</option>
										<option>Weekly for 4 weeks</option>
										<option>Monthly reminder</option>
										<option>Custom schedule...</option>
									</select>
								</div>

								<div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
									<h4 class="mb-3 flex items-center gap-2 font-semibold text-blue-800">
										📊 Estimated Reach
									</h4>
									<div class="space-y-2 text-sm">
										<p><strong>Target Audience:</strong> 12,500 customers</p>
										<p><strong>Expected Open Rate:</strong> 25-30%</p>
										<p><strong>Projected Applications:</strong> 300-400</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>

				<!-- Navigation -->
				<div class="mt-8 space-x-4 text-center">
					<a
						href="/content-flow"
						class="inline-block rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
					>
						← Content Flow
					</a>
					<a
						href="/architecture"
						class="inline-block rounded-lg bg-[#db0011] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a50000]"
					>
						View Architecture →
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
