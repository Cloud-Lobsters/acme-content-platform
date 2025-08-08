<script>
	let { 
		role = '',
		name = '',
		credentials = '',
		description = '',
		qualifications = [],
		highlight = '',
		children = null
	} = $props();
</script>

<section class="bg-gray-50 border border-gray-200 rounded-lg p-6 print:bg-white print:border-gray-400 print:p-4 print:break-after-avoid">
	<div class="flex items-start gap-4 mb-4">
		<div class="w-2 h-16 bg-red-600 rounded-full print:w-1 print:h-12"></div>
		<div class="flex-1">
			{#snippet header()}
				<h2 class="text-xl font-bold text-gray-900 print:text-base">{role}</h2>
				<h3 class="text-lg font-semibold text-red-700 mt-1 print:text-sm">{name}</h3>
				<div class="bg-white border border-gray-300 rounded-md px-3 py-2 mt-2 print:px-2 print:py-1">
					<p class="text-sm font-medium text-gray-700 print:text-xs">
						{credentials}
					</p>
				</div>
			{/snippet}
			
			{@render header()}
		</div>
	</div>

	<div class="prose prose-sm max-w-none print:prose-xs">
		{#snippet intro()}
			<p class="text-gray-800 leading-relaxed mb-4 print:text-xs print:leading-normal print:mb-3">
				{description}
			</p>
		{/snippet}
		
		{@render intro()}

		{#snippet qualificationsSection()}
			<h4 class="text-base font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 print:text-sm print:mb-2">
				Core Qualifications
			</h4>
			<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs print:leading-snug">
				{#each qualifications as qualification}
					<li class="flex items-start gap-2">
						<span class="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0 print:mt-1.5"></span>
						<span class:font-medium={qualification.highlight}>{qualification.text}</span>
					</li>
				{/each}
			</ul>
		{/snippet}
		
		{@render qualificationsSection()}

		{#snippet highlightSection()}
			{#if highlight}
				<div class="bg-red-50 border-l-4 border-red-600 p-4 mt-4 print:bg-white print:border-l-2 print:p-2">
					<p class="text-sm font-medium text-red-900 print:text-xs">
						{highlight}
					</p>
				</div>
			{/if}
		{/snippet}
		
		{@render highlightSection()}

		{#if children}
			{@render children()}
		{/if}
	</div>
</section>