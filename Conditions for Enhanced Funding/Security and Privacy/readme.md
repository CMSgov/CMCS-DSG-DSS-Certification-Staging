# Security & Privacy

The Conditions for Enhanced Funding (CEF) under 42 CFR § 433.112(b), and specifically CEF 9, 12, and 18, encompass privacy and security requirements that are mandatory for and integral to all Medicaid Enterprise Systems (MES). 

Please visit the [CEF](../../Conditions for Enhanced Funding/CEFs/) page for examples and required evidence. 

Please visit the [CEF Tips and Best Practices](../../Conditions for Enhanced Funding/CEF Tips/) page for additional tips and best practices. 

Use the links below to navigate to each section of this page: 
- [Laws, Regulations, and Policies](#policy) 
- [Documentation and Reporting](#documentation) 
- [Independent Assessor Requirements](#assessment)
- [Security and Privacy Compliance Artifacts](#artifacts)
- [Security and Privacy Risk Management](#risk)
- [Periodic Assessment Timing](#timing)
- [Security Incidents and Breach Notification](#notification)
- [Security and Privacy FAQs](#faq)
- [Other Recommended Practices](#recommendations)
- [Additional Resources](#resources)
- [References](#references)

## Laws, Regulations, and Policies {#policy}
All federal and state agencies and their contractors must comply with various federal and state security and privacy laws and regulations, depending on the types of data processed and other factors.  The following key federal laws and regulations are essential to understanding the basic security and privacy requirements for federal agencies, state partners, and contractors: 
- [Privacy Act of 1974](https://www.govinfo.gov/content/pkg/USCODE-2018-title5/pdf/USCODE-2018-title5-partI-chap5-subchapII-sec552a.pdf)
- [e-Government Act of 2002](https://www.govinfo.gov/content/pkg/PLAW-107publ347/pdf/PLAW-107publ347.pdf)
- [21st Century Cures Act](https://www.gpo.gov/fdsys/pkg/PLAW-114publ255/pdf/PLAW-114publ255.pdf)
- [Cybersecurity Act of 2015 (CSA), Section 405(d)](https://405d.hhs.gov/)
- [Health Insurance Portability and Accountability Act (HIPAA)](https://www.congress.gov/104/plaws/publ191/PLAW-104publ191.pdf)
- [Health Information Technology for Economic and Clinical Health (HITECH Act)](https://www.healthit.gov/sites/default/files/hitech_act_excerpt_from_arra_with_index.pdf)
- [The ACA and implementing HHS Regulations](https://www.govinfo.gov/content/pkg/PLAW-111publ148/pdf/PLAW-111publ148.pdf)
- [45 CFR § 164.308](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.308)
- [45 CFR § 155.260](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-155/subpart-C/section-155.260)
- [45 CFR § 155.280](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-155/subpart-C/section-155.280)
- [Safeguards for Protecting Federal Tax Returns and Return Information](https://www.irs.gov/pub/irs-pdf/p1075.pdf)
- [45 CFR § 95.621](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-95/subpart-F/subject-group-ECFR8ea7e78ba47a262/section-95.621)

CMS also assesses the module's security and privacy posture in accordance with applicable CMS security frameworks. All MES modules must comply with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and adhere to the most current published National Institute of Standards and Technology (NIST) standards — [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final), Security and Privacy Controls for Information Systems and Organizations, and/or [NIST SP 800-171](https://csrc.nist.gov/pubs/sp/800/171/r3/final), Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations. For the Eligibility and Enrollment (E&E) module specifically, CMS additionally requires compliance with the [Acceptable Risk Controls for ACA, Medicaid, and Partner Entities (ARC-AMPE)](https://www.cms.gov/marketplace/resources/regulations-guidance), issued pursuant to Section 1411(g) of the ACA and 45 CFR §155.260. ARC-AMPE is mandatory for State Medicaid Agencies operating Eligibility and Enrollment Systems connected to the CMS Federal Data Services Hub. For non-E&E modules, states may leverage ARC-AMPE as an informative reference to strengthen security and privacy posture, facilitate HIPAA adherence, and safeguard consumer and beneficiary Personally Identifiable Information (PII) and Protected Health Information (PHI).  CMS cannot mandate ARC-AMPE beyond the MES E&E module; that authority rests with the states. 

## Documentation and Reporting {#documentation}
- The State Medicaid Agency (SMA) and vendor must provide fully detailed, unredacted results of all privacy and security evidence, including but not limited to the Security Assessment Report (SAR), penetration tests, vulnerability scans, and the Plan of Action and Milestones (POA&M). CMS will allow redaction of sensitive information (e.g., IP addresses, hostnames, or PII). However, all other information, including network architecture, is required to support the certification decision. 
- All security and privacy documents should be uploaded to the designated CMS repository. 
- The SAR and penetration test must clearly state the range of dates when the assessment was performed, not simply the date the report was generated. 
- The SMA must conduct the security and privacy analysis, complete the SAR, and perform the penetration test assessment every two years unless the state is following the Affordable Care Act (ACA) Administering Entity (AE) template. These assessments must be completed within 2 years of the applicable operational readiness review (ORR) or certification review (CR). If more than one vendor is involved in the coding of the Design, Development, and Implementation (DDI) and Maintenance and Operations (M&O) phases, security documentation should be provided for each vendor.  
- The monthly project status report should discuss important security and privacy events, such as completing a System Security Plan (SSP) or managing important steps in completing the independent third-party security and privacy audit and penetration test before the ORR. 

## Independent Assessor Requirements {#assessment}
- The assessor performing the SAR and penetration test must be independent of the DDI and operations teams (state staff outside DDI/Operations may qualify if independence and qualification criteria are met — see FAQ 1), except for the Independent Verification and Validation (IV&V) contractor. 
- The SMA is not required to use the same assessor for the SAR and penetration test. 

## Security and Privacy Compliance Artifacts {#artifacts}
- DO NOT REDACT ANY FILE, except for IP addresses, hostnames, or PII, if necessary. 
- Security Assessment Report 
    - If the SMA relies on security and privacy guidance other than the National Institute of Standards and Technology (NIST), they must provide a crosswalk to the latest published NIST Special Publication (SP) 800-53 control families to ensure coverage. 
    - If a state uses System and Organization Control (SOC) for the SAR, it must: 
        - Use either a SOC 2 Type 1 or SOC 2 Type 2 report, ensuring it includes all five (5) trust principles: security, confidentiality, processing integrity, availability, and privacy.  
        - Avoid using a SOC 1 report, as it focuses solely on financials and does not address security and privacy trust principles. 
    - If a state uses a Health Information Trust Alliance (HITRUST) report as a SAR, it must request an independent third-party penetration test report to be included in the HITRUST results. 
    - The SAR should contain a summary of all findings from the assessment that includes documentation reviews, control testing, scanning, penetration testing, and interview(s). 
    - States should submit only one final SAR to CMS. Once the SAR has been submitted and CMS has no additional comments or edits, the state and/or MES vendor should not submit additional SARs. 
- Penetration Test 
    - All findings or similar findings from penetration tests should be consolidated in the POA&M. 
    - Penetration tests are not the same as vulnerability scans and are not interchangeable. Vulnerability scans assess known risks in code and infrastructure, while a penetration test simulates hacking. 
- Plan of Action and Milestones 
    - The POA&M should include columns for an initial discovery date; scheduled completion date; actual completion date; original risk rating; adjusted risk rating (if applicable); the source of the finding (for example, SAR, penetration tests, and vulnerability scans); a description of the finding and other relevant fields to describe the finding; and progress made toward resolution or impediments to resolution. 
    - POA&M entries should include all findings regardless of risk level, including but not limited to findings from control assessments, independent audits or reviews, security assessment reports, penetration tests, vulnerability scans, and disaster recovery testing. Similar findings can be consolidated; however, the POA&M should confirm whether and how findings were consolidated and include source references. 
    - The POA&M is used in continuous monitoring activities. The POA&M should track the closure of items for at least 1 year from the date the POA&M was published, or back to the dates the SAR and penetration tests were performed if they are more than 1 year older than the POA&M. 
    - If the risk levels differ from NIST, the state must provide a crosswalk of risk-level definitions to NIST (e.g., critical equals very high in NIST). 
    - If the state is accepting the risk, the state must provide the risk acceptance document. 
    - There is no mandatory POA&M template based on SMC guidelines. States can use industry best-practice POA&M templates, such as the FedRAMP POA&M template (see the Reference section). 
    - Note: All Security and Privacy Assessment Workbook (SAW) findings must be documented in the POA&M. The SAW should not be used as the POA&M, as it typically lacks the necessary detail. 
    - Quarterly POA&M updates are mandated by [CMS Acceptable Risk Safeguards (ARS)](https://www.cms.gov/research-statistics-data-and-systems/cms-information-technology/informationsecurity/information/acceptable-risk-safeguards-50x), specifically within the control implementation for CA-05 (Plan of Action and Milestones). Although this requirement is not documented in an SMDL, it is addressed through the conditions for enhanced funding (CEF) metric in [SMC Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf), as published on Medicaid.gov. To meet the CEF, CMS requires quarterly POA&M submissions supporting MES modules. In particular, CEF metrics 9, 12, and 18 pertain to privacy and security requirements, which are essential and obligatory components of all Medicaid Enterprise Systems (MES). Please be advised that SERVIS is not utilized, as it serves as a CCIIO (ATC) repository; no materials have been transferred to this platform. Consistent with established separation of duties and security protocols, CMS State Officers and the CMS Certification team are not granted access to SERVIS. Historically, POA&M updates were sent directly to State Officers or uploaded to Box as supporting evidence. Moving forward, this repository will serve as the designated location for POA&M documentation related to MES. 
 - ADA Title II and Section 508 Accessibility 
    - State Medicaid Agencies (SMA), as state and local government entities, are subject to the accessibility requirements of Title II of the Americans with Disabilities Act (ADA) (28 CFR Part 35). Section 508 of the Rehabilitation Act applies directly to federal agencies; however, its testing standards and the Voluntary Product Accessibility Template (VPAT) methodology are widely accepted by CMS as the practical means for SMAs to demonstrate accessibility compliance for MES modules. 
    - New ADA Web Accessibility Rules: The DOJ’s revised ADA Title II regulations (28 CFR Part 35) require state and local governments to meet WCAG 2.1 Level AA standards, with a compliance deadline that varies by jurisdiction size. States should review the ADA’s published guidance and step-by-step action plans at https://www.ada.gov/resources/web-rule-first-steps/ and develop remediation plans to address any identified gaps in their web-based systems.  
    - CMS recommends using the Voluntary Product Accessibility Template (VPAT). 
    - Alternative formats to VPATs are acceptable if the state has performed Section 508 compliance testing and provides the reports as evidence before a review. States can use the tools and techniques at https://www.section508.gov/test or https://guides.18f.org/accessibility/. Note that a VPAT is not an audit (an audit goes into much greater detail). 
    - A final rule, “Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities,” was published in the Federal Register on April 24, 2024, requiring that state and local government web content and mobile applications conform to WCAG 2.1 Level AA. Compliance is required two or three years from publication, depending on the public entity’s size and exceptions documented in the rule. Per the Interim Final Rule published April 20, 2026, the compliance date for State and local government entities with a total population of 50,000 or more is extended from April 24, 2026, to April 26, 2027.  The compliance date for entities with a total population of less than 50,000, or any special district government, is extended from April 26, 2027, to April 26, 2028. The IFR did not change the substantive standard; WCAG 2.1 Level AA remains the technical conformance requirement.  
    - States that are still testing against WCAG 2.0 should provide CMS with their written plans to achieve WCAG 2.1 Level AA conformance by their applicable IFR-extended compliance date (April 26, 2027, for SMAs serving populations of 50,000 or more). The foregoing final rule does not apply to the internal, non-public systems. The rule states: 
        - “…several commenters asked whether this definition would cover internal, non-public applications, such as web content used solely by employees. The Department reiterates that this rule includes requirements for the web content and mobile apps provided or made available by public entities within the scope of Title II. While this rule is not promulgated under Title I of the ADA, it is important to note that compliance with this ADA Title II rule will not relieve Title II entities of their distinct employment-related obligations under Title I of the ADA, which could include, for example, accommodations for a web developer with a disability working for a public entity.” 
- Business Continuity and Disaster Recovery 
    - A Business Continuity Plan (BCP) and Disaster Recovery (DR) plan should be reviewed annually. CMS strongly recommends that states conduct an annual BCP/DR exercise before go-live (unless following MARS-E, which requires an annual BCP/DR). States must have a BCP/DR plan before production go-live. States should provide the BCP/DR test results for ORR, along with the state’s plan to remediate any findings identified during the exercise. 
    - States can hold a tabletop BCP/DR test to meet this provision; however, states should plan for the simulation (end-to-end) testing to ensure their contractors can meet the state’s defined Recovery Time Objective (RTO) and Recovery Point Objective (RPO). BCP/DR test results should include any tests for the RTO and RPO listed in the respective BCP/DR Plan and confirm whether the test results met expectations. 
    - CMS strongly recommends a live test and does not recommend doing a tabletop exercise year after year. 
    - States must document in the POA&M any deficiencies found during the system-level DR test (the Reference section provides an example template). 

## Security and Privacy Risk Management {#risk}
- Risk Acceptance Form 
    - The Risk Acceptance Form records the weaknesses that require an official risk acceptance. The organization’s authorities should rigorously explore ways to mitigate the risks before deciding to accept them. Once all options are exhausted, accepting risk might be the unavoidable outcome. It is imperative to clearly describe the risk and its source in the Risk Acceptance Form. 
    - The Risk Acceptance Form identifies the responsible entities and stakeholders of this process and the necessary mitigation procedures essential to the risk acceptance decision. The form provides context for the risk acceptance process and specifies the required activities to complete it. 
    - If the SMA plans to accept the risk presented by a weakness or finding from the SAR, penetration tests, or vulnerability scans, the SMA must create, sign, and upload a risk acceptance form to the state’s Box repository. 
    - The SMA should have established service-level agreements with their vendor(s) for timely remediation of security findings. Although the SMA can determine its own time frames, CMS suggests the following time frames for the four risk levels: 
        - Critical/Very High – 15 days 
        - High – 30 days 
        - Moderate – 90 days 
        - Low – 365 days 

## Periodic Assessment Timing {#timing}
- The SAR and penetration test must be completed by an independent assessor every two years per 45 CFR § 95.621(f)(3) unless the state is following the Affordable Care Act Administering Entity template. CMS highly recommends that states conduct an annual SAR and penetration test to ensure their implementation of effective security and privacy safeguards. 
- As required by 45 CFR § 95.621(f)(2)(iii), the state must conduct a SAR and penetration test whenever there are significant system changes. 
- Although quarterly submissions are required as stated above, CMS strongly recommends updating the Plan of Action and Milestones monthly and including all new and updated open findings from vulnerability scans, penetration tests, and assessments. 
- CMS strongly recommends conducting the BCP/DR test annually. 

## Security Incidents and Breach Notification {#notification}
- Under HIPAA standards, states must require that contractors and other entities protect the privacy and security of Personally Identifiable Information (PII)/Protected Health Information (PHI) through business associate agreements if they perform claims processing, third-party, or other payment or reimbursement services on their behalf. States should ensure that their business associates update their procedures as necessitated by environmental or operational changes affecting security and privacy safeguards. 
- The HIPAA Breach Notification Rule, 45 CFR § 164.400-414, requires HIPAA covered entities and their business associates to provide notification following a breach of unsecured PHI. Similar breach notification provisions implemented and enforced by the Federal Trade Commission apply to vendors of personal health records and their third-party service providers pursuant to Section 13407 of the HITECH Act. 
- The HHS HIPAA Breach Notification Rule website offers more information and guidance on the breach reporting requirements. In addition to the foregoing HIPAA requirements, the state should immediately report any security or privacy incident or breach, whether discovered by its own staff or reported by a contractor, to the CMS MES State Officer and the CMS IT Service Desk at <cms_it_service_desk@cms.hhs.gov>. If a state is unable to report breaches to the CMS IT Service Desk via email, the state can contact the CMS IT Service Desk by phone at (800) 562-1963 or (410) 786-2580. 

## Security and Privacy FAQs {#faq}
### 1. Can a state’s internal staff perform as an independent security and privacy assessor of MES modules? 
Answer: Yes, internal state security and privacy personnel can evaluate the security and privacy posture of the MES module if they are not part of the MES Design, Development, and Implementation or Operations teams and possess the appropriate qualifications as detailed in the SMC Guidance for evaluation of the implementation of security and privacy controls. The internal state staff must be familiar with HIPAA regulations, NIST standards, and other applicable federal privacy and cybersecurity regulations and guidance. State staff must also meet the requirements for assessor independence and objectivity and demonstrate their capability to perform penetration testing and vulnerability scans. 

### 2. Does a state need to perform a security and privacy assessment if an MES module IT environment has been changed? 
Answer: State agencies must perform risk analyses whenever significant system changes occur as required by 45 CFR § 95.621 (f)(2)(iii). 

Per NIST SP 800-37, significant changes to an information system may include, for example: (1) installation of a new or upgraded operating system, middleware component, or application; (2) modifications to system ports, protocols, or services; (3) installation of a new or upgraded hardware platform; (4) modifications to cryptographic modules or services; or (5) modifications to security controls. Examples of significant changes to the environment of operation may include, for example: (1) moving to a new facility; (2) adding new core missions or business functions; (3) acquiring specific and credible threat information that a threat source is targeting the organization; or (4) establishing new/modified laws, directives, policies, or regulations. 

### 3. Are the security and privacy requirements applicable to legacy systems or just recently certified MES modules? 
Answer: States must maintain security and privacy files for all MES modules, including legacy and recently certified modules. 

### 4. Can states redact the security and privacy files? 
Answer: CMS will allow redaction of sensitive information (e.g., IP addresses, hostnames, or PII). However, all other information, including network architecture, is required to support the certification decision. Having complete and unredacted artifacts, except where necessary, is crucial to demonstrating compliance and the effectiveness of security and privacy controls. Excessive redactions can lead to a loss of important context, making it difficult for CMS to understand the security and privacy measures in place fully. Redactions can compromise the assessment of the effectiveness of the security and privacy measures. 

### 5. Can states have open, unmitigated critical weaknesses, findings, or vulnerabilities for a certification review? 
Answer: As part of the entry criteria, states should resolve all critical vulnerabilities before scheduling a review date. States with unresolved critical items can request a date by submitting a mitigation/remediation plan in the recommended risk acceptance template. 

### 6. Can states use Minimal Acceptable Risk Standards for Exchanges (MARS-E) or Acceptable Risk Controls for ACA, Medicaid, and Partner Entities (ARC-AMPE) for MES? 
Answer: ARC-AMPE is the required framework for the Eligibility and Enrollment (E&E) module. As of March 4, 2026, MARS-E is no longer an option; states must use ARC-AMPE for the E&E module. For non-E&E modules, states may leverage ARC-AMPE compliance artifacts to meet the SMC security and privacy requirements. States must ensure their E&E module complies with both the ACA and HIPAA regulations. ARC-AMPE provides the technical controls supporting that compliance. ARC-AMPE superseded MARS-E on March 4, 2026. 

States can leverage ARC-AMPE compliance artifacts for other modules, including but not limited to SAR, penetration test, POA&M, and BCP/DR test results, to meet the SMC security and privacy requirements. 

### 7. What is the recommended timeline for addressing privacy and security during Design, Development, and Implementation (DDI) and Maintenance and Operations (M&O)? 
Answer: CMS recommends the following timeline for addressing privacy and security: 
- System Security Plan (SSP) – must be drafted early in the DDI phase because it is included in the Security Control Assessment (SCA) and maintained throughout M&O. 
- Security Control Assessment (SCA) – must be completed before go-live, and the Security Assessment Report must be provided for ORR evidence. Going forward, the state must complete the SCA biannually unless the state is following the Affordable Care Act (ACA) Administering Entity (AE) template. If so, the state must complete the SCA annually. 
- Penetration Test – states must complete penetration testing before go-live. Penetration testing must be completed biennially. CMS strongly recommends annual penetration testing, unless the state follows the ACA AE template, which requires it. 
- Vulnerability Scans – must be conducted continuously throughout DDI and M&O. CMS recommends monthly scans. 
- Plan of Action & Milestones (POA&M) – states must update POA&Ms throughout DDI and M&O and address all vulnerabilities, including, at a minimum, those from the SCA, penetration testing, vulnerability scans, and DR findings. CMS recommends using the ARC-AMPE POA&M template or the FedRAMP POA&M template. POA&Ms must be reported to CMS at least quarterly.   
- Disaster Recovery and Business Continuity Plans – states must draft these plans early in the DDI as an element of the SCA and review them annually throughout DDI and M&O. 
- Disaster Recovery Test – CMS strongly recommends completing the Disaster Recovery Test annually throughout DDI and M&O. States should complete a DR test before go-live. 

### 8. Why do all 5 trust principles need to be included if using a SOC 2 Type 2 (or Type 1) as the primary Security Assessment Report (SAR)? 
Answer: SMC Guidance 2.0, Appendix C, requires Medicaid Enterprise Systems to undergo an independent assessment of all applicable security and privacy controls. It also permits states to use a framework similar to or complementary to NIST if it supports HIPAA risk analysis requirements. To ensure HIPAA compliance and full NIST control coverage, CMS requires that any SOC 2 Type 1 or 2 report used as the primary assessment for the SAR include testing of all five Trust Services Criteria. 

### 9.  Do states have to use WCAG 2.1 for their Accessibility Testing 
Answer: Yes. The final rule “Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities,” published April 24, 2024, requires that state and local government web content and mobile applications conform to (at minimum) WCAG 2.1 Level AA. Per the Interim Final Rule published April 20, 2026, the compliance dates were extended to April 26, 2027, for entities serving 50,000 or more, and to April 26, 2028, for entities under 50,000 and special district governments. The IFR did not change the substantive standard. 

### 10. What if I am confused about what to provide for CEF evidence or for CEF Metric reporting? 
Answer: Please visit the [CEF](../../Conditions for Enhanced Funding/CEFs/) page for examples, required evidence, and CEF metric guidance and the [CEF Tips and Best Practices](../../Conditions for Enhanced Funding/CEF Tips/) page for additional tips and best practices. 

## Other Recommended Practices {#recommendations}
- Implement Multi-Factor Authentication (MFA) for all users, including internal staff and external vendors, as a foundational cybersecurity practice. 
- Implement strong encryption of data at rest and in transit to prevent compromise of PII/PHI. 
- Update and patch software and hardware regularly, and monthly at a minimum. 
- Identify single points of failure in payment and claims processing systems to reduce vulnerabilities. 
- Perform system and data backups and test data restoration on a regular cadence. 
- Train staff on their role and performance expectations to prevent cybersecurity attacks. 

## Additional Resources {#resources}
- [SMC Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf)
- [Section 508 Guidance](https://www.section508.gov/test)
- [Accessibility Guidance](https://guides.18f.org/accessibility/)
- [Incident Response](https://www.cms.gov/about-cms/information-systems/privacy/incident-response)
- [Address Gaps in Cybersecurity: HHS OCR releases crosswalk between HIPAA Security Rule and NIST Cybersecurity Framework and NIST SP 800-53 controls](https://www.hhs.gov/hipaa/for-professionals/security/nist-security-hipaa-crosswalk/index.html)
- [Risk assessment determination and scale as defined in NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf), refer to Appendix G (Likelihood of Occurrence), H (Impact), and I (Risk Determination). 
- [508 accessibility Level AA compliance new rule: Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities (ada.gov)](https://www.ada.gov/assets/pdfs/web-rule.pdf).  Note: compliance is required two or three years from the publication date of April 24, 2024, depending on public entity size and has exceptions as noted in the rule.
- [State and Local Governments: First Steps Toward Complying with the Americans with Disabilities Act Title II Web and Mobile Application Accessibility Rule](https://www.ada.gov/assets/pdfs/web-rule.pdf)

## References {#references}
- [28 CFR Part 35](https://www.ecfr.gov/current/title-28/chapter-I/part-35)
- [42 C.F.R. § 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112)
- [42 C.F.R. § 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116)
- [45 C.F.R. § 164.308](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.308)
- [45 C.F.R. § 95.621](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-95/subpart-F/subject-group-ECFR8ea7e78ba47a262/section-95.621)
- [Medicaid.gov SMC Site](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html)
- [State Medicaid Director Letter #22-001](https://www.medicaid.gov/sites/default/files/2023-06/smd22001.pdf)
- [State Medicaid Director Letter #06-022](https://downloads.cms.gov/cmsgov/archived-downloads/SMDL/downloads/SMD092006.pdf)
- [State Medicaid Manual](https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Paper-Based-Manuals-Items/CMS021927)
- [Business Associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html)
- [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat), see the latest WCAG version
- [Example Risk Acceptance Form](https://www.cms.gov/files/document/poamprocedurepdf) (see Attachment D)
- [FedRAMP POA&M template](https://www.fedramp.gov/documents-templates)
- [Acceptable Risk Controls for ACA, Medicaid, and Partner Entities (ARC-AMPE)](https://www.cms.gov/marketplace/resources/regulations-guidance)

