<script>
	import { slide } from 'svelte/transition';
	import AppendixBReview from './AppendixBReview.svelte';
	let { formData = $bindable() } = $props();

	let collapsedClauses = $state({});

	function toggleClause(clauseId) {
		collapsedClauses[clauseId] = !collapsedClauses[clauseId];
	}
</script>

<div class="appendix-b">
	<div class="appendix-header">
		<h2>APPENDIX B</h2>
		<h3>SPECIAL TERMS FOR HSBC ENGAGEMENT</h3>
	</div>

	<div class="content">
		<!-- Review Container -->
		<AppendixBReview />

		<p class="intro precedence-note">
			To the extent of any inconsistency between Appendix A and this Appendix B, <strong
				>Appendix B shall prevail</strong
			>.
		</p>

		<!-- Clause 1: Payment Terms -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('1')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['1']}>▼</span>
				</button>
				<h4>1. Payment Terms</h4>
			</div>
			{#if !collapsedClauses['1']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						Notwithstanding anything in the MSA, for this SOW, Capgemini shall pay Cloud Lobsters in
						respect of valid invoices within <strong>one (1) Business Day</strong> of Capgemini receiving
						cleared funds from HSBC in respect of the relevant Deliverables. For the avoidance of doubt,
						no additional 30-day or other extended payment period applies. Payment is expressly conditioned
						on Capgemini having received cleared funds from HSBC; if HSBC does not pay Capgemini in respect
						of the relevant Deliverables, Cloud Lobsters shall not be entitled to payment. Capgemini shall
						not unreasonably delay passing funds through and shall provide evidence of receipt of funds
						on request.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 2: Rebates -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('2')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['2']}>▼</span>
				</button>
				<h4>2. Rebates</h4>
			</div>
			{#if !collapsedClauses['2']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						The rebate mechanism in Schedule 3 of the MSA <strong>shall not apply</strong> to this SOW.
						In addition, all revenue and fees payable under this SOW shall be excluded from any calculation
						of annual spend, rebate thresholds, volume discounts, or other incentive schemes under the
						MSA or any other agreement between the Parties. For the avoidance of doubt, rebates shall
						not apply to this Statement of Work and shall not be taken into account in any future rebate
						calculations under other Statements of Work.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 3: Intellectual Property -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('3')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['3']}>▼</span>
				</button>
				<h4>3. Intellectual Property</h4>
			</div>
			{#if !collapsedClauses['3']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>3.1 Foreground IP</h5>
						<p>
							All Foreground IP created by Cloud Lobsters under this SOW shall <strong
								>vest directly in HSBC on creation</strong
							> and the Sub-Contractor shall, at Capgemini's and/or HSBC's direction, execute such assignments
							and do such acts as are necessary to effect that vesting. Capgemini shall not obtain any
							right, title or interest in the Foreground IP other than a limited right to pass the Deliverables
							to HSBC for HSBC's use (and only to the extent necessary to permit HSBC's use).
						</p>
					</div>

					<div class="sub-clause">
						<h5>3.2 Background IP</h5>
						<p>
							Cloud Lobsters retains all right, title and interest in its Background IP. Where any
							Background IP is required for HSBC to use a Deliverable, Cloud Lobsters grants to HSBC a
							non-exclusive, royalty-free, non-transferable licence to use that Background IP for HSBC's
							own internal use of that Deliverable only; Capgemini shall not acquire any licence to
							Background IP except to the extent strictly necessary to perform its obligations to HSBC
							and only as a pass-through.
						</p>
					</div>

					<div class="sub-clause">
						<h5>3.3 Open Source</h5>
						<p>
							Cloud Lobsters may incorporate standard open-source software components under widely used
							permissive licences (for example MIT, BSD, Apache 2.0) provided such components do not
							impose obligations that restrict HSBC's use of the Deliverables. Cloud Lobsters shall
							notify Capgemini in writing of any open source components used prior to delivery. No
							warranty that Deliverables are free of all open source exists beyond the covenant above;
							Capgemini shall not treat lawful open source use as an IP breach.
						</p>
					</div>

					<div class="sub-clause">
						<h5>3.4 Source Code / Background IP Escrow</h5>
						<p>
							Cloud Lobsters shall not be required to deliver source code for Background IP except where
							the absence of such delivery would reasonably prevent HSBC from using the Deliverable. Any
							delivery of Background IP source code shall be subject to an agreed escrow arrangement
							(reasonable commercial terms) that protects Cloud Lobsters' Background IP and trade
							secrets; escrow terms shall be agreed prior to any delivery.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Clause 4: Liability & Indemnities -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('4')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['4']}>▼</span>
				</button>
				<h4>4. Liability & Indemnities</h4>
			</div>
			{#if !collapsedClauses['4']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>4.1 Liability Cap</h5>
						<p>
							For this SOW, the Sub-Contractor's aggregate liability for all claims arising under or in
							connection with this SOW shall be limited to <strong
								>one hundred and twenty-five percent (125%) of the Charges payable under this SOW</strong
							>. This cap applies on a per-SOW basis and shall not be aggregated across multiple SOWs.
							For the purposes of this cap, annual fees mean the total fees payable under this Statement
							of Work only.
						</p>
					</div>

					<div class="sub-clause">
						<h5>4.2 Exclusion of Consequential Loss</h5>
						<p>
							Notwithstanding any provision of this SOW, neither Party shall be liable to the other for
							any loss of profits, loss of business, loss of revenue, loss of goodwill, or any indirect
							or consequential loss or damage, whether arising in contract, tort (including negligence)
							or otherwise, save that this exclusion shall not apply to:
						</p>
						<ul>
							<li>(a) any sums expressly payable under this SOW; or</li>
							<li>(b) liability which cannot be excluded under applicable law.</li>
						</ul>
					</div>

					<div class="sub-clause">
						<h5>4.3 Indemnity Cap</h5>
						<p>
							All indemnities given by Cloud Lobsters under this SOW (including those incorporated from
							Appendix A) are subject to the cap in clause 4.1, except to the extent liability arises
							from fraud, wilful misconduct, death or personal injury caused by negligence, or
							liabilities that cannot be limited by applicable law.
						</p>
					</div>

					<div class="sub-clause">
						<h5>4.4 Superseding Provisions</h5>
						<p>
							The Parties acknowledge that Capgemini's MSA liability provisions (including any figures
							set out therein) are superseded by this Appendix B to the extent of any inconsistency.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Clause 5: Change Control -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('5')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['5']}>▼</span>
				</button>
				<h4>5. Change Control</h4>
			</div>
			{#if !collapsedClauses['5']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>5.1 Change Request Process</h5>
						<p>
							Either Party may propose a Change Request for this SOW. Cloud Lobsters shall have not less
							than <strong>fifteen (15) Business Days</strong> from receipt of a Change Request to assess
							and respond in writing. No Change Request shall be binding unless agreed in writing and signed
							by authorised representatives of both parties. No Change Request shall be deemed accepted
							by default.
						</p>
					</div>

					<div class="sub-clause">
						<h5>5.2 Acceptance Testing</h5>
						<p>
							Cloud Lobsters shall not be required to repeat Acceptance Tests more than <strong
								>twice</strong
							> for the same Deliverable. If, after two (2) reasonable retest cycles, Capgemini/HSBC continue
							to reject the Deliverable for reasons that are not due to gross negligence or wilful misconduct
							of Cloud Lobsters, Capgemini shall either:
						</p>
						<ul>
							<li>
								(a) accept the Deliverable subject to a reasonable price adjustment; or
							</li>
							<li>
								(b) reject the Deliverable and pay Cloud Lobsters for Services performed and
								Deliverables accepted to date, including any reasonable unwind costs.
							</li>
						</ul>
						<p>
							Cloud Lobsters' obligations for rectification shall be reasonable in scope and limited to
							defects that materially affect the Deliverable's fit for purpose.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Clause 6: Security Obligations -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('6')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['6']}>▼</span>
				</button>
				<h4>6. Security Obligations</h4>
			</div>
			{#if !collapsedClauses['6']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>6.1 Scope of Security Obligations</h5>
						<p>
							The obligations set out in Schedule 2 (Technical and Organisational Security Measures) and
							any security requirements in Appendix A shall apply to Cloud Lobsters <strong
								>only to the extent that Cloud Lobsters processes HSBC Data on Cloud Lobsters' own IT
								infrastructure</strong
							>. Where Cloud Lobsters performs all activities solely on HSBC-provided equipment
							(including VMs, laptops, and network access) and does not copy or export HSBC Data to
							Cloud Lobsters infrastructure, the technical obligations in Schedule 2 shall not apply.
						</p>
					</div>

					<div class="sub-clause">
						<h5>6.2 HSBC Infrastructure Processing</h5>
						<p>
							For this SOW, compliance with HSBC's IT security requirements shall apply only insofar as
							the Supplier processes HSBC data on its own infrastructure. Where HSBC data is processed
							exclusively on HSBC-provided machines or VMs, these obligations shall not apply.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Clause 7: Audit Rights -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('7')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['7']}>▼</span>
				</button>
				<h4>7. Audit Rights</h4>
			</div>
			{#if !collapsedClauses['7']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>For this SOW, any in-scope audit of Cloud Lobsters shall:</p>
					<ul>
						<li>
							(a) be limited to <strong>once per year</strong> (unless a regulator requires
							otherwise),
						</li>
						<li>
							(b) be preceded by at least <strong>ten (10) Business Days' written notice</strong>,
						</li>
						<li>
							(c) be limited to records and facilities directly relating to the Services under this SOW,
							and
						</li>
						<li>
							(d) expire <strong>twelve (12) months</strong> after the termination of this SOW.
						</li>
					</ul>
					<p>
						Audits shall be during normal business hours, be conducted in a manner to minimise
						operational disruption and where possible be remote. Any regulatory audits required by law
						shall be notified to Cloud Lobsters promptly and Cloud Lobsters shall be given opportunity
						to reasonably participate in the audit process.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 8: Termination -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('8')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['8']}>▼</span>
				</button>
				<h4>8. Termination</h4>
			</div>
			{#if !collapsedClauses['8']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						If HSBC terminates the prime contract, this SOW shall automatically terminate with immediate
						effect, and the Sub-Contractor shall have no claim against Capgemini save for payment for
						Sub-Contract Work completed and accepted prior to termination.
					</p>
					<p>
						Time shall not be of the essence under this SOW unless expressly agreed for a particular
						Deliverable.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 9: Insurance -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('9')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['9']}>▼</span>
				</button>
				<h4>9. Insurance</h4>
			</div>
			{#if !collapsedClauses['9']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						Cloud Lobsters shall maintain professional indemnity, public liability and employer's
						liability insurance at levels proportionate to the services under this SOW and consistent
						with SME industry practice. Specific minimum levels for this SOW are:
					</p>
					<ul>
						<li>(i) Professional Indemnity: not less than <strong>£1m</strong></li>
						<li>(ii) Public & Product Liability: not less than <strong>£1m</strong></li>
						<li>(iii) Employers Liability: <strong>£10m</strong></li>
					</ul>
					<p>
						Capgemini acknowledges that Cloud Lobsters cannot reasonably hold insurance limits equal to
						Capgemini's corporate policies and accepts these levels for the purpose of this SOW. Cloud
						Lobsters shall, on request, provide certificates of insurance.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 10: Personnel Replacement -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('10')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['10']}>▼</span>
				</button>
				<h4>10. Personnel Replacement</h4>
			</div>
			{#if !collapsedClauses['10']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>10.1 Replacement Costs</h5>
						<p>
							Capgemini/HSBC may request replacement of personnel where there is good reason (including
							security concerns or professional competence), but Cloud Lobsters shall only be liable for
							replacement costs where the replacement is due to Cloud Lobsters' fault. Where Capgemini
							or HSBC reject personnel other than for Cloud Lobsters' fault, the Parties shall agree in
							good faith how replacement costs are apportioned. Cloud Lobsters shall provide reasonable
							notice of intended personnel changes and a suitable replacement.
						</p>
					</div>

					<div class="sub-clause">
						<h5>10.2 Employment Terms</h5>
						<p>
							Nothing in this SOW shall require Cloud Lobsters to change terms of employment, nor to be
							responsible for any liability arising from Capgemini's or HSBC's decisions to remove staff
							from the engagement unrelated to Cloud Lobsters' performance.
						</p>
					</div>
				</div>
			{/if}
		</div>

		<!-- Clause 11: Interest on Overpayments -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('11')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['11']}>▼</span>
				</button>
				<h4>11. Interest on Overpayments</h4>
			</div>
			{#if !collapsedClauses['11']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						For this SOW, Clause 16.5 of the MSA is amended such that interest on any overpayment shall
						accrue at a rate equal to the <strong
							>Bank of England Base Rate minus two percent (2%), floored at zero percent (0%)</strong
						>, from the date of payment until the date of refund.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 12: Flow-Down Obligations -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('12')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['12']}>▼</span>
				</button>
				<h4>12. Flow-Down Obligations</h4>
			</div>
			{#if !collapsedClauses['12']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<p>
						Cloud Lobsters shall be bound only by those flow-down obligations from the Customer Main
						Contract that are <strong>expressly included in Appendix A</strong> as at the Effective Date.
						For the avoidance of doubt, no flow-down obligations that were not included in Appendix A as
						at the Effective Date shall apply to Cloud Lobsters unless agreed in writing by Cloud
						Lobsters after negotiation and, where applicable, Cloud Lobsters shall be entitled to an
						equitable price and timetable adjustment to implement any subsequently agreed obligation.
					</p>
				</div>
			{/if}
		</div>

		<!-- Clause 13: Miscellaneous -->
		<div class="clause-section">
			<div class="clause-header" onclick={() => toggleClause('13')}>
				<button class="collapse-btn" type="button">
					<span class="arrow" class:collapsed={collapsedClauses['13']}>▼</span>
				</button>
				<h4>13. Miscellaneous</h4>
			</div>
			{#if !collapsedClauses['13']}
				<div class="clause-content" transition:slide={{ duration: 200 }}>
					<div class="sub-clause">
						<h5>13.1 Severability</h5>
						<p>
							If any provision of this Appendix B is held to be invalid or unenforceable, that shall not
							affect the validity or enforceability of the remainder.
						</p>
					</div>

					<div class="sub-clause">
						<h5>13.2 Entire Agreement</h5>
						<p>
							This Appendix B constitutes the complete and final statement of the Parties in relation to
							the subject matter herein and supersedes any prior inconsistent representations, agreements
							or understandings in respect of the matters addressed in this Appendix B.
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.appendix-b {
		background: white;
		padding: 2rem;
	}

	.appendix-header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 3px solid #0070ad;
	}

	.appendix-header h2 {
		font-size: 24pt;
		font-weight: bold;
		margin: 0 0 0.5rem 0;
		color: #0070ad;
	}

	.appendix-header h3 {
		font-size: 14pt;
		font-weight: bold;
		margin: 0;
		color: #333;
	}

	.content {
		max-width: 800px;
		margin: 0 auto;
	}

	.precedence-note {
		background: #fff3cd;
		border-left: 4px solid #ffa500;
		padding: 1rem;
		margin: 1.5rem 0;
		font-size: 11pt;
	}

	.clause-section {
		margin: 1.5rem 0;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		overflow: hidden;
	}

	.clause-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: #f8f9fa;
		cursor: pointer;
		transition: background 0.2s;
	}

	.clause-header:hover {
		background: #e9ecef;
	}

	.clause-header h4 {
		margin: 0;
		font-size: 13pt;
		font-weight: bold;
		color: #0070ad;
	}

	.collapse-btn {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: flex;
		align-items: center;
	}

	.arrow {
		display: inline-block;
		transition: transform 0.2s;
		font-size: 12pt;
		color: #0070ad;
	}

	.arrow.collapsed {
		transform: rotate(-90deg);
	}

	.clause-content {
		padding: 1.5rem;
		background: white;
	}

	.sub-clause {
		margin: 1.5rem 0;
	}

	.sub-clause h5 {
		font-size: 11pt;
		font-weight: bold;
		margin: 0 0 0.75rem 0;
		color: #333;
	}

	p {
		margin: 0.75rem 0;
		line-height: 1.6;
		text-align: justify;
	}

	ul {
		margin: 0.75rem 0;
		padding-left: 2rem;
	}

	li {
		margin: 0.5rem 0;
		line-height: 1.6;
	}

	strong {
		font-weight: bold;
		color: #000;
	}

	.intro {
		font-size: 11pt;
		margin: 1rem 0 2rem 0;
	}
</style>
