<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-background">
	<div class="company-header">
		<div class="logo-container">
			<div class="logo">Capgemini</div>
			<div class="confidential-badge">
				<span class="confidential-text">CONFIDENTIAL – Sec 2 – Customer restricted</span>
				<span class="sec-badge">SEC 2</span>
			</div>
		</div>
	</div>

	<div class="background-content">
		<p>
			incorporated and registered in England and Wales with company number <span
				class="highlight-yellow">[16016819]</span
			>
			whose registered office is at <span class="highlight-yellow"
				>[71-75 Shelton Street, Covent Garden, WC2H 9JQ]</span
			>
			(the "<strong>Sub-Contractor</strong>"), and <strong>CAPGEMINI UK PLC</strong> incorporated and
			registered in England and Wales with company number 00943935 whose registered office is at 95
			Queen Victoria Street, London, EC4V 4HN (the "<strong>Main Contractor</strong>" or "<strong
				>Capgemini</strong
			>").
		</p>

		<p>
			By an agreement, details (or certain details) of which are set out in Appendix A (the "<strong
				>Main Contract</strong
			>") made the <span class="highlight-yellow"
				>[date of Main Contract between Capgemini and the Customer – XX]</span
			>
			day of <span class="highlight-yellow">[Month]</span> 20XX between <span class="highlight-yellow"
				>[HSBC]</span
			>
			(the "<strong>Customer</strong>") and the Sub-Contractor, the Main Contractor took on certain
			obligations and was granted certain rights on the terms and conditions set out therein;
		</p>

		<p>
			The Main Contractor and the Sub-Contractor have entered into a governing agreement dated <span
				class="highlight-yellow"
				>[date of Framework Agreement between Capgemini and the Sub-Contractor – XX]</span
			>
			day of <span class="highlight-yellow">[October]</span> 20<span class="highlight-yellow"
				>[25]</span
			>
			("<strong>Agreement</strong>");
		</p>

		<p>
			Pursuant to the Agreement the Sub-Contractor has agreed to perform certain services described
			in section 3.1 and/or Appendix C in connection with the Work to be carried out under the Main
			Contract.
		</p>

		<p>The parties hereby agree that:</p>

		<p>
			The terms of the Agreement are expressly incorporated into and form part of this SOW together
			with any terms set out herein;
		</p>

		<p>
			All definitions contained in the Agreement shall apply to this SOW unless expressly varied to
			the contrary in this SOW.
		</p>

		<p>The Appendices below and attached hereto are incorporated into this SOW.</p>

		<p>
			In consideration of the foregoing and the promises, covenants, and agreements hereinafter set
			forth, and in further consideration of certain other valuable consideration, the receipt and
			sufficiency of which each of the Parties expressly acknowledges, the Main Contractor and
			Sub-Contractor hereby agree by, and between themselves, the terms set out below.
		</p>
	</div>
</div>

<style>
	.sow-background {
		margin: 1rem 0;
	}

	.company-header {
		margin-bottom: 1.5rem;
	}

	.logo-container {
		display: flex;
		align-items: center;
		gap: 2rem;
		padding: 1rem 0;
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

	.background-content {
		line-height: 1.8;
	}

	.background-content p {
		margin-bottom: 1rem;
		text-align: justify;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}
</style>
