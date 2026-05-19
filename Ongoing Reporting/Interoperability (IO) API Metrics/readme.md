# Submitting Interoperability API Metrics via the ORW 

## Overview   
The Centers for Medicare & Medicaid Services (CMS) [Interoperability and Patient Access Final Rule (CMS-9115-F)](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and) of May 2020 and [Interoperability and Prior Authorization Final Rule (CMS-0057-F)](https://www.federalregister.gov/documents/2024/02/08/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability) of February 2024 require states to implement and maintain five Health Level 7® (HL7®) Fast Healthcare Interoperability Resources® (FHIR®) Application Programming Interfaces (APIs). These APIs are as follows: 
- Patient Access API (including Prior Authorizations enhancements)   
- Provider Directory API 
- Prior Authorizations API 
- Payer-to-Payer API 
- Provider Access API  

Per [CIB May 24, 2023](https://www.medicaid.gov/federal-policy-guidance/downloads/cib052423.pdf) and [SHO #25-003](https://www.medicaid.gov/federal-policy-guidance/downloads/sho25003.pdf), as a condition of enhanced Medicaid Federal Financial Participation (FFP) for maintenance and operations costs, states must submit monthly operational reports using the Operational Report Workbook (ORW) template. The ORW standardizes data submission formats to improve data consistency, quality and streamline reporting. 

Therefore, states that are operating Patient Access API with enhanced funding must report the two Patient Access API metrics as defined in [42 CFR §§ 431.60(f)](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-431/subpart-B/section-431.60):   
- The total number of unique beneficiaries whose data are transferred via the Patient Access API to a health app designated by the beneficiary; and 
- The total number of unique beneficiaries whose data are transferred more than once via the Patient Access API to a health app designated by the beneficiary.  

Note that reporting of these two metrics via the monthly ORW submissions is separate from the annual Patient Access API reporting requirement. Patient Access API metrics should continue to be reported via email to SMAEndpointDirectory@cms.hhs.gov no later than March 31 each year. 

The following are specific instructions for completing and submitting ORWs for Interoperability (IO) API metrics.  

## Complete the “CMS Attestations” Tab   
To complete the “CMS Attestations” tab, the state should:  
- Select “Interoperability” as the Module (Column A). 
- Provide a single name for all Interoperability APIs in Column B, Related System Name (Required). Use a single name even if the system is comprised of more than one subsystem. Note that the same system name must be used on this tab and on Column B of the “Metric Definitions” tab. 
- Provide attestations in Column E for the 22 Conditions for Funding (CEF) defined in 42 CFR 433.112.  
- If a CEF does not apply, the state must provide a justification in Column F.  

## Complete the “Metric Definitions” Tab   
Row 1 of the “Metric Definitions” tab in the ORW template contains general instructions for completing each field. The following instructions are specific to Interoperability API metrics.  
 
### Use the Correct Module Label to Identify Interoperability API Types    
The state should use the following table to complete Column A, Module. For example, if reporting a metric for Patient Access API, the state should select “IOPAA” from the Module dropdown.   
 
*Table 1. Module Abbreviations for API Types* 
| API Types | Outcome Reference # |
| --------- | ------------------- |
| Patient Access API | IOPAA |
| Provider Directory API | IOPRD |
| Prior Authorization API | IOPRA |
| Payer-to-Payer API | IOPTP |
| Provider Access API | IOPAC |

### Define the Two Required Patient Access API Metrics 
The state should report the two Patient Access API metrics mandated by 42 CFR §§ 431.60(f) using the abbreviation “IOPAA”. See the following table for how to define these two metrics in the ORW. Note that for the purpose of reporting these two metrics, the state should use “IOPAA01” as the Outcome/CEF Reference # for both metrics.    

*Table 2. Format and Definition for CMS-Required Metrics*

TABLE GOES HERE

Note, replace “*[StateAbbreviation]*” with the state’s abbreviation. For example, for the State of Tennessee, use “TN”. 

### Define State-Specific Interoperability API Metrics  
In addition to the two Patient Access API metrics per 42 CFR §§ 431.60(f), the state may define state-specific outcomes and metrics for all Interoperability API types. To report state-specific outcomes and metrics, the state should:  
- Complete Module (Column A) per Table 1 above.    
- Identify state-specific Outcome/CEF Reference # by combining “ST” with Module. See cell C1 on the ORW template for instructions.  
- Identify state-specific Metric ID by combining “ST” with Module and a number (incremented sequentially for each Outcome), as defined in cell E1 of the ORW template.  

The following table shows an example with two state-specific metrics for Patient Access API and two for Provider Directory API. Note that these metrics illustrate the correct reporting format only and do NOT represent default metrics.  

*Table 3. Format for State-Specific Outcomes*

TABLE GOES HERE

Note, replace “*[StateAbbreviation]*” with the state’s abbreviation. For example, for the State of Tennessee, use “TN”. 

## Complete the “Metric Data” Tab   
The state should complete the “Metric Data” tab per the instructions in the first row of the tab. 

## An Example ORW  
The following ORW file contains definitions for the CMS-required API metrics and sample state-specific metrics. The state may download it and use it as a template. Note that the sample state-specific metrics illustrate the correct reporting format only and do NOT represent default metrics. 

[Interoperability API Metrics Example ORW](../../Interoperability%20API%20Metrics%20Example%20ORW.xlsx)

Note the following requirements are illustrated in the ORW file linked above:   
- Metrics for all types of APIs are reported in one file, and metrics from no other systems or modules are included in the file.  
- On the CMS Attestations tab (Note that the attestations included in the file are examples. Each state will have different attestations):    
    - Select “Interoperability” as the Module (Column A).  
    - Provide a single name for all Interoperability APIs in Related System Name (Required) (Column B).  
    - Attest to each of the 22 CEFs (Column E) and include a justification in Column F for any CEF that does not apply. 
- On the Metric Definitions tab: 
    - Select the correct Module (Column A) for the API associated with the metric (see Table 1). 
    - Use the same name from the “CMS Attestations” tab for Related System Name (Required) (Column B). 
    - Identify the Outcome/CEF Reference # (Column C) based on the Module label(s).  
    - Format the Metric ID (Column E) using either “CR” or “ST”, according to whether the metric applies to a CMS-required (CR) outcome or a state-specific (ST) outcome and the applicable Module label.  
        - For example, the Metric ID for the CMS-required outcome for Tennessee’s Patient Access API would be TN-CR-IOPAA-01.1. 
        - The Metric ID for Tennessee’s state-specific outcome for its Provider Directory API would be TN-ST-IOPRD-01.1. 
- Include the required CEF metrics of Open Privacy and Security Issues. (*effective 07/01/2026* per SHO #25-003)  
- On the Metric Data tab: 
    - Include the number of open privacy and security issues for technical environments hosting the Interoperability API solutions.    

## Submit ORWs Interoperability API Metrics  
In submitting Interoperability API metrics, the state must:   
- Submit the Interoperability API Metrics in a single ORW: The state should report metrics for all Interoperability API types in one ORW file. The ORW file should only contain metrics for Interoperability APIs. 
- Submit the Interoperability API Metrics ORWs in A Designated Subfolder: All the Interoperability API metric ORW files should be uploaded to the folder of */1. State Submission/[StateAbbreviation] - Interop/*. For example, for the state of Tennessee, a subfolder of */1. State Submission/TN – Interop/* should be used.  

## References
- [Interoperability and Patient Access Final Rule, May 2020](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)
- [Interoperability and Prior Authorization Final Rule, February 2024](https://www.federalregister.gov/documents/2024/02/08/2024-00895/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-advancing-interoperability)
- [CIB May 24, 2023](https://www.medicaid.gov/federal-policy-guidance/downloads/cib052423.pdf)
- [SHO #25-003](https://www.medicaid.gov/federal-policy-guidance/downloads/sho25003.pdf)
- [42 CFR 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112)
- [42 CFR 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116)
- [CMS.gov - Patient Access API Frequently Asked Questions](https://www.cms.gov/priorities/burden-reduction/overview/interoperability/frequently-asked-questions/patient-access-api)
