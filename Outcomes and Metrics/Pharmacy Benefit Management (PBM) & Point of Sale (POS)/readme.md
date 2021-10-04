# Pharmacy Benefit Management (PBM) & Point of Sale (POS)
#### How this system supports the Medicaid Program 

Pharmacy Benefit Management (PBM) systems provide services which may include claims adjudication, rebate administration, utilization monitoring, drug utilization review, and preferred drug list oversight. 

<div align="right">
  <a href="https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/NAretakis-Navigation-Flat/Outcomes%20and%20Metrics/Claims%20Processing/CMS-Required%20%26%20State%20Specific%20Outcomes.xlsx">Click here to download the outcomes in an Excel Workbook</a>  
</div>

---

## CMS-Required Outcomes

Each CMS-Required outcome is based on statutory or regulatory requirements. CMS-Required Outcomes and Metrics are used to demonstrate that a system is compliant with the applicable federal regulations which pertain to that a specific system or module. CMS-Required outcomes form the baseline for system/module functionality, which must continue to continue to receive enhanced federal funding for operations. 

| **Reference Number** | &nbsp;&nbsp;&nbsp;&nbsp;**Outcome**&nbsp;&nbsp;&nbsp;&nbsp;          | &nbsp;&nbsp;&nbsp;&nbsp;**Recommended Metrics**&nbsp;&nbsp;&nbsp;&nbsp;                                      | **Regulatory Sources**  | 
| -------------------- | -------------------- | ------------------------------------------------------------ | :---------------------: | 
| PBM1   | The system adjudicates claims within established time parameters to ensure timely pharmacy claims payments. | - Timely adjudication of pharmacy claims and encounters. <Br> - Percentage of claims paid on time (only if payment is included in RX module) - N/A if payments are issued from the MMIS system. | Section 1927(h) of the SSA <br> 42 CFR 456.722 - POS requirement to support claims adjudication or payment |  
| PBM2   | The system adjudicates claims accurately within established parameters. The module can be configured to provide authority/ability to override a reject/edit/denied claim and then resubmit to ensure timely provider claims payments.  | - Accurately identifies enrolled providers. <br> - Pharmacy claims and encounters are priced according to the correct pricing algorithm. | 42 CFR 456.722  |  
| PBM3   | The system captures the necessary data to ensure timely processing of manufacturer rebates as well as the capability to track rebates to promote beneficiary cost savings.  | - The system has the capability to accept/store/apply the rebate and covered outpatient drug (COD) information received from CMS and manufacturers necessary to generate rebate invoices. <br> - Timely identification of eligible PAD claims/encounters that do not convert to NDC units. | Section 1927 of the SSA <br> 42 CFR 447.509  |  
| PBM4   | The system has the capability to support cost savings by capturing, storing, and transferring data to the payment process system to generate invoices of participating drug manufacturers within 60 days of the end of each quarter.  | - Percentage Rebate Invoiced per Dollar (Note if invoice period is behind the actual reporting period). <br> - Issue timely invoicing within established parameters (+/- 5 days). | Section 1927 of the SSA <br> 42 CFR 447.520 <br> Section 1927(b)(2) of the SSA <br>42 CFR 447.511 |  
| PBM5   | The system supports cost savings by enabling the tracking, monitoring, and reporting of manufacturer's pharmacy drugs and rebate savings.   | - Provide a sample of the CMS rebate report and the manufacturer rebate report with production data. <br> - Provide the post-production operational measure of rebates collection. | Section 1927 of the SSA <br> 42 CFR 447.520 <br> Section 1927(b)(2) of the SSA <Br> 42 CFR 447.511 |     Quarterly or Annually   |
| PBM6   | The system enables the beneficiary to have timely access to medication if the system has the capability to perform prior authorization and provide a response by telephone or other telecommunication devices within 24 hours of a request and provides for the dispensing of at least 72-hour supply of a covered outpatient prescription drug in an emergency situation (unless excluded under the SSA ).  | - Timely Access:  Response to a Prior Authorization request provided within 24 hours. <br> - Timely Access: Emergency 72-hour fill requests reject rate - this can be the % of total POS claims not authorized with a 72-hour emergency fill. | Section 1927(d)(5) of the SSA |  
| PBM7   | The system supports CMS oversight of the safe, effective, and appropriate dispensing of medications by enabling the capability to provide data to support the creation of the CMS annual report on the operation and status of the state's DUR program.  | - Provide a copy of the State’s DUR Report | Section 1927(g)(3)(D) of the SSA <br> 42 CFR 456.712 <br> Section 1944(e)(1) of the SSA |  
| PBM8   | The system supports the safe, effective, and appropriate dispensing of medications by enabling the capability to provide point-of-sale or point of distribution prospective review of drug therapy based upon predetermined standards, including standards for counseling.  | - Provide a sample report showing the ability to provide prospective review data with a timestamp prior to adjudication. | 42 CFR 456.703, 456.705(b) 456.709 <br> Section 1927 (g) of the SSA |  
| PBM9   | The system supports the identification of patterns of fraud, abuse, gross overuse, or inappropriate or medically unnecessary care, or prescribing or billing practices indicating abuse or excessive utilization among physicians, pharmacists and individuals receiving benefits by enabling the collection of pharmacy data to be used in retrospective drug utilization reviews.  | - Provide a sample report of post-production operational measures that calculate the average cost avoidance per claim. | 42 CFR 456.703, 456.705(b) 456.709 <br> Section 1927 (g) of the SSA |  


