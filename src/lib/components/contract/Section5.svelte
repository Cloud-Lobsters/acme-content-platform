<script>
	import ContractExplainer from '$lib/components/ContractExplainer.svelte';
</script>

<ContractExplainer
	title="Section 5: Price and Payment"
	reference="This section governs all financial aspects of the agreement: how much Cloud Lobsters gets paid, when payment occurs, invoicing requirements, and various financial risks and deductions that Capgemini can impose."
	summary="Cloud Lobsters will be paid according to the Statement of Work, with monthly invoicing in arrears and payment due within 30 days. However, there are significant catches: (1) Payment is conditional on Capgemini receiving payment from HSBC first (pay-when-paid), (2) Cloud Lobsters must pay back any amounts HSBC refuses to pay or claims back, (3) Capgemini can deduct from payments for tax claims, overpayments, and 'rebates', (4) Invoices require valid Purchase Order numbers or won't be paid, and (5) Cloud Lobsters bears all IR35 tax risk and must indemnify Capgemini for any tax liabilities."
	risks={[
		"Pay-when-paid clause (5.5): Cloud Lobsters only gets paid if HSBC pays Capgemini first - creates significant cash flow risk",
		"Unlimited indemnity for customer refusal (5.4): If HSBC refuses to pay for work, Cloud Lobsters must refund Capgemini even if the work was done correctly",
		"IR35 liability transfer (5.9-5.12): Cloud Lobsters bears all tax risk and must indemnify Capgemini for any IR35 assessments, which could be substantial",
		"Unilateral deduction rights (5.12, 5.14): Capgemini can deduct 'overpayments' and indemnity amounts from future payments without Cloud Lobsters' agreement",
		"Purchase Order requirement (5.2-5.3): Invoices won't be paid without valid PO number - could delay payment if Capgemini's internal process is slow",
		"Fixed price risk (5.1): Prices are fixed for the Term with no inflation adjustment or variation mechanism except by mutual agreement (5.7)",
		"Rebates obligation (5.13): Cloud Lobsters must pay unspecified 'Rebates' calculated per Schedule 4 - unclear what these could be",
		"Acceptance requirement (5.6): Payment contingent on written acceptance of Deliverables - Capgemini could delay acceptance indefinitely"
	]}
	amendments={[
		{
			text: "Remove pay-when-paid: Replace 5.5 with 'Payment of the Prices by the Main Contractor is strictly subject to the Sub-Contractor performing its obligations under this Agreement satisfactorily and within the time scales set by the Main Contractor.' Delete reference to Capgemini receiving payment from Customer.",
			clauseRef: '5.5'
		},
		{
			text: "Cap indemnity to actual fault: Modify 5.4 to only apply 'where such refusal, claim or requirement arises directly from the Sub-Contractor's breach of this Agreement or negligent performance'",
			clauseRef: '5.4'
		},
		{
			text: "Add payment guarantee: Insert new clause 'If the Customer fails to pay the Main Contractor for reasons unrelated to the Sub-Contractor's performance, the Main Contractor shall nonetheless pay the Sub-Contractor within 60 days of invoice date.'",
			clauseRef: '5.5'
		},
		{
			text: "Limit IR35 indemnity: Modify 5.9 to exclude liability for 'any changes in tax legislation or HMRC interpretation occurring after the Commencement Date that could not reasonably have been anticipated'",
			clauseRef: '5.9'
		},
		{
			text: "Add deduction notice requirement: Modify 5.12 to require '14 days prior written notice before any deduction, with opportunity for Sub-Contractor to dispute the deduction amount'",
			clauseRef: '5.12'
		},
		{
			text: "Add acceptance timeline: Modify 5.6 to 'Deliverables shall be deemed accepted if the Main Contractor does not provide written rejection with specific defects within 10 Business Days of delivery'",
			clauseRef: '5.6'
		},
		{
			text: "Clarify 'overpayments': Add definition limiting 5.14 to 'clear accounting errors' and excluding disputed amounts or interpretation differences",
			clauseRef: '5.14'
		}
	]}
/>

