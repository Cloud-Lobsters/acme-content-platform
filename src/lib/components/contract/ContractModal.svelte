<script>
	import { fade, fly } from 'svelte/transition';

	let {
		showModal = $bindable(),
		formData = $bindable(),
		saving = $bindable(false),
		saveError = $bindable(''),
		onSave,
		scrollToElement
	} = $props();

	function handleSubmit(e) {
		e.preventDefault();
		onSave();
	}

	function closeModal() {
		showModal = false;
	}
</script>

{#if showModal}
	<div class="modal-backdrop" transition:fade={{ duration: 200 }} onclick={closeModal}></div>
	<div class="modal" transition:fly={{ y: 50, duration: 300 }}>
		<div class="modal-content" onclick={(e) => e.stopPropagation()}>
			<div class="modal-header">
				<h2>Contract Variables</h2>
				<button class="close-btn" onclick={closeModal}>&times;</button>
			</div>

			<div class="modal-body">
				<form onsubmit={handleSubmit}>
					<section>
						<h3>Agreement Details</h3>
						<div class="form-group">
							<label for="agreementDayMonth">Agreement Day and Month:</label>
							<input
								type="text"
								id="agreementDayMonth"
								bind:value={formData.agreementDayMonth}
								placeholder="e.g., 1st January"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('agreement-date')}
									>→ Main Agreement Date</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="agreementYear">Agreement Year:</label>
							<input
								type="text"
								id="agreementYear"
								bind:value={formData.agreementYear}
								placeholder="e.g., 25"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('agreement-date')}
									>→ Main Agreement Date</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Sub-Contractor Information</h3>
						<div class="form-group">
							<label for="subContractorDetails">Sub-Contractor Details:</label>
							<textarea
								id="subContractorDetails"
								bind:value={formData.subContractorDetails}
								rows="3"
								placeholder="Full company details including registration number and address"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('parties-section')}
									>→ Parties Section</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="subContractorName">Sub-Contractor Name (Execution):</label>
							<input
								type="text"
								id="subContractorName"
								bind:value={formData.subContractorName}
								placeholder="Company name for signature section"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('execution-section')}
									>→ Execution Section</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Liability &amp; Insurance</h3>
						<div class="form-group">
							<label for="liabilityCap1">Liability Cap (Percentage):</label>
							<input
								type="text"
								id="liabilityCap1"
								bind:value={formData.liabilityCap1}
								placeholder="e.g., 125%"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('liability')}
									>→ Clause 11.1.1 (Liability)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="liabilityCap2">Liability Cap (Fixed Amount):</label>
							<input
								type="text"
								id="liabilityCap2"
								bind:value={formData.liabilityCap2}
								placeholder="e.g., £500,000"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('liability')}
									>→ Clause 11.1.2 (Liability)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="insuranceAmount">Insurance Coverage Amount:</label>
							<input
								type="text"
								id="insuranceAmount"
								bind:value={formData.insuranceAmount}
								placeholder="e.g., £2,000,000"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('liability')}
									>→ Clause 11.4 (Insurance)</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Termination</h3>
						<div class="form-group">
							<label for="terminationNoticePeriod">Termination Notice Period:</label>
							<input
								type="text"
								id="terminationNoticePeriod"
								bind:value={formData.terminationNoticePeriod}
								placeholder="e.g., 30 days'"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('term-termination')}
									>→ Clause 14.3 (Termination for Convenience)</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Statement of Work</h3>
						<div class="form-group">
							<label for="sowNumber">SOW Number:</label>
							<input
								type="text"
								id="sowNumber"
								bind:value={formData.sowNumber}
								placeholder="e.g., SOW-001"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 (SOW Template)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="sowDate">SOW Date:</label>
							<input type="date" id="sowDate" bind:value={formData.sowDate} />
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 (SOW Template)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="sowSubContractorName">SOW Sub-Contractor Name:</label>
							<input
								type="text"
								id="sowSubContractorName"
								bind:value={formData.sowSubContractorName}
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 (SOW Template)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="frameworkAgreementDate">Framework Agreement Date:</label>
							<input
								type="date"
								id="frameworkAgreementDate"
								bind:value={formData.frameworkAgreementDate}
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 (SOW Template)</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="subContractWorkDescription">Sub-Contract Work Description:</label>
							<textarea
								id="subContractWorkDescription"
								bind:value={formData.subContractWorkDescription}
								rows="4"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="deliverables">Deliverables:</label>
							<textarea id="deliverables" bind:value={formData.deliverables} rows="4"></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 2</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="keyPersonnel">Key Personnel:</label>
							<textarea id="keyPersonnel" bind:value={formData.keyPersonnel} rows="3"></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 3</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="startDate">Start Date:</label>
							<input type="date" id="startDate" bind:value={formData.startDate} />
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 4</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="endDate">End Date:</label>
							<input type="date" id="endDate" bind:value={formData.endDate} />
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 4</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="pricesPayment">Prices and Payment Terms:</label>
							<textarea id="pricesPayment" bind:value={formData.pricesPayment} rows="4"></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 5</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="performanceMetrics">Performance Metrics:</label>
							<textarea
								id="performanceMetrics"
								bind:value={formData.performanceMetrics}
								rows="3"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 6</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="customerName">Customer Name:</label>
							<input type="text" id="customerName" bind:value={formData.customerName} />
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 7</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="mainContractReference">Main Contract Reference:</label>
							<input
								type="text"
								id="mainContractReference"
								bind:value={formData.mainContractReference}
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 7</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="specialTerms">Special Terms:</label>
							<textarea id="specialTerms" bind:value={formData.specialTerms} rows="3"></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 8</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="additionalAppendices">Additional Appendices:</label>
							<textarea
								id="additionalAppendices"
								bind:value={formData.additionalAppendices}
								rows="2"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-1')}
									>→ Schedule 1 Section 9</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Data Processing Details</h3>
						<div class="form-group">
							<label for="processingSubject">Subject Matter of Processing:</label>
							<textarea
								id="processingSubject"
								bind:value={formData.processingSubject}
								rows="2"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="processingDuration">Duration of Processing:</label>
							<input
								type="text"
								id="processingDuration"
								bind:value={formData.processingDuration}
								placeholder="e.g., 'For the Term of the Statement of Work'"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="processingNature">Nature and Purpose of Processing:</label>
							<textarea
								id="processingNature"
								bind:value={formData.processingNature}
								rows="2"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="personalDataTypes">Types of Personal Data:</label>
							<textarea
								id="personalDataTypes"
								bind:value={formData.personalDataTypes}
								rows="2"
								placeholder="e.g., names, contact details, financial information"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="dataSubjectCategories">Categories of Data Subjects:</label>
							<textarea
								id="dataSubjectCategories"
								bind:value={formData.dataSubjectCategories}
								rows="2"
								placeholder="e.g., employees, customers, suppliers"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="processingOperations">Processing Operations:</label>
							<textarea
								id="processingOperations"
								bind:value={formData.processingOperations}
								rows="2"
								placeholder="e.g., collection, storage, retrieval, consultation, use, disclosure, erasure"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-2')}
									>→ Schedule 2 Appendix 1</button
								>
							</div>
						</div>
					</section>

					<section>
						<h3>Rebate Terms (Schedule 4)</h3>
						<div class="form-group">
							<label for="rebateFormula">Rebate Calculation Formula:</label>
							<textarea
								id="rebateFormula"
								bind:value={formData.rebateFormula}
								rows="2"
								placeholder="e.g., 'X% of all revenues...'"
							></textarea>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 1</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="rebateFrequency">Rebate Frequency:</label>
							<input
								type="text"
								id="rebateFrequency"
								bind:value={formData.rebateFrequency}
								placeholder="e.g., quarterly/annually"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 2</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="rebateDays1">Rebate Payment Days:</label>
							<input
								type="text"
								id="rebateDays1"
								bind:value={formData.rebateDays1}
								placeholder="e.g., 30"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 2</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="rebatePeriod">Rebate Period:</label>
							<input
								type="text"
								id="rebatePeriod"
								bind:value={formData.rebatePeriod}
								placeholder="e.g., quarter/year"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 2</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="rebateDays2">Rebate Reporting Days:</label>
							<input
								type="text"
								id="rebateDays2"
								bind:value={formData.rebateDays2}
								placeholder="e.g., 15"
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 3</button
								>
							</div>
						</div>
						<div class="form-group">
							<label for="rebateInterestRate">Rebate Interest Rate:</label>
							<input
								type="text"
								id="rebateInterestRate"
								bind:value={formData.rebateInterestRate}
							/>
							<div class="reference-links">
								<button
									type="button"
									class="ref-link"
									onclick={() => scrollToElement('schedule-4')}
									>→ Schedule 4 Section 5</button
								>
							</div>
						</div>
					</section>

					<div class="modal-footer">
						{#if saveError}
							<div class="error-message">{saveError}</div>
						{/if}
						<button type="button" class="btn-secondary" onclick={closeModal} disabled={saving}
							>Cancel</button
						>
						<button type="submit" class="btn-primary" disabled={saving}>
							{saving ? 'Saving...' : 'Save Changes'}
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1001;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1002;
		padding: 20px;
	}

	.modal-content {
		background: white;
		border-radius: 8px;
		max-width: 800px;
		width: 100%;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 30px;
		border-bottom: 1px solid #ddd;
	}

	.modal-header h2 {
		margin: 0;
		color: #0070ad;
		font-size: 24px;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 32px;
		cursor: pointer;
		color: #666;
		line-height: 1;
		padding: 0;
		width: 32px;
		height: 32px;
	}

	.close-btn:hover {
		color: #333;
	}

	.modal-body {
		overflow-y: auto;
		padding: 30px;
	}

	section {
		margin-bottom: 30px;
		padding-bottom: 20px;
		border-bottom: 1px solid #eee;
	}

	section:last-child {
		border-bottom: none;
	}

	section h3 {
		color: #0070ad;
		margin-top: 0;
		margin-bottom: 15px;
		font-size: 18px;
	}

	.form-group {
		margin-bottom: 15px;
	}

	.form-group label {
		display: block;
		margin-bottom: 5px;
		font-weight: 500;
		color: #333;
		font-size: 14px;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 8px 12px;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 14px;
		font-family: inherit;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #0070ad;
	}

	.form-group textarea {
		resize: vertical;
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 10px;
		padding: 20px 30px;
		border-top: 1px solid #ddd;
		margin-top: 20px;
	}

	.error-message {
		color: #d32f2f;
		font-size: 14px;
		margin-right: auto;
	}

	.reference-links {
		margin-top: 5px;
	}

	.ref-link {
		background: none;
		border: none;
		color: #0070ad;
		font-size: 12px;
		cursor: pointer;
		padding: 0;
		text-decoration: underline;
		font-family: inherit;
	}

	.ref-link:hover {
		color: #005a8c;
	}

	.btn-primary,
	.btn-secondary {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.2s;
	}

	.btn-primary {
		background-color: #0070ad;
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		background-color: #005a8c;
	}

	.btn-secondary {
		background-color: #666;
		color: white;
	}

	.btn-secondary:hover:not(:disabled) {
		background-color: #555;
	}

	.btn-primary:disabled,
	.btn-secondary:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
