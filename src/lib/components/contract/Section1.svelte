<script>
	import ContractExplainer from '$lib/components/ContractExplainer.svelte';
</script>

<ContractExplainer
	title="Section 1: Definitions and Interpretation"
	reference="This section defines all the key terms used throughout the Framework Subcontract Agreement and establishes the rules for how the contract should be interpreted."
	summary="Section 1 is the contract's 'glossary'. It defines important terms like 'Main Contract' (the agreement between Capgemini and HSBC), 'Sub-Contract Work' (the specific work Cloud Lobsters will do), 'Deliverables' (what Cloud Lobsters must provide), 'Losses' (what damages could be claimed), and many others. The interpretation rules (1.2) explain how to read legal language in the contract - for example, that lists are not exhaustive and that references to laws include future amendments."
	risks={[
		"Broad definition of 'Losses' includes consequential damages, loss of profit, and reputational damage with no limits",
		"'Good Industry Practice' is subjective and could be interpreted more strictly by Capgemini/HSBC",
		"'Default' definition is very broad and includes acts of subcontractors Cloud Lobsters may not fully control",
		"'Affiliate' definition could bind Cloud Lobsters to obligations regarding related companies",
		"Automatic incorporation of future legislative changes (1.2.10) could increase compliance burdens",
		"Interpretation rules (1.2.8) make all lists non-exhaustive, allowing Capgemini to claim items not explicitly listed",
		"Order of precedence (1.3) puts Statement of Work first, allowing individual SOWs to override protections in main agreement"
	]}
	amendments={[
		{
			text: "Cap 'Losses' definition: Add 'subject to the limitations set out in Clause [Liability]' to prevent unlimited liability",
			clauseRef: "1.1"
		},
		{
			text: "Clarify 'Good Industry Practice': Add 'as practiced by companies of similar size and resources to Cloud Lobsters' to prevent unrealistic standards",
			clauseRef: "1.1"
		},
		{
			text: "Limit 'Default' to direct actions: Modify to exclude liability for subcontractors approved by Capgemini",
			clauseRef: "1.1"
		},
		{
			text: "Add materiality threshold: Insert 'In case of ambiguity, contract terms shall be construed against the drafter (contra proferentem rule)'",
			clauseRef: "1.2"
		},
		{
			text: "Protect against SOW override: Add to 1.3 'provided that no Statement of Work shall reduce Cloud Lobsters' protections or increase liabilities beyond those in the main Agreement without express written consent'",
			clauseRef: "1.3"
		}
	]}
/>

