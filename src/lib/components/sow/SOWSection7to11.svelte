<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-sections">
	<!-- Section 7 -->
	<div class="section-content">
		<h3>7. Special Terms and Conditions</h3>
		<p>
			The following special terms and conditions apply to this SOW and shall take precedence over
			any conflicting terms in the Agreement:
		</p>
		<div class="guidance-note">
			<p class="red-italic">
				<strong
					>Insert any special terms specific to this SOW, such as: specific IP arrangements,
					confidentiality requirements, regulatory compliance, data handling requirements, etc.</strong
				>
			</p>
		</div>
	</div>

	<!-- Section 8 -->
	<div class="section-content">
		<h3>8. Dependencies and Assumptions</h3>
		<p>
			The following dependencies and assumptions have been made in preparing this SOW and pricing:
		</p>
		<div class="guidance-note">
			<p class="red-italic">
				<strong>List key dependencies and assumptions, for example:</strong>
			</p>
			<ul class="red-italic">
				<li>Access to Customer systems/data will be provided by [date]</li>
				<li>Main Contractor will provide [specific resource/tool/environment]</li>
				<li>Customer approvals will be provided within [timeframe]</li>
				<li>Scope is limited to [specific boundaries]</li>
			</ul>
		</div>
	</div>

	<!-- Section 9 -->
	<div class="section-content">
		<h3>9. Intellectual Property Rights</h3>
		<p>
			All Intellectual Property Rights in the Deliverables and any Work Product created under this
			SOW shall be owned by <span class="highlight-yellow"
				>[Main Contractor/Customer - specify]</span
			>
			in accordance with the terms of the Agreement.
		</p>
		<p>
			The Sub-Contractor shall ensure that all necessary IP assignments and waivers are obtained from
			its personnel and subcontractors.
		</p>
	</div>

	<!-- Section 10 -->
	<div class="section-content">
		<h3>10. Change Control</h3>
		<p>
			Any changes to the scope, deliverables, timeline, or pricing set out in this SOW must be agreed
			in writing by both Parties through a formal change control process.
		</p>
		<p>
			Neither Party shall be obliged to perform any additional work or incur additional costs unless
			and until a change order has been signed by authorized representatives of both Parties.
		</p>
	</div>

	<!-- Section 11 -->
	<div class="section-content">
		<h3>11. Exit Management</h3>
		<p>
			Upon termination or expiry of this SOW, the Sub-Contractor shall:
		</p>
		<ul>
			<li>
				Provide all work product, documentation, and materials to the Main Contractor in an agreed
				format
			</li>
			<li>Facilitate knowledge transfer sessions as reasonably requested</li>
			<li>Return or securely destroy all Confidential Information and Customer data</li>
			<li>
				Cooperate with transition activities to ensure continuity of service, if applicable
			</li>
			<li>Provide final reports on project status and outstanding items</li>
		</ul>
		<p>
			The Sub-Contractor's obligations regarding Confidential Information, IP, and data protection
			shall survive termination of this SOW.
		</p>
	</div>
</div>

<style>
	.sow-sections {
		margin: 1rem 0;
	}

	.section-content {
		margin-bottom: 2.5rem;
	}

	.section-content:last-child {
		margin-bottom: 0;
	}

	h3 {
		color: #0070ad;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #e0e0e0;
	}

	p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.75rem;
		line-height: 1.8;
	}

	.guidance-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.guidance-note p {
		margin-bottom: 0.75rem;
	}

	.guidance-note p:last-child {
		margin-bottom: 0;
	}

	.guidance-note ul {
		margin-left: 1.5rem;
		margin-bottom: 0;
	}

	.guidance-note li {
		margin-bottom: 0.5rem;
	}

	.red-italic {
		color: #d32f2f;
		font-style: italic;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}
</style>
