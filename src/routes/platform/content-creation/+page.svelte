<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select/index.js';
	import { PlusCircle, FileText, Settings, Mail, MessageSquare, Bell, Globe, ArrowLeft, Save, Send } from '@lucide/svelte';

	let selectedTemplate = $state('email');
	let campaignName = $state('Premium Credit Card Launch Q4');
	let selectedMarket = $state('hong-kong');
	let selectedAudience = $state('high-net-worth');
	let isDraftSaved = $state(false);

	let contentTypes = [
		{ id: 'email', name: 'Email Campaign', icon: Mail, color: 'bg-blue-500' },
		{ id: 'sms', name: 'SMS Message', icon: MessageSquare, color: 'bg-green-500' },
		{ id: 'push', name: 'Push Notification', icon: Bell, color: 'bg-purple-500' },
		{ id: 'web', name: 'Web Banner', icon: Globe, color: 'bg-orange-500' }
	];

	let markets = [
		{ id: 'hong-kong', name: 'Hong Kong' },
		{ id: 'singapore', name: 'Singapore' },
		{ id: 'uk', name: 'United Kingdom' },
		{ id: 'canada', name: 'Canada' }
	];

	let audiences = [
		{ id: 'high-net-worth', name: 'High Net Worth (>$1M)' },
		{ id: 'premium', name: 'Premium Banking Customers' },
		{ id: 'credit-card', name: 'Existing Credit Card Holders' },
		{ id: 'investment', name: 'Investment Account Holders' }
	];

	let emailContent = $state({
		subject: 'Introducing the Acme Inc Premium Credit Card',
		preheader: 'Exclusive benefits for our valued customers',
		headline: 'Premium Credit Card - Limited Time Offer',
		body: `Dear [CUSTOMER_NAME],

We're excited to introduce our new Premium Credit Card, designed exclusively for our valued customers in Hong Kong.

Key Benefits:
• Unlimited travel rewards points
• 24/7 concierge service  
• Exclusive dining privileges
• Complimentary airport lounge access

Apply now and receive a welcome bonus of 100,000 points - enough for a round-trip flight to Europe!

This exclusive offer expires on December 31, 2024.`,
		cta: 'Apply Now - Limited Time'
	});

	function saveDraft() {
		isDraftSaved = true;
		setTimeout(() => isDraftSaved = false, 2000);
	}

	function submitForReview() {
		alert('Content submitted for review! You will receive a notification when approved.');
	}

	function selectContentType(type: string) {
		selectedTemplate = type;
	}
</script>

