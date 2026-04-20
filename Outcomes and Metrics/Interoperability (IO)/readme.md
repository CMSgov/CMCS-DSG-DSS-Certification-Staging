# Submitting Interoperability API Metrics via the ORW 

## Overview   
The Centers for Medicare & Medicaid Services (CMS) Interoperability and [Patient Access Final Rule (CMS-9115-F)](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and) of May 2020 and [Interoperability and Prior Authorization Final Rule (CMS-0057-F)](https://www.federalregister.gov/documents/2024/02/08/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability) of February 2024 required states to implement and maintain five Health Level 7® (HL7®) Fast Healthcare Interoperability Resources® (FHIR®) application programming interfaces (APIs). These APIs are as follows: 
- Patient Access API (including Prior Authorizations enhancements)   
- Provider Directory API 
- Prior Authorizations API 
- Payer-to-Payer API 
- Provider Access API  

Per [CIB May 24, 2023](https://www.medicaid.gov/federal-policy-guidance/downloads/cib052423.pdf) and [SHO #25-003](https://www.medicaid.gov/federal-policy-guidance/downloads/sho25003.pdf), as a condition of enhanced Medicaid Federal Financial Participation (FFP) for maintenance and operations costs, states must submit monthly operational reports using the Operational Report Workbook (ORW) template. The ORW standardizes data submission formats to improve data consistency, quality and streamline reporting. 

In addition, for states who are operating Patient Access API with enhanced funding, the submitted ORW must include the two Patient Access API metrics as defined in [42 CFR §§ 431.60(f)](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-431/subpart-B/section-431.60):   
- The total number of unique beneficiaries whose data are transferred via the Patient Access API to a health app designated by the beneficiary; and 
- The total number of unique beneficiaries whose data are transferred more than once via the Patient Access API to a health app designated by the beneficiary.  

Note that reporting of these two metrics via the monthly ORW submissions is separate from the annual Patient Access API reporting requirement. Patient Access API metrics should continue to be reported via email to SMAEndpointDirectory@cms.hhs.gov no later than March 31 each year. 

## Operational Reporting of Interoperability Metrics 
The following provides instructions on how to submit operational reports of Interoperability Metrics. 

### Submit the Interoperability Metrics in One ORW 
The state must submit metrics for all Interoperability APIs in a single ORW file. This ORW file should contain only metrics for Interoperability APIs, not for any other modules. 

### Complete the “Outcome Reference #” Field in the ORW 
Use the following Outcome Reference #’s to fill in “Outcome Reference #” field to differentiate the type of Interoperability API metrics in the ORW. Note that CMS has not defined required outcomes for interoperability APIs. These Outcome Reference #’s are provided for the sole purpose of indicating the type of Interoperability API associated with a metric.  

| API Types | Outcome Reference # |
| --------- | ------------------- |
| Patient Access API | IO01 |
| Provider Directory API | IO02 |
| Prior Authorization API | IO03 |
| Payer-to-Payer API | IO04 |
| Provider Access API | IO05 |
*Table 1. Outcome Reference # Values per API Types* 

