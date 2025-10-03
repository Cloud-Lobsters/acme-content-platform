<script>
	import { slide } from 'svelte/transition';

	let { id = '', sectionNumber, title, isCollapsed = false, onToggle, children } = $props();
</script>

<div class="section" {id}>
	<div class="section-header" onclick={onToggle}>
		<button class="collapse-btn" type="button" aria-label="Toggle section">
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
	.section {
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
		flex-shrink: 0;
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
		font-weight: 600;
	}

	.section-content {
		padding: 0;
	}
</style>
