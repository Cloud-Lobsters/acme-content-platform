<script>
	let { formData = $bindable() } = $props();
</script>

<div class="schedule-2">
	<div class="schedule-header">
		<h2>Schedule 2</h2>
		<h3>Technical and organisational security measures</h3>
	</div>

	<p class="intro">
		The Supplier shall implement and maintain the appropriate administrative, physical, and
		technical safeguards to protect the confidentiality, integrity and availability of the data
		that it receives, maintains, stores, processes or transmits on behalf of <span class="underline"
			>Capgemini</span
		> and disposes of such information securely at the end of its lifecycle.
	</p>

	<p>
		In any case, the Supplier must have, but not limited to, the below technical and
		organisational security measures.
	</p>

	<!-- Section 1: General -->
	<div class="security-section">
		<h4>1. General</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce that:
		</p>

		<ol class="security-list" type="a">
			<li>
				Cyber / information security policies and procedures are formulated, developed and
				implemented with governance model and specified function;
			</li>
			<li>
				A person is accountable for Cyber / information security policies implementation;
			</li>
			<li>
				The cyber / information security policies, procedures and implementations are reviewed by
				the Supplier at appropriate management level;
			</li>
			<li>
				The security management system of the Supplier is certified or aligned with001 and
				SSAE16/ISAE3402;
			</li>
			<li>
				If Cloud infrastructure is in place; the supplier has ensured the Cloud supplier holds CSS
				– C STAR certification;
			</li>
			<li>
				it shall provide <span class="underline">Capgemini</span> with services using SSAE 18 – SOC
				2 Type 2 or ISAE 3000 Type 2 Reporting or ISO27001 certified (or at least equivalent) data
				centers with evidences
			</li>
			<li>
				Where the supplier subcontracts, prior approval from <span class="underline"
					>Capgemini</span
				> must be obtained, and a third-party risk assessment must be provided to demonstrate the subcontractors'
				alignment with the present measures.
			</li>
		</ol>
	</div>

	<!-- Section 2: Cyber / Information security program -->
	<div class="security-section">
		<h4>2. Cyber / Information security program</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				An on-going program of cyber / information security governance, policies, procedures and
				technical controls;
			</li>
			<li>
				Procedures to conduct periodic independent security risk assessments related to data
				processing;
			</li>
			<li>A control and audit procedure to ensure compliance against policies and standards;</li>
			<li>A security incident and personal data breach management process;</li>
			<li>A security awareness plan and proof of training;</li>
			<li>A security / privacy by design methodology;</li>
			<li>Business continuity and recovery plans, including regular testing;</li>
			<li>Rigorous change control procedures</li>
		</ol>
	</div>

	<!-- Section 3: Asset Management -->
	<div class="security-section">
		<h4>3. Asset Management</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			maintain:
		</p>

		<ol class="security-list" type="a">
			<li>
				An inventory of assets (physical and logical) supporting the data processing for <span
					class="underline">Capgemini</span
				>.
			</li>
		</ol>
	</div>

	<!-- Section 4: Access and authentication -->
	<div class="security-section">
		<h4>4. Access and authentication</h4>
		<p>
			The Supplier warrants that it has established, documented and during the term of this
			Agreement it will always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				An information classification scheme that ensures appropriate and adequate security, both
				physical, logical as appropriate to the asset / media's classification;
			</li>
			<li>
				Appropriate mechanisms for user authentication and authorization in accordance with the
				"need-to-know" principle
			</li>
			<li>Controls to restrict access for remote users, contractors and suppliers;</li>
			<li>
				Timely and accurate administration of user account and authentication management;
			</li>
			<li>
				Privileged and User access reviews to ensure access remains appropriate related to
				individual's role.
			</li>
			<li>
				Processes to ensure assignment of unique IDs to each person with computer access;
			</li>
			<li>Processes to ensure change of default passwords and security parameters;</li>
			<li>Mechanisms to track all access to the data by unique ID;</li>
			<li>Mechanisms to encrypt or hash all passwords;</li>
			<li>
				Process to promptly revoke accesses of inactive accounts or terminated/transferred users.
			</li>
		</ol>
	</div>

	<!-- Section 5: Network security -->
	<div class="security-section">
		<h4>5. Network security</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Network segmentation and isolation to ensure confidentiality and integrity of <span
					class="underline">Capgemini</span
				> data;
			</li>
			<li>
				Firewall protection and intrusion detection/prevention systems for all network connections;
			</li>
			<li>
				Encryption of data in transit using industry-standard protocols (e.g., TLS 1.2 or higher);
			</li>
			<li>
				Regular vulnerability assessments and penetration testing of network infrastructure;
			</li>
			<li>
				Secure configuration of network devices in accordance with industry best practices;
			</li>
			<li>Network activity monitoring and logging for security event detection;</li>
			<li>
				VPN or other secure methods for remote access to systems processing <span class="underline"
					>Capgemini</span
				> data.
			</li>
		</ol>
	</div>

	<!-- Section 6: Physical and environmental security -->
	<div class="security-section">
		<h4>6. Physical and environmental security</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Physical access controls to data centers and facilities processing <span class="underline"
					>Capgemini</span
				> data;
			</li>
			<li>
				Security perimeter defenses including barriers, entry controls, and surveillance systems;
			</li>
			<li>Environmental controls for temperature, humidity, and fire suppression;</li>
			<li>
				Visitor management procedures including sign-in/out, escort requirements, and badge
				systems;
			</li>
			<li>
				Secure disposal procedures for physical media containing <span class="underline"
					>Capgemini</span
				> data;
			</li>
			<li>
				Protection against environmental threats (flood, earthquake, power failure) through
				redundancy and backup systems;
			</li>
			<li>Regular physical security audits and reviews.</li>
		</ol>
	</div>

	<!-- Section 7: Operations security -->
	<div class="security-section">
		<h4>7. Operations security</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Documented operational procedures for all systems processing <span class="underline"
					>Capgemini</span
				> data;
			</li>
			<li>Change management procedures for all system and configuration changes;</li>
			<li>
				Capacity planning and performance monitoring to ensure service availability;
			</li>
			<li>Separation of development, test, and production environments;</li>
			<li>
				Anti-malware protection on all systems with regular signature updates;
			</li>
			<li>Regular backup procedures with testing of restoration capabilities;</li>
			<li>
				Logging and monitoring of system activities with appropriate retention periods;
			</li>
			<li>
				Patch management procedures to ensure timely application of security updates;
			</li>
			<li>
				Clock synchronization across all systems processing <span class="underline"
					>Capgemini</span
				> data.
			</li>
		</ol>
	</div>

	<!-- Section 8: System development and maintenance -->
	<div class="security-section">
		<h4>8. System development and maintenance</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Secure development lifecycle methodology incorporating security requirements from design
				through deployment;
			</li>
			<li>
				Code review and security testing procedures including static and dynamic analysis;
			</li>
			<li>
				Secure coding standards and practices to prevent common vulnerabilities (OWASP Top 10);
			</li>
			<li>
				Development and test data management ensuring production data is not used in non-production
				environments;
			</li>
			<li>
				Change control procedures requiring testing and approval before production deployment;
			</li>
			<li>
				Segregation of duties in development, testing, and production environments;
			</li>
			<li>
				Restrictions on system utilities and privileged access to development tools;
			</li>
			<li>
				Regular security assessments and penetration testing of applications processing <span
					class="underline">Capgemini</span
				> data.
			</li>
		</ol>
	</div>

	<!-- Section 9: Supplier relationships -->
	<div class="security-section">
		<h4>9. Supplier relationships</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Policies for managing information security risks associated with third-party suppliers and
				service providers;
			</li>
			<li>
				Security requirements defined in agreements with suppliers who have access to <span
					class="underline">Capgemini</span
				> data;
			</li>
			<li>
				Regular monitoring and review of supplier compliance with security requirements;
			</li>
			<li>
				Procedures to manage changes to supplier services that may impact the security of <span
					class="underline">Capgemini</span
				> data;
			</li>
			<li>
				Due diligence and risk assessment procedures prior to engaging new suppliers;
			</li>
			<li>
				Requirements for suppliers to notify the Supplier of any security incidents affecting <span
					class="underline">Capgemini</span
				> data;
			</li>
			<li>
				Contractual requirements for data protection and return/destruction of data upon contract
				termination.
			</li>
		</ol>
	</div>

	<!-- Section 10: Information security incident management -->
	<div class="security-section">
		<h4>10. Information security incident management</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Documented incident response procedures for detecting, reporting, and responding to
				security incidents;
			</li>
			<li>
				Immediate notification to <span class="underline">Capgemini</span> of any security incidents
				affecting <span class="underline">Capgemini</span> data;
			</li>
			<li>
				Evidence collection and preservation procedures to support incident investigation;
			</li>
			<li>
				Procedures for assessing and documenting the impact of security incidents;
			</li>
			<li>
				Post-incident review and lessons learned process to prevent recurrence;
			</li>
			<li>
				Regular testing and updating of incident response procedures;
			</li>
			<li>
				Clearly defined roles and responsibilities for incident response team members;
			</li>
			<li>
				Communication procedures for notifying affected parties and regulatory authorities as
				required.
			</li>
		</ol>
	</div>

	<!-- Section 11: Business continuity and disaster recovery -->
	<div class="security-section">
		<h4>11. Business continuity and disaster recovery</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Business continuity plans to ensure continued availability of services processing <span
					class="underline">Capgemini</span
				> data;
			</li>
			<li>
				Disaster recovery plans with defined Recovery Time Objectives (RTO) and Recovery Point
				Objectives (RPO);
			</li>
			<li>
				Regular backup procedures with off-site storage and encryption of backup media;
			</li>
			<li>
				Annual testing of business continuity and disaster recovery plans with documented results;
			</li>
			<li>
				Redundant systems and infrastructure to support failover capabilities;
			</li>
			<li>
				Procedures for maintaining security controls during business continuity events;
			</li>
			<li>
				Documentation of dependencies and critical business processes;
			</li>
			<li>
				Regular review and update of continuity plans to reflect changes in business requirements.
			</li>
		</ol>
	</div>

	<!-- Section 12: Compliance -->
	<div class="security-section">
		<h4>12. Compliance</h4>
		<p>
			The Supplier warrants that it has established and during the term of this Agreement it will
			always enforce:
		</p>

		<ol class="security-list" type="a">
			<li>
				Identification and documentation of all applicable legal, regulatory, and contractual
				requirements;
			</li>
			<li>
				Procedures to ensure compliance with data protection laws including GDPR, UK GDPR, and other
				applicable regulations;
			</li>
			<li>
				Protection of intellectual property rights and proper licensing of all software;
			</li>
			<li>
				Protection of organizational records in accordance with retention requirements;
			</li>
			<li>
				Privacy and protection of personally identifiable information (PII);
			</li>
			<li>
				Regular compliance reviews and audits with documented findings and remediation plans;
			</li>
			<li>
				Procedures for managing compliance with cryptographic controls and key management;
			</li>
			<li>
				Independent reviews of information security policies and technical compliance;
			</li>
			<li>
				Documentation and evidence retention to demonstrate compliance with security requirements.
			</li>
		</ol>
	</div>
</div>

<style>
	.schedule-2 {
		padding: 1rem 0;
	}

	.schedule-header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid #0070ad;
	}

	.schedule-header h2 {
		color: #0070ad;
		font-size: 1.8rem;
		margin: 0 0 0.5rem 0;
	}

	.schedule-header h3 {
		color: #333;
		font-size: 1.3rem;
		margin: 0;
		font-weight: 600;
	}

	.intro {
		background: #f8f9fa;
		padding: 1.5rem;
		border-left: 4px solid #0070ad;
		margin: 1.5rem 0;
		line-height: 1.8;
		text-align: justify;
	}

	p {
		line-height: 1.8;
		margin-bottom: 1rem;
		text-align: justify;
	}

	.security-section {
		margin: 2.5rem 0;
		padding: 1.5rem;
		background: #fafafa;
		border-radius: 8px;
		border: 1px solid #e0e0e0;
	}

	.security-section h4 {
		color: #0070ad;
		font-size: 1.2rem;
		margin: 0 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #0070ad;
	}

	.security-list {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	.security-list li {
		margin-bottom: 1rem;
		line-height: 1.8;
		padding-left: 0.5rem;
	}

	.underline {
		text-decoration: underline;
	}
</style>