<p id="1.1"><strong>1.1</strong> In this Agreement:</p>

	<table class="definition-table">
		<thead>
			<tr>
				<th>Term</th>
				<th>Definition</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Affiliate</strong></td>
				<td
					>means in relation to a party to this Agreement, any subsidiary companies of that party,
					any parent of that party and subsidiary companies of such parent and any companies that
					the party: (i) directly or indirectly, controls or is controlled by; (ii) is under common
					control with; or (iii) has a significant equity interest in;</td
				>
			</tr>
			<tr>
				<td><strong>Applicable Data Protection Legislation</strong></td>
				<td
					>means any applicable data protection regulation that may apply in the context of the
					Agreement and in particular (i) the European Regulation n° 2016/679 relating to the
					processing of Personal Data (GDPR); (ii) any implementing laws of the GDPR (including but
					not limited to the UK GDPR and the Data Protection Act 2018); and (iii) any regulation
					relating to the processing of Personal Data applicable during the term of the Agreement.</td
				>
			</tr>
			<tr>
				<td><strong>Applicable Law</strong></td>
				<td
					>means laws, rules, regulations, regulatory guidance, regulatory requirements, policy,
					guideline, or case law of the relevant jurisdiction from time to time having the force of
					law and in the case of the Sub-Contractor are relevant to the provision, receipt or use of
					the Services;</td
				>
			</tr>
			<tr>
				<td><strong>Background IPR</strong></td>
				<td>has the meaning given in clause 8.1;</td>
			</tr>
			<tr>
				<td><strong>Bribery Laws</strong></td>
				<td
					>means the Bribery Act 2010 and associated guidance published by the Secretary of State
					for Justice under the Bribery Act 2010 and all other applicable United Kingdom laws,
					legislation, statutory instruments and regulations in relation to bribery or corruption and
					any similar or equivalent laws in any other relevant jurisdiction;</td
				>
			</tr>
			<tr>
				<td><strong>Business Day</strong></td>
				<td>means a day other than a Saturday, Sunday or bank or public holiday in England;</td>
			</tr>
			<tr>
				<td><strong>Commencement Date</strong></td>
				<td
					>means the date at the head of this Agreement or where no such date is set out, the date
					of the last signature to this Agreement;</td
				>
			</tr>
			<tr>
				<td><strong>Confidential Information</strong></td>
				<td>has the meaning given in clause 7.1;</td>
			</tr>
			<tr>
				<td><strong>Customer</strong></td>
				<td>means the customer under the main contract as detailed in the Statement of Work;</td>
			</tr>
			<tr>
				<td><strong>Data Controller</strong></td>
				<td
					>means the natural or legal person, public authority, agency or other body which
					determines the purposes and means of the processing of Personal Data;</td
				>
			</tr>
			<tr>
				<td><strong>Data Processor</strong></td>
				<td>means the entity acting on behalf of the Data Controller;</td>
			</tr>
			<tr>
				<td><strong>Data Subject</strong></td>
				<td
					>means an identified or identifiable natural person. An identifiable natural person is one
					who can be identified, directly or indirectly, in particular by reference to an identifier
					such as a name, an identification number, location data, an online identifier or to one or
					more factors specific to the physical, physiological, genetic, mental, economic, cultural
					or social identity of that natural person;</td
				>
			</tr>
			<tr>
				<td><strong>Default</strong></td>
				<td
					>means any breach of the obligations of either party or any actionable default, act,
					omission, negligence or statement of either party, agents or sub-contractors of either
					party in connection with or in relation to the subject matter of this Agreement and in
					respect of which such party is liable to the other.</td
				>
			</tr>
			<tr>
				<td><strong>Deliverables</strong></td>
				<td
					>any deliverables to be provided as part of the Sub-Contract Work including those
					deliverables specified in a Statement of Work;</td
				>
			</tr>
			<tr>
				<td><strong>Force Majeure</strong></td>
				<td
					>means an event beyond a party's reasonable control that could not have been reasonably
					anticipated or avoided and is not attributable to any act or failure to take preventative
					action by that party. Examples of such events may include, an act of God, flood, fire,
					explosion, lightning, earthquake or other natural disaster; war, riot or civil unrest;</td
				>
			</tr>
			<tr>
				<td><strong>Good Industry Practice</strong></td>
				<td
					>shall mean the exercise of that degree of skill, care, prudence, efficiency, foresight
					and timeliness as would be expected from a leading company within the relevant industry or
					business sector</td
				>
			</tr>
			<tr>
				<td><strong>Intellectual Property Rights (IPRs)</strong></td>
				<td
					>means copyright, patents, rights in inventions, rights in confidential information,
					Know-how, trade secrets, trade marks, service marks, trade names, design rights, rights in
					get-up, database rights, rights in data, semi-conductor chip topography rights, mask
					works, utility models, domain names, rights in computer software and all similar rights of
					whatever nature and, in each case: (i) whether registered or not, (ii) including any
					applications to protect or register such rights, (iii) including all renewals and
					extensions of such rights or applications, (iv) whether vested, contingent or future and
					(v) wherever existing;</td
				>
			</tr>
			<tr>
				<td><strong>International Data Transfer Addendum ("UK Addendum")</strong></td>
				<td
					>means the addendum to the EU Commission standard contractual clauses as amended from time
					to time;</td
				>
			</tr>
			<tr>
				<td><strong>Key Personnel</strong></td>
				<td>any personnel identified in a Statement of Work as being key personnel;</td>
			</tr>
			<tr>
				<td><strong>Know-how</strong></td>
				<td
					>means inventions, discoveries, improvements, processes, formulae, techniques,
					specifications, technical information, methods, tests, reports, component lists, manuals,
					instructions, drawings and information relating to customers and suppliers (whether written
					or in any other form and whether confidential or not);</td
				>
			</tr>
			<tr>
				<td><strong>Losses</strong></td>
				<td
					>means all damages, liabilities, demands, costs, expenses, claims, actions and proceedings
					(including all consequential, direct, indirect, special or incidental loss or punitive
					damages or loss, legal and other professional fees, cost and expenses, fines, penalties,
					interest and loss of profit or any other form of economic loss (including loss of
					reputation));</td
				>
			</tr>
			<tr>
				<td><strong>Main Contract</strong></td>
				<td
					>means the agreement entered into between the Main Contractor and the Customer as attached
					in Appendix A of the Statement of Work;</td
				>
			</tr>
			<tr>
				<td><strong>Personal Data</strong></td>
				<td>means any information relating to any Data Subject;</td>
			</tr>
			<tr>
				<td><strong>Prices</strong></td>
				<td>means the sums set out in the Statement of Work;</td>
			</tr>
			<tr>
				<td><strong>Rebate</strong></td>
				<td
					>an amount of money calculated in accordance with Schedule 4 that is to be returned to the
					Main Contractor in accordance with Schedule 4 and clause 5.13;</td
				>
			</tr>
			<tr>
				<td><strong>Standard Contractual Clauses</strong></td>
				<td
					>means the decision (EU) 2021/914 of June 4th, 2021 on standard contractual clauses for
					the transfer of personal data to third countries pursuant to Regulation (EU) 2016/679 of
					the European Parliament and of the Council as amended from time to time;</td
				>
			</tr>
			<tr>
				<td><strong>Statement of Work</strong></td>
				<td
					>means the applicable statement of work entered into by the Main Contractor and the
					Sub-Contractor under this Agreement which is substantially in the form set out in Schedule
					1 to this Agreement. For the avoidance of doubt, the "Draft" watermark is included on
					Schedule 1 to indicate that Schedule 1 does not need to be executed when this Agreement is
					executed and is a template;</td
				>
			</tr>
			<tr>
				<td><strong>Sub-Contract Work</strong></td>
				<td
					>means that part of the Work to be sub-contracted by the Main Contractor to the
					Sub-Contractor as described in the Statement of Work, and to be performed by the
					Sub-Contractor pursuant to the terms and conditions of this Agreement and the Statement of
					Work;</td
				>
			</tr>
			<tr>
				<td><strong>Sub-Processor</strong></td>
				<td
					>means the Sub-Contractor who will undertake processing activities on behalf of the Data
					Processor in accordance with the terms of this Agreement;</td
				>
			</tr>
			<tr>
				<td><strong>Term</strong></td>
				<td>means the duration of a Statement of Work as stated therein;</td>
			</tr>
			<tr>
				<td><strong>Third Country</strong></td>
				<td
					>means a country located outside the UK or a country benefitting from UK Adequacy
					Regulations;</td
				>
			</tr>
			<tr>
				<td><strong>UK Adequacy Regulations</strong></td>
				<td
					>means regulations, made by the Secretary of State under section 17A of the Data
					Protection Act 2018 giving effect to a finding by the Secretary of State that the
					specified country ensures an 'adequate' level of protection of personal data;</td
				>
			</tr>
			<tr>
				<td><strong>VAT</strong></td>
				<td>means value added tax, as defined by the Value Added Tax Act 1994; and</td>
			</tr>
			<tr>
				<td><strong>Work</strong></td>
				<td
					>means the work to be provided by the Main Contractor to the Customer pursuant to the
					terms and conditions of the Main Contract.</td
				>
			</tr>
		</tbody>
	</table>

	<h3 id="1.2">1.2 Interpretation</h3>
	<p>In this Agreement:</p>
	<div class="sub-clause">
		<p>
			<strong>1.2.1</strong> a reference to this Agreement includes its schedules, appendices and
			annexes (if any);
		</p>
		<p>
			<strong>1.2.2</strong> the table of contents, background section and any clause, schedule or
			other headings in this Agreement are included for convenience only and shall have no effect on
			the interpretation of this Agreement;
		</p>
		<p id="clause-1-2-3">
			<strong>1.2.3</strong> a reference to a 'party' includes that party's personal representatives,
			successors and permitted assigns;
		</p>
		<p id="clause-1-2-4">
			<strong>1.2.4</strong> a reference to a 'person' includes a natural person, corporate or
			unincorporated body (in each case whether or not having separate legal personality) and that
			person's personal representatives, successors and permitted assigns;
		</p>
		<p>
			<strong>1.2.5</strong> a reference to a 'company' includes any company, corporation or other
			body corporate, wherever and however incorporated or established;
		</p>
		<p><strong>1.2.6</strong> a reference to a gender includes each other gender;</p>
		<p><strong>1.2.7</strong> words in the singular include the plural and vice versa;</p>
		<p id="clause-1-2-8">
			<strong>1.2.8</strong> any words that follow 'include', 'includes', 'including', 'in
			particular' or any similar words and expressions shall be construed as illustrative only and
			shall not limit the sense of any word, phrase, term, definition or description preceding those
			words;
		</p>
		<p>
			<strong>1.2.9</strong> a reference to 'writing' or 'written' includes any method of
			reproducing words in a legible and non-transitory form;
		</p>
		<p>
			<strong>1.2.10</strong> a reference to legislation is a reference to that legislation as
			amended, extended, re-enacted or consolidated from time to time;
		</p>
		<p>
			<strong>1.2.11</strong> a reference to legislation includes all subordinate legislation made
			from time to time under that legislation; and
		</p>
		<p id="clause-1-2-12">
			<strong>1.2.12</strong> a reference to any English action, remedy, method of judicial
			proceeding, court, official, legal document, legal status, legal doctrine, legal concept or
			thing shall, in respect of any jurisdiction other than England, be deemed to include a
			reference to that which most nearly approximates to the English equivalent in that
			jurisdiction.
		</p>
	</div>

	<h3 id="1.3">1.3 Order of Precedence</h3>
	<p>
		Unless expressly stated otherwise in a Statement of Work, in the event of any conflict or
		inconsistency between the provisions of the documents forming part of this Agreement, the order
		of precedence shall be as follows:
	</p>
	<div class="sub-clause">
		<p><strong>1.3.1</strong> The Statement of Work;</p>
		<p><strong>1.3.2</strong> The body of this Agreement; and</p>
		<p><strong>1.3.3</strong> The schedules to this Agreement.</p>
	</div>
