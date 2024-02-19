# Conditions for Enhanced Funding (CEF)

## Overview
Regulatory requirements that span business areas, previously called “enterprise,” are now Conditions for Enhanced Funding (CEF) and mirror the “Standards and Conditions” in regulation. Under SMC, CMS significantly reduced number of requirements from 5 core MECT checklists to 22 conditions. 

States must attest that the system complies with all the CEF outlined at [42 CFR 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112) and that the system remains in compliance with Medicaid program standards, laws, regulations, and industry best practices once it is in production.

## Conditions for Enhanced Funding
The information in the following table contains the Conditions for Enhanced Funding (CEF) described in 42 C.F.R. § 433.112 that are applicable for all MES modules.

This table, combined with the applicable business area outcomes, are a starting point for aligning the state’s goals for a project with applicable CMS-required outcomes.

{% assign cms = "CEFs" %}

<div align="right" class="ds-u-margin-bottom--2">
  <a href="{{ site.baseurl }}/downloads/{{ cms }}.csv" target="_blank" download>Click here to download the Conditions for Enhanced Funding in a CSV file</a>
</div>

{% include table.html table=cms %}

## Tips & Best Practices

### General
-	While the CEF tab of the intake form must be fully completed for both the ORR and CR, if certain CEF requirements are met during the ORR, the state does not need to go over them during CR unless there are significant changes. 
-	In some cases, CEF and security-related demonstrations can be conducted as pre-ORR or pre-CR desk reviews, or as separate conversations.
-	Not every Condition for Enhanced Funding requirement will apply to every system. For example, if a Condition for Enhanced Funding related to Enrollment & Eligibility does not apply because the system is a Health Information Exchange, mark it as such as explain why in the intake form.
-	Some CEFs can be satisfied through the established, tracked CMS-Required and State-Specific Outcomes.
-	The term ‘reporting’ either refers to internal quality management or performance reporting, or for federal reports, such as CMS-37, CMS-64, or TMSIS. In all instances, the system should enhance reporting wherever possible in comparison to previous reporting efforts. In addition, the state maintains complete and accurate historical TMSIS data for program evaluation and the continuous improvement of business operations.  The state can demonstrate that data quality issues are meeting the targets for Outcomes Based Assessment (OBA) critical priority data quality checks, high priority data quality checks, and the expenditure data content category. The state should also demonstrate they are working in good faith to resolve such issues. Generally, CMS will consider the state out of compliance with TMSIS requirements if it is not meeting the targets for OBA criteria in critical priority data quality checks, high priority data quality checks, and the expenditure data content category and/or the state is not working in good faith to resolve any identified data quality issues. The state meets all requirements outlined in the T-MSIS Reporting - Standard Operating Procedures (SOP) for any Large System Enhancements (LSEs) affecting T-MSIS reporting. 

### Artifacts
-	The most common artifacts for security-related CEF are third-party penetration test results, security/privacy assessment report, plan of action and milestones (POA&M).  
-	The most common artifacts for the non-security related CEF are typically the APD, vendor contacts, system design documents/ConOps, 508 test results, T-MSIS concurrence, Disaster Recovery Plans, ConOps, and Disaster Recovery Test Report.

### 508 Compliance
-	States should produce an objective artifact on 508 test reports; note that even if these are not in Voluntary Product Accessibility Templates (VPAT) format, this is acceptable as long as the state has performed 508 testing and is able to show the reports. State can follow tools and techniques at https://www.section508.gov/test or https://accessibility.18f.gov. Note that a VPAT is not an audit, as an audit goes into much greater detail.

### System Architedcture
-	States must show how open architecture and vendor communication allows the system to continue performing in a plug-and-play manner despite potential vendor turnover.
-	States should provide a systems diagram that explains its architecture and the interaction between various aspects of the overarching MMIS ecosystem to demonstrate the larger system structure and how business areas communicate.

