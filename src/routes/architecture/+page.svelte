<script>
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	let systemLayers = [
		{
			name: 'Presentation Layer',
			technologies: ['SvelteKit', 'TailwindCSS', 'shadcn-svelte'],
			description: 'Modern web framework with reactive components and responsive design'
		},
		{
			name: 'API Gateway',
			technologies: ['Kong', 'AWS API Gateway', 'Rate Limiting'],
			description: 'Centralized API management with authentication and throttling'
		},
		{
			name: 'Microservices',
			technologies: ['Node.js', 'Python FastAPI', 'Docker'],
			description: 'Containerized services for content, messaging, and orchestration'
		},
		{
			name: 'Message Queue',
			technologies: ['Apache Kafka', 'Redis', 'RabbitMQ'],
			description: 'Asynchronous processing for high-volume messaging operations'
		},
		{
			name: 'Data Layer',
			technologies: ['PostgreSQL', 'MongoDB', 'Elasticsearch'],
			description: 'Multi-database architecture for structured and unstructured data'
		}
	];

	let integrationPoints = [
		{
			system: 'Adobe Experience Manager (AEM)',
			type: 'Content Management',
			api: 'REST API',
			frequency: 'Real-time',
			purpose: 'Template and asset management'
		},
		{
			system: 'PEGA Decision Engine',
			type: 'Business Rules',
			api: 'SOAP/REST',
			frequency: 'Real-time',
			purpose: 'Customer decisioning and personalization'
		},
		{
			system: 'Salesforce CRM',
			type: 'Customer Data',
			api: 'REST API',
			frequency: 'Near real-time',
			purpose: 'Customer profiles and journey data'
		},
		{
			system: 'IBM Campaign (ICCM)',
			type: 'Legacy Email',
			api: 'SOAP',
			frequency: 'Batch',
			purpose: 'Email campaign execution'
		},
		{
			system: 'MDP (Messaging Delivery Platform)',
			type: 'SMS/Push',
			api: 'REST API',
			frequency: 'Real-time',
			purpose: 'Multi-channel message delivery'
		},
		{
			system: 'Google Analytics',
			type: 'Analytics',
			api: 'REST API',
			frequency: 'Real-time',
			purpose: 'Campaign performance tracking'
		}
	];

	let technologyStack = [
		{
			category: 'Frontend',
			primary: 'SvelteKit',
			supporting: ['TailwindCSS', 'TypeScript', 'Vite']
		},
		{
			category: 'Backend',
			primary: 'Node.js',
			supporting: ['FastAPI', 'Express.js', 'Nest.js']
		},
		{
			category: 'Database',
			primary: 'PostgreSQL',
			supporting: ['MongoDB', 'Redis', 'Elasticsearch']
		},
		{
			category: 'Cloud Platform',
			primary: 'Google Cloud Platform',
			supporting: ['Kubernetes', 'Docker', 'Terraform']
		},
		{
			category: 'Messaging',
			primary: 'Apache Kafka',
			supporting: ['RabbitMQ', 'Redis Pub/Sub']
		},
		{
			category: 'Monitoring',
			primary: 'Prometheus',
			supporting: ['Grafana', 'Jaeger', 'ELK Stack']
		}
	];

	let securityFeatures = [
		{
			feature: 'OAuth 2.0 / OpenID Connect',
			description: 'Enterprise-grade authentication and authorization'
		},
		{
			feature: 'API Rate Limiting',
			description: 'Protect against abuse and ensure fair usage'
		},
		{
			feature: 'Data Encryption',
			description: 'AES-256 encryption at rest and TLS 1.3 in transit'
		},
		{
			feature: 'GDPR Compliance',
			description: 'Data privacy controls and audit trails'
		},
		{
			feature: 'Role-Based Access Control',
			description: 'Granular permissions for different user types'
		},
		{
			feature: 'Security Monitoring',
			description: 'Real-time threat detection and logging'
		}
	];

	let performanceMetrics = [
		{ metric: 'API Response Time', target: '< 200ms', current: '150ms avg' },
		{ metric: 'Page Load Time', target: '< 2s', current: '1.2s avg' },
		{ metric: 'Message Throughput', target: '10k/min', current: '8.5k/min' },
		{ metric: 'System Uptime', target: '99.9%', current: '99.95%' },
		{ metric: 'Error Rate', target: '< 0.1%', current: '0.05%' },
		{ metric: 'Database Query Time', target: '< 100ms', current: '75ms avg' }
	];

	let deploymentStages = [
		{
			stage: 'Development',
			environment: 'Local Docker',
			description: 'Developer workstations with hot reload'
		},
		{
			stage: 'Testing',
			environment: 'GKE Cluster',
			description: 'Automated testing and integration validation'
		},
		{
			stage: 'Staging',
			environment: 'Production-like GKE',
			description: 'Pre-production testing with real data samples'
		},
		{
			stage: 'Production',
			environment: 'Multi-region GKE',
			description: 'High availability deployment across multiple zones'
		}
	];
