# AEM & MDP Messages Automation - Email Thread Summary

## Overview
This email thread discusses the automation of AEM (Adobe Experience Manager) and MDP (Message Delivery Platform) messages at HSBC, focusing on technical implementation, workflow optimization, and messaging rationalization.

## Key Participants
- **Koszin VISWANATHAN** (Thread initiator)
- **Venkat VAIDEY, Tomasz BAZANT** (Primary stakeholders) 
- **Alex I DE VINE, Manish B KUMAR, Dan Avidan, Tracey J BAILEY** (Technical team)
- **Jiri PALACKY** (Technical lead)
- **Lambert J Z VAN** (Business stakeholder)
- **Gregorz WENC, Paul Y K TONG** (Implementation team)

## Email 1: Initial Meeting Summary
**From**: Koszin VISWANATHAN  
**Subject**: RE: AEM & MDP messages automation

### Meeting Outcomes:
1. **InApp & Push Currency Analysis**: Shared analysis over meeting with attached screenshots
2. **Missing Information**: Identified gaps in Fragment ID automation workflow - need complete system synchronization
3. **Data Requirements**: Must analyze Data Specification and finalize messaging workbench

### Action Items:
- **Wendy Y CHEN**: Provide Data Elements for Messaging Team (Lambert JZ VAN) and AEM Team (Gregorz WENC)
- **Push Team**: Evaluate charge of Path Parameter change from Fragment ID to Content ID
- **AEM Team**: Evaluate charge of Path Parameter of CAPI from Fragment ID to Content ID

## Email 2: Apology & Clarification
**From**: Koszin VISWANATHAN (via Alex W L CHEN)  
**Date**: Tuesday, August 5, 2025 at 22:24

Apologizes to Gregorz MAZIARZ, Jiri PALACKY, and Tomasz BAZANT for delays.

### Key Points:
- **Flexible working arrangements** mentioned
- **Campaign automation exploration** - focus on hyper-personalization
- **Business priority assessment** needed for automation initiatives

## Email 3: Strategic Discussion
**From**: Alex W L CHEN (forwarding Lambert JZ VAN)  
**Date**: Tuesday, August 5, 2025 10:29 AM

### Strategic Concerns:
- **AEM & MDP vendor engagement** completed in March/April with limited progress
- **Key architectural questions** remain unresolved
- **Proof of Concept vs Full Implementation** timeline concerns
- **Manual FSA limitations** - not viable long-term solution

### Critical Requirements:
- Need **supporting members for judgment call**
- Request **L0 estimations by 06 Aug** for solution comparison
- **Vendor engagement clarity** on AEM capabilities and automation support
- **Alternative strategies** exploration needed

## Email 4: Technical Solutions & Flowcharts
**From**: Koszin VISWANATHAN  
**To**: Tomasz, Paul & Lambert

### Solution Framework:

#### **Solution 1: Tactical (Current State)**
- **AEM Preview & Publish**: Not Available
- **Limitation**: Push Notification, Banking2.0 banner & Email verification needed
- **Responsible Party**: For InApp banner only
- **Development SLA**: 6 months for InApp banner & Push Notification
- **Cost Analysis**: Detailed breakdown by channel type

#### **Solution 2: Strategic (Future State)**  
- **AEM Preview & Publish**: Available
- **Enhanced Capabilities**: Push Notification, Banking2.0 banner & Email support
- **Full Integration**: Complete workflow automation

### Technical Channels Supported:
- **Email**: Y/N
- **SMS**: Y/N  
- **Banking2.0**: Y/N
- **Email**: Y/N (duplicate in original)
- **SMS**: Y/N
- **Banking2.0**: Y/N

## Flowcharts Analysis

### Solution 1 Flowchart (Tactical):
**Linear Process Flow**:
```
AH → UV → Preview → CMS → AH → MDP
```
- Simple sequential workflow
- Limited automation capabilities
- Manual intervention points

### Solution 2 Flowchart (Strategic):
**Enhanced Process Flow**:
```
AH → UV → CMS → [Decision Diamond] → Cost → UV → Preview → CMS → AH
```
- **Decision Point Integration**: Includes cost evaluation step
- **Feedback Loop**: UV to CMS with cost consideration
- **More sophisticated workflow** with validation points

## Key Technical Requirements
1. **Fragment ID to Content ID migration**
2. **CAPI path parameter optimization**
3. **Data Elements specification for messaging teams**
4. **Multi-channel support** (Email, SMS, Banking2.0, Push Notifications)
5. **Hyper-personalization capabilities**

## Business Impact
- **Messaging rationalization** across bank channels
- **Automation efficiency** improvements
- **Vendor relationship optimization**
- **Timeline pressures** for decision making
- **Cost-benefit analysis** for tactical vs strategic approaches

## Next Steps
1. **L0 estimations completion** by specified deadline
2. **Vendor capability assessment**
3. **Alternative strategy evaluation**
4. **Resource allocation decisions**
5. **Implementation timeline finalization**

---

*Document generated from email thread screenshots dated August 11, 2025*
*Related to HSBC messaging automation and rationalization initiative*