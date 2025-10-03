<script>
	let { formData = $bindable() } = $props();
</script>

<div class="schedule-3">
	<div class="schedule-header">
		<h2>Schedule 3</h2>
		<h3>Sub-Contractor Licensed Materials</h3>
	</div>

	<p class="intro">
		This Schedule sets out the Sub-Contractor Licensed Materials (if any) that will be provided by
		the Sub-Contractor for use in connection with the Sub-Contract Work and the terms on which such
		materials will be licensed.
	</p>

	<div class="definition-box">
		<h4>Definition</h4>
		<p>
			"<strong>Sub-Contractor Licensed Materials</strong>" means any software, tools, methodologies,
			frameworks, documentation, or other materials owned by or licensed to the Sub-Contractor that
			will be incorporated into or used in connection with the Deliverables or Sub-Contract Work.
		</p>
	</div>

	<!-- Section 1: List of Licensed Materials -->
	<div class="materials-section">
		<h4>1. List of Sub-Contractor Licensed Materials</h4>
		<p>The following materials will be provided by the Sub-Contractor:</p>

		<div class="materials-table-wrapper">
			<table class="materials-table">
				<thead>
					<tr>
						<th>Material Name</th>
						<th>Description</th>
						<th>Version</th>
						<th>License Type</th>
						<th>Purpose/Use</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span class="highlight-yellow">[Material Name]</span></td>
						<td><span class="highlight-yellow">[Brief description of the material]</span></td>
						<td><span class="highlight-yellow">[Version number]</span></td>
						<td><span class="highlight-yellow">[Proprietary/Open Source/Other]</span></td>
						<td><span class="highlight-yellow">[How it will be used]</span></td>
					</tr>
					<tr class="example-row">
						<td>Example: CloudAI Framework</td>
						<td>AI/ML development framework for cloud applications</td>
						<td>v3.2.1</td>
						<td>Proprietary</td>
						<td>Core framework for LLM integration</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="guidance-note">
			<p class="red-italic">
				<strong>Guidance:</strong> List all software, tools, frameworks, or other materials owned by
				the Sub-Contractor that will be used. If none, state "None" or "N/A". For open-source materials,
				specify the license type (e.g., MIT, Apache 2.0, GPL).
			</p>
		</div>
	</div>

	<!-- Section 2: License Terms -->
	<div class="materials-section">
		<h4>2. License Terms</h4>
		<p>The Sub-Contractor grants the following licenses in respect of the Sub-Contractor Licensed Materials:</p>

		<h5>2.1 Development and Testing License</h5>
		<p>
			During the term of the Agreement, the Sub-Contractor grants to <span class="underline">Capgemini</span> and its affiliates a non-exclusive, non-transferable license to use the Sub-Contractor Licensed Materials solely for:
		</p>
		<ul>
			<li>Development and testing of the Deliverables;</li>
			<li>Integration with the Main Contractor's systems;</li>
			<li>Quality assurance and validation activities;</li>
			<li>Demonstration to the Customer (as required).</li>
		</ul>

		<h5>2.2 Production License</h5>
		<p>
			Upon acceptance of the Deliverables, the Sub-Contractor grants to <span class="underline">Capgemini</span>, the Customer, and their affiliates a <span class="highlight-yellow">[perpetual/term-limited]</span>, <span class="highlight-yellow">[exclusive/non-exclusive]</span>, <span class="highlight-yellow">[transferable/non-transferable]</span> license to:
		</p>
		<ul>
			<li>Use the Sub-Contractor Licensed Materials in production environments;</li>
			<li>Reproduce copies necessary for operational use;</li>
			<li>Make modifications necessary for integration and maintenance;</li>
			<li>Create derivative works (if applicable);</li>
			<li><span class="highlight-yellow">[Other rights as agreed]</span></li>
		</ul>

		<h5>2.3 License Restrictions</h5>
		<p>The licenses granted above are subject to the following restrictions:</p>
		<ul>
			<li>The materials may only be used in connection with the Work and Deliverables;</li>
			<li>
				No rights are granted to sublicense, distribute, or commercialize the materials independently;
			</li>
			<li>All intellectual property notices and proprietary markings must be preserved;</li>
			<li><span class="highlight-yellow">[Additional restrictions if applicable]</span></li>
		</ul>

		<h5>2.4 Support and Maintenance</h5>
		<p>
			<span class="highlight-yellow">[Specify if the Sub-Contractor will provide support, updates, or maintenance for the licensed materials, or state "No support or maintenance is included" if not applicable]</span>
		</p>
	</div>

	<!-- Section 3: Third-Party Components -->
	<div class="materials-section">
		<h4>3. Third-Party Components</h4>
		<p>
			If the Sub-Contractor Licensed Materials include any third-party components, the Sub-Contractor warrants that:
		</p>
		<ul>
			<li>
				It has all necessary rights and licenses to use and sublicense such third-party components;
			</li>
			<li>
				The use of such components does not violate any third-party intellectual property rights;
			</li>
			<li>
				All open-source components are identified with their respective licenses;
			</li>
			<li>
				Any open-source components with copyleft licenses (e.g., GPL) have been identified and approved;
			</li>
			<li>
				Appropriate notices and attributions are provided for all third-party components.
			</li>
		</ul>

		<div class="third-party-table-wrapper">
			<h5>Third-Party Component List:</h5>
			<table class="third-party-table">
				<thead>
					<tr>
						<th>Component Name</th>
						<th>Version</th>
						<th>License</th>
						<th>Purpose</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span class="highlight-yellow">[Component name]</span></td>
						<td><span class="highlight-yellow">[Version]</span></td>
						<td><span class="highlight-yellow">[License type]</span></td>
						<td><span class="highlight-yellow">[Purpose/use]</span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<!-- Section 4: Escrow (if applicable) -->
	<div class="materials-section">
		<h4>4. Source Code Escrow</h4>
		<p>
			<span class="highlight-yellow">[If source code escrow is required, specify the escrow agent, deposit schedule, and release conditions. Otherwise, state "Not applicable"]</span>
		</p>
		<div class="escrow-box">
			<p><strong>Escrow Agent:</strong> <span class="highlight-yellow">[Name and contact]</span></p>
			<p><strong>Deposit Frequency:</strong> <span class="highlight-yellow">[e.g., Quarterly, upon each release]</span></p>
			<p><strong>Release Conditions:</strong></p>
			<ul class="highlight-yellow">
				<li>[Insolvency of Sub-Contractor]</li>
				<li>[Material breach of Agreement]</li>
				<li>[Failure to provide support for [X] consecutive months]</li>
				<li>[Other conditions as agreed]</li>
			</ul>
		</div>
	</div>

	<!-- Section 5: Warranties and Indemnities -->
	<div class="materials-section">
		<h4>5. Warranties and Indemnities</h4>
		<p>The Sub-Contractor warrants and represents that:</p>
		<ul>
			<li>
				It owns or has valid licenses for all Sub-Contractor Licensed Materials;
			</li>
			<li>
				The materials do not infringe any third-party intellectual property rights;
			</li>
			<li>
				The materials are free from material defects and fit for the intended purpose;
			</li>
			<li>
				The materials comply with all applicable laws and regulations;
			</li>
			<li>
				The materials do not contain malicious code, backdoors, or unauthorized functionality.
			</li>
		</ul>

		<p>
			The Sub-Contractor shall indemnify and hold harmless <span class="underline">Capgemini</span> and the Customer against any claims, losses, or damages arising from:
		</p>
		<ul>
			<li>Breach of the warranties above;</li>
			<li>Infringement of third-party intellectual property rights;</li>
			<li>Defects or errors in the Sub-Contractor Licensed Materials;</li>
			<li>Non-compliance with applicable laws or regulations.</li>
		</ul>
	</div>

	<!-- Section 6: Rebate Provisions (if applicable) -->
	<div class="materials-section">
		<h4>6. Rebate Provisions</h4>

		<div class="company-header">
			<div class="logo">Capgemini</div>
			<div class="confidential-badge">
				<span class="confidential-text">CONFIDENTIAL – Sec 2 – Customer restricted</span>
				<span class="sec-badge">SEC 2</span>
			</div>
		</div>

		<p>
			3. The Sub-Contractor shall provide the Main Contractor with bi-annual updates and within 7 days
			following a request from <span class="underline">Capgemini</span> in relation to its entitlement to
			any Rebate. If the Main Contractor is entitled to any Rebate the Sub-Contractor shall notify the
			Main Contractor of this fact within thirty (30) days of the end of the relevant Calendar Year. The
			Sub-Contractor shall pay a sum equal to the relevant Rebate to the Main Contractor on the earlier of:
		</p>

		<ol class="rebate-list" type="a">
			<li>thirty (30) days of a Sub-Contractor notification under this paragraph 3;</li>
			<li>within thirty (30) days of Main Contractor request under paragraph 2 above; or</li>
			<li>the 31<sup>st</sup> January following the relevant Calendar Year.</li>
		</ol>

		<div class="guidance-note">
			<p class="red-italic">
				<strong>Guidance:</strong> Rebate provisions apply when the Sub-Contractor receives volume discounts,
				rebates, or other financial benefits from software/material vendors that should be passed through
				to Capgemini. Delete this section if not applicable.
			</p>
		</div>
	</div>

	<!-- Section 7: Audit Rights -->
	<div class="materials-section">
		<h4>7. Audit Rights</h4>
		<p>
			<span class="underline">Capgemini</span> and/or the Customer shall have the right, upon reasonable
			notice, to audit the Sub-Contractor's use of the Sub-Contractor Licensed Materials to verify:
		</p>
		<ul>
			<li>Compliance with the terms of this Schedule;</li>
			<li>Proper payment of any license fees or rebates;</li>
			<li>Compliance with third-party license terms;</li>
			<li>Accuracy of any reports or notifications provided under this Schedule.</li>
		</ul>
		<p>
			The Sub-Contractor shall cooperate fully with any such audit and provide access to relevant
			records, systems, and personnel. The cost of the audit shall be borne by <span class="underline">Capgemini</span>
			unless the audit reveals a material breach, in which case the Sub-Contractor shall bear the cost.
		</p>
	</div>

	<!-- Section 8: Updates and New Versions -->
	<div class="materials-section">
		<h4>8. Updates and New Versions</h4>
		<p>
			Any updates, upgrades, or new versions of the Sub-Contractor Licensed Materials provided during
			the term of the Agreement shall be subject to the same license terms set out in this Schedule,
			unless otherwise agreed in writing.
		</p>
		<p>
			The Sub-Contractor shall notify <span class="underline">Capgemini</span> of any material changes
			to the Sub-Contractor Licensed Materials that may affect their functionality, compatibility, or
			the rights granted hereunder.
		</p>
	</div>

	<!-- Section 9: Termination and Survival -->
	<div class="materials-section">
		<h4>9. Termination and Survival</h4>
		<p>Upon termination or expiry of the Agreement:</p>
		<ul>
			<li>
				Development and testing licenses shall immediately terminate;
			</li>
			<li>
				Production licenses shall <span class="highlight-yellow">[survive termination perpetually / terminate after [X] months / as otherwise specified]</span>;
			</li>
			<li>
				<span class="underline">Capgemini</span> and the Customer shall have the right to continue using
				any Deliverables incorporating the Sub-Contractor Licensed Materials to the extent necessary
				for the intended purpose;
			</li>
			<li>
				The Sub-Contractor's warranties and indemnities under Section 5 shall survive termination.
			</li>
		</ul>
	</div>

	<div class="important-notice">
		<h5>IMPORTANT NOTES:</h5>
		<ul>
			<li>
				If no Sub-Contractor Licensed Materials are being provided, this Schedule should state "N/A" or "None".
			</li>
			<li>
				All licenses must be clearly defined to avoid disputes about permitted use.
			</li>
			<li>
				Open-source components must be properly identified to ensure compliance with license terms.
			</li>
			<li>
				Consider whether perpetual licenses or term-limited licenses are appropriate.
			</li>
			<li>
				Source code escrow may be advisable for critical proprietary components.
			</li>
			<li>
				Rebate provisions ensure that volume discounts are passed through to Capgemini.
			</li>
			<li>
				Audit rights help ensure compliance with license terms and financial obligations.
			</li>
		</ul>
	</div>
