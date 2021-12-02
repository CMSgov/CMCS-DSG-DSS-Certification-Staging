{% assign csv1 = "MES Outcomes - CMS-Required DSSDW" %}
{% assign csv2 = "MES Outcomes - State-Specific DSSDW" %}

# Decision Support System & Data Warehouse

#### How this system supports the Medicaid Program

The Decision Support System (DSS) / Data Warehouse (DW) business area covers software tools used by authorized State employees to extract and/or analyze Medicaid data in order to inform program decisions, policy decisions, and report on the delivery of the Medicaid Program.

<div align="right">
  <a href="https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/main/_data/{{ csv1 }}.csv" target="_blank">Click here to download the CMS-Required outcomes in a CSV file</a>
  <br>
  <a href="https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/main/_data/{{ csv2 }}.csv" target="_blank">Click here to download the State-Specific outcomes in a CSV file</a>  
</div>

---

## CMS-Required Outcomes

Each CMS-Required outcome is based on statutory or regulatory requirements. CMS-Required Outcomes and Metrics are used to demonstrate that a system is compliant with the applicable federal regulations which pertain to that specific system or module. CMS-Required outcomes form the baseline for system/module functionality, which must continue to receive enhanced federal funding for operations.

{% include table.html table=csv1 %}

---

## State-Specific Outcomes - CMS Approved

States requesting enhanced FFP for systems that fulfill _state-specific program needs,_ beyond minimum legal requirements and the baseline of the _CMS-required outcomes_, should propose _State-Specific Outcomes_ which address the proposed enhancements.

When drafting state-specific outcomes statements, keep [these tips]({{ site.baseurl }}/writing-outcome-statements) in mind.

### Examples for Decision Support Systems & Data Warehouses

We are actively gathering and evaluating outcomes statements crafted by states for this business area.

Please send examples from your state that you'd like to share to <MESCertificationRepo@cms.hhs.gov>. Our team will collect and share the best examples.

{% include table.html table=csv2 %}
