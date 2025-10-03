<script>
	import ContractExplainer from '$lib/components/ContractExplainer.svelte';
</script>

<ContractExplainer
	title="Section 6: Progress and Collaboration"
	reference="This section establishes the working relationship structure between Cloud Lobsters, Capgemini, and HSBC, including project management, communication protocols, and collaboration requirements."
	summary="Cloud Lobsters must collaborate and attend meetings with both Capgemini and HSBC. Each party will appoint representatives (Capgemini's Project Manager and Cloud Lobsters' Representative) who will meet regularly to monitor progress and handle commercial/contractual issues. These representatives establish procedures and controls for the work."
	risks={[
		"Mandatory customer interaction (6.1): Cloud Lobsters must collaborate directly with HSBC, potentially exposing them to conflicting instructions from both Capgemini and HSBC",
		"Undefined meeting obligations (6.1): 'Include attending meetings' has no limit on frequency, duration, or location - could be burdensome",
		"Project Manager authority (6.2): Capgemini's Project Manager has 'day to day responsibilities' but their authority level isn't clearly defined",
		"Regular meetings requirement (6.3.1): No definition of 'regularly' - could mean daily, weekly, or monthly meetings",
		"First point of contact (6.3.3): Representative must handle all commercial and contractual issues - places burden on one person",
		"Completion timeline (6.4): Must complete work 'in accordance with the Statement of Work' - failure to meet SOW timelines could be a breach"
	]}
	amendments={[
		{
			text: "Limit meeting obligations: Modify 6.1 to 'attend reasonable meetings with reasonable notice (minimum 48 hours) during normal business hours'",
			clauseRef: '6.1'
		},
		{
			text: "Clarify chain of command: Add 'The Sub-Contractor shall take instructions solely from the Main Contractor's Project Manager. Any requests from the Customer shall be directed through the Project Manager.'",
			clauseRef: '6.1'
		},
		{
			text: "Define meeting frequency: Modify 6.3.1 to 'meet at least monthly, or more frequently as mutually agreed'",
			clauseRef: '6.3.1'
		},
		{
			text: "Add deputy provision: Add to 6.2 'Each party may appoint a deputy representative with authority to act in the Representative's absence'",
			clauseRef: '6.2'
		},
		{
			text: "Cap meeting costs: Add 'Meeting attendance shall be included in the Prices and shall not incur additional charges unless meetings exceed [X] hours per month'",
			clauseRef: '6.1'
		}
	]}
/>

<p id="6.1">
		<strong>6.1</strong> The Sub-Contractor shall collaborate (include attending meetings) and co-operate
		with the Main Contractor and the Customer.
	</p>

	<p id="6.2">
		<strong>6.2</strong> For the purposes of the smooth handling and implementation of the Statement
		of Work and the completion of the Sub-Contract Work, the Main Contractor shall appoint a project
		manager (the "Project Manager") to whom shall be delegated the day to day responsibilities of
		managing the Project and who shall be responsible for liaison with and the co-ordination of the
		Sub-Contractor. The Sub-Contractor shall also appoint a representative (the "Representative")
		with day to day responsibility for discharging the Sub-Contractor's obligations under the Statement
		of Work. The Project Manager and the Representative are as named in the Statement of Work or
		as shall be notified in writing between the parties from time to time.
	</p>

	<p id="6.3"><strong>6.3</strong> The Project Manager and the Representative shall:</p>
	<div class="sub-clause">
		<p id="6.3.1">
			<strong>6.3.1</strong> meet regularly to monitor the progress of the Sub-Contract Work and
			review any issues arising from the provision of the Sub-Contract Work;
		</p>
		<p>
			<strong>6.3.2</strong> establish administrative procedures and controls for the Sub-Contract
			Work to be provided; and
		</p>
		<p>
			<strong>6.3.3</strong> be the first point of contact for all commercial and contractual issues
			associated with the Statement of Work.
		</p>
	</div>

	<p>
		<strong>6.4</strong> The Sub-Contractor shall commence and complete the provision of the Sub-Contract
		Work in accordance with the Statement of Work.
	</p>
