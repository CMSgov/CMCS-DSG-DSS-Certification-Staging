# Production

Once a system is in production, states should be able to regularly and consistently provide metrics that demonstrate the system complies with applicable regulations and meets outcomes. States begin reporting on metrics after go-live and before the Certification Review. From then, and for as long as the state continues to receive enhanced funding for its MES solution, metrics are reported at least annually.

## Operational Reporting
In accordance with 42 CFR 433.112(b)(15), states are required to report on the system’s performance to CMS as a condition for receiving enhanced funding. Reporting metrics enhance transparency and accountability of IT solutions in meeting regulatory requirements as well as the state’s program goals. 

In preparation for the CR, the state should submit metrics monthly in the appropriate CMS Box folder, preferably utilizing the Operational Report Workbook. To be certified, states must submit at least six months of metrics data or data back to your requested retroactive certification date, whichever is greater.

After the CR, states must submit operational reports to CMS containing metrics annually in support of a state’s Operational Advanced Planning Documents (OAPD) request. CMS may determine the need for some metrics requiring states to report more frequently.

## Certification Review (CR)
A CR is necessary for the state to receive enhanced federal funding for system maintenance and operations. The CR is focused on demonstrating the impact of that functionality in production, as assessed by metrics.

CMS encourages states to include all appropriate program, business operations, and IT subject matter experts in the CR.

In accordance with 42 CFR 433.116, the enhanced FFP may be claimed retroactive to the first day in the calendar quarter following the implementation date of the module. Should the state need to claim FFP beyond the two-year timely filing limit, the state must submit the certification letter with a good cause waiver for approval before requesting the funds beyond the two-year limit.

The state will be able to schedule their review as early as three months in advance of their target date. For example, if the state intends to hold a CR in March, then they can submit their request for the review as early as December. It’s advised the CR take place toward the end of the 7th month after go-live, as metrics must be pulled and provided with the evidence and required artifacts no later than 2 weeks prior to the CR.

To schedule a CR, the state must provide the following entry criteria: 
- 	System go-live date
- 	Certification Request Letter 
    - Ensure all elements outline in Appendix C are included. A template has been made available for states on GitHub.  
- System Acceptance Letter 
- Metric data dating back to the go-live date, up to the most recent quarter
- Confirmation from the CMS T-MSIS Team that the system being certified has T-MSIS LSE SOP approval and meets all OBA compliance. 

For the CR, the following steps are completed:
1.	The state finalizes the state columns of the Intake Form.  
    1.	The state must use the exact filename(s), which was loaded in CMS Box when populating the Intake Form evidence columns. 
2.	Preferably earlier but no later than two weeks before the CR, the state saves all evidence, required artifacts, the Intake Form, metrics (via Operational Report Workbook), the CR agenda, and the presentation the state will use for the CR in CMS Box appropriate folders. 
    1.	No files uploaded to CMS Box should be redacted, this includes but is not limited to security risk assessments, penetration tests, screen prints, or reports that include PHI/PII.
    2.	The state also sends the completed Intake Form to the CMS State Officer and to MES@cms.hhs.gov. 
    3.	The CMS Certification Team will then begin a review of the evidence and required artifacts. 
3.	Approximately one week prior to the review, an Information Request Listing (IRL) will be sent to the state by the CMS Certification Team. This includes questions and feedback on the files uploaded to CMS Box. The state should respond in writing by the time of the review and modify the agenda to address feedback from the CMS Certification Team during the review.
4.	The CR meeting is held, and action items are documented, reviewed, and agreed to. 
    1.	The demonstrations must be in the production environment (test data should not be entered).
    2.	The state should try to respond to all action items as soon as possible, preferably within 24 hours.
5.	A Tear-out will be created by the CMS Certification Team including observations, recommendations, findings, and action items. This will be sent to the state along with the updated Intake Form (with CMS columns filled out) and the Certification Decision Letter and CR Report approximately 60 days after the CR meeting.
6.	The Tear-out recommendations should be reviewed, and actions taken as necessary. Any identified findings will require a Corrective Action Plan (CAP) with ongoing reporting to the CMS State Officer until resolved.  

<center><img src="{{ site.baseurl }}/SMC Process/Production/OR Flow.png"></center>

## Best Practices

### Operational Reporting 
- The Operational Report Workbook should be submitted at a cadence agreed upon with the CMS State Officer. 
    - The metrics can be logged in the Operational Report Workbook monthly, quarterly, or yearly, depending on the metric.
    - Reporting should include comments (reference defects, risks, or issues) for those metric values that were not expected or not meeting the state’s internal benchmark.
    - The state should utilize the same Operational Report Workbook when submitting ongoing reporting. 
### Privacy and Security 
- All critical and high vulnerabilities must be resolved before receiving certification and may impact FFP. 
### Review Preparation 
- States are highly encouraged to utilize the sample agenda provided by the CMS Certification Team:

<center><img src="{{ site.baseurl }}/SMC Process/Production/OR Agenda.png"></center>

## Resources 
- [SMC Guidance Document](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf) – see Appendix C for Required Artifacts and Appendix D for Framework for the Independent Third-Party Security and Privacy Assessment Guidelines for Medicaid Enterprise Systems
- [Code of Federal Regulations](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433)
- [Streamlined Modular Certification Intake Form template](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-intake-form.xlsx)
- [Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/) (includes Metrics Procedures Manual and FAQs under the Resources)
- Example Monthly Project Status Reporting Template
- [Medicaid Enterprise Systems Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf) 
- [Using Box]({{site.baseurl}}/Box/)
- Example Certification Request Letter Template
- Operational Report Workbook

## References
- [CEF Example Evidence, Tips, and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/)
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
