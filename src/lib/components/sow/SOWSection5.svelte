<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section-5">
	<p>
		The Sub-Contractor shall ensure that the Key Personnel listed below are assigned to perform the
		Sub-Contract Work. The Sub-Contractor shall not remove or replace any Key Personnel without the
		prior written consent of the Main Contractor (such consent not to be unreasonably withheld or
		delayed).
	</p>

	<div class="personnel-note">
		<p class="red-italic">
			<strong>List key personnel, their roles, and qualifications. Include:</strong>
		</p>
		<ul class="red-italic">
			<li>Name and role/title</li>
			<li>Key responsibilities in the project</li>
			<li>Relevant qualifications, certifications, or experience</li>
			<li>
				Percentage allocation to this project (if not full-time) or expected days per week/month
			</li>
		</ul>
		<p class="red-italic">
			<strong
				>Example: John Smith – Lead AI Engineer – Responsible for LLM integration and training. 10+
				years ML experience, PhD in Computer Science. Allocated 80% to this project.</strong
			>
		</p>
	</div>

	<div class="personnel-table">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Role</th>
					<th>Key Responsibilities</th>
					<th>Qualifications</th>
					<th>Allocation</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><span class="highlight-yellow">[Name]</span></td>
					<td><span class="highlight-yellow">[Role]</span></td>
					<td><span class="highlight-yellow">[Responsibilities]</span></td>
					<td><span class="highlight-yellow">[Qualifications]</span></td>
					<td><span class="highlight-yellow">[%]</span></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
	.sow-section-5 {
		margin: 1rem 0;
	}

	.sow-section-5 p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.personnel-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.personnel-note p {
		margin-bottom: 0.75rem;
	}

	.personnel-note ul {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	.personnel-note li {
		margin-bottom: 0.5rem;
	}

	.red-italic {
		color: #d32f2f;
		font-style: italic;
	}

	.personnel-table {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		border: 2px solid #0070ad;
	}

	thead {
		background: #e8f4f8;
	}

	th,
	td {
		border: 1px solid #0070ad;
		padding: 0.75rem;
		text-align: left;
	}

	th {
		font-weight: 600;
		font-size: 0.95rem;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}
</style>
