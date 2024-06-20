# Using CMS Box (FedRAMP-Authorized) in the Certification Process

In accordance with 42 C.F.R. §§ 433.112(b)(15) and 433.116(b), (c), and (i) and to support the work of Streamlined Modular Certification (SMC) framework, the Centers for Medicare and Medicaid Services (CMS) uses Box to easily upload files for certification and operational reporting, including secure file exchange and storage of Protected Health Information (PHI) and Personally Identifiable Information (PII) files. The Box Cloud Content Management Platform has achieved numerous U.S. Government certifications for privacy and security regulatory and compliance, including, but not limited to, FedRAMP Moderate, DoD SRG IL4, NIST SP 800-171, AICPA SOC 2/SOC 3/AT 101 Type II, IRS Publication 1075, and HIPAA. 

## Standard Box Configuration

Your CMS State Officer will establish a single Box folder for each individual module or system undergoing certification contained in the state’s root folder under the certification and metrics data folder. Sub-folders for an Operational Readiness Review (ORR) and a Certification Review (CR) will be created as follows:

**State Name or Territory Name**
- State or Territory Abbreviation and Module Abbreviation (see below table for module abbreviations)

**ORR**
- Evidence* – should contain the Intake Form and two subfolders:
    - CEF – should contain the evidence listed in the Intake Form for applicable Conditions for Enhanced Funding. There is no need for additional sub-folders.
    - Outcomes – should contain the evidence listed in the Intake Form for applicable CMS-required and state-specific outcomes. If needed, include additional sub-folders by outcome.
- Metrics – should contain the metrics definitions for ORR. CMS highly encourages states to use the [Operational Report Workbook](https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/main/Operational%20Report%20Workbook.xlsx).
- Presentation – should contain the presentation for the day of the review and any other meeting documentation.
- Required Artifacts – should contain the applicable Required Artifacts listed in Appendix C of the [Streamlined Modular Certification for Medicaid Enterprise Systems Certification Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf). 

**CR**
- Evidence* – should contain the Intake Form and two subfolders:
	- CEF – should contain the evidence listed in the Intake Form for applicable Conditions for Enhanced Funding. There is no need for additional sub-folders.
	- Outcomes – should contain the evidence listed in the Intake Form for applicable CMS-required and state-specific outcomes. If needed, include additional sub-folders by outcome.
- Metrics – should contain the monthly metrics data reports required for CR. CMS highly encourages states to use the [Operational Report Workbook](https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/main/Operational%20Report%20Workbook.xlsx). 
- Presentation – should contain the presentation for the day of the review and any other meeting documentation.
- Required Artifacts – should contain the applicable Required Artifacts listed in Appendix C of the [Streamlined Modular Certification for Medicaid Enterprise Systems Certification Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf).

**Project Status Reports**
- Should contain all applicable status reports for the entire project.

*Evidence filenames should include the SMC outcome reference number at the beginning, for example, CEF1 or TPL2.

<center>Example 1</center>
<img src="{{ site.baseurl }}/Box/Example 1.png" width="100%">

<center>Example 2</center>
<img src="{{ site.baseurl }}/Box/Example 2.png" width="100%">

## Benefits of Using Box
Benefits of using Box include:
 
- **One Platform for your Content.** CMS and state partners can find, organize, edit, share, and centralize their content on an all-inclusive storage platform. Since its integration into the SMC process, many states have easily uploaded files to CMS Box while maintaining surrounding data, like permissions, metadata, and version history.
- **Collaboration.** CMS and state partners can efficiently collaborate, increasing transparency and partnership with CMS. CMS can leverage the information submitted by states to improve their experience with Medicaid.
	- Standardization of state evidence submission supports collaboration and removes ambiguity in reporting requirements with a clearly defined evidence folder organization structure.
	- Only users who have been granted access to a folder by your CMS State Officer will have access to the information uploaded to that folder. Additionally, only the CMS Certification Team assigned to a given review and supporting CMS and MITRE leadership will be granted access to a state's review documentation.