---

## State-Specific Outcomes - CMS Approved

States requesting enhanced FFP for systems that fulfill *state-specific program needs,* beyond minimum legal requirements and the baseline of the *CMS-required outcomes*, should propose *State-Specific Outcomes* which address the proposed enhancements.

When state-specific outcomes statements, keep [these tips](https://cmsgov.github.io/CMCS-DSG-DSS-Certification/writing-outcome-statements) in mind. 
### Examples for Pharmacy Benefit Management

We are actively gathering and evaluating outcomes statements crafted by states for this business area. 

Please send examples from your state that you'd like to share to <MESCertificationRepo@cms.hhs.gov>. Our team will collect and share the best examples. 




| **State**     | Medicaid Program Goal | Outcome Statement | **Metric(s)** | 
| ------------- | --------------------- | ----------------- | ------------- | 
| OH | To support the implementation of a more efficient and cost effectivfe operating model to deliver pharmacy benefits to Ohio Medicaid members. | The Single Pharmacy Benefit Manager (SPBM) module will provide accurate and timely processing of pharmacy claims utilizing fully transparent pricing and payment methodologies as determined by the Ohio Department of Medicaid. | Assessed through the daily concurrent claims reviews conducted by ODM's Pharmacy Pricing and Audit Consultant (PPAC). Reporting will be available no later than one quarter after go live and will be continuously monitored throughout the operational life of the module. | &nbsp; |
| OH | To support the implementation of a more efficient and cost effectivfe operating model to deliver pharmacy benefits to Ohio Medicaid members. | The Single Pharmacy Benefit Manager (SPBM) module will improve the accuracy and timeliness of the acquisitions and integration of pharmacy claims encounter data. | Assessed through the comparison of pre and post processing of pharmacy encounter claims, including measures such as the time from date of payment to date of encounter submission and percent of encounter claims rejected for data quality issues.  Reporting will be available no later than one quarter after go live and will be continuously monitored throughout the operational life of the module. | &nbsp; |
| OH | To support the implementation of a more efficient and cost effectivfe operating model to deliver pharmacy benefits to Ohio Medicaid members. | The Single Pharmacy Benefit Manager (SPBM) module will reduce the overall benefits and administrative costs of the Ohio Medicaid pharmacy program. | Assessed through the comparison of pre and post implementation expenditures on pharmacy benefits and administration.  Reporting will be available no later than two quarters after go live and will be  monitored until a new budgetary baseline is established. | &nbsp; |


