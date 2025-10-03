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

	<h4 class="workstream-heading">Workstream 1: Template Compliance Assessment</h4>

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
			<!-- Workstream 1: Row 1 - Discovery & Platform Setup -->
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

			<!-- Workstream 1: Row 2 - Taxonomy & AI Implementation -->
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

			<!-- Workstream 1: Row 3 - Security & Human-in-Loop Integration -->
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
			<!-- Workstream 2: Row 1 - Business Discovery & Solution Design -->
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

			<!-- Workstream 2: Row 2 - MVP Development & Integration -->
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

			<!-- Workstream 2: Row 3 - Real-World Testing & Feedback -->
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
