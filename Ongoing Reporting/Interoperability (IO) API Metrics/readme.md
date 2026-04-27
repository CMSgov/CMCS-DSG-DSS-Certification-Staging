# Submitting Interoperability API Metrics via the ORW 

## Overview   
The Centers for Medicare & Medicaid Services (CMS) [Interoperability and Patient Access Final Rule (CMS-9115-F)](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and) of May 2020 and [Interoperability and Prior Authorization Final Rule (CMS-0057-F)](https://www.federalregister.gov/documents/2024/02/08/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability) of February 2024 required states to implement and maintain five Health Level 7® (HL7®) Fast Healthcare Interoperability Resources® (FHIR®) application programming interfaces (APIs). These APIs are as follows: 
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

## Operational Reporting of Interoperability API Metrics 
The following provides instructions on how to submit operational reports of Interoperability API Metrics. 

### Submit the Interoperability API Metrics in One ORW 
The state must submit metrics for all Interoperability APIs in a single ORW file. This ORW file should contain only metrics for Interoperability APIs, not for any other modules. 

### Complete the “Outcome Reference #” Field in the ORW 
Use the following Outcome Reference #’s to fill in “Outcome Reference #” field to differentiate the types of Interoperability API in the ORW. Note that CMS has not defined required outcomes for interoperability APIs. These Outcome Reference #’s are provided for the sole purpose of indicating the type of Interoperability API associated with a metric.  

| API Types | Outcome Reference # |
| --------- | ------------------- |
| Patient Access API | IO01 |
| Provider Directory API | IO02 |
| Prior Authorization API | IO03 |
| Payer-to-Payer API | IO04 |
| Provider Access API | IO05 |

*Table 1. Outcome Reference # Values per API Types* 

### Format the Two Required Patient Access API Metrics 
For states that are operating Patient Access API with enhanced funding, fill in the ORW fields according to the following table to report the two required Patient Access API metrics:

| Metric ID | Outcome Reference # | Metric Name | Metric Description | Value Type | Reporting Frequency |
| --------- | ------------------- | ----------- | ------------------ | ---------- | ------------------- |
| [StateAbbreviation]-CR-IO-01.1 | IO01 | Usage of Patient Access API | The total number of unique beneficiaries whose data are transferred via the Patient Access API to a health app designated by the beneficiary | Numerical | Monthly |
| [StateAbbreviation]-CR-IO-01.2 | IO01 | Usage of Patient Access API More Than Once | The total number of unique beneficiaries whose data are transferred more than once via the Patient Access API to a health app designated by the beneficiary | Numerical | Monthly |

*Table 2. Format and Definition for CMS-Required Metrics*

For example, for the State of Tennessee, the two Metric IDs would be “TN-CR-IO-01.1” and “TN-CR-IO-01.2”.  

### Format State-Specific Interoperability API Metrics  
The state may define and report metrics specific to the state API implementation. See the table below for an example where the state has defined two state-specific metrics of “First-time Use of the Patient Access API” and “Number of Active Providers Loaded in Provider Directory API”. Note that the “ST” in Metric ID field indicates it is a state-specific metric. Update the text within brackets and remove the brackets. 

| Metric ID | Outcome Reference # | Metric Name | Metric Description | Value Type | Reporting Frequency |
| --------- | ------------------- | ----------- | ------------------ | ---------- | ------------------- |
| [StateAbbreviation]-ST-IO-01.1 | STIO01 | First Time Use of Patient Access API  | The number of unique recipients whose data are transferred via the Patient Access API to a patient designated third-party app for the first time | Numerical | Monthly |
| [StateAbbreviation]-ST-IO-02.1 | STIO02 | Number of Active Providers Loaded in Provider Directory API | The total number of active providers loaded via the Provider Directory API | Numerical | Monthly |

*Table 3. Format for State-Specific Outcomes*

For example, if the State of Tennessee submitted the above two state-specific metrics, the Metric IDs would be “TN-ST-IO-01.1” and “TN-ST-IO-02.1”. 

### Completing the “CMS Attestations” Tab  
The state should select “Interoperability” as the module and provide attestations for the 22 Conditions for Funding (CEF) [outlined in 42 CFR 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112).  

### An Example ORW  
The following ORW file contains the CMS-required API metrics and example state-specific metrics. The state may download it and use it as a template.   
 
Note that the example ORW uses Tennessee’s state abbreviation and sample data to illustrate the format only. 

[Interoperability API Metrics Example ORW](../../Interoperability%20API%20Metrics%20Example%20ORW.xlsx)

Please note the following formatting requirements illustrated in the above files:   
- Metrics for all types of APIs are reported in one file.  
- The two CMS-required Patient Access API metrics should use “CR” in the Metric IDs. 
- All other API metrics have “ST” in the Metric IDs and Outcome Reference #’s to identify them as “state-specific”. 
- The Outcome Reference #’s should be completed per Table 1 to show the type of API associated with the metric.  
- Select “Interoperability” as the Module on the CMS Attestations tab.  
- The attestations included in the file are just examples. Each state will have different attestations. However, each state must attest to all 22 CEF’s and provide justification for any conditions which are not applicable.  

## References
- [Interoperability and Patient Access Final Rule, May 2020](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)
- [Interoperability and Prior Authorization Final Rule, February 2024](https://www.federalregister.gov/documents/2024/02/08/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability)
- [CIB May 24, 2023](https://www.medicaid.gov/federal-policy-guidance/downloads/cib052423.pdf)
- [SHO #25-003](https://www.medicaid.gov/federal-policy-guidance/downloads/sho25003.pdf)
- [42 CFR 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112)
- [42 CFR 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116)
- [CMS.gov - Patient Access API Frequently Asked Questions](https://www.cms.gov/priorities/burden-reduction/overview/interoperability/frequently-asked-questions/patient-access-api)
