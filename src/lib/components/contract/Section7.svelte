<script>
	import ContractExplainer from '$lib/components/ContractExplainer.svelte';
</script>

<ContractExplainer
	title="Section 7: Confidential Information"
	reference="This section defines what constitutes confidential information and establishes obligations for protecting, using, and disclosing confidential information exchanged between the parties."
	summary="Both parties must keep each other's confidential information secret and use it only for the Statement of Work. Confidential Information includes anything marked 'confidential' or that is obviously confidential by nature. Importantly, ALL information about HSBC (Capgemini's customer) is automatically deemed Capgemini's Confidential Information. The confidentiality obligations survive termination of the contract. Capgemini can disclose Cloud Lobsters' confidential information to HSBC without restriction."
	risks={[
		"Asymmetric disclosure rights (7.2): Capgemini can disclose Cloud Lobsters' confidential info to HSBC without consent, but Cloud Lobsters cannot disclose to anyone without permission",
		"Customer information deemed confidential (7.1): ALL HSBC information automatically becomes Capgemini's confidential info - very broad scope",
		"Subcontractor liability (7.2(d)): Cloud Lobsters is responsible for any breach by employees, contractors, or advisers they share info with",
		"Indefinite survival (7.5): Confidentiality obligations continue forever after contract ends with no time limit",
		"Vague definition (7.1): 'By its nature, clearly confidential' is subjective and could be interpreted broadly by Capgemini",
		"Additional security requirements (7.3): SOW can add undefined 'further security requirements' Cloud Lobsters must comply with",
		"Mutual publicity consent (7.6): Cloud Lobsters cannot use Capgemini or HSBC as a reference without written consent"
	]}
	amendments={[
		{
			text: "Add reciprocal disclosure rights: Modify 7.2 to 'Either party may disclose the other's Confidential Information to its clients solely for purposes of demonstrating relevant experience, subject to prior written notice'",
			clauseRef: '7.2'
		},
		{
			text: "Limit survival period: Modify 7.5 to 'The provisions of Clause 7.2 shall continue for 5 years after the termination of the Statement of Work'",
			clauseRef: '7.5'
		},
		{
			text: "Narrow customer information scope: Modify 7.1 to exclude 'information about the Customer that is publicly available or becomes known to Sub-Contractor through other projects'",
			clauseRef: '7.1'
		},
		{
			text: "Cap subcontractor liability: Add to 7.2(d) 'provided that Sub-Contractor took reasonable precautions to ensure compliance'",
			clauseRef: '7.2'
		},
		{
			text: "Require reasonable security requirements: Modify 7.3 to 'comply with reasonable and proportionate security requirements that may be specified in the Statement of Work'",
			clauseRef: '7.3'
		},
		{
			text: "Allow reference use: Modify 7.6 to 'Cloud Lobsters may list Capgemini and the Customer as clients in capability statements and proposals, without disclosing confidential details of the work'",
			clauseRef: '7.6'
		}
	]}
/>

<p id="7.1">
		<strong>7.1</strong> Confidential Information means any information (whether in oral, written,
		electronic or any other form) which is marked 'confidential' or 'secret' or is, by its nature,
		clearly confidential. The Sub-Contractor acknowledges that any information relating to the
		Main Contractor's Customer obtained by the Sub-Contractor pursuant to this Agreement (including
		any Statement of Work) is deemed to be the Main Contractor's Confidential Information. Confidential
		Information does not, however, include any information which: (a) is in, or has become part
		of, the public domain other than by a breach of this Agreement and / or a Statement of Work;
		(b) becomes available to a party in a lawful manner from a third party who, to the best of
		that party's knowledge, is lawfully entitled to disclose the same; and/or (c) can be proven
		was independently developed by or for a party without reference to the other's party's Confidential
		Information.
	</p>

	<p id="7.2">
		<strong>7.2</strong> Each party shall, in relation to the other's Confidential Information:
		(a) keep it secret and confidential using the same standard of care the receiving party uses
		to safeguard its own Confidential Information and no less than a reasonable standard of care;
		(b) use it only for purposes connected to the Statement of Work; (c) disclose it only to such
		of its employees, directors, agents, subcontractors, group companies and/or professional advisers
		as need to know and on condition that it informs them of its confidential nature and directs
		them to deal with it on terms no less onerous than in this Clause 7.2; (d) be responsible
		for any breach of these confidentiality obligations by any person to whom it discloses the
		other's Confidential Information; and (e) not otherwise disclose it to third parties without
		the other party's prior written consent. The obligations of confidentiality in this Clause
		7.2 shall not prevent a party disclosing information which is required to be disclosed under
		any applicable law, stock exchange requirement, or by order of a court or governmental body
		or authority of competent jurisdiction, provided that, to the extent it is permitted to do
		so, it notifies the other party as soon as reasonably possible on becoming aware of the obligation
		to disclose. The Sub-Contractor agrees that the Main Contractor may disclose the Sub-Contractor's
		Confidential Information to the Customer.
	</p>

	<p id="7.3">
		<strong>7.3</strong> The Sub-Contractor shall comply with any further security requirements
		that may be specified in the Statement of Work.
	</p>

	<p id="7.4">
		<strong>7.4</strong> Each party shall, on written request, either return or destroy the other's
		Confidential Information in its possession except that each party shall be entitled to keep
		copies or records to the extent required by law (and such copies shall continue to be Confidential
		Information and subject to the obligations of confidentiality in this Agreement).
	</p>

	<p id="7.5">
		<strong>7.5</strong> The provisions of Clause 7.2 shall continue after the termination of
		the Statement of Work.
	</p>

	<p id="7.6">
		<strong>7.6</strong> Any publicity to be issued in connection with this Agreement and/or any
		Statement of Work shall only be issued subject to prior written consent from both parties.
	</p>
