<script lang="ts">
	interface Amendment {
		text: string;
		clauseRef?: string;
	}

	interface Props {
		title: string;
		reference: string;
		summary: string;
		risks: string[];
		amendments: Amendment[];
	}

	let { title, reference, summary, risks, amendments }: Props = $props();
	let expanded = $state(false);

	function scrollToClause(clauseRef: string | undefined) {
		if (!clauseRef) return;
		const element = document.getElementById(clauseRef);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'center' });
			element.style.backgroundColor = '#fffacd';
			setTimeout(() => {
				element.style.backgroundColor = '';
			}, 2000);
		}
	}
</script>

<div class="explainer-wrapper">
	<button class="explainer-toggle" onclick={() => (expanded = !expanded)}>
		<span class="icon">{expanded ? '📖' : '💡'}</span>
		<span class="toggle-text">{expanded ? 'Hide' : 'Show'} Plain English Explanation</span>
		<span class="arrow">{expanded ? '▼' : '▶'}</span>
	</button>

	{#if expanded}
		<div class="explainer-content">
			<h4 class="explainer-title">{title}</h4>

			<div class="explainer-section">
				<div class="section-header">
					<span class="section-icon">📍</span>
					<h5>What This Refers To</h5>
				</div>
				<p class="section-content">{reference}</p>
			</div>

			<div class="explainer-section">
				<div class="section-header">
					<span class="section-icon">📝</span>
					<h5>Summary</h5>
				</div>
				<p class="section-content">{summary}</p>
			</div>

			<div class="explainer-section">
				<div class="section-header">
					<span class="section-icon">⚠️</span>
					<h5>Risks to Cloud Lobsters</h5>
				</div>
				<ul class="risk-list">
					{#each risks as risk}
						<li>{risk}</li>
					{/each}
				</ul>
			</div>

			<div class="explainer-section">
				<div class="section-header">
					<span class="section-icon">✏️</span>
					<h5>Suggested Amendments</h5>
				</div>
				<ul class="amendment-list">
					{#each amendments as amendment}
						<li>
							{amendment.text}
							{#if amendment.clauseRef}
								<button
									class="clause-link"
									onclick={() => scrollToClause(amendment.clauseRef)}
									title="Jump to clause {amendment.clauseRef}"
								>
									→ Go to clause
								</button>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style>
	.explainer-wrapper {
		margin: 20px 0;
		border: 2px solid #0070ad;
		border-radius: 8px;
		background-color: #f0f8ff;
		overflow: hidden;
	}

	.explainer-toggle {
		width: 100%;
		padding: 15px 20px;
		background-color: #e3f2fd;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 16px;
		font-weight: 600;
		color: #0070ad;
		transition: background-color 0.3s ease;
	}

	.explainer-toggle:hover {
		background-color: #bbdefb;
	}

	.icon {
		font-size: 20px;
	}

	.toggle-text {
		flex: 1;
		text-align: left;
	}

	.arrow {
		font-size: 12px;
		transition: transform 0.3s ease;
	}

	.explainer-content {
		padding: 20px;
		background-color: white;
		border-top: 2px solid #0070ad;
	}

	.explainer-title {
		color: #0070ad;
		font-size: 18px;
		margin: 0 0 20px 0;
		padding-bottom: 10px;
		border-bottom: 2px solid #e3f2fd;
	}

	.explainer-section {
		margin-bottom: 20px;
	}

	.explainer-section:last-child {
		margin-bottom: 0;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 10px;
	}

	.section-icon {
		font-size: 18px;
	}

	.section-header h5 {
		color: #0070ad;
		font-size: 16px;
		margin: 0;
		font-weight: 600;
	}

	.section-content {
		margin: 0;
		padding: 10px 15px;
		background-color: #f9f9f9;
		border-left: 3px solid #0070ad;
		line-height: 1.6;
		color: #333;
	}

	.risk-list,
	.amendment-list {
		margin: 0;
		padding-left: 25px;
		list-style-type: none;
	}

	.risk-list li,
	.amendment-list li {
		position: relative;
		padding: 8px 0 8px 20px;
		line-height: 1.5;
		color: #333;
	}

	.risk-list li::before {
		content: '⚠️';
		position: absolute;
		left: 0;
		font-size: 14px;
	}

	.amendment-list li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: #0070ad;
		font-weight: bold;
	}

	.risk-list li {
		background-color: #fff3cd;
		border-left: 3px solid #ffc107;
		margin-bottom: 8px;
		padding: 10px 10px 10px 30px;
	}

	.amendment-list li {
		background-color: #e8f5e9;
		border-left: 3px solid #4caf50;
		margin-bottom: 8px;
		padding: 10px 10px 10px 30px;
		display: flex;
		align-items: flex-start;
		gap: 10px;
	}

	.clause-link {
		flex-shrink: 0;
		margin-left: auto;
		padding: 4px 10px;
		background-color: #0070ad;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 12px;
		cursor: pointer;
		transition: background-color 0.2s ease;
		white-space: nowrap;
	}

	.clause-link:hover {
		background-color: #005a8c;
	}
</style>