### Using Contracts and APDs
-	Certain sections of contractual language with vendors typically contain system cost, leveraging current system functionality, and ownership information. Many times, states do not own the software, although they do own the data and bring that to the vendors; subscription fees are paid to vendors and are documented down to the line level in the APD. The state will need to discuss if the costs are appropriate.
-	Certain sections of contractual language from the APD typically contain system cost, leveraging current system functionality, and ownership information.

### Business Continuity & Disaster Recovery
-	A Business Continuity Plan (BCP)/Disaster Recovery (DR) should be tested within 6 months post go-live; the state must conduct an actual BCP/DR exercise before the CR takes place. Results should be provided, as well as the state’s plan to remediate any findings identified during the exercise.
-	States can hold a tabletop BCP/DR test to meet this provision.  However, states should plan for the real live BCP/DR testing to ensure their contractors can meet the state’s defined Recovery Time Objective and Recovery Point Objective. 

### ConOps
-	A Concept of Operations (ConOps) is a user-oriented document that “describes systems characteristics for a proposed system from a user's perspective. A CONOPS also describes the user organization, mission, and objectives from an integrated systems point of view and is used to communicate overall quantitative and qualitative system characteristics to stakeholders."[^1]
-	A ConOps "describes the proposed system in terms of the user needs it will fulfill, its relationship to existing systems or procedures, and the ways it will be used. CONOPS can be tailored for many purposes, for example, to obtain consensus among the acquirer, developers, supporters, and user agencies on the operational concept of a proposed system. Additionally, a CONOPS may focus on communicating the user's needs to the developer or the developer's ideas to the user and other interested parties."[^2]

### Security & Privacy
-	Internal security and privacy personnel that is not part of the original MES DDI team can be the independent assessor to evaluate the security and privacy risk posture of the MES module.
-	States should provide a Security and Privacy Assessment Report (SAR) and Penetration Test report completed by an independent assessor on a periodic basis, at a minimum of every two years, to ensure that appropriate, cost-effective safeguards are incorporated into new and existing systems. State agencies must perform risk analyses whenever significant system changes occur. Additional information about meeting security and privacy requirements can be found in the Framework for the Independent Third-Party Security and Privacy Assessment Guidelines for Medicaid Enterprise Systems, also known as Appendix D in the SMC SMDL Guidance Document.
-	Typically, a third-party assessor entity is an independent security and privacy assessment organization, but a SMA’s sister agency can also be leveraged if they have the capabilities and skills to perform this task within the project timeline.
-	HITRUST certification can be utilized as a SAR.  However, a separate penetration test report is still needed. 
-	Typically, SSAE Type 2 SOC-1 or SOC-2 are not comprehensive enough to demonstrate the security and privacy risk posture for the MES environment, but states have the authority to make an informed risk tolerance decision to leverage these reports.  Please ensure the proper scoping of these complementary assessment frameworks is providing sufficient assessment boundary to cover the MES IT environment.

## Additional Resources
-	[SMC SMDL Guidance Document](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf)
-	[MES Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf)
-	[Section 508 Guidance](https://www.section508.gov/test)
-	[Accessibility Guidance](https://accessibility.18f.gov)
-	[Address Gaps in Cybersecurity:  HHS OCR releases crosswalk between HIPAA Security Rule and NIST Cybersecurity Framework and NIST SP 800-53 controls](https://www.hhs.gov/sites/default/files/nist-csf-to-hipaa-security-rule-crosswalk-02-22-2016-final.pdf)

## References
-	[42 C.F.R. § 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112) 
-	[45 C.F.R. § 95.621](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-95/subpart-F/subject-group-ECFR8ea7e78ba47a262/section-95.621)
-	[Medicaid.gov SMC Site](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html)

[^1]: IEEE Computer Society, March 19, 1998, IEEE Guide for Information Technology—System Definition—Concept of Operations (ConOps) Document (IEEE Std 1362-1998).
[^2]: Office of Management and Budget, December 5, 1994, Operational Concept Description (OCD), Data Item Description DI-IPSC-81430.

