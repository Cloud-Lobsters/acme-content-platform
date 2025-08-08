<script>
	let { 
		role = '',
		name = '',
		credentials = '',
		contact = '',
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
				<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
					<!-- Left side: Role and Name -->
					<div class="flex-1">
						<h2 class="text-xl font-bold text-gray-900 print:text-base">{role}</h2>
						<h3 class="text-lg font-semibold text-red-700 mt-1 print:text-sm">{name}</h3>
					</div>
					
					<!-- Right side: Contact Information -->
					{#if contact}
						<div class="flex-shrink-0 sm:text-right">
							{#snippet contactInfo()}
								<div class="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 print:bg-white print:border-gray-300 print:px-2 print:py-1">
									<div class="text-sm font-medium text-red-700 space-y-1 print:text-xs print:space-y-0.5">
										{#each contact.split(' | ') as contactItem, index}
											<div class="flex items-center gap-2 whitespace-nowrap">
												{#if contactItem.includes('@')}
													<!-- Email icon -->
													<svg class="w-4 h-4 text-red-600 print:w-3 print:h-3" fill="currentColor" viewBox="0 0 20 20">
														<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
														<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
													</svg>
												{:else}
													<!-- Phone icon -->
													<svg class="w-4 h-4 text-red-600 print:w-3 print:h-3" fill="currentColor" viewBox="0 0 20 20">
														<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
													</svg>
												{/if}
												<span>{contactItem}</span>
											</div>
										{/each}
									</div>
								</div>
							{/snippet}
							{@render contactInfo()}
						</div>
					{/if}
				</div>
				
				<!-- Credentials below, now without contact info -->
				<div class="bg-white border border-gray-300 rounded-md px-3 py-2 mt-3 print:px-2 print:py-1">
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
						<span class="w-1 h-1 bg-red-600 rounded-full mt-1.5 flex-shrink-0 print:mt-1"></span>
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