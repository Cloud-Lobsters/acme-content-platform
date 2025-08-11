<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	// Organizational data based on the hierarchy analysis
	const seniorLeadership = [
		{
			name: 'Venkat VAJPEY',
			role: 'Senior Manager/Director',
			department: 'Digital Marketing/Campaign Management',
			authority: 'Primary decision maker on AEM & MDP automation project',
			type: 'leadership'
		},
		{
			name: 'Dan Avidan',
			role: 'Senior Manager/Technical Lead',
			department: 'US Operations',
			email: 'dan.avidan@us.hsbc.com',
			authority: 'Key stakeholder with vendor engagement oversight',
			type: 'leadership'
		}
	];

	const projectLeadership = [
		{
			name: 'Tracey1 BAILEY',
			role: 'Project Coordinator/Manager',
			department: 'Digital Marketing/Campaign Management',
			authority: 'Project coordination and administrative support',
			reportsTo: 'Venkat VAJPEY',
			type: 'project'
		},
		{
			name: 'Lambert J Z YAN',
			role: 'Project Manager/Technical Lead',
			department: 'Hong Kong Operations',
			email: 'lambert.j.z.yan@hsbc.com.hk',
			authority: 'Direct project coordination, vendor discussions',
			reportsTo: 'Venkat VAJPEY',
			type: 'project'
		},
		{
			name: 'Alex W L CHEN',
			role: 'Technical Manager',
			department: 'Hong Kong Operations',
			email: 'alex.w.l.chen@hsbc.com.hk',
			authority: 'Technical oversight and vendor engagement',
			type: 'project'
		}
	];

	const technicalLeads = [
		{
			name: 'Tomasz BAZANT',
			role: 'Technical Lead/Architect',
			department: 'European Operations',
			email: 'tomasz.bazant@hsbc.com',
			authority: 'Technical solution design and implementation',
			type: 'technical'
		},
		{
			name: 'Grzegorz MAZIARZ',
			role: 'Technical Lead',
			department: 'European Operations',
			email: 'grzegorz.maziarz@hsbc.com',
			authority: 'Technical guidance and problem resolution',
			type: 'technical'
		},
		{
			name: 'Jiri PALACKY',
			role: 'Technical Lead',
			department: 'European Operations',
			email: 'jiri.palacky@hsbc.com',
			authority: 'Technical implementation and support',
			type: 'technical'
		}
	];

	const asiaPacificTeam = [
		{ name: 'Paul Y K TONG', email: 'paul.y.k.tong@hsbc.com.hk', region: 'Hong Kong' },
		{ name: 'Phoenix H Y LI', email: 'phoenix.h.y.li@hsbc.com.hk', region: 'Hong Kong' },
		{ name: 'Wendy Y CHEN', email: 'wendy.y.chen@hsbc.com.hk', region: 'Hong Kong' },
		{ name: 'Arthur K S TSANG', email: 'arthur.k.s.tsang@hsbc.com.hk', region: 'Hong Kong' },
		{ name: 'Natalie DestJohn-Pryce', email: 'natalie.destjohn-pryce@hsbc.com.hk', region: 'Hong Kong' },
		{ name: 'Audrey HO', email: 'audrey.ho@hsbc.com.my', region: 'Malaysia' },
		{ name: 'Tanielle GREEN', email: 'tanielle.green@hsbc.com.sg', region: 'Singapore' },
		{ name: 'Mark HEDGES', email: 'mark.hedges@hsbc.com.sg', region: 'Singapore' }
	];

	const europeanTeam = [
		{ name: 'Marcin DREWNOWSKI', email: 'marcin.drewnowski@hsbc.com' },
		{ name: 'Pawel WARECIAK', email: 'pawel.wareciak@hsbc.com' },
		{ name: 'Robert RODAKOWSKI', email: 'robert.rodakowski@hsbc.com' },
		{ name: 'Maciej M KUREK', email: 'maciej.m.kurek@hsbc.com' }
	];

	const implementationTeam = [
		{
			name: 'Kosizin VISWANATHAN',
			email: 'kosizin.viswanathan@hsbc.com',
			role: 'Technical Coordinator/Communications Lead',
			function: 'Cross-team coordination and status updates'
		},
		{ name: 'Jimmy Jia Ming HE', email: 'jimmyjiaminghe@hsbc.com' },
		{ name: 'Seema KUKADIA', email: 'seema.kukadia@hsbc.com' },
		{ name: 'Brian HUI', email: 'brian.hui@hsbc.com' }
	];

	function getBadgeVariant(type: string) {
		switch (type) {
			case 'leadership':
				return 'destructive';
			case 'project':
				return 'default';
			case 'technical':
				return 'secondary';
			default:
				return 'outline';
		}
	}
</script>

<svelte:head>
	<title>HSBC People & Organization - AEM & MDP Project</title>
</svelte:head>

