<script>
	let { formData = $bindable() } = $props();
</script>

<div class="appendix-a">
	<div class="appendix-header">
		<h2>APPENDIX A</h2>
		<h3>MAIN CONTRACT DETAILS</h3>
	</div>

	<div class="content">
		<p class="intro">
			This Appendix A sets out the details of the Main Contract under which the Sub-Contractor will
			perform the Sub-Contract Work described in this SOW.
		</p>

		<div class="details-table">
			<table>
				<tbody>
					<tr>
						<th>Main Contract Title:</th>
						<td><span class="highlight-yellow">[Insert Main Contract Title]</span></td>
					</tr>
					<tr>
						<th>Main Contract Reference:</th>
						<td><span class="highlight-yellow">[Insert Contract Reference Number]</span></td>
					</tr>
					<tr>
						<th>Customer Name:</th>
						<td>{formData.customerName || '[Insert Customer Name]'}</td>
					</tr>
					<tr>
						<th>Main Contract Start Date:</th>
						<td><span class="highlight-yellow">[Insert Start Date]</span></td>
					</tr>
					<tr>
						<th>Main Contract End Date:</th>
						<td><span class="highlight-yellow">[Insert End Date]</span></td>
					</tr>
					<tr>
						<th>Main Contract Value:</th>
						<td><span class="highlight-yellow">[Insert Total Contract Value]</span></td>
					</tr>
					<tr>
						<th>Customer Project Manager:</th>
						<td><span class="highlight-yellow">[Insert Name and Contact Details]</span></td>
					</tr>
					<tr>
						<th>Capgemini Project Manager:</th>
						<td><span class="highlight-yellow">[Insert Name and Contact Details]</span></td>
					</tr>
				</tbody>
			</table>
		</div>

		<h4>Scope of Main Contract</h4>
		<div class="scope-box">
			<p class="highlight-yellow">
				[Provide a brief summary of the overall scope of the Main Contract and how the Sub-Contract
				Work relates to it. This helps ensure the Sub-Contractor understands the broader context of
				their work.]
			</p>
		</div>

		<h4>Key Obligations from Main Contract</h4>
		<div class="obligations-box">
			<p class="red-italic">
				<strong
					>List the key obligations from the Main Contract that the Sub-Contractor must help
					fulfill, such as:</strong
				>
			</p>
			<ul class="highlight-yellow">
				<li>[Specific deliverables or milestones from the Main Contract]</li>
				<li>[Performance standards or SLAs that apply]</li>
				<li>[Regulatory or compliance requirements]</li>
				<li>[Security or data protection obligations]</li>
				<li>[Any other relevant contractual obligations]</li>
			</ul>
		</div>

		<h4>Customer Requirements</h4>
		<div class="requirements-box">
			<p class="highlight-yellow">
				[Detail any specific Customer requirements that the Sub-Contractor must adhere to, such as
				working practices, methodologies, reporting standards, access requirements, etc.]
			</p>
		</div>

		<div class="guidance-note">
			<p class="red-italic">
				<strong>Guidance:</strong> This appendix ensures the Sub-Contractor understands how their work
				fits into the broader Main Contract and what obligations flow down from Capgemini's commitments
				to the Customer. Include sufficient detail for the Sub-Contractor to understand the context but
				do not include confidential commercial terms unless necessary and appropriately protected.
			</p>
		</div>
	</div>
</div>

<style>
	.appendix-a {
		margin: 2rem 0;
	}

	.appendix-header {
		text-align: center;
		padding: 2rem;
		background: linear-gradient(135deg, #0070ad 0%, #005a8a 100%);
		color: white;
		border-radius: 8px 8px 0 0;
		margin-bottom: 2rem;
	}

	.appendix-header h2 {
		margin: 0 0 0.5rem 0;
		font-size: 2rem;
		letter-spacing: 2px;
	}

	.appendix-header h3 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 400;
	}

	.content {
		padding: 0 1rem;
	}

	.intro {
		font-size: 1.05rem;
		line-height: 1.8;
		margin-bottom: 2rem;
		text-align: justify;
	}

	h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 2rem 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #0070ad;
	}

	.details-table {
		margin: 1.5rem 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		border: 2px solid #0070ad;
	}

	th,
	td {
		padding: 1rem;
		border: 1px solid #0070ad;
		text-align: left;
	}

	th {
		background: #e8f4f8;
		font-weight: 600;
		width: 30%;
	}

	td {
		background: white;
	}

	.scope-box,
	.obligations-box,
	.requirements-box {
		background: #f8f9fa;
		padding: 1.5rem;
		border-radius: 6px;
		border: 1px solid #dee2e6;
		margin: 1rem 0;
	}

	.scope-box p,
	.requirements-box p {
		margin: 0;
		line-height: 1.8;
	}

	.obligations-box p {
		margin-bottom: 1rem;
	}

	.obligations-box ul {
		margin-left: 2rem;
		margin-bottom: 0;
	}

	.obligations-box li {
		margin-bottom: 0.5rem;
		line-height: 1.6;
	}

	.guidance-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.guidance-note p {
		margin: 0;
	}

	.red-italic {
		color: #d32f2f;
		font-style: italic;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 4px 8px;
		border-radius: 3px;
	}
</style>
