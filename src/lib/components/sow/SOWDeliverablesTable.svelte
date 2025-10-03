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
			<!-- Row 1: Discovery & Platform Setup -->
			<tr>
				<td class="name-cell">Discovery & Platform Setup</td>
				<td class="description-cell">
					<p><strong>Template Discovery & Access:</strong></p>
					<ul>
						<li>Identify scope of templates across HSBC systems</li>
						<li>Document access patterns and access requirements</li>
						<li>Secure access permissions and integration protocols</li>
						<li>Stand up compilation platform for all templates</li>
					</ul>

					<p><strong>Testing & Extraction Framework</strong></p>
					<ul>
						<li>Write automated tests for template cycling</li>
						<li>Build information extraction capabilities</li>
						<li>Perform sample testing and validation</li>
						<li>
							Refine the template data extraction until we achieve 90%+ data extraction accuracy to move
							onto the
						</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>Template Discovery & Access MVP</li>
						<li>Compilation Platform MVP</li>
						<li>Automated Testing Framework MVP</li>
						<li>Sample Testing Results & Validation Findings</li>
					</ul>
				</td>
				<td class="date-cell">27<sup>th</sup> November 2025</td>
			</tr>

			<!-- Row 2: Taxonomy & AI Implementation -->
			<tr>
				<td class="name-cell">Taxonomy & AI Implementation</td>
				<td class="description-cell">
					<p><strong>Classification & Interface Development</strong></p>
					<ul>
						<li>Build template categorisation nomenclature</li>
						<li>Create taxonomy for narrowing rule application</li>
						<li>Build operative interface for rule application</li>
						<li>Enable granular template categorisation</li>
					</ul>

					<p><strong>AI LLM Setup & Training</strong></p>
					<ul>
						<li>Select and deploy AI LLM platform</li>
						<li>Train LLM for taxonomy-based assessment</li>
						<li>Build test execution and recording interface</li>
						<li>Implement failure analysis</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>Template Taxonomy & Classification System</li>
						<li>Operative Rule Application Interface</li>
						<li>AI LLM Platform & Refining the output of the LLM</li>
						<li>Test Execution Interface & Database Schema</li>
					</ul>
				</td>
				<td class="date-cell">27th December 2025</td>
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
