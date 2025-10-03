<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section">
	<h2>Schedule 1</h2>
	<h1 class="sow-title">STATEMENT OF WORK</h1>

	<div class="instructions">
		<h3>Instructions for completion:</h3>
		<ul>
			<li>
				<span class="italic"
					>Please delete these instructions and all guidance notes throughout the SOW and remove
					all highlighting and square brackets before finalising this SOW</span
				>
			</li>
			<li>
				<span class="highlight-yellow">[Yellow Highlighting]</span> = <span class="red-text italic"
					>Details are required for insertion</span
				>
			</li>
			<li><span class="red-text italic">Red text = Guidance notes</span></li>
			<li>
				<span class="italic"
					>Please also read <a href="#" class="link">Guidance Note for Framework Subcontract Agreement [docx]</a> prior to completing this SOW</span
				>
			</li>
		</ul>

		<div class="note-box">
			<strong>NOTE</strong> – please do not include any IR35 wording in this SOW – IR35 provisions are dealt
			with at Framework Agreement level. Please refer to the UK ERPSTN Procurement Team for further
			details.
		</div>

		<p class="italic">
			This template Statement of Work is only to be used where there is an existing Framework
			Subcontract Agreement in place. It cannot be used with other forms of agreement.
		</p>
	</div>

	<div class="introduction-section">
		<h3>Introduction</h3>
		<p>
			This Statement of Work (hereinafter referred to as the "<strong>SOW</strong>") is executed
			and entered into effective as of the <span class="highlight-yellow">[10]</span> day of
			<span class="highlight-yellow">[October]</span> 2025 by and between
			<strong>Cloud Lobsters Ltd</strong>
		</p>
	</div>
</div>

<style>
	.sow-section {
		padding: 2rem 0;
	}

	.sow-title {
		color: #0070ad;
		font-size: 2rem;
		text-align: center;
		margin: 1rem 0 2rem 0;
		border-bottom: 3px solid #0070ad;
		padding-bottom: 1rem;
	}

	h2 {
		text-align: center;
		color: #333;
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}

	.instructions {
		background: #fff9f0;
		border-left: 4px solid #ff9800;
		padding: 1.5rem;
		margin: 2rem 0;
	}

	.instructions h3 {
		color: #d32f2f;
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.instructions ul {
		margin-left: 1.5rem;
	}

	.instructions li {
		margin-bottom: 0.75rem;
	}

	.note-box {
		background: #fff3cd;
		border: 1px solid #ffc107;
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 4px;
	}

	.note-box strong {
		color: #d32f2f;
	}

	.introduction-section {
		margin-top: 2rem;
	}

	.introduction-section h3 {
		color: #0070ad;
		font-size: 1.4rem;
		margin-bottom: 1rem;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}

	.red-text {
		color: #d32f2f;
	}

	.italic {
		font-style: italic;
	}

	.link {
		color: #0070ad;
		text-decoration: underline;
	}

	.link:hover {
		color: #005a8c;
	}
</style>
