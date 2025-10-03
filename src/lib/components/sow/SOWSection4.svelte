<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section-4">
	<p>
		The pricing and payment terms for the Sub-Contract Work are set out in Appendix B (Pricing and
		Payment Terms).
	</p>

	<p>
		Unless otherwise agreed in writing, all charges shall be invoiced monthly in arrears and
		payment shall be made within 30 days of receipt of a valid invoice.
	</p>

	<div class="payment-note">
		<p class="red-italic">
			<strong
				>Insert specific pricing structure, rates, milestones, and payment schedule. Consider
				including:</strong
			>
		</p>
		<ul class="red-italic">
			<li>Daily/hourly rates or fixed price per deliverable</li>
			<li>Payment milestones tied to deliverable acceptance</li>
			<li>Invoicing schedule and procedures</li>
			<li>Any rebates or service credits</li>
			<li>Expenses policy if applicable</li>
		</ul>
	</div>
</div>

<style>
	.sow-section-4 {
		margin: 1rem 0;
	}

	.sow-section-4 p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.payment-note {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.payment-note p {
		margin-bottom: 0.75rem;
	}

	.payment-note ul {
		margin-left: 1.5rem;
	}

	.payment-note li {
		margin-bottom: 0.5rem;
	}

	.red-italic {
		color: #d32f2f;
		font-style: italic;
	}
</style>
