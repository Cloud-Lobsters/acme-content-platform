<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ContractExplainer from '$lib/components/ContractExplainer.svelte';
	import Section1 from '$lib/components/contract/Section1.svelte';
	import Section2 from '$lib/components/contract/Section2.svelte';
	import Section3 from '$lib/components/contract/Section3.svelte';
	import Section4 from '$lib/components/contract/Section4.svelte';
	import Section5 from '$lib/components/contract/Section5.svelte';
	import Section6 from '$lib/components/contract/Section6.svelte';
	import Section7 from '$lib/components/contract/Section7.svelte';
	import Section8 from '$lib/components/contract/Section8.svelte';
	import Section9 from '$lib/components/contract/Section9.svelte';
	import Section10 from '$lib/components/contract/Section10.svelte';
	import Section11 from '$lib/components/contract/Section11.svelte';
	import Section12 from '$lib/components/contract/Section12.svelte';
	import Section13 from '$lib/components/contract/Section13.svelte';
	import Section14 from '$lib/components/contract/Section14.svelte';
	import Section15 from '$lib/components/contract/Section15.svelte';
	import Section16 from '$lib/components/contract/Section16.svelte';
	import Section17 from '$lib/components/contract/Section17.svelte';
	import Section18 from '$lib/components/contract/Section18.svelte';
	import Section19 from '$lib/components/contract/Section19.svelte';
	import Section20 from '$lib/components/contract/Section20.svelte';
	import Section21 from '$lib/components/contract/Section21.svelte';
	import Section22 from '$lib/components/contract/Section22.svelte';
	import Section23 from '$lib/components/contract/Section23.svelte';
	import Section24 from '$lib/components/contract/Section24.svelte';
	import Section25 from '$lib/components/contract/Section25.svelte';
	import Section26 from '$lib/components/contract/Section26.svelte';
	import Section27 from '$lib/components/contract/Section27.svelte';
	import Section28 from '$lib/components/contract/Section28.svelte';
	import GenericSection from '$lib/components/contract/GenericSection.svelte';
	import ContractModal from '$lib/components/contract/ContractModal.svelte';
	import SOWIntroduction from '$lib/components/sow/SOWIntroduction.svelte';
	import SOWBackground from '$lib/components/sow/SOWBackground.svelte';
	import SOWSchedule from '$lib/components/sow/SOWSchedule.svelte';
	import SOWSection3 from '$lib/components/sow/SOWSection3.svelte';
	import SOWDeliverablesTableCombined from '$lib/components/sow/SOWDeliverablesTableCombined.svelte';
	import SOWSection4 from '$lib/components/sow/SOWSection4.svelte';
	import SOWSection5 from '$lib/components/sow/SOWSection5.svelte';
	import SOWSection6 from '$lib/components/sow/SOWSection6.svelte';
	import SOWSection7to11 from '$lib/components/sow/SOWSection7to11.svelte';
	import SOWSection12 from '$lib/components/sow/SOWSection12.svelte';
	import AppendixA from '$lib/components/sow/AppendixA.svelte';
	import AppendixB from '$lib/components/sow/AppendixB.svelte';
	import Schedule2 from '$lib/components/schedules/Schedule2.svelte';
	import Schedule3 from '$lib/components/schedules/Schedule3.svelte';
	import Schedule4 from '$lib/components/schedules/Schedule4.svelte';
	import './contract-styles.css';

	let showModal = $state(false);
	let formData = $state({
		agreementDayMonth: '',
		agreementYear: '',
		subContractorDetails: '',
		liabilityCap1: '125%',
		liabilityCap2: '£500,000',
		insuranceAmount: '£2,000,000',
		terminationNoticePeriod: "30 days'",
		subContractorName: '',
		sowNumber: '',
		sowDate: '',
		sowSubContractorName: '',
		frameworkAgreementDate: '',
		subContractWorkDescription: '',
		deliverables: '',
		keyPersonnel: '',
		startDate: '',
		endDate: '',
		pricesPayment: '',
		performanceMetrics: '',
		customerName: 'HSBC',
		mainContractReference: '',
		specialTerms: '',
		additionalAppendices: '',
		processingSubject: '',
		processingDuration: '',
		processingNature: '',
		personalDataTypes: '',
		dataSubjectCategories: '',
		processingOperations: '',
		rebateFormula: '',
		rebateFrequency: '',
		rebateDays1: '',
		rebatePeriod: '',
		rebateDays2: '',
		rebateInterestRate: '4% per annum above the Bank of England base rate'
	});

	let saving = $state(false);
	let saveError = $state('');
	let currentView = $state('framework'); // 'framework', 'sow', 'appendix-a', 'appendix-b'

	// Track collapsed state for SOW sections
	let sowCollapsedSections = $state({});

	function toggleSOWSection(sectionId) {
		sowCollapsedSections[sectionId] = !sowCollapsedSections[sectionId];
	}
	let collapsedSections = $state(new Set());

	function toggleSection(sectionNumber) {
		if (collapsedSections.has(sectionNumber)) {
			collapsedSections.delete(sectionNumber);
		} else {
			collapsedSections.add(sectionNumber);
		}
		collapsedSections = new Set(collapsedSections);
	}

	function expandAll() {
		collapsedSections = new Set();
	}

	function collapseAll() {
		collapsedSections = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
	}

	onMount(async () => {
		await loadData();
	});

	async function loadData() {
		try {
			const response = await fetch('/api/contract-data');
			if (response.ok) {
				const data = await response.json();
				formData = data;
			}
		} catch (error) {
			console.error('Error loading contract data:', error);
		}
	}

	async function saveData() {
		saving = true;
		saveError = '';
		try {
			const response = await fetch('/api/contract-data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				showModal = false;
			} else {
				saveError = 'Failed to save data. Please try again.';
			}
		} catch (error) {
			console.error('Error saving contract data:', error);
			saveError = 'Failed to save data. Please try again.';
		} finally {
			saving = false;
		}
	}

	async function resetData() {
		if (confirm('Are you sure you want to reset all data?')) {
			formData = {
				agreementDayMonth: '',
				agreementYear: '',
				subContractorDetails: '',
				liabilityCap1: '125%',
				liabilityCap2: '£500,000',
				insuranceAmount: '£2,000,000',
				terminationNoticePeriod: "30 days'",
				subContractorName: '',
				sowNumber: '',
				sowDate: '',
				sowSubContractorName: '',
				frameworkAgreementDate: '',
				subContractWorkDescription: '',
				deliverables: '',
				keyPersonnel: '',
				startDate: '',
				endDate: '',
				pricesPayment: '',
				performanceMetrics: '',
				customerName: 'HSBC',
				mainContractReference: '',
				specialTerms: '',
				additionalAppendices: '',
				processingSubject: '',
				processingDuration: '',
				processingNature: '',
				personalDataTypes: '',
				dataSubjectCategories: '',
				processingOperations: '',
				rebateFormula: '',
				rebateFrequency: '',
				rebateDays1: '',
				rebatePeriod: '',
				rebateDays2: '',
				rebateInterestRate: '4% per annum above the Bank of England base rate'
			};
			await saveData();
		}
	}

	function scrollToElement(elementId) {
		showModal = false;
		setTimeout(() => {
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'center' });
				element.style.backgroundColor = '#ffeb3b';
				setTimeout(() => {
					element.style.backgroundColor = '';
				}, 2000);
			}
		}, 300);
	}