<div class="container mx-auto py-6 space-y-8">
	<div class="text-center space-y-2">
		<h1 class="text-3xl font-bold tracking-tight">HSBC Organization</h1>
		<p class="text-muted-foreground">AEM & MDP Messages Automation Project Team</p>
	</div>

	<!-- Senior Leadership -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<span>Senior Leadership</span>
				<Badge variant="destructive">Decision Makers</Badge>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#each seniorLeadership as person}
				<div class="border rounded-lg p-4 space-y-2">
					<div class="flex items-start justify-between">
						<div>
							<h3 class="font-semibold text-lg">{person.name}</h3>
							<p class="text-sm text-muted-foreground">{person.role}</p>
						</div>
						<Badge variant={getBadgeVariant(person.type)}>{person.department}</Badge>
					</div>
					{#if person.email}
						<p class="text-sm font-mono text-blue-600">{person.email}</p>
					{/if}
					<p class="text-sm">{person.authority}</p>
				</div>
			{/each}
		</CardContent>
	</Card>

	<!-- Project Leadership -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<span>Project Leadership</span>
				<Badge variant="default">Project Coordination</Badge>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#each projectLeadership as person}
				<div class="border rounded-lg p-4 space-y-2">
					<div class="flex items-start justify-between">
						<div>
							<h3 class="font-semibold text-lg">{person.name}</h3>
							<p class="text-sm text-muted-foreground">{person.role}</p>
						</div>
						<Badge variant={getBadgeVariant(person.type)}>{person.department}</Badge>
					</div>
					{#if person.email}
						<p class="text-sm font-mono text-blue-600">{person.email}</p>
					{/if}
					<p class="text-sm">{person.authority}</p>
					{#if person.reportsTo}
						<p class="text-sm text-muted-foreground">Reports to: {person.reportsTo}</p>
					{/if}
				</div>
			{/each}
		</CardContent>
	</Card>

	<!-- Technical Leads -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<span>Technical Team Leads</span>
				<Badge variant="secondary">Architecture & Implementation</Badge>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			{#each technicalLeads as person}
				<div class="border rounded-lg p-4 space-y-2">
					<div class="flex items-start justify-between">
						<div>
							<h3 class="font-semibold text-lg">{person.name}</h3>
							<p class="text-sm text-muted-foreground">{person.role}</p>
						</div>
						<Badge variant={getBadgeVariant(person.type)}>{person.department}</Badge>
					</div>
					<p class="text-sm font-mono text-blue-600">{person.email}</p>
					<p class="text-sm">{person.authority}</p>
				</div>
			{/each}
		</CardContent>
	</Card>

	<!-- Regional Teams -->
	<div class="grid md:grid-cols-2 gap-6">
		<!-- Asia-Pacific Team -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<span>Asia-Pacific Team</span>
					<Badge variant="outline">Regional Operations</Badge>
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-3">
				{#each asiaPacificTeam as person}
					<div class="flex items-center justify-between p-2 border rounded">
						<div>
							<p class="font-medium">{person.name}</p>
							<p class="text-xs font-mono text-blue-600">{person.email}</p>
						</div>
						<Badge variant="outline" class="text-xs">{person.region}</Badge>
					</div>
				{/each}
			</CardContent>
		</Card>

		<!-- European Team -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<span>European Team</span>
					<Badge variant="outline">Regional Operations</Badge>
				</CardTitle>
			</CardHeader>
			<CardContent class="space-y-3">
				{#each europeanTeam as person}
					<div class="flex items-center justify-between p-2 border rounded">
						<div>
							<p class="font-medium">{person.name}</p>
							<p class="text-xs font-mono text-blue-600">{person.email}</p>
						</div>
						<Badge variant="outline" class="text-xs">Europe</Badge>
					</div>
				{/each}
			</CardContent>
		</Card>
	</div>

	<!-- Implementation Team -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<span>Implementation & Support Team</span>
				<Badge variant="outline">Cross-functional Support</Badge>
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-3">
			{#each implementationTeam as person}
				<div class="border rounded-lg p-3 space-y-1">
					<div class="flex items-start justify-between">
						<h4 class="font-medium">{person.name}</h4>
						{#if person.role}
							<Badge variant="outline" class="text-xs">{person.role}</Badge>
						{/if}
					</div>
					<p class="text-xs font-mono text-blue-600">{person.email}</p>
					{#if person.function}
						<p class="text-sm text-muted-foreground">{person.function}</p>
					{/if}
				</div>
			{/each}
		</CardContent>
	</Card>

	<!-- Project Information -->
	<Card>
		<CardHeader>
			<CardTitle>Project: AEM & MDP Messages Automation</CardTitle>
		</CardHeader>
		<CardContent class="space-y-2">
			<div class="grid md:grid-cols-3 gap-4 text-sm">
				<div>
					<h4 class="font-medium">Objective</h4>
					<p class="text-muted-foreground">Campaign automation and hyper-personalization</p>
				</div>
				<div>
					<h4 class="font-medium">Scope</h4>
					<p class="text-muted-foreground">Multi-regional team spanning US, Europe, Asia-Pacific</p>
				</div>
				<div>
					<h4 class="font-medium">Technical Focus</h4>
					<p class="text-muted-foreground">Adobe Experience Manager (AEM) and Message Delivery Platform (MDP) integration</p>
				</div>
			</div>
		</CardContent>
	</Card>
</div>