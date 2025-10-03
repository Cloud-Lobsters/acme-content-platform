<script>
	let { formData = $bindable() } = $props();
</script>

<div class="deliverables-section">
	<div class="company-header">
		<div class="logo">Capgemini</div>
		<div class="confidential-badge">
			<span class="confidential-text">CONFIDENTIAL – Sec 2 – Customer restricted</span>
			<span class="sec-badge">SEC 2</span>
		</div>
	</div>

	<table class="deliverables-table">
		<thead>
			<tr>
				<th>Deliverable Name</th>
				<th>Full Description</th>
				<th>Acceptance Criteria</th>
				<th>Deliverable Due Date</th>
			</tr>
		</thead>
		<tbody>
			<!-- Row 1: Security & Human-in-Loop Integration -->
			<tr>
				<td class="name-cell">Security & Human-in-Loop Integration</td>
				<td class="description-cell">
					<p><strong>Security & Human Oversight</strong></p>
					<ul>
						<li>Deploy MVP onto a VM provided by Infrastructure</li>
						<li>Build human assessment interface for LLM scoring and feedback</li>
						<li>Create feedback incorporation mechanism</li>
					</ul>

					<p><strong>Individual Testing & Final Integration</strong></p>
					<ul>
						<li>Enable individual template testing capability</li>
						<li>Batch template assessment will be attempted</li>
						<li>Risk categorisation matrix implementation</li>
						<li>Template scoring system finalisation</li>
						<li>Full system integration and testing</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>Permission-Based Security System</li>
						<li>Human-in-Loop Assessment Interface</li>
						<li>Individual Template Testing Capability</li>
						<li>Complete Compliance Platform MVP</li>
					</ul>
				</td>
				<td class="date-cell">27<sup>th</sup> January 2026</td>
			</tr>
		</tbody>
	</table>

	<h4 class="workstream-heading">Workstream 2: Innovation Banking Workflow Optimisation</h4>

	<table class="deliverables-table">
		<thead>
			<tr>
				<th>Deliverable Name</th>
				<th>Full Description</th>
				<th>Acceptance Criteria</th>
				<th>Deliverable Due Date</th>
			</tr>
		</thead>
		<tbody>
			<!-- Row 1: Business Discovery & Solution Design -->
			<tr>
				<td class="name-cell">Business Discovery & Solution Design</td>
				<td class="description-cell">
					<p><strong>Business Process Discovery:</strong></p>
					<ul>
						<li>Perform a walkthrough to understand the problem</li>
						<li>Document the as-is end to end process flow</li>
						<li>Identify processes with highest ROI potential</li>
						<li>Map integration points for existing systems</li>
					</ul>

					<p><strong>Solution Planning & Specification</strong></p>
					<ul>
						<li>Formulate quick win solution approach</li>
						<li>Write MVP specification for process integration</li>
						<li>Create functional spec document for MVP</li>
						<li>Design database schema for MVP</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>Business Walkthrough Findings & As-Is Process Map</li>
						<li>Quick Win Solution Plan & ROI Analysis</li>
						<li>Platform Specification & Requirements Document</li>
						<li>Database Schema Design & Integration Strategy</li>
					</ul>
				</td>
				<td class="date-cell">27<sup>th</sup> November 2025</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	.deliverables-section {
		margin: 2rem 0;
	}

	.company-header {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1rem 0;
		margin-bottom: 1.5rem;
	}

	.logo {
		font-size: 2rem;
		font-weight: bold;
		font-style: italic;
		color: #0070ad;
		letter-spacing: 1px;
	}

	.confidential-badge {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.confidential-text {
		font-size: 0.85rem;
		color: #666;
	}

	.sec-badge {
		background: #ffc107;
		color: #333;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: bold;
	}

	.workstream-heading {
		margin: 2rem 0 1rem 0;
		padding: 0.75rem 1rem;
		background: #f5f5f5;
		border-left: 4px solid #0070ad;
		font-size: 1.1rem;
		color: #333;
	}

	.deliverables-table {
		width: 100%;
		border-collapse: collapse;
		border: 2px solid #0070ad;
		margin: 1.5rem 0;
	}

	.deliverables-table th {
		background: #e8f4f8;
		border: 1px solid #0070ad;
		padding: 0.75rem;
		text-align: center;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.deliverables-table td {
		border: 1px solid #0070ad;
		padding: 1rem;
		vertical-align: top;
	}

	.name-cell {
		width: 15%;
		font-weight: 500;
	}

	.description-cell {
		width: 45%;
	}

	.criteria-cell {
		width: 25%;
	}

	.date-cell {
		width: 15%;
		text-align: center;
	}

	.description-cell p,
	.criteria-cell p {
		margin: 0.5rem 0;
	}

	.description-cell p:first-child,
	.criteria-cell p:first-child {
		margin-top: 0;
	}

	.description-cell ul,
	.criteria-cell ul {
		margin: 0.5rem 0 1rem 1.25rem;
		padding: 0;
	}

	.description-cell li,
	.criteria-cell li {
		margin-bottom: 0.5rem;
		line-height: 1.6;
	}

	sup {
		font-size: 0.75em;
		vertical-align: super;
	}
</style>
