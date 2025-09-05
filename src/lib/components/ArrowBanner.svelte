<script>
	export let text = '';
	export let color = 'blue'; // 'blue', 'red', 'gray'
	export let hasArrow = true;
	
	const colorClasses = {
		blue: 'bg-blue-600 text-white',
		red: 'bg-red-600 text-white',
		gray: 'bg-gray-600 text-white'
	};
</script>

<div class="relative">
	<!-- Main banner body -->
	<div class="{colorClasses[color]} px-6 py-4 text-center relative {hasArrow ? 'pr-8' : ''}">
		<h2 class="text-lg font-semibold">{text}</h2>
		
		<!-- Arrow pointing right (if enabled) -->
		{#if hasArrow}
			<div class="absolute right-0 top-0 h-full flex items-center">
				<div class="w-0 h-0 border-l-[24px] border-l-{color}-600 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent"></div>
			</div>
		{/if}
		
		<!-- Left notch (chevron cutout) -->
		<div class="absolute left-0 top-0 h-full flex items-center">
			<div class="w-0 h-0 border-r-[24px] border-r-{color}-600 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent transform -translate-x-full"></div>
		</div>
	</div>
</div>