</script>

<svelte:head>
	<title>Acme Inc Content Platform - Technical Architecture</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 print:bg-white">
	<!-- Header -->
	<div class="container mx-auto px-4 py-8 print:px-2 print:py-4">
		<div class="text-center mb-12 print:mb-6">
			<div class="flex justify-center mb-6 print:mb-3">
				<Badge variant="secondary" class="text-sm no-print">Technical Architecture</Badge>
			</div>
			<h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">
				Platform Architecture Overview
			</h1>
			<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
				Comprehensive technical design for Acme Inc's unified content and messaging platform,
				supporting 600M+ monthly communications across 26+ global markets
			</p>
		</div>
	</div>

	<div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 print:px-2 print:py-4">
		<!-- System Architecture Overview -->
		<Card class="mb-8 print:mb-4 print-avoid-break">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-2xl">
					🏗️ System Architecture Layers
				</CardTitle>
				<CardDescription>
					Microservices architecture with clear separation of concerns and scalability
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-6">
					{#each systemLayers as layer}
						<div class="rounded-lg border border-gray-200 bg-white p-4">
							<div class="mb-2 flex items-center justify-between">
								<h3 class="text-lg font-semibold text-[#db0011]">{layer.name}</h3>
								<div class="flex gap-2">
									{#each layer.technologies as tech}
										<Badge variant="outline" class="text-xs">{tech}</Badge>
									{/each}
								</div>
							</div>
							<p class="text-sm text-gray-600">{layer.description}</p>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Integration Points -->
		<Card class="mb-8 print:mb-4 print-avoid-break">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-2xl">🔌 System Integration Points</CardTitle>
				<CardDescription>
					API integrations with existing Acme Inc systems and third-party services
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="overflow-x-auto">
					<table class="w-full table-auto">
						<thead>
							<tr class="border-b border-gray-200">
								<th class="py-3 text-left font-semibold">System</th>
								<th class="py-3 text-left font-semibold">Type</th>
								<th class="py-3 text-left font-semibold">API</th>
								<th class="py-3 text-left font-semibold">Frequency</th>
								<th class="py-3 text-left font-semibold">Purpose</th>
							</tr>
						</thead>
						<tbody>
							{#each integrationPoints as integration}
								<tr class="border-b border-gray-100">
									<td class="py-3 font-medium text-[#db0011]">{integration.system}</td>
									<td class="py-3">{integration.type}</td>
									<td class="py-3">
										<Badge variant="outline" class="text-xs">{integration.api}</Badge>
									</td>
									<td class="py-3">{integration.frequency}</td>
									<td class="py-3 text-sm text-gray-600">{integration.purpose}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</CardContent>
		</Card>

		<!-- Technology Stack -->
		<Card class="mb-8 print:mb-4 print-avoid-break">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-2xl">💻 Technology Stack</CardTitle>
				<CardDescription>
					Modern, enterprise-grade technologies chosen for reliability and scalability
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-2 print-grid-2">
					{#each technologyStack as stack}
						<div class="rounded-lg border border-gray-200 bg-white p-4">
							<h3 class="mb-3 text-lg font-semibold text-[#db0011]">{stack.category}</h3>
							<div class="mb-2">
								<Badge class="mb-2 bg-[#db0011] text-white">{stack.primary}</Badge>
							</div>
							<div class="flex flex-wrap gap-1">
								{#each stack.supporting as tech}
									<Badge variant="secondary" class="text-xs">{tech}</Badge>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 print:grid-cols-1 print:gap-4">
			<!-- Security & Compliance -->
			<Card class="print-avoid-break">
				<CardHeader>
					<CardTitle class="flex items-center gap-2 text-xl">🔒 Security & Compliance</CardTitle>
					<CardDescription>Enterprise security measures and regulatory compliance</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each securityFeatures as feature}
							<div class="rounded-lg bg-gray-50 p-3">
								<h4 class="mb-1 font-semibold text-[#db0011]">{feature.feature}</h4>
								<p class="text-sm text-gray-600">{feature.description}</p>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>

			<!-- Performance Metrics -->
			<Card class="print-avoid-break">
				<CardHeader>
					<CardTitle class="flex items-center gap-2 text-xl">📊 Performance Metrics</CardTitle>
					<CardDescription>Key performance indicators and current system health</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each performanceMetrics as metric}
							<div class="flex items-center justify-between rounded-lg bg-gray-50 p-3">
								<div>
									<h4 class="font-semibold text-gray-800">{metric.metric}</h4>
									<p class="text-sm text-gray-600">Target: {metric.target}</p>
								</div>
								<Badge variant="outline" class="text-green-700">{metric.current}</Badge>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Deployment Pipeline -->
		<Card class="mt-8 mb-8 print:mt-4 print:mb-4 print-avoid-break">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-2xl">🚀 Deployment Pipeline</CardTitle>
				<CardDescription>
					Automated CI/CD pipeline ensuring safe and reliable deployments
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 print:grid-cols-2 print-grid-2">
					{#each deploymentStages as stage}
						<div class="rounded-lg border-2 border-gray-200 bg-white p-4 text-center">
							<h3 class="mb-2 text-lg font-semibold text-[#db0011]">{stage.stage}</h3>
							<Badge variant="outline" class="mb-3">{stage.environment}</Badge>
							<p class="text-sm text-gray-600">{stage.description}</p>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Code Examples -->
		<Card class="mb-8 print:mb-4 print-avoid-break">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-2xl">💻 Implementation Examples</CardTitle>
				<CardDescription>Key code patterns and API examples</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div>
					<h3 class="mb-3 text-lg font-semibold text-[#db0011]">Message API Endpoint</h3>
					<div class="rounded-lg bg-gray-900 p-4 text-white">
						<pre class="text-sm"><code
								>{`// POST /api/v1/messages
{
  "campaignId": "cc-launch-2024-q4",
  "audience": {
    "segment": "high-net-worth",
    "market": "hong-kong",
    "size": 12500
  },
  "channels": ["email", "sms", "push"],
  "content": {
    "templateId": "premium-card-intro",
    "personalizations": {
      "customerName": "{{customer.firstName}}",
      "tenure": "{{customer.relationshipYears}}"
    }
  },
  "scheduling": {
    "sendTime": "2024-09-01T09:00:00+08:00",
    "timezone": "Asia/Hong_Kong"
  }
}`}</code
							></pre>
					</div>
				</div>

				<Separator />

				<div>
					<h3 class="mb-3 text-lg font-semibold text-[#db0011]">
						Real-time Content Synchronization
					</h3>
					<div class="rounded-lg bg-gray-900 p-4 text-white">
						<pre class="text-sm"><code
								>{`// WebSocket connection for live content updates
const contentSocket = new WebSocket('wss://api.Acme Inc.com/content/live');

contentSocket.on('template-updated', (event) => {
  const { templateId, version, changes } = event.data;
  
  // Update local cache
  updateTemplateCache(templateId, version);
  
  // Notify affected campaigns
  notifyActiveCampaigns(templateId, changes);
  
  // Log audit trail
  auditLog.record('template-sync', { templateId, version });
});`}</code
							></pre>
					</div>
				</div>

				<Separator />

				<div>
					<h3 class="mb-3 text-lg font-semibold text-[#db0011]">Kafka Message Processing</h3>
					<div class="rounded-lg bg-gray-900 p-4 text-white">
						<pre class="text-sm"><code
								>{`// High-throughput message processing
const kafka = require('kafkajs');

const consumer = kafka.consumer({ groupId: 'message-delivery' });

await consumer.subscribe({ topic: 'campaign-messages' });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const messageData = JSON.parse(message.value.toString());
    
    // Route to appropriate channel
    switch (messageData.channel) {
      case 'email':
        await emailService.send(messageData);
        break;
      case 'sms':
        await smsService.send(messageData);
        break;
      case 'push':
        await pushService.send(messageData);
        break;
    }
    
    // Track delivery metrics
    await metricsService.increment('messages.sent', {
      channel: messageData.channel,
      market: messageData.market
    });
  },
});`}</code
							></pre>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Navigation -->
		<div class="mt-12 space-x-4 text-center no-print">
			<a
				href="/platform"
				class="inline-block rounded-lg bg-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-700"
			>
				← Platform Demo
			</a>
			<a
				href="/"
				class="inline-block rounded-lg bg-[#db0011] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a50000]"
			>
				Back to Overview
			</a>
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

		.text-muted-foreground {
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

		/* Code blocks */
		.bg-gray-900 {
			background: #f5f5f5 !important;
			border: 1px solid #ccc !important;
		}

		.text-white {
			color: black !important;
		}

		/* Remove hover states */
		*:hover {
			transform: none !important;
			box-shadow: none !important;
		}

		/* Button styles */
		button, .btn, [class*="button"] {
			display: none !important;
		}

		/* Links in print */
		a {
			color: black !important;
			text-decoration: none !important;
		}
	}
</style>
