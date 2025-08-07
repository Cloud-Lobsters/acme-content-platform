# HSBC Project Brief

## Overview
HSBC requires a comprehensive messaging rationalization initiative consisting of two parallel workstreams over a 3-month fixed engagement period, starting September 2025 (following 20-day onboarding period).

## Project Scope

### Workstream 1: Template Compliance Assessment
**Objective:** Audit and categorize 300-400 existing templates for regulatory and business requirement compliance

**Requirements:**
- System contains 300-400 critical templates (PDF, Word, standard Microsoft Office formats)
- Templates must conform to business and regulatory requirements
- Current team cannot confirm compliance status
- Need automated solution to categorize templates into four buckets:
  1. Complies with both business and regulatory requirements
  2. Complies with business but not regulatory requirements  
  3. Complies with regulatory but not business requirements
  4. Complies with neither

**Technical Approach:**
- Deploy LLM-based solution with predefined business and regulatory rules
- Consider on-premise deployment for compliance (estimated �20-50k hardware cost)
- Alternative: Cloud-based solution if templates contain only public data (no customer information)
- Implement audit process for quality assurance (targeting 90-99% accuracy)
- Volume assessment pending (estimated 300-10,000 pages total)

**Key Contact:** Jana (to be contacted by Tracey for detailed requirements)

### Workstream 2: Innovation Banking Content Management Workflow
**Objective:** Build scalable content management solution for Silicon Valley Bank (Innovation Banking) acquisition

**Background:**
- Innovation Banking (acquired Silicon Valley Bank unit) struggling with content delivery speed
- Current workflow involves "cellar tape and blue safety stickers" - highly manual processes
- Need to move from 15-20 step process to streamlined, automated solution
- Must integrate with existing Adobe/PEGA infrastructure where possible
- Goal: Create solution scalable to other HSBC markets and use cases

**Requirements:**
- Month-long discovery phase with dedicated Innovation Banking FTEs
- Full workflow analysis of current processes, tools, and challenges
- Solution development within 3-month window
- Preference to reduce dependency on PEGA/Adobe where feasible
- Focus on end-to-end content lifecycle from creation to customer delivery

**Current State Challenges:**
- Jira and Excel-based content creation
- Manual file uploads to Adobe
- Complex approval processes
- Slow time-to-market for marketing materials
- Limited API integration capabilities

**Future State Vision:**
- Simplified, self-service content creation
- Automated workflow integration
- Consistent content flow across all markets
- Hybrid approach: leverage existing PEGA/Adobe where beneficial, build lightweight alternatives for smaller markets
- "T-shaped" architecture: horizontal content creation flow with vertical distribution channels

## Business Context

### Strategic Importance
- Part of broader HSBC messaging rationalization initiative led by Venkat (project lead) and Tracey Bailey (subordinate)
- Critical for regulatory compliance and operational efficiency
- Foundation for scaling content management across global markets
- Opportunity to modernize legacy processes and reduce operational overhead

### Success Metrics
- Template compliance categorization accuracy (target: 90-99%)
- Content creation workflow time reduction
- Scalability across HSBC markets
- Integration effectiveness with existing systems
- Operational cost reduction

## Delivery Approach

### Timeline
- **August 2025:** Proposal development and stakeholder alignment
- **August-September 2025:** 20-day onboarding period via Merchants House
- **September 2025:** Project commencement
- **December 2025:** Project completion (3-month fixed engagement)

### Team Structure
- **HSBC Side:** Dedicated Innovation Banking FTEs for discovery and requirements
- **Delivery Team:** Cloud Lobsters technical team with Duncan as CTO/Solution Architect
- **Key Stakeholders:** Venkat (project lead), Tracey Bailey (project manager), Jana (template requirements)

### Commercial Model
- Fixed-price engagement for 3-month period
- Budget range: To be determined based on detailed scoping
- Procurement via Merchants House partnership

## Risk Considerations
- Hardware costs for on-premise LLM deployment
- Integration complexity with existing PEGA/Adobe systems
- Regulatory compliance requirements for data handling
- Change management across multiple HSBC markets
- Technical dependencies on legacy systems

## Next Steps
1. Finalize commercial proposal based on detailed requirements
2. Complete Merchants House onboarding process
3. Initiate discovery sessions with Innovation Banking team
4. Confirm technical architecture for template compliance solution
5. Establish project governance and communication protocols