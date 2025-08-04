<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { ArrowLeft, Search, Filter, Grid, List, Download, Eye, Edit, Trash2, Upload, Folder, FileText, Image, Video, FileAudio } from '@lucide/svelte';

	let viewMode = $state('grid');
	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let selectedAssets = $state(new Set<string>());

	let categories = [
		{ id: 'all', name: 'All Assets', count: 1847 },
		{ id: 'templates', name: 'Email Templates', count: 892 },
		{ id: 'images', name: 'Images', count: 634 },
		{ id: 'videos', name: 'Videos', count: 89 },
		{ id: 'documents', name: 'Documents', count: 156 },
		{ id: 'audio', name: 'Audio', count: 76 }
	];

	let assets = [
		{
			id: '1',
			name: 'Premium Credit Card Email Template',
			type: 'email-template',
			category: 'templates',
			size: '45 KB',
			modified: '2024-01-15',
			usage: 234,
			status: 'active',
			thumbnail: '📧'
		},
		{
			id: '2',
			name: 'Acme Inc Logo - Red Variant',
			type: 'image',
			category: 'images',
			size: '2.3 MB',
			modified: '2024-01-10',
			usage: 1247,
			status: 'active',
			thumbnail: '🖼️'
		},
		{
			id: '3',
			name: 'Product Launch Video - Hong Kong',
			type: 'video',
			category: 'videos',
			size: '127 MB',
			modified: '2024-01-08',
			usage: 89,
			status: 'active',
			thumbnail: '🎥'
		},
		{
			id: '4',
			name: 'Terms and Conditions - Credit Cards',
			type: 'document',
			category: 'documents',
			size: '890 KB',
			modified: '2024-01-05',
			usage: 445,
			status: 'active',
			thumbnail: '📄'
		},
		{
			id: '5',
			name: 'SMS Welcome Message Template',
			type: 'sms-template',
			category: 'templates',
			size: '1.2 KB',
			modified: '2024-01-03',
			usage: 1563,
			status: 'active',
			thumbnail: '💬'
		},
		{
			id: '6',
			name: 'Push Notification Sound - Gentle',
			type: 'audio',
			category: 'audio',
			size: '156 KB',
			modified: '2023-12-28',
			usage: 892,
			status: 'active',
			thumbnail: '🔊'
		},
		{
			id: '7',
			name: 'Travel Rewards Banner - Desktop',
			type: 'image',
			category: 'images',
			size: '1.8 MB',
			modified: '2023-12-20',
			usage: 156,
			status: 'active',
			thumbnail: '🖼️'
		},
		{
			id: '8',
			name: 'Onboarding Email Series - Template 1',
			type: 'email-template',
			category: 'templates',
			size: '67 KB',
			modified: '2023-12-15',
			usage: 345,
			status: 'active',
			thumbnail: '📧'
		}
	];

	let filteredAssets = $derived(
		assets.filter(asset => {
			const matchesSearch = searchQuery === '' || 
				asset.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesCategory = selectedCategory === 'all' || 
				asset.category === selectedCategory;
			return matchesSearch && matchesCategory;
		})
	);

	function toggleAssetSelection(assetId: string) {
		if (selectedAssets.has(assetId)) {
			selectedAssets.delete(assetId);
		} else {
			selectedAssets.add(assetId);
		}
		selectedAssets = new Set(selectedAssets);
	}

	function getFileIcon(type: string) {
		switch (type) {
			case 'email-template':
			case 'sms-template':
				return FileText;
			case 'image':
				return Image;
			case 'video':
				return Video;
			case 'audio':
				return FileAudio;
			case 'document':
				return FileText;
			default:
				return FileText;
		}
	}

	function getStatusColor(status: string) {
		switch (status) {
			case 'active':
				return 'bg-green-100 text-green-800';
			case 'draft':
				return 'bg-yellow-100 text-yellow-800';
			case 'archived':
				return 'bg-gray-100 text-gray-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}
</script>

<svelte:head>
	<title>Asset Management - Acme Inc Platform</title>
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
					<h1 class="text-xl font-semibold">Asset Management</h1>
				</div>
				<div class="flex items-center space-x-3">
					<Button variant="ghost" class="text-white hover:bg-white/20">
						<Upload class="h-4 w-4 mr-2" />
						Upload Assets
					</Button>
					<Button variant="ghost" class="text-white hover:bg-white/20">
						<Folder class="h-4 w-4 mr-2" />
						Create Folder
					</Button>
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto px-4 py-8">
		<div class="flex flex-col lg:flex-row gap-8">
			<!-- Sidebar -->
			<div class="lg:w-64 flex-shrink-0">
				<div class="space-y-6">
					<!-- Search -->
					<Card>
						<CardContent class="p-4">
							<div class="relative">
								<Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
								<Input
									bind:value={searchQuery}
									placeholder="Search assets..."
									class="pl-10"
								/>
							</div>
						</CardContent>
					</Card>

					<!-- Categories -->
					<Card>
						<CardHeader>
							<CardTitle class="text-lg">Categories</CardTitle>
						</CardHeader>
						<CardContent class="p-0">
							<div class="space-y-1">
								{#each categories as category}
									<button
										class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors {selectedCategory === category.id ? 'bg-[#db0011]/5 border-r-2 border-r-[#db0011]' : ''}"
										onclick={() => selectedCategory = category.id}
									>
										<span class="text-sm font-medium {selectedCategory === category.id ? 'text-[#db0011]' : ''}">{category.name}</span>
										<Badge variant="secondary" class="text-xs">{category.count}</Badge>
									</button>
								{/each}
							</div>
						</CardContent>
					</Card>

					<!-- Quick Stats -->
					<Card>
						<CardHeader>
							<CardTitle class="text-lg">Storage Stats</CardTitle>
						</CardHeader>
						<CardContent class="space-y-4">
							<div>
								<div class="flex justify-between text-sm mb-1">
									<span>Used Storage</span>
									<span>68%</span>
								</div>
								<div class="w-full bg-gray-200 rounded-full h-2">
									<div class="bg-[#db0011] h-2 rounded-full" style="width: 68%"></div>
								</div>
								<div class="text-xs text-gray-500 mt-1">4.2 GB of 6 GB used</div>
							</div>
							<div class="pt-2 border-t space-y-2">
								<div class="flex justify-between text-sm">
									<span>Total Assets</span>
									<span class="font-semibold">1,847</span>
								</div>
								<div class="flex justify-between text-sm">
									<span>This Month</span>
									<span class="text-green-600 font-semibold">+127</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<!-- Main Content -->
			<div class="flex-1">
				<!-- Controls -->
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center space-x-4">
						<h2 class="text-xl font-semibold">
							{categories.find(c => c.id === selectedCategory)?.name || 'All Assets'}
						</h2>
						<Badge variant="secondary">{filteredAssets.length} items</Badge>
					</div>
					
					<div class="flex items-center space-x-3">
						{#if selectedAssets.size > 0}
							<Badge variant="default" class="bg-[#db0011]">{selectedAssets.size} selected</Badge>
							<Button variant="outline" size="sm">
								<Download class="h-4 w-4 mr-2" />
								Download
							</Button>
							<Button variant="outline" size="sm">
								<Trash2 class="h-4 w-4 mr-2" />
								Delete
							</Button>
						{/if}
						
						<div class="flex border rounded-lg">
							<Button
								variant={viewMode === 'grid' ? 'default' : 'ghost'}
								size="sm"
								class="rounded-r-none {viewMode === 'grid' ? 'bg-[#db0011]' : ''}"
								onclick={() => viewMode = 'grid'}
							>
								<Grid class="h-4 w-4" />
							</Button>
							<Button
								variant={viewMode === 'list' ? 'default' : 'ghost'}
								size="sm"
								class="rounded-l-none {viewMode === 'list' ? 'bg-[#db0011]' : ''}"
								onclick={() => viewMode = 'list'}
							>
								<List class="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>

				<!-- Assets Grid/List -->
				{#if viewMode === 'grid'}
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{#each filteredAssets as asset}
							<Card class="group hover:shadow-lg transition-all cursor-pointer {selectedAssets.has(asset.id) ? 'ring-2 ring-[#db0011]' : ''}">
								<CardContent class="p-4">
									<!-- Asset Thumbnail -->
									<div class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4 relative">
										<span class="text-4xl">{asset.thumbnail}</span>
										<button
											class="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity"
											onclick={() => toggleAssetSelection(asset.id)}
										>
											<div class="h-5 w-5 rounded border-2 bg-white {selectedAssets.has(asset.id) ? 'bg-[#db0011] border-[#db0011]' : 'border-gray-300'}">
												{#if selectedAssets.has(asset.id)}
													<div class="text-white text-xs flex items-center justify-center h-full">✓</div>
												{/if}
											</div>
										</button>
										
										<!-- Quick Actions -->
										<div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
											<Button variant="ghost" size="sm" class="h-8 w-8 p-0 bg-white/90 hover:bg-white">
												<Eye class="h-4 w-4" />  
											</Button>
											<Button variant="ghost" size="sm" class="h-8 w-8 p-0 bg-white/90 hover:bg-white">
												<Download class="h-4 w-4" />
											</Button>
										</div>
									</div>

									<!-- Asset Info -->
									<div class="space-y-2">
										<h3 class="font-medium text-sm truncate" title={asset.name}>{asset.name}</h3>
										<div class="flex items-center justify-between text-xs text-gray-500">
											<span>{asset.size}</span>
											<Badge class="text-xs {getStatusColor(asset.status)}">{asset.status}</Badge>
										</div>
										<div class="flex items-center justify-between text-xs text-gray-500">
											<span>Used {asset.usage}x</span>
											<span>{asset.modified}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						{/each}
					</div>
				{:else}
					<!-- List View -->
					<Card>
						<div class="overflow-x-auto">
							<table class="w-full">
								<thead class="border-b">
									<tr class="text-left">
										<th class="p-4 w-8">
											<input type="checkbox" class="rounded border-gray-300" />
										</th>
										<th class="p-4 text-sm font-medium">Name</th>
										<th class="p-4 text-sm font-medium">Type</th>
										<th class="p-4 text-sm font-medium">Size</th>
										<th class="p-4 text-sm font-medium">Usage</th>
										<th class="p-4 text-sm font-medium">Modified</th>
										<th class="p-4 text-sm font-medium">Status</th>
										<th class="p-4 text-sm font-medium">Actions</th>
									</tr>
								</thead>
								<tbody>
									{#each filteredAssets as asset}
										<tr class="border-b hover:bg-gray-50 transition-colors">
											<td class="p-4">
												<input
													type="checkbox"
													class="rounded border-gray-300"
													checked={selectedAssets.has(asset.id)}
													onchange={() => toggleAssetSelection(asset.id)}
												/>
											</td>
											<td class="p-4">
												<div class="flex items-center space-x-3">
													<div class="h-8 w-8 bg-gray-100 rounded flex items-center justify-center text-sm">
														{asset.thumbnail}
													</div>
													<span class="font-medium text-sm">{asset.name}</span>
												</div>
											</td>
											<td class="p-4">
												<div class="flex items-center space-x-2">
													<svelte:component this={getFileIcon(asset.type)} class="h-4 w-4 text-gray-400" />
													<span class="text-sm capitalize">{asset.type.replace('-', ' ')}</span>
												</div>
											</td>
											<td class="p-4 text-sm text-gray-600">{asset.size}</td>
											<td class="p-4 text-sm text-gray-600">{asset.usage}x</td>
											<td class="p-4 text-sm text-gray-600">{asset.modified}</td>
											<td class="p-4">
												<Badge class="text-xs {getStatusColor(asset.status)}">{asset.status}</Badge>
											</td>
											<td class="p-4">
												<div class="flex items-center space-x-2">
													<Button variant="ghost" size="sm" class="h-8 w-8 p-0">
														<Eye class="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="sm" class="h-8 w-8 p-0">
														<Edit class="h-4 w-4" />
													</Button>
													<Button variant="ghost" size="sm" class="h-8 w-8 p-0">
														<Download class="h-4 w-4" />
													</Button>
												</div>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</Card>
				{/if}

				<!-- Upload Area -->
				<Card class="mt-8 border-2 border-dashed border-gray-300 hover:border-[#db0011] transition-colors">
					<CardContent class="p-8">
						<div class="text-center">
							<Upload class="h-12 w-12 text-gray-400 mx-auto mb-4" />
							<h3 class="text-lg font-medium mb-2">Upload New Assets</h3>
							<p class="text-gray-600 mb-4">Drag and drop files here, or click to browse</p>
							<Button class="bg-[#db0011] hover:bg-[#db0011]/90">
								<Upload class="h-4 w-4 mr-2" />
								Choose Files
							</Button>
							<div class="text-xs text-gray-500 mt-2">
								Supported formats: JPG, PNG, PDF, MP4, MP3, DOC, DOCX
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</div>