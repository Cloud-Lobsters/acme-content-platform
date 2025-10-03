<script>
	let { formData = $bindable() } = $props();
</script>

<div class="sow-schedule">
	<p>
		The Sub-Contractor will perform the Sub-Contract Work as described in the SOW commencing on the
		the <span class="highlight-yellow"
			>start date of services, which is expected to be – 27th day of October 2025</span
		>, but if the start date of the services is earlier than the date specified here, the SOW will
		commence on actual start date of the services. The Sub-Contract Work will continue until
		completed or until a date specified in the SOW. The Sub-Contractor agrees that no Sub-Contract
		Work will be delivered, or work performed prior to the commencement date or beyond the end date
		unless a change control notice is agreed upon by both Parties.
	</p>
</div>

<style>
	.sow-schedule {
		margin: 1rem 0;
	}

	.sow-schedule p {
		line-height: 1.8;
		text-align: justify;
		margin-bottom: 1rem;
	}

	.highlight-yellow {
		background-color: #fff9c4;
		padding: 2px 6px;
		border-radius: 3px;
		font-weight: 500;
	}
</style>
