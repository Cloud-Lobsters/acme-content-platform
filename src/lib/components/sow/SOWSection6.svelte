<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section-6">
	<p>
		The Sub-Contract Work shall be performed <span class="highlight-yellow"
			>[specify location(s) – e.g., "remotely", "at the Sub-Contractor's premises", "at the
			Customer's site", "hybrid arrangement"]</span
		>.
	</p>

	<div class="location-note">
		<p class="red-italic">
			<strong>Specify working arrangements including:</strong>
		</p>
		<ul class="red-italic">
			<li>Primary work location(s)</li>
			<li>Any requirements for on-site attendance and frequency</li>
			<li>Core working hours or availability requirements</li>
			<li>Time zone considerations if working remotely</li>
			<li>Access requirements (security passes, systems access, etc.)</li>
			<li>Equipment and tools provision (who supplies laptops, software licenses, etc.)</li>
		</ul>
	</div>

	<h4>6.1 Security and Access</h4>

	<p>
		The Sub-Contractor personnel shall comply with all security requirements of the Main Contractor
		and/or Customer including but not limited to:
	</p>

	<ul>
		<li>Completion of security clearance checks as required</li>
		<li>Adherence to site security protocols and badge requirements</li>
		<li>Compliance with information security policies and procedures</li>
		<li>Use of approved devices and secure network connections for remote work</li>
	</ul>

	<h4>6.2 Communication and Reporting</h4>

	<p>
		The Sub-Contractor shall provide regular status updates and attend project meetings as follows:
	</p>

	<ul>
		<li>
			Weekly status reports submitted every <span class="highlight-yellow">[day of week]</span>
		</li>
		<li>
			Attendance at <span class="highlight-yellow">[frequency]</span> project review meetings
		</li>
		<li>
			Monthly progress presentations to <span class="highlight-yellow"
				>[Main Contractor/Customer]</span
			>
		</li>
		<li>Ad-hoc reporting as reasonably requested by the Main Contractor</li>
	</ul>
</div>

<style>
	.sow-section-6 {
		margin: 1rem 0;
	}

	.sow-section-6 h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 1.5rem 0 1rem 0;
	}

	.sow-section-6 p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.sow-section-6 ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	.sow-section-6 li {
		margin-bottom: 0.75rem;
		line-height: 1.8;
	}

	.location-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.location-note p {
		margin-bottom: 0.75rem;
	}

	.location-note ul {
		margin-left: 1.5rem;
	}

	.location-note li {
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
