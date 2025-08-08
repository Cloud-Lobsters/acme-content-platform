<script>
	import MiniBio from '$lib/components/MiniBio.svelte';

	const teamMembers = [
		{
			role: 'Lead Technical Architect',
			name: 'Duncan F.M. Elliot',
			credentials: 'MEng Imperial College London | ACA Chartered Accountant (ICAEW)',
			description:
				'Duncan brings unique expertise combining software engineering, financial services knowledge, accounting, and regulatory compliance. With 20+ years of experience in the banking and IT sector, including direct HSBC audit experience.',
			qualifications: [
				{
					text: 'Full-stack developer with extensive coding background and solution architecture expertise as well as proven track record in running high performance AI-enabled development teams.',
					highlight: true
				},
				{
					text: 'Expert in designing end-to-end software with user-centric UI/UX focus for elegant, intuitive solutions',
					highlight: false
				},
				{
					text: 'Extensive experience in API design, implementation, and deployment across complex enterprise environments',
					highlight: false
				},
				{
					text: 'Former KPMG Senior Manager with extensive HSBC, Citigroup, and Barclays audit experience',
					highlight: true
				},
				{
					text: 'Led development of PPI remediation calculation models processing millions of customers in redress programs',
					highlight: false
				},
				{
					text: 'Built tactical solutions at KPMG for Goldman Sachs, VISA Inc, and RBS/NatWest across complex financial operations',
					highlight: false
				},
				{
					text: 'Current CTO of Cloud Lobsters, delivering rapid distribution channels solutions for the insurance industry',
					highlight: false
				},
				{
					text: 'Proven track record building scalable solutions across multiple markets and use cases',
					highlight: false
				}
			],
			highlight:
				"Duncan's direct HSBC systems knowledge, coupled with extensive experience in hands-on software development positions him ideally to lead the dual-workstream engagement within the 3-month timeline."
		},
		{
			role: 'Senior Manager',
			name: 'Tara Whitaker',
			credentials: 'BA (Hons) Magdalen College Oxford | FCA Fellow Chartered Accountant (ICAEW)',
			description:
				'Tara delivers exceptional financial modeling expertise and Big 4 consulting experience, with proven track record in complex banking remediation programs.',
			qualifications: [
				{
					text: 'Former KPMG Senior Manager with extensive experience in major bank remediation programs',
					highlight: true
				},
				{
					text: 'Led €0.25bn Ulster Bank Track Mortgage remediation program, reducing team from 25 to 3 FTEs through sophisticated calculation engines',
					highlight: true
				},
				{
					text: 'Extensive KPMG experience with PPI redress calculations for NatWest and other major high street banks',
					highlight: false
				},
				{
					text: 'Achieved 1,200%+ efficiency improvements in remediation processing, handling 40,000+ claims',
					highlight: true
				},
				{
					text: 'Hands-on experience in system design and solution architecture within startup environments',
					highlight: false
				},
				{
					text: 'Transformed red-status remediation programs into successful delivery teams completing in 6 months',
					highlight: false
				},
				{
					text: 'Expert in regulatory compliance frameworks, Section 166 reviews, and audit trail management',
					highlight: false
				},
				{
					text: 'Proven management and client relationship management expertise across complex financial projects',
					highlight: false
				},
				{
					text: 'Trusted pair of hands when the mission is critical - reliable delivery under pressure',
					highlight: true
				}
			],
			highlight:
				"Tara's combination of banking remediation expertise and automated calculation solutions makes her ideally suited for both the 300-400 template compliance assessment and Innovation Banking workflow optimization."
		},
		{
			role: 'Senior Product Design & Full-Stack Developer',
			name: 'Leon Ferro',
			credentials:
				'Bachelor in Graphic Design and Digital Interactive Arts | Specialisation in Human-User Interface (HUI) Design',
			description:
				'Based in Berlin, Leon brings 13+ years of end-to-end product design and development experience with particular expertise in financial services workflows. His transition from senior product design to full-stack development offers unique perspective on user experience and technical implementation.',
			qualifications: [
				{
					text: "Founder designer for OLX Autos' complete Fintech program across Indian, Asian, Latin American, and Polish markets",
					highlight: true
				},
				{
					text: 'Expert in Svelte 5, Tailwind CSS, and modern component architecture',
					highlight: false
				},
				{
					text: 'Designed end-to-end merchant loan workflows achieving 30% increase in dealership car buyers',
					highlight: true
				},
				{
					text: "Fluent in English, Spanish, Italian, and German - enabling direct stakeholder engagement across HSBC's global operations",
					highlight: true
				},
				{
					text: 'Current Cloud Lobsters role involves analyzing requests and developing functional products for complex workflows',
					highlight: false
				}
			],
			highlight:
				"Leon's multilingual capabilities and cross-cultural experience across multiple markets position him ideally for HSBC's global messaging standardization requirements."
		},
		{
			role: 'Technical Infrastructure Specialist',
			name: 'Alexander Heather',
			credentials: 'Full-Stack Developer | Advanced DevOps & LLM Integration Expert',
			description:
				"At 19, Alexander demonstrates remarkable technical maturity with 7+ years of enterprise-level development. His early exposure to financial technology through family connections provides valuable context for HSBC's regulatory and operational requirements.",
			qualifications: [
				{
					text: 'Built comprehensive microservices architecture with 12+ interconnected repositories',
					highlight: false
				},
				{
					text: 'Built own server infrastructure with locally deployed Kubernetes across 3+ nodes with advanced monitoring',
					highlight: true
				},
				{ text: 'Early LLM adopter with production AI integration experience', highlight: false },
				{
					text: 'Developed sophisticated templating engine for programmatic content generation',
					highlight: false
				},
				{
					text: 'Manages separate AWS cloud infrastructure with ELK Stack, Fluentd, and Prometheus monitoring',
					highlight: false
				},
				{
					text: 'Built approximately 7 different platforms in 6 months at Cloud Lobsters',
					highlight: true
				}
			],
			highlight:
				"Alexander's exceptional technical depth and understanding of financial services infrastructure ensures effective delivery of scalable, mission-critical systems within the engagement timeline."
		}
	];