<p id="5.1">
		<strong>5.1</strong> The Main Contractor shall pay to the Sub-Contractor the Price set out in
		the Statement of Work for the Sub-Contract Work in accordance with the timetable in the
		Statement of Work together with any applicable VAT. Unless otherwise specified in the Statement
		of Work, the Subcontractor shall invoice the Price monthly in arrears. The Main Contractor shall
		make payment of undisputed and validly invoiced sums no later than 30 days after receipt of an
		invoice. Unless otherwise specified in the Statement of Work, the Prices are fixed and firm for
		the Term and are the only charges payable for the Sub-Contract Work, Deliverables and
		performance of all other obligations of the Sub-Contractor under the Statement of Work.
	</p>

	<p>
		<strong>5.2</strong> The Sub-Contractor shall comply with the Main Contractor's purchase order
		mandatory policy, namely that Purchase Orders are only deemed valid if they include a Purchase
		Order number generated through GPS ("Purchase Order Number").
	</p>

	<p>
		<strong>5.3</strong> The Main Contractor will only pay invoices that can be referenced to a
		valid Purchase Order Number.
	</p>

	<p id="5.4"><strong>5.4</strong> If the Customer:</p>
	<div class="sub-clause">
		<p>
			<strong>5.4.1</strong> refuses to pay the Main Contractor for any of the Sub-Contract Work
			undertaken by the Sub-Contractor under this Agreement;
		</p>
		<p>
			<strong>5.4.2</strong> claims money back from the Main Contractor in respect of any of the
			Sub-Contract Work; and/or
		</p>
		<p>
			<strong>5.4.3</strong> requires that any or all of the Sub-Contract Work undertaken by the
			Sub-Contractor be performed again to such a standard as it may reasonably require under the
			Main Contract;
		</p>
	</div>
	<p>
		the Sub-Contractor shall indemnify and keep indemnified the Main Contractor from any and all
		Losses suffered or incurred by it.
	</p>

	<p id="5.5">
		<strong>5.5</strong> Payment of the Prices by the Main Contractor is strictly subject to the
		Sub-Contractor performing its obligations under this Agreement satisfactorily and within the
		time scales set by the Main Contractor and the Main Contractor having received payment by the
		Customer.
	</p>

	<p id="5.6">
		<strong>5.6</strong> The Main Contractor shall not be deemed to have accepted the Deliverables
		until it has had done so in writing.
	</p>

	<p>
		<strong>5.7</strong> In addition to the Sub-Contract Work to be provided by the Sub-Contractor
		in connection with a Statement of Work, the Main Contractor may require additional services to
		be provided. These services shall be at a price to be agreed between the parties in advance of
		their supply.
	</p>

	<p>
		<strong>5.8</strong> The Sub-Contractor acknowledges that the Main Contractor will not be
		operating PAYE or making or deducting any national insurance contributions in respect of the
		provision of the Services and the Prices payable under this Agreement.
	</p>

	<p id="5.9">
		<strong>5.9</strong> The Sub-Contractor acknowledges that it is an "end user" for the purposes
		of the IR35 legislation rules and that it will therefore issue a status determination to all
		workers and other relevant parties within the supply chain where required to do so. The parties
		agree that the Main Contractor is not an end user for these purposes and the Sub-Contractor will
		indemnify the Main Contractor against all and any liability, assessment or claim together with
		all costs and expenses and any penalty, fine or interest incurred or payable or paid by the Main
		Contractor (and/or its Affiliates) in connection with or in consequence of failure by the
		Sub-Contractor or any of its subcontractors to comply with its or their obligations under the
		IR35 rules (including those in respect of being a "Fee Payer") insofar as they relate to the
		operation of this Agreement.
	</p>
	<p class="comment">
		<strong>Drafting Note to be deleted:</strong> Where clauses 4.3 and 4.4 are not used, Clause 5.9
		should be included.
	</p>

	<p>
		<strong>5.10</strong> The Sub-Contractor will, as far as is required by law, be responsible for
		and will account to the appropriate authorities for all income tax liabilities and national
		insurance or similar contributions and any other liability, deduction, contribution, assessment
		or claim arising from or made in connection with fees paid and/or benefits provided as a result
		of the performance of the Services and/or any payment or benefit received by the individual in
		respect of the Services.
	</p>

	<p>
		<strong>5.11</strong> If any claim, assessment or demand is made against the Main Contractor
		(and/or its Affiliates) for payment of income tax or national insurance contributions or other
		similar contributions due in connection with either the performance of the Services or any
		payment or benefit received by the Sub-Contractor and/or the individual in respect of the
		Services, the Sub-Contractor will, where such recovery is not prohibited by law, indemnify the
		Main Contractor (and/or its Affiliates) against any liability, assessment or claim together with
		all costs and expenses and any penalty, fine or interest incurred or payable or paid by the Main
		Contractor (and/or its Affiliates) in connection with or in consequence of any such liability,
		assessment or claim.
	</p>

	<p id="5.12">
		<strong>5.12</strong> The Main Contractor (and/or its Affiliates may, at its sole discretion,
		satisfy the indemnities referred to in Clause 5.11 above (in whole or in part) by way of
		deduction from any payments to be made by the Main Contractor to the Sub-Contractor under this
		Agreement.
	</p>

	<p id="5.13">
		<strong>5.13</strong> The Sub-Contractor will pay to the Main Contractor any and all Rebates
		calculated and owed pursuant to Schedule 4.
	</p>

	<p id="5.14">
		<strong>5.14</strong> Main Contractor reserves the right to deduct any overpayments from any
		monies due or which may become due on any account to Sub-Contractor or may recover such
		overpayment as a debt.
	</p>
