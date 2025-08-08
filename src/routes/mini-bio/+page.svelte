<script>
	import MiniBio from '$lib/components/MiniBio.svelte';

	const teamMembers = [
		{
			role: 'Lead Technical Architect',
			name: 'Duncan F.M. Elliot',
			credentials: 'MEng Imperial College London | ACA Chartered Accountant (ICAEW)',
			contact: '07801 638 162 | duncan@cloudlobsters.com',
			description:
				'Duncan brings unique expertise combining software engineering, financial services knowledge, accounting, and regulatory compliance. With 20+ years of experience in the banking and IT sector, including direct HSBC audit experience.',
			qualifications: [
				{
					text: 'Full-stack developer with extensive coding background and solution architecture expertise as well as a proven track record in running high performance AI-enabled development teams.',
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
					text: 'A proven track record building scalable solutions across multiple markets and use cases',
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
			contact: '07585 554 498 | tara@cloudlobsters.com',
			description:
				'Tara delivers exceptional financial modelling expertise and Big 4 consulting experience, with a proven track record in complex banking remediation programs.',
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
				"Tara's combination of banking remediation expertise and automated calculation solutions makes him ideally suited for both the 300-400 template compliance assessment and Innovation Banking workflow optimisation."
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
					text: 'Expert frontend developer specialising in Svelte 5, Tailwind CSS, and modern component architecture',
					highlight: false
				},
				{
					text: 'Designed end-to-end merchant loan workflows achieving 30% increase in dealership car buyers',
					highlight: false
				},
				{
					text: 'Extensive experience with content creation tools (Adobe Creative Suite, Figma) - ideal for replicating core Adobe functionality in custom solutions',
					highlight: false
				},
				{
					text: 'Current Cloud Lobsters role involves analysing requests and developing functional products for complex workflows',
					highlight: false
				}
			],
			highlight:
				"Leon's core strength lies in UX/UI design and frontend development, with extensive Adobe Creative Suite and Figma experience making him ideal for replicating core Adobe functionality within HSBC's in-house systems. His multilingual capabilities further position him perfectly for HSBC's global messaging standardization requirements."
		},
		{
			role: 'Technical Infrastructure Specialist',
			name: 'Alexander Heather',
			credentials: 'Full-Stack Developer | Advanced DevOps & LLM Integration Expert',
			description:
				"Alexander brings exceptional technical depth with 7+ years of enterprise-level development experience, having started coding at age 12 inspired by his father who built mission-critical trading software still used by the world's largest financial institutions.",
			qualifications: [
				{
					text: 'Full-stack developer with strong design sensibility, delivering both technical excellence and user-focused interfaces',
					highlight: true
				},
				{
					text: 'Built comprehensive microservices architecture with 12+ interconnected repositories using gRPC for high-performance inter-service communication',
					highlight: false
				},
				{
					text: 'Built custom server infrastructure with locally deployed Kubernetes cluster across 3+ nodes featuring comprehensive ELK Stack, Fluentd, and Prometheus monitoring',
					highlight: true
				},
				{
					text: 'Built AI image generator in production utilising fine-tuned LoRAs with stable diffusion model weights deployed on-premise for optimal performance',
					highlight: false
				},
				{
					text: 'Developed sophisticated templating engine for programmatic content generation',
					highlight: false
				},
				{
					text: 'Expert at terminal operations with deep knowledge of Linux server administration and system optimisation',
					highlight: false
				},
				{
					text: 'Experienced in AWS cloud infrastructure management and deployment',
					highlight: false
				},
				{
					text: 'Delivered 7 distinct platforms within 6 months at Cloud Lobsters, demonstrating rapid development capabilities',
					highlight: true
				}
			],
			highlight:
				"Alexander will be core to replicating key PEGA functionality within the bank's in-house systems. His exceptional technical depth and financial services infrastructure understanding ensures delivery of scalable, mission-critical systems within the engagement timeline."
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
				optimisation.
			</p>
		</div>

		<!-- Combined Team Skills Section -->
		<section
			class="rounded-lg border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-8 print:border-gray-500 print:bg-white print:p-6"
		>
			<div class="mb-8 text-center print:mb-6">
				<h2 class="text-2xl font-bold text-gray-900 print:text-lg">
					Combined Team Skills & Technical Expertise
				</h2>
				<div class="mx-auto mt-3 h-1 w-24 bg-red-600 print:mt-2 print:h-0.5 print:w-16"></div>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 print:grid-cols-1 print:gap-6">
				<!-- Core Banking & Financial Services -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-4 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">
						Core Banking & Financial Services
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs print:leading-snug">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span class="font-medium">Direct HSBC audit and systems experience</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Major bank remediation programs (PPI, mortgage, credit)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Regulatory compliance (Section 166, data trails, audit frameworks)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Advanced financial modelling and working capital analysis</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span
								>Expert financial modelling for complex banking calculations and risk assessment</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Fintech product design across global markets</span>
						</li>
					</ul>
				</div>

				<!-- Advanced Technology Stack -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-4 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">
						Advanced Technology Stack
					</h3>
					<ul class="space-y-3 text-gray-800 print:space-y-2 print:text-xs print:leading-snug">
						<li>
							<span class="font-semibold text-red-600">Languages:</span> TypeScript, JavaScript, Python,
							Go, C#, SQL, VBA/VB, Bash scripting
						</li>
						<li>
							<span class="font-semibold text-red-600">Frameworks:</span> SvelteKit, React, Next.js,
							Angular, Flutter, Express.js, NestJS
						</li>
						<li>
							<span class="font-semibold text-red-600">Databases:</span> PostgreSQL, MongoDB, SQL Server,
							Redis, Vector DBs
						</li>
						<li>
							<span class="font-semibold text-red-600">Cloud & Infrastructure:</span> AWS (full stack),
							Kubernetes, Docker, Terraform
						</li>
						<li>
							<span class="font-semibold text-red-600">AI/ML:</span> LLM deployment, fine-tuning, stable
							diffusion, ChatGPT integration
						</li>
						<li>
							<span class="font-semibold text-red-600">DevOps:</span> CI/CD pipelines, ELK Stack, Prometheus,
							Cloudflare
						</li>
						<li>
							<span class="font-semibold text-red-600">Systems:</span> Linux administration, Terminal/CLI
							expertise, Server management
						</li>
					</ul>
				</div>

				<!-- Specialised Capabilities -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-4 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">
						Specialised Capabilities
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs print:leading-snug">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Template engines and content management systems</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span class="font-medium"
								>Automated calculation systems with 1,200%+ efficiency improvements</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Multi-language support (English, Spanish, Italian, German)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span
								>Cross-cultural product design across DACH, Asian, and Latin American markets</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Real-time messaging integration (Twilio, SendGrid)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Webhook implementation and event-driven architecture</span>
						</li>
					</ul>
				</div>

				<!-- Project Delivery Excellence -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-4 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">
						Project Delivery Excellence
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-1 print:text-xs print:leading-snug">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>3-month fixed engagement experience</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>20-day onboarding processes</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span class="font-medium">Proven regulatory penalty avoidance track record</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>High-value, high-risk project delivery under tight deadlines</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Proven scalability from small markets to enterprise-wide implementations</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span>Strong stakeholder management across international teams</span>
						</li>
					</ul>
				</div>

				<!-- Team Language Capabilities -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2 print:col-span-1 print:border-gray-400 print:p-4 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">
						Team Language Capabilities
					</h3>
					<div
						class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 print:grid-cols-3 print:gap-3"
					>
						<div class="text-center">
							<div class="font-semibold text-red-600 print:text-xs">English</div>
							<div class="text-sm text-gray-700 print:text-xs">
								Native fluency (all team members)
							</div>
						</div>
						<div class="text-center">
							<div class="font-semibold text-red-600 print:text-xs">French</div>
							<div class="text-sm text-gray-700 print:text-xs">Fluent (Duncan)</div>
						</div>
						<div class="text-center">
							<div class="font-semibold text-red-600 print:text-xs">German</div>
							<div class="text-sm text-gray-700 print:text-xs">Fluent (Leon)</div>
						</div>
						<div class="text-center">
							<div class="font-semibold text-red-600 print:text-xs">Spanish</div>
							<div class="text-sm text-gray-700 print:text-xs">
								Fluent (Leon), Conversational (Duncan)
							</div>
						</div>
						<div class="text-center">
							<div class="font-semibold text-red-600 print:text-xs">Italian</div>
							<div class="text-sm text-gray-700 print:text-xs">Fluent (Leon)</div>
						</div>
					</div>
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

		<!-- Page Break before Statement of Work -->
		<div class="print:break-before-page"></div>

		<!-- Statement of Work -->
		<section class="rounded-lg border-2 border-red-600 bg-white p-8 shadow-lg print:border-red-700 print:p-6 print:shadow-none">
			<div class="mb-6 text-center print:mb-4">
				<h2 class="text-2xl font-bold text-red-700 print:text-lg">Statement of Work</h2>
				<div class="mx-auto mt-2 h-1 w-24 bg-red-600 print:mt-1 print:h-0.5 print:w-16"></div>
			</div>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 print:grid-cols-1 print:gap-4">
				<!-- Scope of Work -->
				<div class="rounded-lg bg-gray-50 p-6 print:bg-white print:p-4 print:border print:border-gray-300">
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-3 print:text-base">Scope of Work</h3>
					<ul class="space-y-3 text-gray-800 print:space-y-2 print:text-sm">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"></span>
							<span><strong>Template Compliance Assessment:</strong> Comprehensive review and analysis of 300-400 existing templates for regulatory compliance</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"></span>
							<span><strong>Innovation Banking Workflow Optimisation:</strong> Design and implement streamlined content management workflows</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"></span>
							<span><strong>Adobe Functionality Replication:</strong> Develop core Adobe Creative Suite features within HSBC's in-house systems</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"></span>
							<span><strong>PEGA Functionality Replication:</strong> Replicate key PEGA workflow capabilities in custom banking solutions</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"></span>
							<span><strong>Global Messaging Standardisation:</strong> Implement consistent messaging framework across international operations</span>
						</li>
					</ul>
				</div>

				<!-- Project Details -->
				<div class="rounded-lg bg-gray-50 p-6 print:bg-white print:p-4 print:border print:border-gray-300">
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-3 print:text-base">Project Details</h3>
					<div class="space-y-4 text-gray-800 print:space-y-3 print:text-sm">
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Team Size:</span>
							<span class="font-semibold">4 FTEs</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Duration:</span>
							<span class="font-semibold">3 Months</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Contract Type:</span>
							<span class="font-semibold">Fixed Price</span>
						</div>
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Total Investment:</span>
							<span class="font-semibold text-red-700">£30,000</span>
						</div>
						<div class="flex justify-between">
							<span class="font-medium">Payment Terms:</span>
							<span class="font-semibold">TBD</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Key Deliverables -->
			<div class="mt-8 rounded-lg bg-red-50 p-6 print:mt-6 print:bg-white print:p-4 print:border-2 print:border-red-600">
				<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-3 print:text-base">Key Deliverables</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-1 print:gap-3">
					<div class="text-center">
						<div class="mb-2 text-2xl font-bold text-red-600 print:text-lg">300-400</div>
						<div class="text-sm font-medium text-gray-700 print:text-xs">Templates Assessed</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-2xl font-bold text-red-600 print:text-lg">2</div>
						<div class="text-sm font-medium text-gray-700 print:text-xs">Core Systems Enhanced</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-2xl font-bold text-red-600 print:text-lg">100%</div>
						<div class="text-sm font-medium text-gray-700 print:text-xs">Regulatory Compliance</div>
					</div>
				</div>
			</div>

			<!-- Contract Summary -->
			<div class="mt-6 rounded-lg bg-red-600 p-6 text-white print:mt-4 print:bg-red-700 print:p-4">
				<h3 class="mb-3 text-xl font-bold print:mb-2 print:text-base">Contract Summary</h3>
				<p class="leading-relaxed text-red-50 print:text-xs print:leading-normal">
					Fixed-price 3-month engagement delivering comprehensive messaging rationalisation across HSBC's template compliance and Innovation Banking workflows. Our 4-person specialist team will replicate core Adobe and PEGA functionalities within HSBC's in-house systems, ensuring regulatory compliance and operational excellence.
				</p>
			</div>
		</section>
	</main>
</div>

<style>
	@media print {
		@page {
			size: A4;
			margin: 15mm 20mm 15mm 20mm;
		}

		/* Print-specific text sizing */
		body {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
			color: black !important;
			font-size: 11pt;
		}

		/* Hide elements */
		.no-print {
			display: none !important;
		}

		/* Avoid page breaks */
		.print-avoid-break {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		/* Grid adjustments */
		.print-grid-2 {
			grid-template-columns: repeat(2, 1fr) !important;
		}

		/* Text and color adjustments */
		h1, h2, h3, h4, h5, h6 {
			color: black !important;
			font-weight: bold !important;
		}

		.text-red-600, .text-red-700, .text-red-800 {
			color: black !important;
		}

		.text-red-50, .text-red-100 {
			color: #666 !important;
		}

		/* Background adjustments */
		.bg-red-600, .bg-red-700 {
			background: #f0f0f0 !important;
			color: black !important;
			border: 1px solid #ccc !important;
		}

		.bg-gradient-to-r {
			background: #f5f5f5 !important;
			border: 1px solid #ddd !important;
		}

		/* Ensure bullets show in print */
		ul {
			list-style-type: disc !important;
		}

		/* Button styles */
		button, .btn, [class*="button"] {
			display: none !important;
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
