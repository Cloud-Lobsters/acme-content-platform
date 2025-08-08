<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu, Home, BookOpen, Workflow, Monitor, Settings, MessageSquare, Users } from '@lucide/svelte';
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	const navigationItems = [
		{ href: '/', label: 'Home', icon: Home },
		{ href: '/platform', label: 'Platform Demo', icon: Monitor },
		{ href: '/architecture', label: 'Tech Architecture', icon: Settings },
		{ href: '/acronyms', label: 'Acronyms', icon: BookOpen },
		{ href: '/content-flow', label: 'Content Flow', icon: Workflow },
		{ href: '/mini-bio', label: 'Team Bios', icon: Users }
	];

	function isActive(href: string): boolean {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="border-b bg-[#db0011] shadow-lg">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Brand -->
			<div class="flex-shrink-0">
				<Button variant="ghost" class="p-2 text-white hover:bg-white/20" href="/">
					<div class="flex items-center space-x-2">
						<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
							<span class="text-sm font-bold text-red-500">AI</span>
						</div>
						<span class="text-xl font-bold text-white">Acme Inc</span>
					</div>
				</Button>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-2">
					{#each navigationItems as item}
						<Button
							variant="ghost"
							class={isActive(item.href)
								? 'bg-white/20 text-white hover:bg-white/20'
								: 'text-white hover:bg-white/20'}
							href={item.href}
						>
							<svelte:component this={item.icon} class="mr-2 h-4 w-4" />
							{item.label}
						</Button>
					{/each}
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<Button variant="ghost" size="sm" onclick={toggleMobileMenu}>
					<Menu class="h-5 w-5" />
					<span class="sr-only">Open main menu</span>
				</Button>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden">
				<div class="space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
					{#each navigationItems as item}
						<Button
							variant="ghost"
							class="{isActive(item.href)
								? 'bg-white/20 text-white hover:bg-white/20'
								: 'text-white hover:bg-white/20'} w-full justify-start"
							href={item.href}
							onclick={() => (mobileMenuOpen = false)}
						>
							<svelte:component this={item.icon} class="mr-2 h-5 w-5" />
							{item.label}
						</Button>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

<style>
	/* Ensure proper backdrop blur support */
	@supports (backdrop-filter: blur(20px)) {
		.supports-\[backdrop-filter\]\:bg-background\/60 {
			background-color: hsl(var(--background) / 0.6);
		}
	}
	
	/* Hide navigation when printing */
	@media print {
		nav {
			display: none !important;
		}
	}
</style>