</script>

<div class="controls">
	<div class="view-toggle">
		<button
			class="btn-toggle"
			class:active={currentView === 'framework'}
			onclick={() => (currentView = 'framework')}
		>
			Framework Agreement
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'sow'}
			onclick={() => (currentView = 'sow')}
		>
			Statement of Work
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'appendix-a'}
			onclick={() => (currentView = 'appendix-a')}
		>
			Appendix A
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'appendix-b'}
			onclick={() => (currentView = 'appendix-b')}
		>
			Appendix B
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'schedule-2'}
			onclick={() => (currentView = 'schedule-2')}
		>
			Schedule 2
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'schedule-3'}
			onclick={() => (currentView = 'schedule-3')}
		>
			Schedule 3
		</button>
		<button
			class="btn-toggle"
			class:active={currentView === 'schedule-4'}
			onclick={() => (currentView = 'schedule-4')}
		>
			Schedule 4
		</button>
	</div>

	<div class="action-buttons">
		{#if currentView === 'framework'}
			<button class="btn-expand" onclick={expandAll}>Expand All</button>
			<button class="btn-collapse" onclick={collapseAll}>Collapse All</button>
		{/if}
		<button class="btn-primary" onclick={() => (showModal = true)}>Edit Contract Variables</button>
		<button class="btn-secondary" onclick={resetData}>Reset Data</button>
	</div>
</div>

<ContractModal
	bind:showModal
	bind:formData
	bind:saving
	bind:saveError
	{scrollToElement}
	onSave={saveData}
/>

{#if currentView === 'framework'}
<div class="cap-contract-wrapper">
	<div class="container">
		<div class="header">
			<div class="logo">Capgemini</div>
			<h1>FRAMEWORK SUBCONTRACT AGREEMENT</h1>
			<p><strong>Version 8 - August 2025</strong></p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>

		<div class="section">
			<h2>INSTRUCTIONS FOR COMPLETION</h2>
			<p class="guidance">
				Please delete these instructions, all guidance notes and remove all highlighting and square
				brackets, including in the schedules, before finalising this agreement.
			</p>
			<ul>
				<li>
					<span class="highlight-yellow">[Yellow Highlighting]</span> = Details are required for insertion
				</li>
				<li class="guidance">Red text = Guidance notes</li>
				<li>
					Please also read Guidance Note for Framework Subcontract Agreement [docx] prior to
					completing this agreement
				</li>
			</ul>
		</div>

		<div class="section">
			<h2>Agreement Details</h2>
			<p>
				This Framework Subcontract Agreement is made <span
					class:highlight-yellow={!formData.agreementDayMonth}
					class:highlight-green={formData.agreementDayMonth}
					>{formData.agreementDayMonth || '[insert day and month]'}</span
				>
				20<span
					class:highlight-yellow={!formData.agreementYear}
					class:highlight-green={formData.agreementYear}
					>{formData.agreementYear || '[insert year]'}</span
				>
				("<strong>Agreement</strong>")
			</p>
		</div>

		<div class="parties" id="parties-section">
			<h2>Parties</h2>
			<div class="section">
				<h3>(1) Main Contractor</h3>
				<p>
					<strong>CAPGEMINI UK PLC</strong>, (company number 00943935) a company incorporated under
					the laws of England and Wales whose registered office is at 95 Queen Victoria Street,
					London, EC4V 4HN (<strong>Main Contractor</strong>); and
				</p>
			</div>
			<div class="section">
				<h3>(2) Sub-Contractor</h3>
				<p>
					<span
						class:highlight-yellow={!formData.subContractorDetails}
						class:highlight-green={formData.subContractorDetails}
						>{formData.subContractorDetails ||
							'[Insert name of party] [of OR a company incorporated in [England and Wales] under number [insert registered number] whose registered office is at] [insert address]'}</span
					>
					(<strong>Sub-Contractor</strong>)
				</p>
			</div>
			<p>
				(each of the Main Contractor and the Sub-Contractor being a party and together the Main
				Contractor and the Sub-Contractor are the parties).
			</p>
		</div>

		<div class="section">
			<h2>Background</h2>
			<div class="clause">
				<p>
					<strong>A</strong> The Main Contractor has entered into the Main Contract (as defined below)
					to undertake the Work (as defined below).
				</p>
			</div>
			<div class="clause">
				<p>
					<strong>B</strong> The Main Contractor wishes to sub-contract the Sub-Contract Work (as defined
					below) to the Sub-Contractor and the Sub-Contractor is willing to undertake the Sub-Contract
					Work, in accordance with the terms and conditions of this Agreement.
				</p>
			</div>
			<p><strong>The parties agree:</strong></p>
		</div>

		<GenericSection
			id="definitions"
			sectionNumber={1}
			title="Definitions"
			isCollapsed={collapsedSections.has(1)}
			onToggle={() => toggleSection(1)}
		>
			{#snippet children()}
				<Section1 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="scope-agreement"
			sectionNumber={2}
			title="Scope of Agreement"
			isCollapsed={collapsedSections.has(2)}
			onToggle={() => toggleSection(2)}
		>
			{#snippet children()}
				<Section2 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="subcontractor-obligations"
			sectionNumber={3}
			title="Sub-Contractor's obligations"
			isCollapsed={collapsedSections.has(3)}
			onToggle={() => toggleSection(3)}
		>
			{#snippet children()}
				<Section3 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="warranties"
			sectionNumber={4}
			title="Warranties"
			isCollapsed={collapsedSections.has(4)}
			onToggle={() => toggleSection(4)}
		>
			{#snippet children()}
				<Section4 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="price-payment"
			sectionNumber={5}
			title="Price and payment"
			isCollapsed={collapsedSections.has(5)}
			onToggle={() => toggleSection(5)}
		>
			{#snippet children()}
				<Section5 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="progress-collaboration"
			sectionNumber={6}
			title="Progress and collaboration"
			isCollapsed={collapsedSections.has(6)}
			onToggle={() => toggleSection(6)}
		>
			{#snippet children()}
				<Section6 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="confidential-information"
			sectionNumber={7}
			title="Confidential information"
			isCollapsed={collapsedSections.has(7)}
			onToggle={() => toggleSection(7)}
		>
			{#snippet children()}
				<Section7 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="intellectual-property"
			sectionNumber={8}
			title="Ownership of intellectual property"
			isCollapsed={collapsedSections.has(8)}
			onToggle={() => toggleSection(8)}
		>
			{#snippet children()}
				<Section8 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="data-protection"
			sectionNumber={9}
			title="Data protection"
			isCollapsed={collapsedSections.has(9)}
			onToggle={() => toggleSection(9)}
		>
			{#snippet children()}
				<Section9 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="limitation-liability"
			sectionNumber={10}
			title="Limitation of liability"
			isCollapsed={collapsedSections.has(10)}
			onToggle={() => toggleSection(10)}
		>
			{#snippet children()}
				<Section10 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="termination"
			sectionNumber={11}
			title="Termination"
			isCollapsed={collapsedSections.has(11)}
			onToggle={() => toggleSection(11)}
		>
			{#snippet children()}
				<Section11 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="insurance"
			sectionNumber={12}
			title="Insurance"
			isCollapsed={collapsedSections.has(12)}
			onToggle={() => toggleSection(12)}
		>
			{#snippet children()}
				<Section12 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="anti-bribery"
			sectionNumber={13}
			title="Anti-bribery"
			isCollapsed={collapsedSections.has(13)}
			onToggle={() => toggleSection(13)}
		>
			{#snippet children()}
				<Section13 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="anti-facilitation-tax-evasion"
			sectionNumber={14}
			title="Anti-facilitation of Tax Evasion"
			isCollapsed={collapsedSections.has(14)}
			onToggle={() => toggleSection(14)}
		>
			{#snippet children()}
				<Section14 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="sustainable-procurement"
			sectionNumber={15}
			title="Sustainable procurement, environment and prevention of modern slavery"
			isCollapsed={collapsedSections.has(15)}
			onToggle={() => toggleSection(15)}
		>
			{#snippet children()}
				<Section15 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="audits-investigations"
			sectionNumber={16}
			title="Audits and investigations"
			isCollapsed={collapsedSections.has(16)}
			onToggle={() => toggleSection(16)}
		>
			{#snippet children()}
				<Section16 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="dispute-resolution"
			sectionNumber={17}
			title="Dispute resolution"
			isCollapsed={collapsedSections.has(17)}
			onToggle={() => toggleSection(17)}
		>
			{#snippet children()}
				<Section17 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="force-majeure"
			sectionNumber={18}
			title="Force majeure"
			isCollapsed={collapsedSections.has(18)}
			onToggle={() => toggleSection(18)}
		>
			{#snippet children()}
				<Section18 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="changes"
			sectionNumber={19}
			title="Changes"
			isCollapsed={collapsedSections.has(19)}
			onToggle={() => toggleSection(19)}
		>
			{#snippet children()}
				<Section19 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="entire-agreement"
			sectionNumber={20}
			title="Entire agreement"
			isCollapsed={collapsedSections.has(20)}
			onToggle={() => toggleSection(20)}
		>
			{#snippet children()}
				<Section20 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="notices"
			sectionNumber={21}
			title="Notices"
			isCollapsed={collapsedSections.has(21)}
			onToggle={() => toggleSection(21)}
		>
			{#snippet children()}
				<Section21 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="further-assurance"
			sectionNumber={22}
			title="Further assurance"
			isCollapsed={collapsedSections.has(22)}
			onToggle={() => toggleSection(22)}
		>
			{#snippet children()}
				<Section22 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="variation"
			sectionNumber={23}
			title="Variation"
			isCollapsed={collapsedSections.has(23)}
			onToggle={() => toggleSection(23)}
		>
			{#snippet children()}
				<Section23 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="assignment"
			sectionNumber={24}
			title="Assignment"
			isCollapsed={collapsedSections.has(24)}
			onToggle={() => toggleSection(24)}
		>
			{#snippet children()}
				<Section24 />
			{/snippet}
		</GenericSection>
		<GenericSection
			id="no-partnership"
			sectionNumber={25}
			title="No partnership or agency"
			isCollapsed={collapsedSections.has(25)}
			onToggle={() => toggleSection(25)}
		>
			{#snippet children()}
				<Section25 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="equitable-relief"
			sectionNumber={26}
			title="Equitable relief"
			isCollapsed={collapsedSections.has(26)}
			onToggle={() => toggleSection(26)}
		>
			{#snippet children()}
				<Section26 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="severance"
			sectionNumber={27}
			title="Severance"
			isCollapsed={collapsedSections.has(27)}
			onToggle={() => toggleSection(27)}
		>
			{#snippet children()}
				<Section27 />
			{/snippet}
		</GenericSection>

		<GenericSection
			id="waiver"
			sectionNumber={28}
			title="Waiver"
			isCollapsed={collapsedSections.has(28)}
			onToggle={() => toggleSection(28)}
		>
			{#snippet children()}
				<Section28 />
			{/snippet}
		</GenericSection>
	</div>
</div>
{:else if currentView === 'sow'}
<div class="sow-wrapper">
	<div class="container">
		<SOWIntroduction bind:formData />

		<GenericSection
			sectionNumber="1"
			title="Background"
			isCollapsed={sowCollapsedSections['1']}
			onToggle={() => toggleSOWSection('1')}
		>
			{#snippet children()}
				<SOWBackground bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="2"
			title="Schedule"
			isCollapsed={sowCollapsedSections['2']}
			onToggle={() => toggleSOWSection('2')}
		>
			{#snippet children()}
				<SOWSchedule bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="3"
			title="Scope of Sub-Contract Work"
			isCollapsed={sowCollapsedSections['3']}
			onToggle={() => toggleSOWSection('3')}
		>
			{#snippet children()}
				<SOWSection3 bind:formData />
				<SOWDeliverablesTableCombined bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="4"
			title="Pricing and Payment"
			isCollapsed={sowCollapsedSections['4']}
			onToggle={() => toggleSOWSection('4')}
		>
			{#snippet children()}
				<SOWSection4 bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="5"
			title="Key Personnel"
			isCollapsed={sowCollapsedSections['5']}
			onToggle={() => toggleSOWSection('5')}
		>
			{#snippet children()}
				<SOWSection5 bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="6"
			title="Location and Working Arrangements"
			isCollapsed={sowCollapsedSections['6']}
			onToggle={() => toggleSOWSection('6')}
		>
			{#snippet children()}
				<SOWSection6 bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="7-11"
			title="Additional Terms"
			isCollapsed={sowCollapsedSections['7-11']}
			onToggle={() => toggleSOWSection('7-11')}
		>
			{#snippet children()}
				<SOWSection7to11 bind:formData />
			{/snippet}
		</GenericSection>

		<GenericSection
			sectionNumber="12"
			title="Signatures"
			isCollapsed={sowCollapsedSections['12']}
			onToggle={() => toggleSOWSection('12')}
		>
			{#snippet children()}
				<SOWSection12 bind:formData />
			{/snippet}
		</GenericSection>

		<div class="footer">
			<p class="page-number">29</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{:else if currentView === 'appendix-a'}
<div class="sow-wrapper">
	<div class="container">
		<AppendixA bind:formData />

		<div class="footer">
			<p class="page-number">Appendix A</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{:else if currentView === 'appendix-b'}
<div class="sow-wrapper">
	<div class="container">
		<AppendixB bind:formData />

		<div class="footer">
			<p class="page-number">Appendix B</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{:else if currentView === 'schedule-2'}
<div class="sow-wrapper">
	<div class="container">
		<Schedule2 bind:formData />

		<div class="footer">
			<p class="page-number">Schedule 2</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{:else if currentView === 'schedule-3'}
<div class="sow-wrapper">
	<div class="container">
		<Schedule3 bind:formData />

		<div class="footer">
			<p class="page-number">Schedule 3</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{:else if currentView === 'schedule-4'}
<div class="sow-wrapper">
	<div class="container">
		<Schedule4 bind:formData />

		<div class="footer">
			<p class="page-number">Schedule 4</p>
			<p class="footer-text">Capgemini Framework Subcontract Agreement v8 August 2025</p>
			<p class="copyright">Copyright © 2025 Capgemini. All rights reserved.</p>
		</div>
	</div>
</div>
{/if}

<style>
	.controls {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.view-toggle {
		display: flex;
		gap: 5px;
		background: white;
		border-radius: 8px;
		padding: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.btn-toggle {
		padding: 8px 16px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 13px;
		font-weight: 500;
		background: transparent;
		color: #666;
		transition: all 0.2s;
	}

	.btn-toggle:hover {
		background: #f0f0f0;
		color: #333;
	}

	.btn-toggle.active {
		background: #0070ad;
		color: white;
	}

	.action-buttons {
		display: flex;
		gap: 10px;
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

	.btn-primary:hover {
		background-color: #005a8c;
	}

	.btn-secondary {
		background-color: #666;
		color: white;
	}

	.btn-secondary:hover {
		background-color: #555;
	}

	.btn-expand {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.2s;
		background-color: #28a745;
		color: white;
	}

	.btn-expand:hover {
		background-color: #218838;
	}

	.btn-collapse {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		transition: all 0.2s;
		background-color: #dc3545;
		color: white;
	}

	.btn-collapse:hover {
		background-color: #c82333;
	}

	.cap-contract-wrapper {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.document-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		background-color: #f5f5f5;
		padding-top: 80px;
	}

	.document-header {
		background: linear-gradient(135deg, #0070ad 0%, #005a8a 100%);
		color: white;
		padding: 3rem 2rem;
		text-align: center;
		border-bottom: 4px solid #004d73;
	}

	.logo {
		font-size: 2.5rem;
		font-weight: bold;
		font-style: italic;
		margin-bottom: 1rem;
		letter-spacing: 1px;
	}

	.document-header h1 {
		font-size: 2rem;
		margin: 1rem 0;
		font-weight: 600;
	}

	.version {
		font-size: 1.1rem;
		opacity: 0.9;
		margin-top: 0.5rem;
	}

	.document-content {
		padding: 3rem;
		line-height: 1.8;
		color: #333;
	}

	section {
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e0e0e0;
	}

	section:last-child {
		border-bottom: none;
	}

	h2 {
		color: #0070ad;
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #0070ad;
	}

	h3 {
		color: #005a8a;
		font-size: 1.4rem;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	h4 {
		color: #444;
		font-size: 1.2rem;
		margin-top: 1.5rem;
		margin-bottom: 0.8rem;
	}

	p {
		margin-bottom: 1rem;
		text-align: justify;
	}

	ul,
	ol {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.75rem;
		line-height: 1.8;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}

	:global(.cap-contract-wrapper .highlight-green) {
		background-color: #90ee90;
		padding: 2px 4px;
	}

	:global(.cap-contract-wrapper .comment) {
		background-color: #fff3cd;
		border-left: 4px solid #ffc107;
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 4px;
		font-style: italic;
	}

	.note-red {
		color: #d32f2f;
		font-style: italic;
	}

	.parties-section {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 8px;
		border: 2px solid #0070ad;
	}

	.party {
		margin-bottom: 1.5rem;
		padding: 1rem;
		background: white;
		border-radius: 4px;
	}

	.content-block {
		background: #f9f9f9;
		padding: 1.5rem;
		border-radius: 6px;
		margin: 1.5rem 0;
	}

	.interpretation-list li {
		padding-left: 1rem;
		position: relative;
	}

	.interpretation-list li::before {
		content: '▸';
		position: absolute;
		left: -1rem;
		color: #0070ad;
		font-weight: bold;
	}

	.schedule-note {
		background: #e3f2fd;
		padding: 1.5rem;
		border-radius: 6px;
		margin: 1.5rem 0;
		border-left: 4px solid #0070ad;
	}

	.sow-content {
		background: #fafafa;
		padding: 2rem;
		border-radius: 6px;
		margin: 1.5rem 0;
	}

	.materials-table-wrapper {
		margin: 1.5rem 0;
		overflow-x: auto;
	}

	.materials-table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		overflow: hidden;
	}

	.materials-table thead {
		background: linear-gradient(135deg, #0070ad 0%, #005a8a 100%);
		color: white;
	}

	.materials-table th {
		padding: 1rem;
		text-align: left;
		font-weight: 600;
		font-size: 0.95rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.materials-table td {
		padding: 1rem;
		border-bottom: 1px solid #e0e0e0;
		font-size: 0.95rem;
	}

	.materials-table tbody tr:hover {
		background-color: #f8f9fa;
	}

	.materials-table tbody tr:last-child td {
		border-bottom: none;
	}

	.important-notice {
		background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
		border-left: 6px solid #ffc107;
		padding: 2rem;
		margin: 2rem 0;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);
	}

	.important-notice h5 {
		color: #d68910;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		margin-top: 0;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.important-notice ul {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	.important-notice li {
		margin-bottom: 0.75rem;
		color: #333;
	}

	.important-notice code {
		background: rgba(0, 0, 0, 0.1);
		padding: 2px 6px;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.signature-block {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-top: 3rem;
		padding: 2rem;
		background: #f8f9fa;
		border-radius: 8px;
	}

	.signature-column {
		padding: 1.5rem;
		background: white;
		border-radius: 6px;
		border: 1px solid #ddd;
	}

	.signature-column p {
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.document-footer {
		background: #2c3e50;
		color: white;
		padding: 2rem;
		text-align: center;
		font-size: 0.9rem;
	}

	.document-footer p {
		margin: 0.5rem 0;
		text-align: center;
	}

	.execution-section {
		background: #f0f4f8;
		padding: 2rem;
		border-radius: 8px;
		margin-top: 2rem;
	}

	strong {
		color: #2c3e50;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.capgemini-contract-container {
			padding: 1rem;
		}

		.document-content {
			padding: 1.5rem;
		}

		.document-header {
			padding: 2rem 1rem;
		}

		.logo {
			font-size: 2rem;
		}

		.document-header h1 {
			font-size: 1.5rem;
		}

		.signature-block {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		h3 {
			font-size: 1.2rem;
		}
	}

	.sow-wrapper {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
	}

	.footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid #0070ad;
		text-align: center;
	}

	.footer .page-number {
		font-size: 1rem;
		color: #333;
		margin-bottom: 0.5rem;
	}

	.footer .footer-text {
		font-size: 0.9rem;
		color: #666;
		margin: 0.25rem 0;
	}

	.footer .copyright {
		font-size: 0.85rem;
		color: #999;
		margin-top: 0.25rem;
	}

	@media print {
		.capgemini-contract-container {
			background: white;
			padding: 0;
		}

		.document-wrapper {
			box-shadow: none;
		}

		section {
			page-break-inside: avoid;
		}

		.controls {
			display: none;
		}
	}
</style>
