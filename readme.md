# Welcome to the CMS Certification Repository

The CMS Certification Repository is a space for states, CMS, and vendors to learn, share, and contribute information about the MES Certification process and its related artifacts. From this site you can access the latest-and-greatest information about CMS-Required outcomes and recommended metrics as well as view CMS approved state-specific outcomes and metrics.

## Recent updates

This site is intended to be a resource that grows over time. Here are recent updates you may want to know about:

- The site was officially shared with states in the Certification Community of Practice on October 12, 2021.
- The visual styling for tables was merged to improve the look and feel of the site.
- All business areas/module pages were updated with CMS-Required Outcomes and recommended Metrics

## Getting Started

### Intake Form

The Intake Form Template is used throughout the Streamlined Modular Certification process to track information about a state MES project for certification. It is tailored for each state project. States will fill out the Intake Form Template by entering the CMS-required outcomes that document compliance with regulations applicable to their project, their state-specific outcomes, and the metrics used to show that the project is achieving its outcomes on a continuous basis.

[Download the Intake Form](https://github.com/CMSgov/CMCS-DSG-DSS-Certification/raw/intake-form/Appendix%20E%20Intake%20Form%20Template.xlsx)

### Outcomes and Metrics

The repository is organized by MES business area. Click one of the business areas below to see outcomes and metrics for the specific module/business area you are working on:

- [1115 or Waiver Support Systems](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/1115%20or%20Waiver%20Support%20Systems/)
- [Asset Verification System](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Asset%20Verification%20System)
- [Claims Processing](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Claims%20Processing)
- [Decision Support System & Data Warehouse](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Decision%20Support%20System%20%26%20Data%20Warehouse)
- [Electronic Visit Verification (EVV)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Electronic%20Visit%20Verification%20(EVV)>)
- [Eligibility and Enrollment](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Eligibility%20and%20Enrollment/)
- [Encounter Processing System (EPS) & Managed Care System](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Encounter%20Processing%20System%20(EPS)%20%26%20Managed%20Care%20System>)
- [Financial Management](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Financial%20Management)
- [Health Information Exchange (HIE)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Health%20Information%20Exchange%20(HIE)>)
- [Long Term Services & Supports (LTSS)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Long%20Term%20Services%20%26%20Supports%20(LTSS)>)
- [Member Management](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Member%20Management)
- [Pharmacy Benefit Management (PBM) & Point of Sale (POS)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Pharmacy%20Benefit%20Management%20(PBM)%20%26%20Point%20of%20Sale%20(POS)>)
- [Prescription Drug Monitoring Program (PDMP)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Prescription%20Drug%20Monitoring%20Program%20(PDMP)>)
- [Provider Management](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Provider%20Management)
- [Third Party Liability (TPL)](<https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/Outcomes%20and%20Metrics/Third%20Party%20Liability%20(TPL)>)

_Certification is still required if your project does not fall neatly into one of the above business areas. You may still find relevant outcomes and metrics examples across business areas. As needed, work with your state team and State Officer to create state-specific outcomes statements._

## Contributing

As this site is hosted using GitHub Pages, there is only one preview branch available per repo. In order to provide editors the opportunity to review their changes before publishing to the production site, we have set up both a staging repository and a production repository for this project.

The repo named [CMCS-DSG-DSS-Certification-Staging](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging) will continue to be our working draft, where [issues](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging/issues), [pull requests](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging/pulls), and the [wiki](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging/wiki) are maintained. All site changes merged to the "staging" branch in that repo will display on the staging URL at https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/.

The repo named [CMCS-DSG-DSS-Certification](https://github.com/CMSgov/CMCS-DSG-DSS-Certification) is a mirror of the staging repo's "main" branch, and displays the published state of the site, visible at https://cmsgov.github.io/CMCS-DSG-DSS-Certification/.

### Workflow

1. Continue to open feature branches on the [Staging repo](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging) as before, setting the destination of any pull requests to the "staging" branch.
2. When you are satisfied with the state of the Staging repo and have tested your changes on the [staging URL](https://cmsgov.github.io/CMCS-DSG-DSS-Certification-Staging/), [open a new pull request](https://github.com/CMSgov/CMCS-DSG-DSS-Certification-Staging/compare/staging...main) from the "staging" branch to the "main" branch on the Staging repo.
3. Once that pull request is approved and merged into "main", CircleCI will manage the actual deploy to the production repo for you. You should never need to edit or merge the production repo ([CMCS-DSG-DSS-Certification](https://github.com/CMSgov/CMCS-DSG-DSS-Certification)) directly.

#### Where am I?

Please note that because production is a _mirror_ repo, this readme and all other content will look the identical across both repos. It is important to observe the repo's name and URL to disambiguate between the two.