</script>

<svelte:head>
	<title>HSBC Team Profile - Mini Bios</title>
	<meta charset="UTF-8" />
</svelte:head>

<div
	class="font-['Georgia','Times New Roman',serif] mx-auto max-w-[210mm] bg-white text-gray-900 shadow-sm print:mx-auto print:my-0 print:max-w-[210mm] print:shadow-none"
>
	<!-- Document Header -->
	<header
		class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white print:bg-red-700 print:p-4"
	>
		<div class="border-l-4 border-white pl-4 print:border-l-2 print:pl-3">
			<h1 class="text-2xl font-bold tracking-wide print:text-lg print:tracking-normal">
				HSBC Messaging Rationalization Initiative
			</h1>
			<p class="mt-1 text-sm font-medium text-red-100 print:text-xs">Team Profile & Capabilities</p>
		</div>
	</header>

	<!-- Main Content -->
	<main class="space-y-8 p-8 print:space-y-6 print:p-6">
		<!-- Executive Summary -->
		<div class="rounded-lg bg-red-600 p-6 text-white print:bg-red-700 print:p-4">
			<h3 class="mb-4 text-xl font-bold print:mb-3 print:text-base">Executive Summary</h3>
			<p class="leading-relaxed text-red-50 print:text-xs print:leading-normal">
				This team combines deep banking sector knowledge, cutting-edge technical capabilities, and
				proven delivery excellence to execute HSBC's messaging rationalization initiative across
				both template compliance assessment and Innovation Banking content management workflow
				optimization.
			</p>
		</div>

		<!-- Combined Team Skills Section -->
		<section
			class="rounded-lg border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-6 print:border-gray-500 print:bg-white print:p-3"
		>
			<div class="mb-6 text-center print:mb-4">
				<h2 class="text-2xl font-bold text-gray-900 print:text-lg">
					Combined Team Skills & Technical Expertise
				</h2>
				<div class="mx-auto mt-3 h-1 w-24 bg-red-600 print:mt-2 print:h-0.5 print:w-16"></div>
			</div>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 print:grid-cols-3 print:gap-3">
				<!-- Banking & Financial Expertise (Combined Core + Specialized) -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-3 text-lg font-bold text-red-700 print:mb-2 print:text-sm">
						Banking & Financial Expertise
					</h3>
					<ul class="space-y-1.5 text-gray-800 print:space-y-0.5 print:text-xs print:leading-tight">
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span class="font-medium">Direct HSBC audit and systems experience</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Major bank remediation programs (PPI, mortgage, credit)</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Regulatory compliance (Section 166, audit frameworks)</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span class="font-medium">1,200%+ efficiency improvements in automation</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Template engines and content management systems</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Fintech product design across global markets</span>
						</li>
					</ul>
				</div>

				<!-- Advanced Technology Stack -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-3 text-lg font-bold text-red-700 print:mb-2 print:text-sm">
						Technology Stack
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs print:leading-tight">
						<li>
							<span class="font-semibold text-red-600">Languages:</span> TypeScript, Python, SQL, VBA
						</li>
						<li>
							<span class="font-semibold text-red-600">Frameworks:</span> SvelteKit, React, Angular
						</li>
						<li>
							<span class="font-semibold text-red-600">Databases:</span> PostgreSQL, SQL Server, MongoDB
						</li>
						<li>
							<span class="font-semibold text-red-600">Cloud:</span> AWS, Kubernetes, Docker
						</li>
						<li>
							<span class="font-semibold text-red-600">AI/ML:</span> LLM deployment, ChatGPT integration
						</li>
						<li>
							<span class="font-semibold text-red-600">DevOps:</span> CI/CD, ELK Stack, Prometheus
						</li>
					</ul>
				</div>

				<!-- Delivery & Global Capabilities -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-3 text-lg font-bold text-red-700 print:mb-2 print:text-sm">
						Delivery & Global Capabilities
					</h3>
					<ul class="space-y-1.5 text-gray-800 print:space-y-0.5 print:text-xs print:leading-tight">
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span class="font-medium">3-month fixed engagement track record</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span class="font-medium">Regulatory penalty avoidance expertise</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>High-risk project delivery under tight deadlines</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Multi-language: English, German, Spanish, Italian, French</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Cross-cultural design (DACH, Asian, Latin American markets)</span>
						</li>
						<li class="flex items-start gap-1.5">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Real-time messaging integration (Twilio, SendGrid)</span>
						</li>
					</ul>
				</div>
			</div>

		</section>

		<!-- Page Break after Combined Skills -->
		<div class="print:break-after-page"></div>

		{#each teamMembers as member, index}
			<MiniBio {...member} />
			{#if index === 1}
				<div class="print:break-after-page"></div>
			{/if}
		{/each}
	</main>
</div>

<style>
	@media print {
		@page {
			size: A4;
			margin: 15mm 20mm 15mm 20mm;
		}

		/* Ensure bullets show in print */
		ul {
			list-style-type: disc !important;
		}

		/* Print-specific text sizing */
		body {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Ensure good page breaks */
		.print\:break-before-page {
			break-before: page;
		}

		.print\:break-after-avoid {
			break-after: avoid;
		}

		.print\:break-after-page {
			break-after: page;
		}
	}
</style>
