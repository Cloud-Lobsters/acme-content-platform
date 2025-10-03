<script>
	import { fly } from 'svelte/transition';

	let showReview = $state(false);

	function toggleReview() {
		showReview = !showReview;
	}
</script>

<div class="review-container">
	<button class="review-toggle-btn" onclick={toggleReview}>
		{showReview ? '✕ Close Review' : '📋 Review Key Terms'}
	</button>

	{#if showReview}
		<div class="review-panel" transition:fly={{ x: 300, duration: 300 }}>
			<div class="review-header">
				<h3>Appendix B - Key Terms Review</h3>
				<p class="subtitle">Critical negotiated terms for HSBC engagement</p>
			</div>

			<div class="review-content">
				<!-- Payment Terms Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">💰</span>
						<h4>Payment Terms</h4>
						<span class="badge favorable">Favorable</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							<strong>1 Business Day</strong> payment after Capgemini receives HSBC funds
						</p>
						<ul class="highlights">
							<li>✓ No 30-day extended payment period</li>
							<li>⚠️ Still pay-when-paid (Capgemini must receive from HSBC first)</li>
							<li>✓ Evidence of receipt on request</li>
						</ul>
					</div>
				</div>

				<!-- Rebates Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">🚫</span>
						<h4>Rebates</h4>
						<span class="badge favorable">Excellent</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							<strong>No rebates apply</strong> to this SOW
						</p>
						<ul class="highlights">
							<li>✓ Schedule 3 rebate mechanism excluded</li>
							<li>✓ Revenue excluded from annual spend calculations</li>
							<li>✓ Not counted in future rebate calculations</li>
						</ul>
					</div>
				</div>

				<!-- IP Rights Summary -->
				<div class="review-card neutral">
					<div class="card-header">
						<span class="icon">⚖️</span>
						<h4>Intellectual Property</h4>
						<span class="badge neutral">Balanced</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							Foreground IP → HSBC | Background IP → Cloud Lobsters
						</p>
						<ul class="highlights">
							<li>⚠️ All new IP vests directly in HSBC on creation</li>
							<li>✓ Cloud Lobsters retains Background IP ownership</li>
							<li>✓ HSBC gets royalty-free license to Background IP</li>
							<li>✓ Capgemini gets no IP rights (pass-through only)</li>
							<li>✓ Open source permitted (MIT, BSD, Apache 2.0)</li>
							<li>✓ Source code escrow protects Background IP</li>
						</ul>
					</div>
				</div>

				<!-- Liability Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">🛡️</span>
						<h4>Liability & Indemnities</h4>
						<span class="badge favorable">Strong</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							Cap: <strong>125% of SOW charges</strong> (per-SOW basis)
						</p>
						<ul class="highlights">
							<li>✓ Not aggregated across multiple SOWs</li>
							<li>✓ No consequential loss liability (both parties)</li>
							<li>✓ All indemnities subject to cap (except fraud/injury)</li>
							<li>✓ Supersedes MSA liability provisions</li>
						</ul>
					</div>
				</div>

				<!-- Security Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">🔒</span>
						<h4>Security Obligations</h4>
						<span class="badge favorable">Excellent</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							Schedule 2 applies <strong>only if processing on own infrastructure</strong>
						</p>
						<ul class="highlights">
							<li>✓ No Schedule 2 obligations on HSBC equipment</li>
							<li>✓ No obligations if no HSBC data exported</li>
							<li>✓ Proportionate to actual data processing</li>
						</ul>
					</div>
				</div>

				<!-- Insurance Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">📋</span>
						<h4>Insurance Requirements</h4>
						<span class="badge favorable">Realistic</span>
					</div>
					<div class="card-body">
						<p class="key-term">SME-appropriate levels</p>
						<ul class="highlights">
							<li>✓ Professional Indemnity: £1m minimum</li>
							<li>✓ Public & Product Liability: £1m minimum</li>
							<li>✓ Employers Liability: £10m</li>
							<li>✓ Capgemini acknowledges SME constraints</li>
						</ul>
					</div>
				</div>

				<!-- Change Control Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">🔄</span>
						<h4>Change Control & Testing</h4>
						<span class="badge favorable">Strong</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							<strong>15 days</strong> to assess changes | Max <strong>2 test cycles</strong>
						</p>
						<ul class="highlights">
							<li>✓ Written agreement required for changes</li>
							<li>✓ No deemed acceptance</li>
							<li>✓ Maximum 2 acceptance test retries</li>
							<li>✓ Payment for work done if rejected unfairly</li>
						</ul>
					</div>
				</div>

				<!-- Audit Rights Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">🔍</span>
						<h4>Audit Rights</h4>
						<span class="badge favorable">Reasonable</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							<strong>Once per year</strong> | <strong>10 days</strong> notice
						</p>
						<ul class="highlights">
							<li>✓ Limited to once annually (unless regulatory)</li>
							<li>✓ 10 Business Days advance notice</li>
							<li>✓ Limited to SOW-related records only</li>
							<li>✓ Expires 12 months after termination</li>
							<li>✓ Remote where possible</li>
						</ul>
					</div>
				</div>

				<!-- Flow-Down Summary -->
				<div class="review-card favorable">
					<div class="card-header">
						<span class="icon">📜</span>
						<h4>Flow-Down Obligations</h4>
						<span class="badge favorable">Excellent</span>
					</div>
					<div class="card-body">
						<p class="key-term">
							Only obligations <strong>expressly in Appendix A</strong> apply
						</p>
						<ul class="highlights">
							<li>✓ No implicit flow-down from Main Contract</li>
							<li>✓ New obligations require agreement + negotiation</li>
							<li>✓ Price/timeline adjustment for new obligations</li>
						</ul>
					</div>
				</div>

				<!-- Overall Assessment -->
				<div class="review-summary">
					<h4>Overall Assessment</h4>
					<div class="assessment-grid">
						<div class="assessment-item excellent">
							<span class="score">9/10</span>
							<span class="label">Risk Management</span>
						</div>
						<div class="assessment-item excellent">
							<span class="score">9/10</span>
							<span class="label">Payment Terms</span>
						</div>
						<div class="assessment-item good">
							<span class="score">7/10</span>
							<span class="label">IP Protection</span>
						</div>
						<div class="assessment-item excellent">
							<span class="score">10/10</span>
							<span class="label">Liability Cap</span>
						</div>
					</div>
					<p class="conclusion">
						<strong>Recommendation:</strong> These terms represent significant improvements over the
						base MSA. Key wins include rebate exclusion, capped liability, realistic insurance
						requirements, and limited flow-down obligations. The pay-when-paid structure remains a
						cash flow risk but is partially mitigated by the 1-day payment requirement.
					</p>
				</div>

				<!-- Risk Flags -->
				<div class="risk-flags">
					<h4>⚠️ Remaining Risks to Monitor</h4>
					<ul>
						<li>
							<strong>Pay-When-Paid:</strong> No payment if HSBC doesn't pay Capgemini (clause 1)
						</li>
						<li>
							<strong>Foreground IP:</strong> All new work becomes HSBC property immediately (clause 3.1)
						</li>
						<li>
							<strong>Termination Risk:</strong> Auto-termination if HSBC ends prime contract (clause 8)
						</li>
						<li>
							<strong>Personnel Rejection:</strong> HSBC can reject staff for any "good reason" (clause 10.1)
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.review-container {
		position: relative;
		margin: 2rem 0;
	}

	.review-toggle-btn {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		padding: 1rem 2rem;
		font-size: 14pt;
		font-weight: bold;
		border-radius: 8px;
		cursor: pointer;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: all 0.3s;
		display: block;
		margin: 0 auto;
		width: 100%;
		max-width: 300px;
	}

	.review-toggle-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.review-panel {
		position: fixed;
		top: 0;
		right: 0;
		width: 500px;
		height: 100vh;
		background: white;
		box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
		z-index: 1000;
		overflow-y: auto;
	}

	.review-header {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		padding: 2rem;
		text-align: center;
	}

	.review-header h3 {
		margin: 0 0 0.5rem 0;
		font-size: 18pt;
		font-weight: bold;
	}

	.subtitle {
		margin: 0;
		font-size: 11pt;
		opacity: 0.9;
	}

	.review-content {
		padding: 1.5rem;
	}

	.review-card {
		background: white;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		margin-bottom: 1.5rem;
		overflow: hidden;
		transition: all 0.3s;
	}

	.review-card:hover {
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.review-card.favorable {
		border-left: 4px solid #4caf50;
	}

	.review-card.neutral {
		border-left: 4px solid #ff9800;
	}

	.review-card.unfavorable {
		border-left: 4px solid #f44336;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: #f8f9fa;
		border-bottom: 1px solid #e0e0e0;
	}

	.card-header h4 {
		margin: 0;
		flex: 1;
		font-size: 12pt;
		font-weight: bold;
	}

	.icon {
		font-size: 20pt;
	}

	.badge {
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 9pt;
		font-weight: bold;
		text-transform: uppercase;
	}

	.badge.favorable {
		background: #e8f5e9;
		color: #2e7d32;
	}

	.badge.neutral {
		background: #fff3e0;
		color: #e65100;
	}

	.badge.unfavorable {
		background: #ffebee;
		color: #c62828;
	}

	.badge.excellent {
		background: #e3f2fd;
		color: #1565c0;
	}

	.card-body {
		padding: 1rem;
	}

	.key-term {
		font-size: 11pt;
		font-weight: bold;
		margin: 0 0 1rem 0;
		color: #333;
	}

	.highlights {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.highlights li {
		padding: 0.5rem 0;
		font-size: 10pt;
		line-height: 1.5;
		border-bottom: 1px solid #f0f0f0;
	}

	.highlights li:last-child {
		border-bottom: none;
	}

	.review-summary {
		background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
		border: 2px solid #667eea;
		border-radius: 8px;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.review-summary h4 {
		margin: 0 0 1rem 0;
		font-size: 14pt;
		font-weight: bold;
		color: #667eea;
		text-align: center;
	}

	.assessment-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.assessment-item {
		background: white;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid #e0e0e0;
	}

	.assessment-item.excellent {
		border-color: #4caf50;
	}

	.assessment-item.good {
		border-color: #ff9800;
	}

	.score {
		display: block;
		font-size: 20pt;
		font-weight: bold;
		color: #333;
		margin-bottom: 0.25rem;
	}

	.label {
		display: block;
		font-size: 9pt;
		color: #666;
		font-weight: bold;
		text-transform: uppercase;
	}

	.conclusion {
		margin: 0;
		padding: 1rem;
		background: white;
		border-radius: 8px;
		font-size: 10pt;
		line-height: 1.6;
		text-align: justify;
	}

	.risk-flags {
		background: #fff3cd;
		border: 2px solid #ffa500;
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 2rem;
	}

	.risk-flags h4 {
		margin: 0 0 1rem 0;
		font-size: 12pt;
		font-weight: bold;
		color: #e65100;
	}

	.risk-flags ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.risk-flags li {
		padding: 0.75rem 0;
		font-size: 10pt;
		line-height: 1.5;
		border-bottom: 1px solid #ffe082;
	}

	.risk-flags li:last-child {
		border-bottom: none;
	}

	@media (max-width: 768px) {
		.review-panel {
			width: 100%;
		}
	}
</style>