</div>

<style>
	.schedule-3 {
		padding: 1rem 0;
	}

	.schedule-header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid #0070ad;
	}

	.schedule-header h2 {
		color: #0070ad;
		font-size: 1.8rem;
		margin: 0 0 0.5rem 0;
	}

	.schedule-header h3 {
		color: #333;
		font-size: 1.3rem;
		margin: 0;
		font-weight: 600;
	}

	.intro {
		background: #f8f9fa;
		padding: 1.5rem;
		border-left: 4px solid #0070ad;
		margin: 1.5rem 0;
		line-height: 1.8;
		text-align: justify;
	}

	.definition-box {
		background: #e8f4f8;
		padding: 1.5rem;
		border-radius: 8px;
		margin: 2rem 0;
		border: 1px solid #0070ad;
	}

	.definition-box h4 {
		color: #0070ad;
		margin: 0 0 1rem 0;
	}

	.definition-box p {
		margin: 0;
		line-height: 1.8;
	}

	.materials-section {
		margin: 2.5rem 0;
		padding: 1.5rem;
		background: #fafafa;
		border-radius: 8px;
		border: 1px solid #e0e0e0;
	}

	.materials-section h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 0 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #0070ad;
	}

	.materials-section h5 {
		color: #005a8a;
		font-size: 1.1rem;
		margin: 1.5rem 0 1rem 0;
	}

	p {
		line-height: 1.8;
		margin-bottom: 1rem;
		text-align: justify;
	}

	ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.75rem;
		line-height: 1.8;
	}

	.materials-table-wrapper,
	.third-party-table-wrapper {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.materials-table,
	.third-party-table {
		width: 100%;
		border-collapse: collapse;
		border: 2px solid #0070ad;
		background: white;
	}

	.materials-table th,
	.third-party-table th {
		background: #e8f4f8;
		border: 1px solid #0070ad;
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
		font-size: 0.95rem;
	}

	.materials-table td,
	.third-party-table td {
		border: 1px solid #0070ad;
		padding: 0.75rem;
		vertical-align: top;
	}

	.example-row {
		background: #f0f8ff;
		font-style: italic;
	}

	.guidance-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1rem;
		margin: 1.5rem 0;
	}

	.guidance-note p {
		margin: 0;
	}

	.escrow-box {
		background: #f8f9fa;
		padding: 1.5rem;
		border-radius: 6px;
		border: 1px solid #dee2e6;
		margin: 1rem 0;
	}

	.escrow-box p {
		margin-bottom: 0.75rem;
	}

	.escrow-box ul {
		margin-bottom: 0;
	}

	.important-notice {
		background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
		border-left: 6px solid #ffc107;
		padding: 2rem;
		margin: 2rem 0;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
	}

	.important-notice h5 {
		color: #d68910;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		margin-top: 0;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.important-notice ul {
		margin-left: 1.5rem;
		margin-bottom: 0;
	}

	.important-notice li {
		margin-bottom: 0.75rem;
		color: #333;
	}

	.red-italic {
		color: #d32f2f;
		font-style: italic;
	}

	.underline {
		text-decoration: underline;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
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

	.rebate-list {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	.rebate-list li {
		margin-bottom: 0.75rem;
		line-height: 1.8;
	}

	sup {
		font-size: 0.75em;
		vertical-align: super;
	}
</style>