- **Privacy and Security.** Box includes secure file sharing, permission controls, and built-in security and compliance – reducing the number of tools needed to protect your data. Many state Medicaid agencies have securely uploaded private metric data files to Box with confidence. 
- **HHS Records Management.** Box abides by the Department of Health and Human Services (HHS) records management policies outlined in 44 U.S.C. § 2901(2), thereby enabling CMS to adhere to federal records retention regulations without needing to access state repositories.

If you have any questions about using Box, please reach out to your CMS State Officer. 

## Learn More About Using Box
To learn more about using the Box platform, see the video tutorials at https://www.box.com/events/live-demos.

### Frequently Asked Questions

#### Question: Who should I contact to create my state’s Box folder for an upcoming certification? 
Answer: Please contact your CMS State Officer to initially set up your folder in Box and add collaborators. A leader from your state team will then be given Editor, Uploader, or Viewer privileges.

#### Question: Can we use our document repository for a certification, instead of Box? 
Answer:  If a state would prefer to use its document repository, the CMS State Officer is responsible for copying state documentation to the relevant Box folder. If a state encounters difficulty using the Box repository, please reach out to your CMS State Officer to discuss.

#### Question: How should I populate the Intake Form evidence columns with evidence files saved in Box?
Answer: The state may either include the exact filename (if a single document) or file folder of the outcome evidence as it appears in CMS Box when populating the Intake Form evidence columns.

#### Question: Is there a file size limit for file uploads?
Answer: There is a 150 GB size limit on uploads. In the situation where your file is above the file size limit, we recommend you create a ZIP file. A ZIP is a common file format that’s used to compress one or more files together into a single location. This reduces file size and makes it easier to transport and/or store. Visit https://experience.dropbox.com/resources/what-is-a-zip-file for instructions on creating a ZIP file.

#### Question: Is there a preferred naming convention for file and folder names? 
Answer: The most important practice to follow when naming files is to be consistent with your filename conventions for each module certification. Consider including the following elements in your filename:
- State abbreviation (using the USPS code)
- Module
- Outcome number
- Document title or description as appropriate, (e.g., “VPAT”)
- Additional fields such as a vendor or system name may be added for clarification when needed. For example:
	- “AK_PBM_CEF1” for Alaska PBM CEF outcome 1
	- “DE _EE12” for Delaware E&E CMS-required outcome EE12

#### Question: How should I differentiate the file name of a newer version of a file to avoid duplications or confusion?
Answer: You may differentiate the file name of a new version of a file by including at the end of the filename either the upload date of the file (example 1) or file version (example 2).
- Example 1: “AK_PBM_CEF1_06032023” 
- Example 2: “AK_PBM_CEF1_v2”

#### Question: What module abbreviations should I use?
Answer: Please use the module abbreviations referenced in Appendix B of the [Medicaid Enterprise Systems (MES) Data Submissions and Intake Process Procedures Manual](https://cmsbox.app.box.com/index.php?rm=box_download_shared_file&shared_name=2qxx3bdojh6e36j0vv2jj5frereykw2s&file_id=f_1301951764618), copied in the table below.

## Module Abbreviations
Copied from Appendix B of the [Medicaid Enterprise Systems (MES) Data Submissions and Intake Process Procedures Manual](https://cmsbox.app.box.com/index.php?rm=box_download_shared_file&shared_name=2qxx3bdojh6e36j0vv2jj5frereykw2s&file_id=f_1301951764618).

| Module Abbreviation | Module Description |
| ------------------- | ------------------ |
| EVV | Electronic Visit Verification |
| HIE | Health Information Exchange |
| CM | Case Management |
| EE | Eligibility and Enrollment |
| CP | Claims Processing |
| DW/DS | Date Warehouse/Decision Support Systems |
| EPS | Encounter Processing System |
| FI | Fiscal Intermediary |
| FM | Financial Management |
| LTSS | Long_term Services and Support |
| MM | Member Management |
| PBM | Pharmacy Benefits Manager |
| PDMP | Prescription Drug Monitoring Program |
| PI | Program Integrity |
| PM | Provider Management |
| TPL | Third-Party Liability |
| Multi | Mulitple modules within one review |
