<!-- Page Break Component for Print -->
<div class="print:break-before-page print:h-0 print:w-full"></div>

<style>
	@media print {
		div {
			page-break-before: always;
			break-before: page;
			height: 0;
			width: 100%;
			display: block;
		}
	}
	
	@media screen {
		div {
			display: none;
		}
	}
</style>