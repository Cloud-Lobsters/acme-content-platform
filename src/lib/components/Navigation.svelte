<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import {
		NavigationMenuRoot,
		NavigationMenuList,
		NavigationMenuItem,
		NavigationMenuTrigger,
		NavigationMenuContent,
		NavigationMenuLink,
		NavigationMenuViewport
	} from '$lib/components/ui/navigation-menu/index.js';
	import {
		Menu,
		Home,
		BookOpen,
		Workflow,
		Monitor,
		Settings,
		MessageSquare,
		Users,
		ChevronDown,
		Shield
	} from '@lucide/svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';

	let mobileMenuOpen = $state(false);

	const navigationItems = [
		{ href: '/', label: 'Home', icon: Home },
		{ href: '/platform', label: 'Platform Demo', icon: Monitor },
		{ href: '/architecture', label: 'Tech Architecture', icon: Settings },
		{ href: '/content-flow', label: 'Content Flow', icon: Workflow }
	];

	const peopleMenuItems = [
		{ href: '/people', label: 'People & Organization' },
		{ href: '/org-chart', label: 'Org Chart' },
		{ href: '/mini-bio', label: 'Team Bios' }
	];

	const adminMenuItems = [
		{ href: '/admin/sow', label: 'Statement of Work' },
		{ href: '/admin/cap-sow', label: 'CAP SoW' },
		{ href: '/admin/csi-global', label: 'CSI Global Limited' },
		{ href: '/admin/summary', label: 'Executive Summary' },
		{ href: '/admin/internship', label: 'Internship' },
		{ href: '/admin/provider-form', label: 'Provider Form' },
		{ href: '/acronyms', label: 'Acronyms' }
	];

	function isActive(href: string): boolean {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}

	function isPeopleMenuActive(): boolean {
		return peopleMenuItems.some((item) => $page.url.pathname.startsWith(item.href));
	}

	function isAdminMenuActive(): boolean {
		return adminMenuItems.some((item) => $page.url.pathname.startsWith(item.href));
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
				<NavigationMenuRoot class="ml-10" viewport={false}>
					<NavigationMenuList class="flex items-baseline space-x-2">
						{#each navigationItems as item}
							<NavigationMenuItem>
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
							</NavigationMenuItem>
						{/each}

						<!-- People Menu with Submenu -->
						<NavigationMenuItem>
							<NavigationMenuTrigger
								class={cn(
									'!bg-transparent hover:!bg-white/20 data-[state=open]:!bg-white/20 !text-white focus:!bg-white/20',
									isPeopleMenuActive() && '!bg-white/20'
								)}
							>
								<Users class="mr-2 h-4 w-4" />
								People
							</NavigationMenuTrigger>
							<NavigationMenuContent
								class="left-0 top-0 w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52"
							>
								<div class="min-w-[200px] rounded-md border border-gray-300 bg-white p-2 shadow-lg">
									<div class="space-y-1">
										{#each peopleMenuItems as item}
											<a
												href={item.href}
												class={cn(
													'block rounded-md px-3 py-2 text-sm no-underline transition-colors',
													isActive(item.href)
														? 'bg-red-500 font-semibold text-white'
														: 'font-medium text-black hover:bg-gray-100 hover:text-black'
												)}
												style="color: {isActive(item.href) ? 'white' : 'black'} !important;"
											>
												{item.label}
											</a>
										{/each}
									</div>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>

						<!-- Admin Menu with Submenu -->
						<NavigationMenuItem>
							<NavigationMenuTrigger
								class={cn(
									'!bg-transparent hover:!bg-white/20 data-[state=open]:!bg-white/20 !text-white focus:!bg-white/20',
									isAdminMenuActive() && '!bg-white/20'
								)}
							>
								<Shield class="mr-2 h-4 w-4" />
								Admin
							</NavigationMenuTrigger>
							<NavigationMenuContent
								class="left-0 top-0 w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52"
							>
								<div class="min-w-[200px] rounded-md border border-gray-300 bg-white p-2 shadow-lg">
									<div class="space-y-1">
										{#each adminMenuItems as item}
											<a
												href={item.href}
												class={cn(
													'block rounded-md px-3 py-2 text-sm no-underline transition-colors',
													isActive(item.href)
														? 'bg-red-500 font-semibold text-white'
														: 'font-medium text-black hover:bg-gray-100 hover:text-black'
												)}
												style="color: {isActive(item.href) ? 'white' : 'black'} !important;"
											>
												{item.label}
											</a>
										{/each}
									</div>
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenuRoot>
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

					<!-- People Menu Items in Mobile -->
					<div class="ml-4 space-y-1 border-l border-white/20 pl-4">
						<div class="mb-2 text-xs font-semibold tracking-wide text-white/70 uppercase">
							People
						</div>
						{#each peopleMenuItems as item}
							<Button
								variant="ghost"
								class="{isActive(item.href)
									? 'bg-white/20 text-white hover:bg-white/20'
									: 'text-white hover:bg-white/20'} w-full justify-start text-sm"
								href={item.href}
								onclick={() => (mobileMenuOpen = false)}
							>
								{item.label}
							</Button>
						{/each}
					</div>

					<!-- Admin Menu Items in Mobile -->
					<div class="ml-4 space-y-1 border-l border-white/20 pl-4">
						<div class="mb-2 text-xs font-semibold tracking-wide text-white/70 uppercase">
							Admin
						</div>
						{#each adminMenuItems as item}
							<Button
								variant="ghost"
								class="{isActive(item.href)
									? 'bg-white/20 text-white hover:bg-white/20'
									: 'text-white hover:bg-white/20'} w-full justify-start text-sm"
								href={item.href}
								onclick={() => (mobileMenuOpen = false)}
							>
								{item.label}
							</Button>
						{/each}
					</div>
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
