<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section-12">
	<h3>12. Signatures</h3>

	<p>
		This Statement of Work is executed and forms a binding agreement between the Parties as of the
		date set out in the Introduction.
	</p>

	<div class="signature-block">
		<div class="signature-party">
			<h4>For and on behalf of the Main Contractor:</h4>
			<div class="signature-field">
				<p><strong>CAPGEMINI UK PLC</strong></p>
				<div class="sign-line">
					<label>Signature:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Name:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Title:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Date:</label>
					<div class="line"></div>
				</div>
			</div>
		</div>

		<div class="signature-party">
			<h4>For and on behalf of the Sub-Contractor:</h4>
			<div class="signature-field">
				<p><strong><span class="highlight-yellow">[Sub-Contractor Legal Name]</span></strong></p>
				<div class="sign-line">
					<label>Signature:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Name:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Title:</label>
					<div class="line"></div>
				</div>
				<div class="sign-line">
					<label>Date:</label>
					<div class="line"></div>
				</div>
			</div>
		</div>
	</div>

	<div class="appendices-note">
		<h4>Appendices (if applicable):</h4>
		<ul>
			<li>Appendix A - Main Contract Details</li>
			<li>Appendix B - Pricing and Payment Terms</li>
			<li>Appendix C - Additional Technical Specifications</li>
			<li>Appendix D - Data Processing Agreement (if required)</li>
		</ul>
		<div class="guidance-note">
			<p class="red-italic">
				<strong
					>Attach any relevant appendices. Delete appendices that are not applicable to this
					SOW.</strong
				>
			</p>
		</div>
	</div>

	<div class="final-note">
		<p><strong>END OF STATEMENT OF WORK</strong></p>
	</div>
</div>

<style>
	.sow-section-12 {
		margin: 1rem 0;
	}

	h3 {
		color: #0070ad;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #0070ad;
	}

	h4 {
		color: #0070ad;
		font-size: 1.1rem;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.signature-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin: 2rem 0;
		padding: 2rem;
		background: #f8f9fa;
		border-radius: 8px;
		border: 1px solid #dee2e6;
	}

	.signature-party {
		padding: 1rem;
		background: white;
		border-radius: 6px;
		border: 1px solid #ddd;
	}

	.signature-party h4 {
		margin-top: 0;
		margin-bottom: 1.5rem;
		color: #333;
		font-size: 1rem;
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: 0.5rem;
	}

	.signature-field p {
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.sign-line {
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
		gap: 1rem;
	}

	.sign-line label {
		font-weight: 500;
		min-width: 80px;
		color: #333;
	}

	.sign-line .line {
		flex: 1;
		border-bottom: 1px solid #666;
		height: 1px;
		min-height: 30px;
	}

	.appendices-note {
		margin: 3rem 0 2rem 0;
		padding: 1.5rem;
		background: #f8f9fa;
		border-radius: 6px;
	}

	.appendices-note h4 {
		margin-top: 0;
	}

	.appendices-note ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	.appendices-note li {
		margin-bottom: 0.5rem;
		line-height: 1.6;
	}

	.guidance-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1rem;
		margin-top: 1rem;
	}

	.guidance-note p {
		margin-bottom: 0;
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

	.final-note {
		text-align: center;
		margin: 3rem 0 2rem 0;
		padding: 1.5rem;
		background: #e8f4f8;
		border-top: 3px solid #0070ad;
		border-bottom: 3px solid #0070ad;
	}

	.final-note p {
		margin: 0;
		font-size: 1.1rem;
		letter-spacing: 1px;
	}

	@media (max-width: 768px) {
		.signature-block {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
