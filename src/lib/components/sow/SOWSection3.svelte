<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-section-3">
	<p>
		The Sub-Contractor shall perform the Sub-Contract Work as described in section 3.1 and/ or
		Appendix C to the Main Contractor's and/or Customer's reasonable satisfaction.
	</p>

	<h4>3.1. Deliverables and Acceptance Criteria</h4>

	<p>
		The Sub-Contractor will have exclusive control over the means, method and details of fulfilling
		the Deliverables detailed in the SOW. The Sub-Contractor shall complete the following
		Deliverables to the Main Contractor's and/or Customer's reasonable satisfaction in accordance
		with the requirements of this SOW and the due dates and acceptance criteria specified below:
	</p>

	<div class="red-section">
		<p>
			<strong class="red-italic"
				>DELIVERABLE NAMES AND DESCRIPTIONS – Provide a complete list of all quantifiable
				services/deliverables/outputs/specifications to be completed by the Sub-Contractor. Ensure
				that this is <span class="underline">sufficiently detailed</span> so that any 3<sup>rd</sup> party
				would be able understand exactly what is required. For example, if a report/presentation is required,
				please define what is expected from the report/presentation such as: format; length; level of
				detail; key outputs; key conclusions; etc.</strong
			>
		</p>
		<p class="red-italic">
			Main Contract between <span class="underline">Capgemini</span> and our Customer may help to
			guide deliverables detail.
		</p>
		<p class="red-italic">
			NOTE – Wording such as "assist", "support", "contribute to" is not appropriate to include in
			Deliverables – suppliers must be fully accountable for delivery of all of their designated
			outputs.
		</p>
	</div>

	<div class="red-section">
		<p>
			<strong class="red-italic"
				>ACCEPTANCE CRITERIA – Provide a full description of what would be classed as acceptable to
				<span class="underline">Capgemini / Customer</span>. Will you be able to, without question,
				deliver <span class="underline">Capgemini's</span> obligations to our Customer based on what
				has been delivered to you by the Sub-Contractor, and how will you judge that this is the case?
				For example, if completion of a piece of coding is required this code may need to successfully
				migrate into a test or live environment.</strong
			>
		</p>
		<p class="red-italic">
			NOTE – "Accepted by <span class="underline">Capgemini</span>", "Accepted by the Customer",
			"Approved by PM" etc. is not acceptance criteria – please define the specific criteria against
			which <span class="underline">Capgemini</span> will judge successful delivery.
		</p>
		<p class="red-italic">
			Acceptance Criteria from the Main Contract between <span class="underline">Capgemini</span> and
			our Customer may help to guide acceptance criteria.
		</p>
	</div>

	<div class="red-section">
		<p class="red-italic">
			<strong
				>Due Dates – For longer term services and/or services including multiple outputs, it is
				expected that Deliverables would likely be staggered throughout the term of the SOW with some
				Deliverables having dependencies on others. ie. we should not be in receipt of multiple
				Deliverables over a long-term SOW with all deliverable due dates on the last day of the SOW
				term.</strong
			>
		</p>
	</div>

	<p class="workstream">
		<span class="underline">Workstream-1</span>: Template Compliance Assessment
	</p>
</div>

<style>
	.sow-section-3 {
		margin: 1rem 0;
	}

	.sow-section-3 h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 1.5rem 0 1rem 0;
	}

	.sow-section-3 p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.red-section {
		background: #fff5f5;
		border-left: 4px solid #d32f2f;
		padding: 1.5rem;
		margin: 1.5rem 0;
	}

	.red-section p {
		color: #d32f2f;
		margin-bottom: 1rem;
	}

	.red-section p:last-child {
		margin-bottom: 0;
	}

	.red-italic {
		font-style: italic;
	}

	.underline {
		text-decoration: underline;
	}

	.workstream {
		margin-top: 2rem;
		font-weight: 500;
	}

	sup {
		font-size: 0.75em;
		vertical-align: super;
	}
</style>
