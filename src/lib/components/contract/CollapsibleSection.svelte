<script>
	import { slide } from 'svelte/transition';

	let {
		sectionNumber,
		title,
		isCollapsed = $bindable(false),
		onToggle,
		children
	} = $props();
</script>

<div class="collapsible-wrapper">
	<div class="section-header" onclick={onToggle}>
		<button class="collapse-btn" type="button">
			<span class="arrow" class:collapsed={isCollapsed}>▼</span>
		</button>
		<h1>{sectionNumber}. {title}</h1>
	</div>
	{#if !isCollapsed}
		<div class="section-content" transition:slide={{ duration: 200 }}>
			{@render children()}
		</div>
	{/if}
</div>

<style>
	.collapsible-wrapper {
		margin-bottom: 2rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		padding: 1rem;
		background: #f8f9fa;
		border-radius: 8px;
		margin-bottom: 0.5rem;
		transition: background 0.2s;
	}

	.section-header:hover {
		background: #e9ecef;
	}

	.collapse-btn {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
	}

	.arrow {
		display: inline-block;
		transition: transform 0.2s;
		font-size: 14px;
		color: #0070ad;
	}

	.arrow.collapsed {
		transform: rotate(-90deg);
	}

	.section-header h1 {
		margin: 0;
		font-size: 1.5rem;
		color: #0070ad;
	}

	.section-content {
		padding: 1rem 0;
	}
</style>
