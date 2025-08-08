<script>
	import MiniBio from '$lib/components/MiniBio.svelte';

	const teamMembers = [
		{
			role: 'Lead Technical Architect',
			name: 'Duncan Elliot',
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
					text: 'Former KPMG Senior Manager with extensive HSBC, Citigroup, and Barclays audit and financial modelling experience',
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
					text: 'Delivered €200M+ in regulatory penalty avoidance across major UK banks through proactive compliance frameworks and risk mitigation strategies',
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
				"Leon's track record of transforming complex financial workflows into intuitive, functional products—from multi-country loan systems to high-conversion payment flows—makes him ideally positioned to solve HSBC's most challenging user experience and technical implementation challenges."
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
					text: 'Built custom server infrastructure with locally deployed Kubernetes cluster across 3+ nodes featuring comprehensive ELK Stack, Fluentd, and Prometheus monitoring',
					highlight: true
				},
				{
					text: 'Built comprehensive microservices architecture with 12+ interconnected repositories using gRPC for high-performance inter-service communication',
					highlight: false
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
					highlight: false
				}
			],
			highlight:
				'Alexander will be core to assessing PEGA functionality that can be in-housed. His exceptional technical depth and financial services infrastructure understanding ensures delivery of scalable, mission-critical systems within the engagement timeline.'
		}
	];
</script>

<svelte:head>
	<title>HSBC Team Profile - Mini Bios</title>
	<meta charset="UTF-8" />
</svelte:head>

<div
	class="font-['Georgia','Times New Roman',serif] mx-auto max-w-[210mm] bg-white text-gray-900 shadow-sm print:mx-0 print:my-0 print:w-full print:max-w-none print:bg-white print:shadow-none"
