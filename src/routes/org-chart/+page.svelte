<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { onMount } from 'svelte';
	import { ZoomIn, ZoomOut, RotateCcw } from '@lucide/svelte';

	let mermaidContainer: HTMLElement;
	let svgElement: SVGElement | null = null;
	let scale = 1.5; // Start with 150% zoom
	let translateX = 0;
	let translateY = 0;
	let isDragging = false;
	let dragStart = { x: 0, y: 0 };

	const mermaidCode = `flowchart LR
    %% Senior Leadership (Decision Makers)
    VV["Venkat VAJPEY<br/>Senior Manager/Director<br/>Digital Marketing/Campaign Management"] 
    DA["Dan Avidan<br/>Senior Manager/Technical Lead<br/>US Operations"]
    FC["Fernando H COSTA<br/>Chief of Staff<br/>WPB Tech Digital Platforms"]
    
    %% Project Leadership Level
    TB["Tracey BAILEY<br/>Project Coordinator/Manager"]
    LY["Lambert J Z YAN<br/>Project Manager/Technical Lead<br/>Hong Kong Operations"]
    AC["Alex W L CHEN<br/>Technical Manager<br/>Hong Kong Operations"]
    
    %% Technical Team Leads Level
    TBA["Tomasz BAZANT<br/>Technical Lead/Architect<br/>European Operations"]
    GM["Grzegorz MAZIARZ<br/>Technical Lead<br/>European Operations"]
    JP["Jiri PALACKY<br/>Technical Lead<br/>European Operations"]
    
    %% Implementation Team Level
    KV["Kosizin VISWANATHAN<br/>Technical Coordinator<br/>Communications Lead"]
    JH["Jimmy Jia Ming HE"]
    SK["Seema KUKADIA"]
    BH["Brian HUI"]
    
    %% Asia-Pacific Team (First Row)
    PT["Paul Y K TONG<br/>Hong Kong"]
    PL["Phoenix H Y LI<br/>Hong Kong"]
    WC["Wendy Y CHEN<br/>Hong Kong"]
    AT["Arthur K S TSANG<br/>Hong Kong"]
    
    %% Asia-Pacific Team (Second Row)
    ND["Natalie DestJohn-Pryce<br/>Hong Kong"]
    AH["Audrey HO<br/>Malaysia"]
    TG["Tanielle GREEN<br/>Singapore"]
    MH["Mark HEDGES<br/>Singapore"]
    
    %% European Team
    MD["Marcin DREWNOWSKI<br/>Europe"]
    PW["Pawel WARECIAK<br/>Europe"]
    RR["Robert RODAKOWSKI<br/>Europe"]
    MK["Maciej M KUREK<br/>Europe"]
    
    %% Supporting Roles
    AD["Alex J DE VINE<br/>Support"]
    MK2["Manish KUMAR<br/>Support"]
    GW["Grzegorz WENC<br/>Support"]
    YCS["Yagnam CHANDRA SHEKAR<br/>India Operations"]
    SDS["Sunil DS<br/>India Operations"]
    
    %% Primary Reporting Structure (Vertical Flow)
    VV --> TB
    VV --> LY  
    VV --> AC
    VV --> TBA
    VV --> GM
    VV --> JP
    
    %% Advisory Connection
    DA -.-> VV
    FC -.-> VV
    
    %% Project Leadership to Implementation
    TB --> KV
    
    %% Implementation Team Coordination
    KV --> JH
    KV --> SK
    KV --> BH
    
    %% Regional Team Management
    LY --> PT
    LY --> PL
    AC --> WC
    AC --> AT
    LY --> ND
    AC --> AH
    LY --> TG
    AC --> MH
    
    %% European Team Management
    TBA --> MD
    GM --> PW
    JP --> RR
    TBA --> MK
    
    %% Supporting Roles
    VV -.-> AD
    VV -.-> MK2
    VV -.-> GW
    FC -.-> YCS
    FC -.-> SDS
    
    %% Styling
    classDef seniorLeader fill:#e1f5fe,stroke:#0277bd,stroke-width:3px,color:#000
    classDef projectLead fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px,color:#000
    classDef techLead fill:#e8f5e8,stroke:#388e3c,stroke-width:2px,color:#000
    classDef implTeam fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef regional fill:#fce4ec,stroke:#c2185b,stroke-width:1px,color:#000
    classDef supporting fill:#f1f8e9,stroke:#689f38,stroke-width:1px,color:#000
    
    class VV,DA,FC seniorLeader
    class TB,LY,AC projectLead
    class TBA,GM,JP techLead
    class KV,JH,SK,BH implTeam
    class PT,PL,WC,AT,ND,AH,TG,MH,MD,PW,RR,MK regional
    class AD,MK2,GW,YCS,SDS supporting`;

	const legendItems = [
		{ color: '#e1f5fe', border: '#0277bd', label: 'Senior Leadership', description: 'Decision makers and strategic oversight' },
		{ color: '#f3e5f5', border: '#7b1fa2', label: 'Project Leadership', description: 'Direct project coordination and management' },
		{ color: '#e8f5e8', border: '#388e3c', label: 'Technical Leads', description: 'Technical architecture and implementation oversight' },
		{ color: '#fff3e0', border: '#f57c00', label: 'Implementation Team', description: 'Technical coordination and communications' },
		{ color: '#fce4ec', border: '#c2185b', label: 'Regional Teams', description: 'Asia-Pacific and European operational teams' },
		{ color: '#f1f8e9', border: '#689f38', label: 'Supporting Roles', description: 'Additional project support personnel' }
	];

	function updateTransform() {
		if (svgElement) {
			svgElement.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
		}
	}

	function zoomIn() {
		scale = Math.min(scale * 1.2, 3);
		updateTransform();
	}

	function zoomOut() {
		scale = Math.max(scale / 1.2, 0.1);
		updateTransform();
	}

	function resetView() {
		scale = 1.5; // Reset to 150% zoom
		translateX = 0;
		translateY = 0;
		updateTransform();
	}

	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		dragStart = { x: event.clientX - translateX, y: event.clientY - translateY };
	}

	function handleMouseMove(event: MouseEvent) {
		if (isDragging) {
			translateX = event.clientX - dragStart.x;
			translateY = event.clientY - dragStart.y;
			updateTransform();
		}
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleWheel(event: WheelEvent) {
		event.preventDefault();
		if (event.deltaY < 0) {
			zoomIn();
		} else {
			zoomOut();
		}
	}

	onMount(async () => {
		try {
			const { default: mermaid } = await import('mermaid');
			
			mermaid.initialize({ 
				startOnLoad: false,
				theme: 'default',
				flowchart: {
					useMaxWidth: false,
					htmlLabels: true
				}
			});

			if (mermaidContainer) {
				const { svg } = await mermaid.render('orgchart', mermaidCode);
				mermaidContainer.innerHTML = svg;
				svgElement = mermaidContainer.querySelector('svg');
				
				if (svgElement) {
					// Set initial size and make it draggable
					svgElement.style.cursor = 'grab';
					svgElement.style.transformOrigin = 'center center';
					svgElement.style.transition = 'transform 0.1s ease-out';
					svgElement.style.userSelect = 'none'; // Disable text selection
					svgElement.style.webkitUserSelect = 'none'; // Safari
					svgElement.style.mozUserSelect = 'none'; // Firefox
					svgElement.style.msUserSelect = 'none'; // IE/Edge
					
					// Set initial transform to default zoom level
					updateTransform();
					
					// Add event listeners for pan and zoom
					mermaidContainer.addEventListener('mousedown', handleMouseDown);
					window.addEventListener('mousemove', handleMouseMove);
					window.addEventListener('mouseup', handleMouseUp);
					mermaidContainer.addEventListener('wheel', handleWheel, { passive: false });
					
					// Prevent context menu on right click
					mermaidContainer.addEventListener('contextmenu', (e) => e.preventDefault());
					
					// Prevent text selection on the container
					mermaidContainer.style.userSelect = 'none';
					mermaidContainer.style.webkitUserSelect = 'none';
					mermaidContainer.style.mozUserSelect = 'none';
					mermaidContainer.style.msUserSelect = 'none';
				}
			}
		} catch (error) {
			console.error('Failed to load Mermaid:', error);
			// Fallback to showing the raw mermaid code
			if (mermaidContainer) {
				mermaidContainer.innerHTML = `<pre class="bg-gray-50 p-4 rounded-lg text-sm overflow-auto"><code>${mermaidCode}</code></pre>`;
			}
		}

		// Cleanup event listeners on destroy
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	});
</script>

<svelte:head>
	<title>HSBC Organizational Chart - AEM & MDP Project</title>
</svelte:head>

<div class="container mx-auto py-6 space-y-8">
	<div class="text-center space-y-2">
		<h1 class="text-3xl font-bold tracking-tight">HSBC Organizational Chart</h1>
		<p class="text-muted-foreground">AEM & MDP Messages Automation Project Team Structure</p>
	</div>

	<!-- Organizational Chart -->
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center justify-between">
				<div class="flex items-center gap-2">
					<span>Team Hierarchy & Reporting Structure</span>
					<Badge variant="outline">Interactive Chart</Badge>
				</div>
				<div class="flex items-center gap-2 zoom-controls">
					<Button variant="outline" size="sm" onclick={zoomOut}>
						<ZoomOut class="h-4 w-4" />
					</Button>
					<Button variant="outline" size="sm" onclick={resetView}>
						<RotateCcw class="h-4 w-4" />
					</Button>
					<Button variant="outline" size="sm" onclick={zoomIn}>
						<ZoomIn class="h-4 w-4" />
					</Button>
					<div class="text-sm text-muted-foreground ml-2">
						{Math.round(scale * 100)}%
					</div>
				</div>
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="relative">
				<div class="absolute top-2 left-2 z-10 bg-white/80 backdrop-blur-sm rounded-lg p-2 text-xs text-muted-foreground chart-instructions">
					<div>🖱️ Drag to pan</div>
					<div>🔍 Scroll to zoom</div>
				</div>
				<div 
					class="w-full h-[1200px] border rounded-lg overflow-hidden bg-gray-50 relative"
					style="cursor: {isDragging ? 'grabbing' : 'grab'}"
				>
					<div bind:this={mermaidContainer} class="w-full h-full flex items-center justify-center">
						<!-- Mermaid diagram will be rendered here -->
					</div>
				</div>
			</div>
		</CardContent>
	</Card>

	<!-- Legend -->
	<Card>
		<CardHeader>
			<CardTitle>Legend</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#each legendItems as item}
					<div class="flex items-center gap-3">
						<div 
							class="w-6 h-6 rounded border-2 flex-shrink-0" 
							style="background-color: {item.color}; border-color: {item.border};"
						></div>
						<div>
							<div class="font-medium text-sm">{item.label}</div>
							<div class="text-xs text-muted-foreground">{item.description}</div>
						</div>
					</div>
				{/each}
			</div>
		</CardContent>
	</Card>

	<!-- Key Relationships -->
	<Card>
		<CardHeader>
			<CardTitle>Key Organizational Relationships</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			<div class="grid md:grid-cols-2 gap-6">
				<div>
					<h4 class="font-semibold text-sm mb-2">Direct Reporting Structure</h4>
					<ul class="text-sm space-y-1 text-muted-foreground">
						<li>• Tracey BAILEY → Venkat VAJPEY (Project Coordination)</li>
						<li>• Lambert YAN → Venkat VAJPEY (Hong Kong Operations)</li>
						<li>• Alex CHEN → Venkat VAJPEY (Technical Management)</li>
						<li>• Technical Leads → Venkat VAJPEY (European Operations)</li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold text-sm mb-2">Matrix Organization</h4>
					<ul class="text-sm space-y-1 text-muted-foreground">
						<li>• Asia-Pacific Team → Lambert YAN & Alex CHEN</li>
						<li>• European Team → Technical Leads (Tomasz, Grzegorz, Jiri)</li>
						<li>• Implementation Team → Kosizin VISWANATHAN</li>
						<li>• Dan Avidan provides senior advisory support</li>
					</ul>
				</div>
			</div>
		</CardContent>
	</Card>

	<!-- Project Context -->
	<Card>
		<CardHeader>
			<CardTitle>Project: AEM & MDP Messages Automation</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="grid md:grid-cols-3 gap-4 text-sm">
				<div>
					<h4 class="font-medium">Objective</h4>
					<p class="text-muted-foreground">Campaign automation and hyper-personalization across HSBC's digital marketing platforms</p>
				</div>
				<div>
					<h4 class="font-medium">Geographic Scope</h4>
					<p class="text-muted-foreground">Multi-regional implementation spanning US, Europe, and Asia-Pacific operations</p>
				</div>
				<div>
					<h4 class="font-medium">Technical Focus</h4>
					<p class="text-muted-foreground">Adobe Experience Manager (AEM) and Message Delivery Platform (MDP) integration</p>
				</div>
			</div>
		</CardContent>
	</Card>
</div>

<style>
	/* Interactive mermaid chart container */
	:global(.mermaid) {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	
	:global(.mermaid svg) {
		max-width: none !important;
		max-height: none !important;
		width: auto !important;
		height: auto !important;
		user-select: none !important;
		-webkit-user-select: none !important;
		-moz-user-select: none !important;
		-ms-user-select: none !important;
	}
	
	/* Disable text selection on all chart elements */
	:global(.mermaid svg *) {
		user-select: none !important;
		-webkit-user-select: none !important;
		-moz-user-select: none !important;
		-ms-user-select: none !important;
	}
	
	/* Ensure dragging works properly */
	:global(.mermaid svg:active) {
		cursor: grabbing !important;
	}
	
	/* Print styles */
	@media print {
		.container {
			max-width: none;
		}
		
		/* Reset transforms for print */
		:global(.mermaid svg) {
			transform: none !important;
			max-width: 100% !important;
			page-break-inside: avoid;
		}
		
		/* Hide zoom controls when printing */
		.zoom-controls {
			display: none !important;
		}
		
		/* Hide instructions when printing */
		.chart-instructions {
			display: none !important;
		}
	}
	
	/* Smooth transitions for zoom */
	:global(.mermaid svg) {
		transition: transform 0.1s ease-out;
	}
</style>