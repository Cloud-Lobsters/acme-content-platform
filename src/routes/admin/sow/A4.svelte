<script lang="ts">
	/**
	 * A4 document container component with print optimization
	 * @component
	 */

	export type Orientation = 'portrait' | 'landscape';
	export type Alignment = 'top' | 'center' | 'bottom' | 'space-between' | 'space-around';

	interface A4Props {
		/** Content to render inside the A4 container */
		children: any;
		/** Page orientation - portrait or landscape */
		orientation?: Orientation;
		/** Content alignment within the container */
		alignment?: Alignment;
		/** Background color of the page (auto uses theme colors) */
		backgroundColor?: string;
		/** Whether to add page breaks after this page */
		pageBreak?: boolean;
		/** Custom margin around the container (for screen view) */
		margin?: string;
		/** Custom padding inside the container */
		padding?: string;
		/** Shadow intensity (0-10, 0 = no shadow) */
		shadow?: number;
		/** Border configuration */
		border?: string | boolean;
		/** Border radius */
		borderRadius?: string;
		/** Automatically scale content to fit on one page */
		autoScale?: boolean;
		/** Minimum scale factor (0.1 - 1.0) */
		minScale?: number;
		/** Enable print simulation mode for WYSIWYG */
		printSimulation?: boolean;
	}

	let {
		children,
		orientation = 'portrait',
		alignment = 'space-between',
		backgroundColor = 'auto',
		pageBreak = true,
		margin = '5cm auto',
		padding = '0',
		shadow = 4,
		border = false,
		borderRadius = '0',
		autoScale = false,
		printSimulation = false
	}: A4Props = $props();

	// Generate dynamic classes and styles
	const orientationClass = $derived(orientation === 'portrait' ? 'A4_portrait' : 'A4_landscape');
	const alignmentStyle = $derived((() => {
		const alignmentMap: Record<Alignment, string> = {
			'top': 'flex-start',
			'center': 'center',
			'bottom': 'flex-end',
			'space-between': 'space-between',
			'space-around': 'space-around'
		};
		return alignmentMap[alignment] || 'space-between';
	})());
	const shadowIntensity = $derived(Math.max(0, Math.min(10, shadow)));
	const borderStyle = $derived(() => {
		if (border === false || border === '' || border == null) return 'none';
		if (border === true) return '2px solid #db0011';
		return border;
	});
</script>

<div 
	class="pageContainer {orientationClass} {printSimulation ? 'print-simulation' : ''} {border === false ? 'no-border' : ''}" 
	style:--bg-color={backgroundColor === 'auto' ? 'var(--color-background)' : backgroundColor}
	style:--page-margin={margin}
	style:--page-padding={padding}
	style:--justify-content={alignmentStyle}
	style:--shadow-opacity={shadowIntensity / 10}
	style:--border={borderStyle()}
	style:--border-radius={borderRadius}
	style:page-break-after={pageBreak ? 'always' : 'avoid'}
	style:break-after={pageBreak ? 'always' : 'avoid'}
>
	<div 
		class="content-wrapper"
		data-auto-scale={autoScale}
	>
		{@render children()}
	</div>
</div>