>
	<!-- Document Header / Cover Page -->
	<header
		class="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white print:flex print:h-screen print:items-center print:justify-center print:bg-red-700 print:p-0"
	>
		<div
			class="border-l-4 border-white pl-4 print:space-y-4 print:border-l-0 print:pl-0 print:text-center"
		>
			<h1 class="text-2xl font-bold tracking-wide print:mb-6 print:text-4xl print:tracking-normal">
				HSBC Messaging Rationalisation Initiative
			</h1>
			<p class="mt-1 text-sm font-medium text-red-100 print:mt-8 print:text-2xl print:!text-black">
				Team Profile & Capabilities
			</p>
		</div>
	</header>

	<!-- Main Content -->
	<main class="space-y-8 p-8 print:mx-0 print:break-before-page print:space-y-2 print:p-2">
		<!-- Executive Summary -->
		<div class="print-avoid-break rounded-lg bg-red-600 p-6 text-white print:bg-red-700 print:p-2">
			<h3 class="mb-4 text-xl font-bold print:mb-1 print:text-xs print:!text-white">
				Executive Summary
			</h3>
			<p class="leading-relaxed text-red-50 print:mb-0 print:text-xs print:leading-tight">
				This team combines deep banking sector knowledge, cutting-edge technical capabilities, and
				proven delivery excellence to execute HSBC's messaging rationalisation initiative across
				both template compliance assessment and Innovation Banking content management workflow
				optimisation.
			</p>
		</div>

		<!-- Combined Team Skills Section -->
		<section
			class="skills-table print-avoid-break rounded-lg border-2 border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-8 print:border-gray-500 print:bg-white print:p-3"
		>
			<div class="mb-8 text-center print:mb-2">
				<h2 class="text-2xl font-bold text-gray-900 print:mb-0 print:text-xs">
					Combined Team Skills & Technical Expertise
				</h2>
				<div class="mx-auto mt-3 h-1 w-24 bg-red-600 print:mt-0.5 print:h-0.5 print:w-8"></div>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 print:grid-cols-2 print:gap-2">
				<!-- Core Banking & Financial Services -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-1 print:text-xs">
						Core Banking & Financial Services
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-0 print:text-xs print:leading-tight">
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span class="font-medium">Direct HSBC audit and systems experience</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Major bank remediation programs (PPI, mortgage, credit)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Regulatory compliance (Section 166, data trails, audit frameworks)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Advanced financial modelling and working capital analysis</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span
								>Expert financial modelling for complex banking calculations and risk assessment</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Fintech product design across global markets</span>
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
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Template engines and content management systems</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span class="font-medium"
								>Automated calculation systems with 1,200%+ efficiency improvements</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Multi-language support (English, Spanish, Italian, German)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span
								>Cross-cultural product design across DACH, Asian, and Latin American markets</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"></span>
							<span>Real-time messaging integration (Twilio, SendGrid)</span>
						</li>
					</ul>
				</div>
				<!-- Advanced Technology Stack -->
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2 print:col-span-2 print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-1 print:text-xs">
						Advanced Technology Stack
					</h3>
					<ul class="space-y-3 text-gray-800 print:space-y-0 print:text-xs print:leading-tight">
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
				<!-- Project Delivery Excellence -->
				<!-- <div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-1 print:text-xs">
						Project Delivery Excellence
					</h3>
					<ul class="space-y-2 text-gray-800 print:space-y-0 print:text-xs print:leading-tight">
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>3-month fixed engagement experience</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>20-day onboarding processes</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span class="font-medium">Proven regulatory penalty avoidance track record</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>High-value, high-risk project delivery under tight deadlines</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Proven scalability from small markets to enterprise-wide implementations</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-red-600 print:mt-1"
							></span>
							<span>Strong stakeholder management across international teams</span>
						</li>
					</ul>
				</div> -->

				<!-- Team Language Capabilities -->
				<!-- <div
					class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2 print:col-span-2 print:border-gray-400 print:p-2 print:shadow-none"
				>
					<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-1 print:text-xs">
						Team Language Capabilities
					</h3>
					<div
						class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 print:grid-cols-5 print:gap-1"
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
				</div> -->
			</div>
		</section>

		{#each teamMembers as member, index}
			<div
				class="team-member-section {index === 2 ? 'leon-alex-group print:break-before-page' : ''}"
			>
				<MiniBio {...member} />
			</div>
		{/each}

		<!-- Statement of Work -->
		<section
			class="print-avoid-break rounded-lg border-2 border-red-600 bg-white p-8 shadow-lg print:break-before-page print:border-red-700 print:p-6 print:shadow-none"
		>
			<div class="mb-6 text-center print:mb-4">
				<h2 class="text-2xl font-bold text-red-700 print:text-xs">Statement of Work</h2>
				<div class="mx-auto mt-2 h-1 w-24 bg-red-600 print:mt-1 print:h-0.5 print:w-16"></div>
			</div>

			<!-- Delivery Framework Disclaimer -->
			<div class="mb-6 rounded-md bg-red-700 p-3 print:mb-4 print:bg-red-800 print:p-2">
				<p class="text-sm font-medium text-red-100 print:text-xs">
					<strong>Delivery Framework:</strong> Services will be delivered through Mansion House Consulting's
					established Tier 1 Financial Services framework, providing HSBC with additional assurance whilst
					maintaining direct access to our specialist banking expertise and proven track record.
				</p>
			</div>

			<div class="space-y-6 print:space-y-4">
				<!-- Scope of Work -->
				<div
					class="rounded-lg bg-gray-50 p-6 print:border print:border-gray-300 print:bg-white print:p-4"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						Scope of Work
					</h3>
					<ul class="space-y-3 text-gray-800 print:space-y-0 print:text-xs print:leading-tight">
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span
								><strong>Template Compliance Assessment:</strong> Comprehensive review and analysis of
								300-400 existing templates for regulatory compliance</span
							>
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600 print:mt-1.5"
							></span>
							<span
								><strong>Innovation Banking Workflow Optimisation:</strong> Collaborate with Innovation
								House to understand requirements and develop MVP to inform long-term robust solution
								development</span
							>
						</li>
					</ul>
				</div>

				<!-- Project Details -->
				<div
					class="rounded-lg bg-gray-50 p-6 print:border print:border-gray-300 print:bg-white print:p-4"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						Project Details
					</h3>
					<div class="space-y-4 text-gray-800 print:space-y-1 print:text-xs">
						<div class="flex justify-between border-b border-gray-200 pb-2 print:border-gray-300">
							<span class="font-medium">Team Size:</span>
							<span class="font-semibold">5 FTEs</span>
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

				<!-- HSBC Internal Resource Requirements -->
				<div
					class="rounded-lg bg-yellow-50 p-6 print:border print:border-yellow-400 print:bg-white print:p-4"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						HSBC Internal Resource Requirements
					</h3>
					<div class="space-y-3 text-gray-800 print:space-y-1 print:text-xs">
						<p>
							<strong>Template Compliance Workstream:</strong> 1 dedicated FTE from relevant compliance
							or risk team with deep knowledge of HSBC's template governance and regulatory requirements.
						</p>
						<p>
							<strong>Innovation Banking Workstream:</strong> 1 dedicated FTE from Innovation Banking
							with subject matter expertise in current workflows and stakeholder relationships to facilitate
							MVP development and requirements gathering.
						</p>
						<p>
							<strong>Knowledge Transfer & Capability Development:</strong> We will leverage existing
							HSBC developers throughout the engagement to develop in-house capabilities, ensuring the
							bank can maintain and build upon solutions we implement for long-term sustainability.
						</p>
						<p class="text-sm text-gray-600 italic print:text-xs">
							These internal resources are essential for project success, providing domain expertise
							and ensuring seamless integration with existing HSBC processes.
						</p>
					</div>
				</div>

				<!-- Technical Requirements & Infrastructure Access -->
				<div
					class="rounded-lg bg-blue-50 p-6 print:border print:border-blue-400 print:bg-white print:p-4"
				>
					<h3 class="mb-4 text-lg font-bold text-gray-900 print:mb-1 print:text-xs">
						Technical Requirements & Infrastructure Access
					</h3>
					<div class="space-y-3 text-gray-800 print:space-y-1 print:text-xs">
						<p>
							<strong>Tooling Flexibility:</strong> Cloud Lobsters requires flexibility to utilize our
							proven UI frameworks and development tools (including Svelte 5, modern component architecture,
							and specialized financial services libraries) as well as AI tooling (Anthropic) to ensure
							optimal delivery speed and quality.
						</p>
						<p>
							<strong>Infrastructure Access:</strong> Ready access to HSBC's development and staging
							environments, including necessary permissions for deployment, testing, and integration
							with existing systems to facilitate seamless solution delivery.
						</p>
						<p>
							<strong>Security & Compliance:</strong> All tooling and infrastructure access will be subject
							to HSBC's security policies and approval processes, with full documentation and compliance
							with banking regulatory requirements.
						</p>
						<p class="text-sm text-gray-600 italic print:text-xs">
							These requirements enable our team to deliver efficiently whilst maintaining HSBC's
							security standards and ensuring successful project outcomes.
						</p>
					</div>
				</div>
			</div>

			<!-- Key Deliverables -->
			<div
				class="mt-8 rounded-lg bg-red-50 p-6 print:mt-6 print:border-2 print:border-red-600 print:bg-white print:p-4"
			>
				<h3 class="mb-4 text-lg font-bold text-red-700 print:mb-1 print:text-xs">
					Key Deliverables
				</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3 print:gap-3">
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
			<div
				class="contract-summary mt-6 rounded-lg bg-red-600 p-6 text-white print:mt-4 print:bg-red-700 print:p-4"
			>
				<h3 class="mb-3 text-xl font-bold print:mb-1 print:text-xs">Contract Summary</h3>
				<p class="leading-relaxed text-red-50 print:text-xs print:leading-tight">
					Fixed-price 3-months engagement delivering Template Compliance Assessment and Innovation
					Banking workstreams. Our specialist team will aim to streamline direct to client messaging
					at Innovation Banking, aiming to replicate some of the Adobe and PEGA functionalities as
					well as provide strategic assessment for potential in-housing. We will implement an
					AI-driven approach to solving the Template Compliance Assemenent workstream.
				</p>
			</div>
		</section>
	</main>
</div>

<style>
	@media print {
		@page {
			size: A4;
			margin: 5mm 8mm 10mm 8mm;
		}

		/* Main container adjustments for maximum A4 width */
		* {
			box-sizing: border-box;
		}

		html,
		body {
			width: 100% !important;
			max-width: 100% !important;
			margin: 0 !important;
			padding: 0 !important;
		}

		/* Print-specific text sizing and font improvements */
		* {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
			font-family: 'Segoe UI', 'Arial', sans-serif !important;
			line-height: 1.4 !important;
		}

		body {
			font-size: 10pt !important;
		}

		/* Keep HSBC red color scheme */
		.text-red-600,
		.text-red-700 {
			color: #db0011 !important;
		}

		.text-red-800 {
			color: #a50000 !important;
		}

		.bg-red-600,
		.bg-red-700 {
			background-color: #db0011 !important;
			color: white !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Ensure all bullet points are red */
		.bg-red-600.rounded-full,
		span.bg-red-600.rounded-full,
		.rounded-full.bg-red-600 {
			background-color: #db0011 !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Force red color for all bullet-like elements */
		.h-1.w-1.rounded-full,
		.w-1.h-1.rounded-full {
			background-color: #db0011 !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Force smaller bullet size in print */
		span.rounded-full.bg-red-600 {
			width: 3px !important;
			height: 3px !important;
			min-width: 3px !important;
			min-height: 3px !important;
			max-width: 3px !important;
			max-height: 3px !important;
			margin-top: 6px !important;
			display: inline-block !important;
			vertical-align: middle !important;
			transform: translateY(-1px) !important;
		}

		/* Remove default bullets from ALL elements, then add back our custom ones */
		ul,
		ol,
		li,
		p,
		div {
			list-style: none !important;
			list-style-type: none !important;
		}

		/* Hide any default markers */
		*::marker {
			display: none !important;
			content: none !important;
		}

		/* Specifically remove bullets from tech stack */
		.tech-stack-no-bullets,
		.tech-stack-no-bullets * {
			list-style: none !important;
			list-style-type: none !important;
		}

		.tech-stack-no-bullets::before,
		.tech-stack-no-bullets::after,
		.tech-stack-no-bullets *::before,
		.tech-stack-no-bullets *::after {
			display: none !important;
			content: none !important;
		}

		.bg-red-50 {
			background-color: #fef2f2 !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		.text-red-50,
		.text-red-100 {
			color: white !important;
		}

		/* Force white text on cover page */
		header p {
			color: white !important;
		}

		.border-red-600,
		.border-red-700 {
			border-color: #db0011 !important;
		}

		/* Hide elements */
		.no-print {
			display: none !important;
		}

		/* Ensure header repeats properly */
		header {
			break-after: avoid;
		}

		/* Avoid page breaks for important elements */
		.print-avoid-break,
		table,
		section,
		.rounded-lg {
			break-inside: avoid !important;
			page-break-inside: avoid !important;
		}

		/* Keep executive summary and skills table together */
		main > div:first-child,
		main > section:first-of-type {
			break-after: avoid !important;
			page-break-after: avoid !important;
		}

		/* Ensure MiniBio components don't break */
		.grid > div {
			break-inside: avoid !important;
			page-break-inside: avoid !important;
		}

		/* Grid adjustments for better A4 utilization */
		.print-grid-2 {
			grid-template-columns: repeat(2, 1fr) !important;
		}

		/* Heading improvements */
		h1 {
			font-size: 22pt !important;
			color: #db0011 !important;
			margin-bottom: 10px !important;
			text-align: center !important;
		}

		h2 {
			font-size: 14pt !important;
			color: #db0011 !important;
			margin-top: 15px !important;
			margin-bottom: 10px !important;
		}

		h3 {
			font-size: 12pt !important;
			color: #333 !important;
			margin-top: 10px !important;
			margin-bottom: 8px !important;
		}

		/* Paragraph and list improvements */
		p {
			font-size: 10pt !important;
			margin-bottom: 8px !important;
		}

		ul {
			list-style-type: disc !important;
			margin-left: 20px !important;
		}

		li {
			font-size: 10pt !important;
			margin-bottom: 4px !important;
		}

		/* Table optimization to prevent breaks */
		table {
			width: 100% !important;
			break-inside: avoid !important;
			page-break-inside: avoid !important;
		}

		/* Statement of Work section optimization */
		.rounded-lg {
			margin-bottom: 10px !important;
			padding: 8px !important;
			margin-left: 0 !important;
			margin-right: 0 !important;
		}

		/* Maximize content width */
		section {
			margin-left: 0 !important;
			margin-right: 0 !important;
			width: 100% !important;
		}

		/* Background color preservation */
		.bg-gradient-to-r {
			background: linear-gradient(
				to right,
				rgba(219, 0, 17, 0.05),
				rgba(219, 0, 17, 0.1)
			) !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		.bg-gray-50 {
			background-color: #f9fafb !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		.bg-yellow-50 {
			background-color: #fefce8 !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		.bg-blue-50 {
			background-color: #eff6ff !important;
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}

		/* Button removal */
		button,
		.btn,
		[role='button'] {
			display: none !important;
		}

		/* Skills table specific styling */
		.skills-table {
			break-inside: avoid !important;
		}

		/* Team member sections shouldn't break */
		.team-member-section {
			break-inside: avoid !important;
			page-break-inside: avoid !important;
		}

		/* Leon and Alex should be on same page */
		.print\:break-before-page {
			break-before: page !important;
			page-break-before: always !important;
		}

		.leon-alex-group {
			break-after: avoid !important;
			page-break-after: avoid !important;
		}

		.leon-alex-group + .team-member-section {
			break-before: avoid !important;
			page-break-before: avoid !important;
		}

		/* Contract summary optimization */
		.contract-summary {
			break-inside: avoid !important;
			margin-top: 20px !important;
		}
	}
</style>
