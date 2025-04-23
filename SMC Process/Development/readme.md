# Development

At the beginning of the Design, Development, and Implementation (DDI) phase, the state should develop a Master Test Plan, in consultation with the [Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf). The Master Test Plan describes in detail how the testing is being planned and how it will be managed across different test levels. It gives a bird’s eye view of the key decisions taken, the strategies to be implemented, and the testing effort involved in the project. 

If a state is using agile methodology or is taking a phased approach to implementation, the state and its CMS State Officer will decide the appropriate point at which to conduct the ORR and CR. The state must map the phases to the applicable CMS-required and state-specific outcomes to help the CMS Certification Team determine when to hold the ORR and CR.

To provide regular project updates, monthly project status should be submitted to their CMS State Officer. The project status reports should be loaded to the appropriate CMS Box certification folder starting at the beginning of the project and continuing until the CR is completed or until the CMS SO agrees it is no longer needed.

## Operational Readiness Review (ORR)
The state must undergo an ORR with its CMS State Officer prior to releasing its system/module into production. CMS encourages states to include all appropriate programs, business operations, and IT subject matter experts in the ORR.

The state will be able to schedule its review no more than three months in advance of the target date. For example, if the state intends to hold an ORR in March, then they can submit their request for the review as early as January. 

To schedule an ORR, the state must provide the following entry criteria:
- Latest Intake Form
    - This can be a draft but will need to be finalized and loaded to the applicable certification Box folder 2 weeks prior to the review. This allows the Certification team to review and ensure that all the CMS-required outcomes have been appropriately captured and identify opportunities for technical assistance.
- Go-live date.
    - State will provide their anticipated go-live date, along with well-documented and defined go/no-go exit criteria.
- User Acceptance Testing (UAT) completion date 
    - The state must provide a timeline for when UAT and any other testing will be complete. Additional guidelines can be found in [MES Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf).
    - All UAT should be completed prior to the ORR.
- The following files or a projected timeline for completion:
    - The independent, third-party security and privacy controls assessment report (SAR) and penetration test results conducted within the last 2 years from the requested ORR date,
        - If this is for an Eligibility & Enrollment (E&E) review, the state must provide the most recent Authority to Connect (ATC) to the CMS Hub approval letter
        - States should provide a Security and Privacy Assessment Report (SAR) and Penetration Test report completed by an independent assessor on a periodic basis, at a minimum of every two years per 45 C.F.R. § 95.621(f)(3),
    - Plan of Action & Milestones (POA&M) documenting the most recent status of vulnerabilities regardless of risk level (from SAR, penetration tests, vulnerability scans, disaster recovery test results). 
        - All critical vulnerabilities should be resolved prior to scheduling a review date. However, states can request a date with unresolved critical items if a mitigation/remediation plan is submitted using the recommended risk acceptance template, which can be found in Attachment D of CMS Information Security Plan of Action and Milestones (POA&M) Procedure.
- Link to CMS Box location
    - Work with your CMS State Officer, who will set up a file structure in CMS Box and provide this link.

Note that meeting the above entry criteria for ORR only clears the way for scheduling the ORR. The state must provide the most up-to-date documents two weeks prior to the ORR in the applicable certification Box folders for evaluation by the CMS Certification Team.

For the ORR, the following steps are completed:
1. The state finalizes the state columns of the Intake Form.
    - The state must use the exact filename(s), which was loaded in CMS Box when populating the Intake Form evidence columns.
2. Preferably earlier but no later than two weeks before the ORR, the state uploads all evidence, required artifacts, the Intake Form, Operational Report Workbook, the ORR agenda, and the presentation the state will use for the ORR in CMS Box certification folder.
    - No files uploaded to CMS Box should be redacted, this includes but is not limited to security risk assessments, penetration tests, screen prints, or reports that include PHI/PII.
    - The state notifies the CMS State Officer when they have completed loading all documentation (no later than 2 weeks prior to the review date).
    - The CMS Certification Team will then begin a review of the evidence and required artifacts.
3. Approximately one week prior to the review, an Information Request Listing (IRL) will be sent to the state by the CMS Certification Team. This includes questions and feedback on the files uploaded to CMS Box. Although providing written responses to these questions before the review is encouraged, it is not mandatory. The state should be prepared to address all outstanding questions from the IRL during the ORR or CR discussions and demonstrations.
4. The ORR meeting is held, and action items are documented, reviewed, and agreed to.
    - The state should try to respond to all action items as soon as possible, preferably within 24 hours.
5. A Tear-out will be created by the CMS Certification Team including observations, recommendations, and action items. The Tear-out will be sent to the state along with an updated Intake Form (with CMS columns filled out) approximately one week after the ORR meeting.
6. The Tear-out recommendations should be reviewed, and action taken as necessary (not required) as the state’s response will need to be reviewed during the CR. The state should continue working with its CMS State Officer to address all observations as the project goes into production and in preparation for the CR.


<center><img src="{{ site.baseurl }}/SMC Process/Development/ORR Flow.png"></center>

## Best Practices

### ORR Evidence 
- For additional guidance on how to complete the Intake Form, please review the [Intake Form Guidance]({{site.baseurl}}/Intake Form/).
- If the evidence documentation is lengthy and only one section applies to the evidence, the SMA should use the “State Comments” column of the Intake Form to identify the section/page.
- Ensure documentation needed as evidence or required artifacts are included as tasks or milestones in the project schedule so states can properly track the completion of all documentation.  
- It’s highly encouraged that the state utilize the Operational Report Workbook and provide the final draft at the time of the ORR with the Metrics Definitions tab completed. This also helps show that the state is prepared to report on the metrics starting after go-live.
- The CMS Box folder structure is set up by CMS SO and they provide access as applicable. CMS SO will establish one root CMS Box certification folder for each separate module certification effort. The state (or designate) will place the files in the appropriate folders. Further guidance on how to [set up CMS Box]({{site.baseurl}}/Box/) can be found on GitHub. Some files could be duplicated across CMS Box folders. For example, the APD could be in both the Background Documentation folder and the CEF folder.
- All critical and possibly high-severity defects should be resolved prior to go-live (the state should be clear on requirements in their Master Test Plan).

### Review Preparation
- States are highly encouraged to utilize the sample agenda provided by the CMS Certification Team, see the example below.

<center><img src="{{ site.baseurl }}/SMC Process/Development/ORR Agenda.png"></center>

[Download the ORR Sample Agenda](https://cmsbox.box.com/shared/static/wagbeuch4koazooybvb9qa3rfkoxjga3.docx)

## Resources 
- [SMC Guidance Document](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf) – see Appendix C for Required Artifacts and Appendix D for Framework for the Independent Third-Party Security and Privacy Assessment Guidelines for Medicaid Enterprise Systems
- [Code of Federal Regulations](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433)
- [Streamlined Modular Certification Intake Form template](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-intake-form.xlsx)
- [Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/) (includes Metrics Procedures Manual and FAQs under the Resources section) 
- [CEF Example Evidence, Tips, and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/)
- [Intake Form Guidance]({{site.baseurl}}/Intake Form/)
- [Example Monthly Project Status Reporting Template](https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/main/Streamlined%20Modular%20Certification%20Required%20Monthly%20Project%20Status%20Report%20Example%20Template.docx)
- [Medicaid Enterprise Systems Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf)
- [Using Box]({{site.baseurl}}/Box/)

## References
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