<style>
	@media print {
		.pageContainer {
			margin: 0 !important;
			/* Use smaller padding that works with default margins */
			padding: 0.5cm !important;
			/* Remove box shadow and border radius in print when border is false */
			box-shadow: none !important;
			background-color: white !important;
			color: black !important;
			/* Only prevent page breaks before, not after (let pageBreak prop control) */
			page-break-before: avoid !important;
			break-before: avoid !important;
			/* Ensure colors print */
			print-color-adjust: exact !important;
			-webkit-print-color-adjust: exact !important;
		}

		/* Remove border radius and shadow when no border in print mode */
		.pageContainer.no-border {
			border-radius: 0 !important;
			box-shadow: none !important;
		}

		/* Prevent empty pages by ensuring content doesn't force breaks, but allow container breaks */
		.pageContainer .content-wrapper * {
			page-break-after: avoid !important;
			break-after: avoid !important;
			page-break-inside: avoid !important;
			break-inside: avoid !important;
		}
		
		.pageContainer * {
			color: black !important;
			/* Ensure all colors and borders print */
			print-color-adjust: exact !important;
			-webkit-print-color-adjust: exact !important;
			color-adjust: exact !important;
		}
		
		.A4_portrait {
			width: 100% !important;
			height: auto !important;
			min-height: 100vh !important;
		}
		
		.A4_landscape {
			width: 100% !important;
			height: auto !important;
			min-height: 100vh !important;
		}

		/* Apply auto-scaling only in print mode */
		.content-wrapper[data-auto-scale="true"] {
			transform: scale(0.8) !important;
			transform-origin: top left !important;
			width: 125% !important;
		}

		/* Ensure print simulation is disabled when actually printing */
		.print-simulation.pageContainer {
			max-width: 100% !important;
			width: 100% !important;
		}
	}
	.pageContainer {
		box-sizing: border-box;
		margin: var(--page-margin);
		padding: var(--page-padding);
		background-color: var(--bg-color);
		box-shadow: 0 0 10px rgba(0, 0, 0, var(--shadow-opacity));
		border: var(--border);
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: var(--justify-content);
		overflow: hidden;
	}
	
	.content-wrapper {
		width: 100%;
		height: 100%;
		transition: transform 0.3s ease;
	}
	.A4_portrait {
		/* A4 width: 21cm = 794px at 96dpi, height flows with content */
		width: 794px; /* A4 width at 96dpi */
		height: auto; /* Let content determine height */
		min-height: auto;
	}

	.A4_landscape {
		/* A4 landscape: 29.7cm × 21cm = 1123px × 794px at 96dpi */
		width: 1123px; /* A4 landscape width at 96dpi */
		height: 794px; /* A4 landscape height at 96dpi */
	}

	/* Print simulation mode - applies print styles directly to screen for WYSIWYG */
	.print-simulation.pageContainer {
		/* Apply print container styles to screen */
		margin: 2rem auto !important; /* Center it with some margin for visibility */
		/* Use smaller padding to fit within default print margins */
		padding: 0.5cm !important; /* Reduced from 1cm to fit within default margins */
		/* Standard shadow for screen viewing */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) !important;
		/* White background like actual print */
		background-color: white !important;
		color: black !important;
		/* Use A4 width minus default margins (794px - 2*0.5cm = ~756px) */
		width: 756px !important; /* A4 width minus default margins */
		max-width: 756px !important;
		height: auto !important; /* Let content determine height */
		min-height: auto !important;
		/* Ensure border shows up */
		print-color-adjust: exact !important;
		-webkit-print-color-adjust: exact !important;
	}

	/* Remove shadow and border radius for no-border in print simulation */
	.print-simulation.pageContainer.no-border {
		box-shadow: none !important;
		border-radius: 0 !important;
	}

	.print-simulation.A4_portrait {
		/* Match printable area width (A4 minus default margins) */
		width: 756px !important; /* A4 width minus default margins */
		max-width: 756px !important;
		height: auto !important; /* Let content determine height */
		min-height: auto !important;
	}

	.print-simulation * {
		/* Apply print text color universally */
		color: black !important;
		/* Normalize font rendering */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-variant-ligatures: none;
		text-shadow: none !important;
		backdrop-filter: none !important;
	}

	/* Force all print: prefixed styles to apply on screen in simulation mode */
	.print-simulation h2 {
		font-size: 0.75rem !important; /* print:text-xs */
		line-height: 1rem !important;
	}

	.print-simulation h3 {
		font-size: 0.75rem !important; /* print:text-xs */
		line-height: 1rem !important;
	}

	.print-simulation p,
	.print-simulation span,
	.print-simulation div:not(.rounded-lg):not(.grid):not(.flex) {
		font-size: 0.75rem !important; /* print:text-xs */
		line-height: 1rem !important;
	}

	.print-simulation ul,
	.print-simulation li {
		font-size: 0.75rem !important;
		line-height: 1.167 !important; /* print:leading-tight */
	}

	/* Apply print spacing - force space-y-0, space-y-1, space-y-2 */
	.print-simulation .space-y-4 > * + * { margin-top: 0.5rem !important; } /* becomes print:space-y-2 */
	.print-simulation .space-y-3 > * + * { margin-top: 0 !important; } /* becomes print:space-y-0 */
	.print-simulation .space-y-2 > * + * { margin-top: 0.25rem !important; } /* becomes print:space-y-1 */

	/* Apply print padding - force smaller padding */
	.print-simulation .p-4 { padding: 0.5rem !important; } /* becomes print:p-2 */
	.print-simulation .p-6 { padding: 1rem !important; } /* becomes print:p-4 */
	.print-simulation .p-2 { padding: 0.25rem !important; } /* becomes print:p-1 */

	/* Apply print margins */
	.print-simulation .mb-4 { margin-bottom: 0.25rem !important; } /* becomes print:mb-1 */
	.print-simulation .mb-6 { margin-bottom: 1rem !important; } /* becomes print:mb-4 */
	.print-simulation .mb-3 { margin-bottom: 0.25rem !important; } /* becomes print:mb-1 */
	.print-simulation .mt-2 { margin-top: 0.25rem !important; } /* becomes print:mt-1 */
	.print-simulation .mt-6 { margin-top: 1rem !important; } /* becomes print:mt-4 */

	/* Apply print backgrounds - force white backgrounds */
	.print-simulation .bg-gray-50,
	.print-simulation .bg-purple-50,
	.print-simulation .bg-blue-50,
	.print-simulation .bg-indigo-50,
	.print-simulation .bg-yellow-50,
	.print-simulation .bg-green-50 {
		background-color: white !important; /* becomes print:bg-white */
	}

	.print-simulation .bg-red-50 {
		background-color: #fef2f2 !important; /* stays print:bg-red-50 */
	}

	.print-simulation .bg-red-700 {
		background-color: #991b1b !important; /* becomes print:bg-red-800 */
	}

	/* Apply print borders */
	.print-simulation .rounded-lg:not(.bg-red-50):not(.bg-red-700) {
		border: 1px solid #d1d5db !important; /* print:border print:border-gray-300 */
	}

	/* Apply print grid changes */
	.print-simulation .gap-4 { gap: 0.5rem !important; } /* becomes print:gap-2 */
	.print-simulation .gap-2 { gap: 0.25rem !important; } /* becomes print:gap-1 */

	/* Fix specific elements that have multiple classes */
	.print-simulation .h-1 { height: 0.125rem !important; } /* becomes print:h-0.5 */
	.print-simulation .w-24 { width: 4rem !important; } /* becomes print:w-16 */

	@page {
		size: A4;
		margin: 1cm;
	}

</style>
