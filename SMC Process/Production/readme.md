# Production test

Once a system is in production, states should be able to regularly and consistently provide metrics that demonstrate the system complies with applicable regulations and meets outcomes. States begin reporting on metrics after go-live and before the Certification Review. From then, and for as long as the state continues to receive enhanced funding for its MES solution, metrics are reported at least annually.

## Operational Reporting
In accordance with 42 CFR 433.112(b)(15), states are required to report on the system’s performance to CMS as a condition for receiving enhanced funding. Reporting metrics enhance transparency and accountability of IT solutions in meeting regulatory requirements as well as the state’s program goals. 

In preparation for the CR, the state should submit metrics in the appropriate CMS Box certification folder, preferably utilizing the Operational Report Workbook. To be certified, states must submit at least six months of metrics data or data back to your requested retroactive certification date, whichever is greater.

After the CR, states must submit operational reports in the appropriate CMS Box metrics folder containing metrics. For all modules, the state must provide a monthly breakdown of metric data within its ORW, as applicable. A state must submit the ORW for all modules with its Operational Advanced Planning Documents (OAPD) submission. The ORWs of EVV modules must be submitted on a quarterly basis.

## Certification Review (CR)
A CR is necessary for the state to receive enhanced federal funding for system maintenance and operations. The CR is focused on demonstrating the impact of that functionality in production, as assessed by metrics.

CMS encourages states to include all appropriate program, business operations, and IT subject matter experts in the CR.

In accordance with 42 CFR 433.116, the enhanced FFP may be claimed retroactive to the first day in the calendar quarter following the implementation date of the module. Should the state need to claim FFP beyond the two-year timely filing limit, the state must submit the certification letter with a good cause waiver for approval before requesting the funds beyond the two-year limit.

The state will be able to schedule their review as early as three months in advance of their target date. For example, if the state intends to hold a CR in March, then they can submit their request for the review as early as January. It’s advised the CR take place toward the end of the 7th month after go-live, as metrics must be pulled and provided with the evidence and required artifacts no later than 2 weeks prior to the CR.

To schedule a CR, the state must provide the following entry criteria: 
- Latest Intake Form
    - This can be a draft but will need to be finalized and loaded to the applicable certification Box folder 2 weeks prior to the review.
- Certification Request Letter
    - Ensure all required elements, as outlined in Appendix C of the SMC Guidance and within the example Certification Request letter template on the MES Certification Repository, are present.
    - One required element is the System Acceptance Letter.  This is a letter from the state (on the state’s letterhead) to the vendor clearly stating the date the system was accepted along with the go-live date.  See the example System Acceptance Letter on MES Certification Repository.
    - Send the Certification Request Letter and applicable attachments via email to the CMS State Officer and MES@cms.hhs.gov.  
    - Since the Certification Request Letter and the System Acceptance Letter are also SMC Required Artifacts (see Appendix C of SMC Guidance), the state should also upload them to the applicable Box folder for certification.
- Metric data back to go-live date
    - States must submit data back to the go-live date (or the date requesting retroactive certification), up to the most recent month end.
- The independent, third-party security and privacy controls assessment report (SAR) and penetration test results conducted within the last two years from the requested CR date.
- Most recent Plan of Action & Milestones (POA&M) documenting the status of vulnerabilities (from SAR, penetration tests, vulnerability scans, and disaster recovery test results). 
    - All critical vulnerabilities should be resolved prior to scheduling a CR date.  However, states can request a date with unresolved critical items if a mitigation/remediation plan is submitted and approved by CMS, using the recommended risk acceptance template, which can be found in Attachment D of CMS Information Security Plan of Action and Milestones (POA&M) Procedure.
- Link to CMS Box location
    - Work with your CMS State Officer, who will set up a file structure in CMS Box and provide this link. 
- The CMS State Officer will reach out to the CMS T-MSIS team to get confirmation via email that the state and system being certified meets all Outcomes Based Assessment (OBA) compliance.

Note that meeting the above entry criteria for CR only clears the way for scheduling the CR. The state must provide the most up-to-date documents two weeks prior to the CR in the applicable certification Box folders for evaluation by the CMS Certification Team.

For the CR, the following steps are completed:
1.	The state finalizes the state columns of the Intake Form.
    - The state must use the exact filename(s), which was loaded in CMS Box when populating the Intake Form evidence columns.
2.	Preferably earlier but no later than two weeks before the CR, the state saves all evidence, required artifacts, the Intake Form, metrics (via Operational Report Workbook), the CR agenda, and the presentation the state will use for the CR in CMS Box certification folders.
    - No files uploaded to CMS Box should be redacted, this includes but is not limited to security risk assessments, penetration tests, screen prints, or reports that include PHI/PII.
    - The state notifies the CMS State Officer when they have completed loading all documentation (no later than 2 weeks prior to the review date).
    - The CMS Certification Team will then begin a review of the evidence and required artifacts.
3.	Approximately one week prior to the review, an Information Request Listing (IRL) will be sent to the state by the CMS Certification Team. This includes questions and feedback on the files uploaded to CMS Box. Although providing written responses to these questions before the review is encouraged, it is not mandatory. The state should be prepared to address all outstanding questions from the IRL during the ORR or CR discussions and demonstrations.
4.	The CR meeting is held, and action items are documented, reviewed, and agreed to.
    - The demonstrations must be in the production environment (test data should not be entered).
    - The state should try to respond to all action items as soon as possible, preferably within 24 hours.
5.	 After the CR, CMS will review and enter comments into the Intake Form and assemble the certification package. CMS will follow up with the state to discuss any necessary remediations. Once certification is approved, the state will receive the updated Intake Form, the certification report, and the certification letter from CMS.
  

<center><img src="{{ site.baseurl }}/SMC Process/Production/CR Flow.png"></center>

## Best Practices

### Operational Reporting 
- The Operational Report Workbook should be submitted at a cadence agreed upon with the CMS State Officer.
    - The metrics can be logged in the Operational Report Workbook monthly, quarterly, or yearly, depending on the metric (it is recommended to be monthly and required to be monthly for EVV modules).
    - Reporting should include comments (reference defects, risks, or issues) for those metric values that were not expected or not meeting the state’s internal benchmark.
    - The state should utilize the same Operational Report Workbook when submitting ongoing reporting.


### Privacy and Security 
- All critical and high vulnerabilities must be resolved before scheduling certification and may impact FFP.

### Review Preparation 
- States are highly encouraged to utilize the sample agenda provided by the CMS Certification Team, see one example below.

<center><img src="{{ site.baseurl }}/SMC Process/Production/CR Agenda.png"></center>

[Download the CR Sample Agenda](../../CR%20Sample%20Agenda.docx)

## Resources 
- [SMC Guidance Document](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf) – see Appendix C for Required Artifacts and Appendix D for Framework for the Independent Third-Party Security and Privacy Assessment Guidelines for Medicaid Enterprise Systems
- [Code of Federal Regulations](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433)
- [Streamlined Modular Certification Intake Form template](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-intake-form.xlsx)
- [Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/) (includes Metrics Procedures Manual and FAQs under the Resources)
- [Example Monthly Project Status Reporting Template](../../Streamlined%20Modular%20Certification%20Required%20Monthly%20Project%20Status%20Report%20Example%20Template.docx) 
- [Medicaid Enterprise Systems Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf) 
- [Using Box]({{site.baseurl}}/Box/)
- [Example Certification Request Letter Template](../../SMC%20Certification%20Request%20Letter%20Template.docx) 
- [Operational Report Workbook](../../Operational%20Report%20Workbook.xlsx) 

## References
- [CEF Example Evidence, Tips, and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/)
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
