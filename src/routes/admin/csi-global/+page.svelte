<script lang="ts">
	import { onMount } from 'svelte';
</script>

<div class="container">
	<div class="header">
		<h1>Contract Review: CapGemini Engagement Agreement</h1>
		<div class="subtitle">CSI Global Limited / Cloud Lobsters Ltd</div>
		<div class="subtitle">Review Date: October 29, 2025</div>
		<div class="subtitle">Contract Duration: October 2025 - March 2026</div>
	</div>

	<div class="executive-summary">
		<h2>Executive Summary</h2>
		<p><strong>Overall Assessment:</strong> This is a well-structured short-form subcontracting agreement that provides reasonable protections for Cloud Lobsters as an SME working within a complex contracting chain (HSBC → CapGemini → CSI → Cloud Lobsters).</p>
		<p><strong>Risk Level:</strong> <span class="risk-level risk-medium">MEDIUM</span> - The agreement has good commercial protections but contains ambitious technical scope with tight timelines.</p>
		<p><strong>Recommendation:</strong> Proceed with engagement, but ensure early clarification of system access, milestone dependencies, and resource allocation.</p>
	</div>

	<h2>1. Contract Structure Overview</h2>

	<table class="key-terms-table">
		<thead>
			<tr>
				<th>Element</th>
				<th>Details</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Contracting Chain</strong></td>
				<td>HSBC → CapGemini → CSI Global Limited → Cloud Lobsters Ltd</td>
			</tr>
			<tr>
				<td><strong>Contract Period</strong></td>
				<td>October 27, 2025 to March 4, 2026 (~4 months)</td>
			</tr>
			<tr>
				<td><strong>Payment Structure</strong></td>
				<td>6 equal milestones at £3,333.30 each (Total: £20,000)</td>
			</tr>
			<tr>
				<td><strong>Payment Terms</strong></td>
				<td>Pay-when-paid basis (conditional on upstream payment)</td>
			</tr>
			<tr>
				<td><strong>Project Managers</strong></td>
				<td>Cloud Lobsters: TBD | HSBC: Tracey Bailey | CapGemini: Ashish Jaiswal</td>
			</tr>
		</tbody>
	</table>

	<h2>2. Scope of Work</h2>

	<div class="assessment-grid">
		<div class="assessment-box neutral">
			<h3>Workstream 1: Template Compliance</h3>
			<ul>
				<li>AI-assisted review of 3,000-4,000 templates</li>
				<li>Regulatory and business compliance assessment</li>
				<li>Build automated testing framework</li>
				<li>Deploy AI LLM platform for assessment</li>
				<li>Human-in-loop integration</li>
			</ul>
		</div>
		<div class="assessment-box neutral">
			<h3>Workstream 2: Innovation Banking</h3>
			<ul>
				<li>Business process discovery and mapping</li>
				<li>MVP development and integration</li>
				<li>Adobe/PEGA functionality assessment</li>
				<li>User testing and deployment</li>
				<li>Real-world testing with select users</li>
			</ul>
		</div>
	</div>

	<h2>3. Key Commercial Terms Analysis</h2>

	<div class="assessment-grid">
		<div class="assessment-box positive">
			<h3>✓ Positive Protections</h3>
			<ul>
				<li><strong>Payment Protection:</strong> No obligation to pay if HSBC doesn't pay upstream (Clause 3.3)</li>
				<li><strong>Liability Cap:</strong> Limited to 125% of fees (reasonable for scope)</li>
				<li><strong>SME-Appropriate Insurance:</strong> £1M levels acknowledged as sufficient</li>
				<li><strong>IP Rights:</strong> Background IP retained, foreground vests in HSBC</li>
				<li><strong>Flexible Milestones:</strong> 20-day negotiation period for dates</li>
				<li><strong>Carve-outs:</strong> Enterprise-level obligations don't apply when using HSBC infrastructure</li>
			</ul>
		</div>
		<div class="assessment-box concern">
			<h3>⚠ Areas of Concern</h3>
			<ul>
				<li><strong>Ambitious Scope:</strong> Complex AI/ML implementation in 4 months</li>
				<li><strong>Technology Dependencies:</strong> Extensive list requiring HSBC provision</li>
				<li><strong>No Termination Compensation:</strong> If convenience termination by HSBC</li>
				<li><strong>Parallel Workstreams:</strong> Coordination complexity not fully addressed</li>
				<li><strong>System Access:</strong> Critical dependency on timely HSBC provisioning</li>
				<li><strong>Fixed Timeline:</strong> Limited flexibility after negotiation period</li>
			</ul>
		</div>
	</div>

	<h2>4. Risk Assessment</h2>

	<div class="risk-item">
		<span class="risk-level risk-high">HIGH</span>
		<div>
			<strong>Technical Complexity:</strong> AI-powered assessment of 3,000-4,000 templates with 90%+ accuracy requirement represents significant technical challenge. Mitigation: Early proof-of-concept and regular checkpoint reviews.
		</div>
	</div>

	<div class="risk-item">
		<span class="risk-level risk-medium">MEDIUM</span>
		<div>
			<strong>System Dependencies:</strong> Requires access to Gemini 2.5 Pro, multiple HSBC systems, and extensive software stack. Mitigation: Immediate escalation of access requirements through project sponsors.
		</div>
	</div>

	<div class="risk-item">
		<span class="risk-level risk-medium">MEDIUM</span>
		<div>
			<strong>Timeline Pressure:</strong> ~4 months for two complex workstreams with multiple dependencies. Mitigation: Use 20-day negotiation period to establish realistic milestones.
		</div>
	</div>

	<div class="risk-item">
		<span class="risk-level risk-low">LOW</span>
		<div>
			<strong>Payment Risk:</strong> Well-protected through pay-when-paid clause and clear milestone structure. Risk mainly limited to work already performed.
		</div>
	</div>

	<div class="risk-item">
		<span class="risk-level risk-low">LOW</span>
		<div>
			<strong>Liability Exposure:</strong> Appropriately capped at 125% of fees with reasonable carve-outs for SME status.
		</div>
	</div>

	<h2>5. Technology & Resource Requirements</h2>

	<h3>Critical HSBC Dependencies:</h3>
	<ul>
		<li>Gemini 2.5 Pro access with fine-tuning capability</li>
		<li>VDI/laptop provisioning for team members</li>
		<li>Access to template repositories and HSBC systems</li>
		<li>VM infrastructure for MVP deployment</li>
		<li>Integration points with Adobe/PEGA systems</li>
	</ul>

	<h3>Software Stack Requirements:</h3>
	<p>The agreement includes provisions for extensive open-source technology stack (Node.js, SvelteKit, PostgreSQL, etc.) with appropriate MIT/Apache 2.0 licensing.</p>

	<h2>6. Key Recommendations</h2>

	<div class="recommendation">
		<h3>Immediate Actions (Week 1)</h3>
		<ul>
			<li>Schedule kick-off meeting with all stakeholders (HSBC, CapGemini, CSI)</li>
			<li>Submit comprehensive system access requests to HSBC</li>
			<li>Confirm Gemini 2.5 Pro availability and access permissions</li>
			<li>Establish project communication channels and reporting cadence</li>
			<li>Begin template discovery and access mapping</li>
		</ul>
	</div>

	<div class="recommendation">
		<h3>Negotiation Priorities (Within 20 days)</h3>
		<ul>
			<li>Finalize realistic milestone dates based on initial discovery</li>
			<li>Clarify interdependencies between workstreams</li>
			<li>Document any scope clarifications or exclusions</li>
			<li>Confirm resource allocation from all parties</li>
			<li>Establish escalation paths for blocking issues</li>
		</ul>
	</div>

	<div class="recommendation">
		<h3>Risk Mitigation Strategies</h3>
		<ul>
			<li>Implement weekly progress reviews with milestone tracking</li>
			<li>Create early prototypes to validate technical approach</li>
			<li>Maintain detailed RAID log (Risks, Assumptions, Issues, Dependencies)</li>
			<li>Establish clear acceptance criteria for each deliverable</li>
			<li>Document all scope changes through formal change control</li>
		</ul>
	</div>

	<h2>7. Financial Considerations</h2>

	<table class="key-terms-table">
		<thead>
			<tr>
				<th>Milestone</th>
				<th>Deliverable</th>
				<th>Due Date</th>
				<th>Payment</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>MP1</td>
				<td>Template Discovery & Platform Setup</td>
				<td>Dec 17, 2025</td>
				<td>£3,333.30</td>
			</tr>
			<tr>
				<td>MP2</td>
				<td>Innovation Banking Discovery</td>
				<td>Dec 17, 2025</td>
				<td>£3,333.30</td>
			</tr>
			<tr>
				<td>MP3</td>
				<td>Taxonomy & AI Implementation</td>
				<td>Feb 4, 2026</td>
				<td>£3,333.30</td>
			</tr>
			<tr>
				<td>MP4</td>
				<td>MVP Development & Integration</td>
				<td>Mar 4, 2026</td>
				<td>£3,333.30</td>
			</tr>
			<tr>
				<td>MP5</td>
				<td>Security & Human-in-Loop</td>
				<td>Mar 4, 2026</td>
				<td>£3,333.30</td>
			</tr>
			<tr>
				<td>MP6</td>
				<td>Real-World Testing & Feedback</td>
				<td>Feb 4, 2026</td>
				<td>£3,333.30</td>
			</tr>
		</tbody>
	</table>

	<h2>8. Legal & Compliance Considerations</h2>

	<h3>Favorable Terms:</h3>
	<ul>
		<li>English law and jurisdiction (familiar legal framework)</li>
		<li>Clear order of precedence for contract documents</li>
		<li>Appropriate flow-down obligation carve-outs</li>
		<li>No unlimited liability or excessive indemnities</li>
		<li>Reasonable audit rights limitations</li>
	</ul>

	<h3>Points of Attention:</h3>
	<ul>
		<li>No specific provisions for project delays beyond 20-day negotiation</li>
		<li>Limited recourse if HSBC cancels prime contract</li>
		<li>Intellectual property vests directly in HSBC (ensure background IP is clearly defined)</li>
		<li>Security standards apply only when using own infrastructure</li>
	</ul>

	<h2>9. Conclusion</h2>

	<p>This engagement agreement represents a <strong>balanced commercial arrangement</strong> with appropriate protections for Cloud Lobsters' position as an SME subcontractor. The pay-when-paid structure, liability limitations, and SME carve-outs demonstrate reasonable commercial awareness from the contracting parties.</p>

	<p>The primary risks relate to <strong>technical complexity and timeline pressures</strong> rather than commercial terms. The scope is ambitious - implementing AI-powered compliance assessment and workflow optimization in parallel over just four months will require excellent project management and early identification of any blocking issues.</p>

	<p><strong>Recommendation:</strong> Proceed with the engagement but prioritize:</p>
	<ol>
		<li>Immediate action on system access and technical prerequisites</li>
		<li>Careful use of the 20-day negotiation period to set realistic milestones</li>
		<li>Strong project governance with weekly progress reviews</li>
		<li>Early escalation of any blocking issues through established channels</li>
		<li>Clear documentation of all assumptions and dependencies</li>
	</ol>

	<div class="footer">
		<p><strong>Document Classification:</strong> Confidential - Contract Review</p>
		<p><strong>Prepared:</strong> October 29, 2025</p>
		<p><strong>Review Type:</strong> Commercial and Technical Risk Assessment</p>
		<p><strong>Next Review:</strong> After 20-day negotiation period completion</p>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		line-height: 1.6;
		color: #333;
	}

	.header {
		border-bottom: 3px solid #1e3a8a;
		padding-bottom: 20px;
		margin-bottom: 30px;
	}

	h1 {
		color: #1e3a8a;
		font-size: 2rem;
		margin: 0 0 10px 0;
	}

	.subtitle {
		color: #64748b;
		font-size: 0.9rem;
		margin: 5px 0;
	}

	.executive-summary {
		background: #f0f9ff;
		border-left: 4px solid #3b82f6;
		padding: 20px;
		margin: 30px 0;
		border-radius: 4px;
	}

	.executive-summary h2 {
		margin-top: 0;
		border: none;
	}

	h2 {
		color: #1e3a8a;
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #e2e8f0;
	}

	h3 {
		color: #475569;
		font-size: 1.1rem;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.assessment-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin: 20px 0;
	}

	@media (max-width: 768px) {
		.assessment-grid {
			grid-template-columns: 1fr;
		}
	}

	.assessment-box {
		padding: 15px;
		border: 1px solid #e2e8f0;
		border-radius: 4px;
	}

	.positive {
		background: #f0fdf4;
		border-color: #86efac;
	}

	.concern {
		background: #fef2f2;
		border-color: #fca5a5;
	}

	.neutral {
		background: #fafaf9;
		border-color: #e7e5e4;
	}

	ul {
		margin: 10px 0;
		padding-left: 25px;
	}

	li {
		margin: 5px 0;
	}

	.key-terms-table {
		width: 100%;
		border-collapse: collapse;
		margin: 20px 0;
	}

	.key-terms-table th,
	.key-terms-table td {
		padding: 12px;
		text-align: left;
		border: 1px solid #e2e8f0;
	}

	.key-terms-table th {
		background: #f8fafc;
		font-weight: 600;
		color: #475569;
	}

	.risk-item {
		display: flex;
		align-items: flex-start;
		margin: 15px 0;
		padding: 10px;
		background: #f8fafc;
		border-radius: 4px;
	}

	.risk-level {
		padding: 2px 8px;
		border-radius: 3px;
		font-size: 12px;
		font-weight: 600;
		margin-right: 10px;
		white-space: nowrap;
	}

	.risk-high {
		background: #fee2e2;
		color: #991b1b;
	}

	.risk-medium {
		background: #fed7aa;
		color: #9a3412;
	}

	.risk-low {
		background: #dcfce7;
		color: #166534;
	}

	.recommendation {
		background: #fefce8;
		border-left: 4px solid #facc15;
		padding: 15px;
		margin: 15px 0;
		border-radius: 4px;
	}

	.footer {
		margin-top: 40px;
		padding-top: 20px;
		border-top: 1px solid #e2e8f0;
		font-size: 0.8rem;
		color: #64748b;
	}

	ol {
		margin: 10px 0;
		padding-left: 25px;
	}

	strong {
		color: #1e293b;
	}

	p {
		margin: 10px 0;
	}
</style>