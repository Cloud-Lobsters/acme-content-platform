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
			<!-- Row 1: MVP Development & Integration -->
			<tr>
				<td class="name-cell">MVP Development & Integration</td>
				<td class="description-cell">
					<p><strong>End-to-End MVP Development</strong></p>
					<ul>
						<li>Implement database schema for MVP</li>
						<li>Build MVP with basic functionality covering whole flow</li>
						<li>Implement roles management system (RBAC with view/ authorisation)</li>
						<li>Integrate with existing systems/APIs where possible</li>
					</ul>

					<p><strong>User Testing & Deployment</strong></p>
					<ul>
						<li>Internal testing and quality assurance</li>
						<li>Assess HSBC integration where not replaced</li>
						<li>Performance and security validation</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>End-to-End MVP with Basic Functionality</li>
						<li>System Integration & API Connections</li>
						<li>UAT Results & User Feedback Analysis</li>
						<li>Select User Environment & Performance Metrics</li>
					</ul>
				</td>
				<td class="date-cell">27<sup>th</sup> December 2025</td>
			</tr>

			<!-- Row 2: Real-World Testing & Feedback -->
			<tr>
				<td class="name-cell">Real-World Testing & Feedback</td>
				<td class="description-cell">
					<p><strong>Real-World Testing & Iteration</strong></p>
					<ul>
						<li>User Acceptance Testing (UAT) on MVP</li>
						<li>Deploy to select number of users</li>
						<li>Test system on small subset of real messages</li>
						<li>Gather functionality and effectiveness feedback</li>
					</ul>

					<p><strong>Final Delivery & Handover</strong></p>
					<ul>
						<li>Document final system capabilities</li>
						<li>Provide scaling recommendations</li>
						<li>Train HSBC team on system operations</li>
					</ul>
				</td>
				<td class="criteria-cell">
					<ul>
						<li>Real-World Testing Results & Performance Data</li>
						<li>User Feedback Analysis & System Improvements</li>
						<li>Production-Ready MVP with Final Iterations</li>
						<li>System Operations Training & Scaling Recommendations</li>
					</ul>
				</td>
				<td class="date-cell">27<sup>th</sup> January 2026</td>
			</tr>
		</tbody>
	</table>

	<div class="table-note">
		<strong>Table 1 – Deliverables and Acceptance Criteria</strong>
	</div>

	<p class="note-text">
		The Sub-Contractor shall have no authority to authorise deviations from the project plan or
		project schedule; grant a time extension; or approve substitute Deliverables.
	</p>

	<h4>3.2. Acceptance Procedure</h4>

	<p>
		All Deliverables will be documented by the Sub-Contractor through a report which will be
		presented to the <span class="underline">Capgemini</span> Project Manager upon completion of each
		Deliverable. The Deliverables shall be measured against the Acceptance Criteria detailed in section
		3.1 and/ or Appendix C. The <span class="underline">Capgemini</span> Project Manager shall provide
		written confirmation of acceptance of Deliverables or details of additional and/or remedial Sub-Contract
		Work required ahead of acceptance. Such confirmation by the
		<span class="underline">Capgemini</span> Project Manager shall not be unreasonably withheld. The
		Sub-Contractor shall receive confirmation of acceptance
	</p>
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

	.table-note {
		margin: 2rem 0 1rem 0;
		font-size: 1rem;
		text-align: center;
	}

	.note-text {
		line-height: 1.8;
		text-align: justify;
		margin: 1rem 0;
	}

	h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 2rem 0 1rem 0;
	}

	p {
		line-height: 1.8;
		text-align: justify;
	}

	.underline {
		text-decoration: underline;
	}

	sup {
		font-size: 0.75em;
		vertical-align: super;
	}
</style>