<svelte:head>
	<title>Content Creation - Acme Inc Platform</title>
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
					<h1 class="text-xl font-semibold">Content Creation</h1>
				</div>
				<div class="flex items-center space-x-3">
					<Button variant="ghost" class="text-white hover:bg-white/20" onclick={saveDraft}>
						<Save class="h-4 w-4 mr-2" />
						{isDraftSaved ? 'Draft Saved ✓' : 'Save Draft'}
					</Button>
					<Button class="bg-white text-[#db0011] hover:bg-gray-100" onclick={submitForReview}>
						<Send class="h-4 w-4 mr-2" />
						Submit for Review
					</Button>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 py-8">
		<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
			<!-- Sidebar -->
			<div class="lg:col-span-1">
				<div class="space-y-6">
					<!-- Content Types -->
					<Card>
						<CardHeader>
							<CardTitle class="text-lg flex items-center">
								<PlusCircle class="h-5 w-5 mr-2 text-[#db0011]" />
								Content Types
							</CardTitle>
						</CardHeader>
						<CardContent class="space-y-3">
							{#each contentTypes as type}
								<button
									class="w-full flex items-center space-x-3 p-3 rounded-lg border transition-all {selectedTemplate === type.id
										? 'border-[#db0011] bg-[#db0011]/5'
										: 'border-gray-200 hover:border-gray-300'}"
									onclick={() => selectContentType(type.id)}
								>
									<div class="h-8 w-8 {type.color} rounded-lg flex items-center justify-center">
										<svelte:component this={type.icon} class="h-4 w-4 text-white" />
									</div>
									<span class="text-sm font-medium">{type.name}</span>
								</button>
							{/each}
						</CardContent>
					</Card>

					<!-- Quick Settings -->
					<Card>
						<CardHeader>
							<CardTitle class="text-lg flex items-center">
								<Settings class="h-5 w-5 mr-2 text-[#db0011]" />
								Settings
							</CardTitle>
						</CardHeader>
						<CardContent class="space-y-4">
							<div>
								<Label for="market" class="text-sm font-medium">Market</Label>
								<select
									id="market"
									bind:value={selectedMarket}
									class="w-full mt-1 rounded-md border border-gray-300 p-2 text-sm focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
								>
									{#each markets as market}
										<option value={market.id}>{market.name}</option>
									{/each}
								</select>
							</div>
							<div>
								<Label for="audience" class="text-sm font-medium">Audience</Label>
								<select
									id="audience"
									bind:value={selectedAudience}
									class="w-full mt-1 rounded-md border border-gray-300 p-2 text-sm focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
								>
									{#each audiences as audience}
										<option value={audience.id}>{audience.name}</option>
									{/each}
								</select>
							</div>
							<div>
								<Label for="priority" class="text-sm font-medium">Priority</Label>
								<select
									id="priority"
									class="w-full mt-1 rounded-md border border-gray-300 p-2 text-sm focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
								>
									<option>High</option>
									<option>Medium</option>
									<option>Low</option>
								</select>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<!-- Main Content Area -->
			<div class="lg:col-span-3">
				<div class="space-y-8">
					<!-- Campaign Info -->
					<Card>
						<CardHeader>
							<CardTitle>Campaign Information</CardTitle>
							<CardDescription>Basic details about your content campaign</CardDescription>
						</CardHeader>
						<CardContent class="space-y-4">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label for="campaign-name">Campaign Name</Label>
									<Input
										id="campaign-name"
										bind:value={campaignName}
										placeholder="Enter campaign name"
									/>
								</div>
								<div>
									<Label for="campaign-type">Campaign Type</Label>
									<select
										id="campaign-type"
										class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]"
									>
										<option>Product Launch</option>
										<option>Promotional</option>
										<option>Educational</option>
										<option>Retention</option>
									</select>
								</div>
							</div>
							<div>
								<Label for="description">Campaign Description</Label>
								<Textarea
									id="description"
									placeholder="Describe the campaign objectives and key messages"
									value="Launch of new Premium Credit Card targeting high-net-worth individuals. Key benefits include travel rewards, concierge service, and exclusive dining privileges."
								/>
							</div>
						</CardContent>
					</Card>

					<!-- Content Editor -->
					{#if selectedTemplate === 'email'}
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center">
									<Mail class="h-5 w-5 mr-2" />
									Email Content Editor
								</CardTitle>
								<CardDescription>Create and customize your email content</CardDescription>
							</CardHeader>
							<CardContent class="space-y-6">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<Label for="subject">Subject Line</Label>
										<Input
											id="subject"
											bind:value={emailContent.subject}
											placeholder="Enter email subject"
										/>
									</div>
									<div>
										<Label for="preheader">Preheader Text</Label>
										<Input
											id="preheader"
											bind:value={emailContent.preheader}
											placeholder="Preview text"
										/>
									</div>
								</div>
								
								<div>
									<Label for="headline">Headline</Label>
									<Input
										id="headline"
										bind:value={emailContent.headline}
										placeholder="Main headline"
									/>
								</div>

								<div>
									<Label for="body">Email Body</Label>
									<Textarea
										id="body"
										bind:value={emailContent.body}
										class="min-h-[300px]"
										placeholder="Enter your email content"
									/>
								</div>

								<div>
									<Label for="cta">Call to Action</Label>
									<Input
										id="cta"
										bind:value={emailContent.cta}
										placeholder="Button text"
									/>
								</div>
							</CardContent>
						</Card>

						<!-- Email Preview -->
						<Card>
							<CardHeader>
								<CardTitle>Email Preview</CardTitle>
								<CardDescription>Preview how your email will look to recipients</CardDescription>
							</CardHeader>
							<CardContent>
								<div class="border border-gray-200 rounded-lg bg-white p-6 max-w-2xl">
									<div class="border-b border-gray-200 pb-4 mb-4">
										<div class="text-sm text-gray-600 mb-1">Subject: <strong>{emailContent.subject}</strong></div>
										<div class="text-xs text-gray-500">{emailContent.preheader}</div>
									</div>
									
									<div class="space-y-4">
										<h2 class="text-xl font-bold text-[#db0011]">{emailContent.headline}</h2>
										
										<div class="whitespace-pre-line text-sm text-gray-700">
											{emailContent.body}
										</div>
										
										<div class="pt-4">
											<div class="inline-block bg-[#db0011] text-white px-6 py-3 rounded-lg font-semibold">
												{emailContent.cta}
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					{/if}

					{#if selectedTemplate === 'sms'}
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center">
									<MessageSquare class="h-5 w-5 mr-2" />
									SMS Content Editor
								</CardTitle>
								<CardDescription>Create SMS messages (160 character limit)</CardDescription>
							</CardHeader>
							<CardContent class="space-y-4">
								<div>
									<Label for="sms-content">SMS Message</Label>
									<Textarea
										id="sms-content"
										placeholder="Enter your SMS message..."
										class="min-h-[120px]"
										value="Acme Inc: You're pre-approved for our Premium Credit Card! Apply by Dec 31 for exclusive benefits & 100K welcome points. Reply STOP to opt out."
									/>
									<div class="text-xs text-gray-500 mt-1">156/160 characters</div>
								</div>
								
								<!-- SMS Preview -->
								<div class="bg-gray-100 rounded-lg p-4">
									<div class="bg-white rounded-lg shadow-sm p-3 max-w-xs">
										<div class="text-sm">Acme Inc: You're pre-approved for our Premium Credit Card! Apply by Dec 31 for exclusive benefits & 100K welcome points. Reply STOP to opt out.</div>
									</div>
								</div>
							</CardContent>
						</Card>
					{/if}

					{#if selectedTemplate === 'push'}
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center">
									<Bell class="h-5 w-5 mr-2" />
									Push Notification Editor
								</CardTitle>
								<CardDescription>Create mobile push notifications</CardDescription>
							</CardHeader>
							<CardContent class="space-y-4">
								<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<Label for="push-title">Title</Label>
										<Input
											id="push-title"
											placeholder="Notification title"
											value="Premium Card Available"
										/>
									</div>
									<div>
										<Label for="push-category">Category</Label>
										<select class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]">
											<option>Product Offer</option>
											<option>Account Alert</option>
											<option>Promotional</option>
										</select>
									</div>
								</div>
								
								<div>
									<Label for="push-body">Message</Label>
									<Textarea
										id="push-body"
										placeholder="Notification message"
										value="You're pre-approved! Apply now for exclusive travel rewards and benefits."
									/>
								</div>

								<!-- Push Preview -->
								<div class="bg-gray-100 rounded-lg p-4">
									<div class="bg-white rounded-lg shadow-sm p-4 max-w-sm flex items-start space-x-3">
										<div class="h-8 w-8 bg-[#db0011] rounded-lg flex items-center justify-center">
											<span class="text-white text-xs font-bold">AI</span>
										</div>
										<div class="flex-1 min-w-0">
											<div class="text-sm font-semibold">Premium Card Available</div>
											<div class="text-xs text-gray-600">You're pre-approved! Apply now for exclusive travel rewards and benefits.</div>
											<div class="text-xs text-gray-400 mt-1">now</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					{/if}

					{#if selectedTemplate === 'web'}
						<Card>
							<CardHeader>
								<CardTitle class="flex items-center">
									<Globe class="h-5 w-5 mr-2" />
									Web Banner Editor
								</CardTitle>
								<CardDescription>Create web banners for online banking</CardDescription>
							</CardHeader>
							<CardContent class="space-y-4">
								<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
									<div>
										<Label for="banner-size">Banner Size</Label>
										<select class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]">
											<option>Leaderboard (728x90)</option>
											<option>Rectangle (300x250)</option>
											<option>Skyscraper (160x600)</option>
										</select>
									</div>
									<div>
										<Label for="banner-placement">Placement</Label>
										<select class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]">
											<option>Login Page</option>
											<option>Account Overview</option>
											<option>Cards Section</option>
										</select>
									</div>
									<div>
										<Label for="banner-duration">Display Duration</Label>
										<select class="w-full rounded-md border border-gray-300 p-2 focus:border-[#db0011] focus:ring-1 focus:ring-[#db0011]">
											<option>30 days</option>
											<option>60 days</option>
											<option>90 days</option>
										</select>
									</div>
								</div>

								<div>
									<Label for="banner-headline">Headline</Label>
									<Input
										id="banner-headline"
										placeholder="Banner headline"
										value="Premium Credit Card - Apply Now"
									/>
								</div>

								<div>
									<Label for="banner-copy">Copy</Label>
									<Textarea
										id="banner-copy"
										placeholder="Banner copy"
										value="Exclusive benefits for valued customers. 100K welcome bonus points. Apply by Dec 31."
									/>
								</div>

								<!-- Web Banner Preview -->
								<div class="bg-gray-100 rounded-lg p-4">
									<div class="bg-gradient-to-r from-[#db0011] to-[#a50000] text-white rounded-lg p-6 max-w-2xl">
										<div class="flex items-center justify-between">
											<div>
												<h3 class="text-lg font-bold mb-2">Premium Credit Card - Apply Now</h3>
												<p class="text-sm opacity-90">Exclusive benefits for valued customers. 100K welcome bonus points. Apply by Dec 31.</p>
											</div>
											<div class="bg-white text-[#db0011] px-4 py-2 rounded font-semibold">
												Apply Now
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					{/if}
				</div>
			</div>
		</div>
	</div>
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

		.text-\[\#db0011\] {
			color: black !important;
		}

		.text-gray-600, .text-gray-700, .text-gray-400, .text-gray-500 {
			color: #666 !important;
		}

		/* Card and layout adjustments */
		[class*="card"] {
			border: 1px solid #ccc !important;
			background: white !important;
			box-shadow: none !important;
		}

		/* Form elements - hide but show labels */
		button, .btn, [class*="button"], input, textarea, select {
			display: none !important;
		}

		/* Keep labels visible */
		label {
			display: block !important;
			color: black !important;
			font-weight: bold !important;
			margin-bottom: 4px !important;
		}

		/* Show content values as text */
		.content-preview {
			display: block !important;
			color: black !important;
			margin-bottom: 8px !important;
		}

		/* SVG icons */
		svg {
			color: black !important;
			fill: black !important;
		}

		/* Remove hover states */
		*:hover {
			transform: none !important;
			box-shadow: none !important;
		}

		/* Preview styling */
		.bg-gray-100 {
			background: #f5f5f5 !important;
			border: 1px solid #ddd !important;
		}

		.bg-white {
			background: white !important;
		}

		/* Badge styling */
		[class*="badge"] {
			border: 1px solid #666 !important;
			background: white !important;
			color: black !important;
		}

		/* Gradient backgrounds */
		.bg-gradient-to-r {
			background: #f0f0f0 !important;
			border: 1px solid #ccc !important;
		}
	}
</style>