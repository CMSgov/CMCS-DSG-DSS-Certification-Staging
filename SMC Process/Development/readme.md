# Development

At the beginning of the Design, Development, and Implementation (DDI) phase, the state should develop a Master Test Plan, in consultation with the [Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf). The Master Test Plan describes in detail how the testing is being planned and how it will be managed across different test levels. It gives a bird’s eye view of the key decisions taken, the strategies to be implemented, and the testing effort involved in the project. 

If a state is using agile methodology or is taking a phased approach to implementation, the state and its CMS State Officer will decide the appropriate point at which to conduct the ORR and CR. The state must map the phases to the applicable CMS-required and state-specific outcomes to help the CMS Certification Team determine when to hold the ORR and CR.

To provide regular project updates, monthly project status should be submitted to their CMS State Officer and the MES mailbox (MES@cms.hhs.gov). The project status reports should be loaded to the appropriate CMS Box folder (as discussed and agreed to with CMS SO) starting at the beginning of the project and continuing until the CR is completed or until the CMS SO agrees it is no longer needed.

## Operational Readiness Review (ORR)
The state must undergo an ORR with its CMS State Officer prior to releasing its system/module into production. CMS encourages states to include all appropriate programs, business operations, and IT subject matter experts in the ORR.

The state will be able to schedule its review no more than three months in advance of the target date. For example, if the state intends to hold an ORR in March, then they can submit their request for the review as early as December. 

To schedule an ORR, the state must provide the following entry criteria:
-	Anticipated go-live date. 
    -	Go/No-Go Exit Criteria is well documented and defined. 
-	Testing completion timeline for all testing, but User Acceptance Testing at minimum (for a full list of testing see MES Testing Guidance Framework)  
-	Link to CMS Box location
    -	Please work with your CMS State Officer who will set up a file structure in CMS Box.
-	Anticipated privacy and security assessment completion dates for the following (these are evidence in Conditions for Enhanced Funding): 
    -	Independent Security Assessment (ISA) conducted within the last 2 years.
    -	Independent penetration tests conducted within the last 2 years.
    -	POA&M documenting the status of vulnerabilities.
    -	Proof of 508 compliance (e.g., VPAT)
    -	Disaster Recovery Plan and Test Results

For the ORR, the following steps are completed:
1.	The state finalizes the state columns of the Intake Form.  
2.	Preferably earlier but no later than two weeks before the ORR, the state uploads all evidence, required artifacts listed within Appendix C of the SMC Guidance, the Intake Form, the ORR agenda, and the presentation the state will use for the ORR in CMS Box. 
    1.	No files uploaded to CMS Box should be redacted, this includes but is not limited to security risk assessments, penetration tests, screen prints, or reports that include PHI/PII.
    2.	The state also sends the completed Intake Form to the CMS State Officer and to MES@cms.hhs.gov. 
    3.	The CMS Certification Team will then begin a review of the evidence and required artifacts. 
3.	Approximately one week prior to the review, an Information Request Listing (IRL) will be sent to the state by the CMS Certification Team. This includes questions and feedback on the files uploaded to CMS Box. The state should respond in writing by the time of the review and modify the agenda to address feedback from the CMS Certification Team during the review.
4.	The ORR meeting is held, and action items are documented, reviewed, and agreed to. 
    1.	The state should try to respond to all action items as soon as possible, preferably within 24 hours.
5.	A Tear-out will be created by the CMS Certification Team including observations, recommendations, and action items. The Tear-out will be sent to the state along with an updated Intake Form (with CMS columns filled out) approximately one week after the ORR meeting.
6.	The Tear-out recommendations should be reviewed, and action taken as necessary (not required) as the state’s response will need to be reviewed during the CR. The state should continue working with its CMS State Officer to address all observations as the project goes into production and in preparation for the CR.

<img src="{{ site.baseurl }}/SME Process/Development/ORR Flow.png" width="100%">

## Best Practices

### ORR Evidence 
- For additional guidance on how to complete the Intake Form, please review the Intake Form Guidance on GitHub.<<<ADD LINK>> 
- If the evidence documentation is lengthy and only one section applies to the evidence, the SMA should use the “State Evidence” column of the Intake Form to identify the section/page.
        - Ensure documentation needed as evidence or required artifacts are included as tasks or milestones in the project schedule so states can properly track the completion of all documentation.  
- It’s highly encouraged the state utilize the Operational Report Workbook and provide the final draft at the time of the ORR with the Metrics Definitions tab completed. This also helps show that the state is prepared to report on the metrics starting after go-live.
- The CMS Box folder structure is set up by CMS SO and they provide access as applicable. CMS SO will establish one root CMS Box folder for each separate module certification effort. The state (or designate) will place the files in the appropriate folders. Further guidance on how to set up CMS Box can be found on GitHub. <<ADD LINK>> 
        - Some files could be duplicated across CMS Box folders. For example, the APD could be in both the Background Documentation folder and the CEF folder.

### Privacy & Security/ CEF
- All critical and high vulnerabilities, regardless of origin, should be resolved prior to go-live. If the state does not resolve prior to go-live, the state might not get FFP back to the day of go-live.
- All critical and possibly high-severity defects should be resolved prior to go-live (the state should be clear on requirements in their Master Test Plan).
- The state must complete a risk acceptance if the Independent Security Assessment, Independent penetration tests, POA&M documenting the status of all vulnerabilities, proof of 508 compliance (e.g., VPAT), Disaster Recovery Plan, and Test Results are not done prior to the ORR. 
        - Each state must develop its own Risk Acceptance form internally as part of its own internal governance processes. The state can leverage existing forms (using sections as applicable) and put them in their official state letterhead template to formalize them for submission to CMS.
        - This is a document that shows the state accepts the privacy and security risks of going live without assessing and correcting risks and there is a potential for incidents.
        - The form does not need CMS approval, but the state must send it to CMS to ensure communication is clear.

### Review Preparation
- States are highly encouraged to utilize the sample agenda provided by the CMS Certification Team:

<img src="{{ site.baseurl }}/SME Process/Development/ORR Agenda.png" width="100%">

## Resources 
- SMC Guidance Document – see Appendix C for Required Artifacts and Appendix D for Framework for the Independent Third-Party Security and Privacy Assessment Guidelines for Medicaid Enterprise Systems
- Code of Federal Regulations
- Streamlined Modular Certification Intake Form template (click on link under Related Resources section)
- Metrics and Ongoing Reporting (includes Metrics Procedures Manual and FAQs under the Resources section) 
- CEF Example Evidence, Tips, and Best Practices
- Intake Form Guidance
- Example Monthly Project Status Reporting Template
- Medicaid Enterprise Systems Testing Guidance Framework (click on link under the Related Resources section)
- Using Box

## References
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
