---
title: Demo Index
description: This is a documentation page.
permalink: 
layout: post
subnav:
  - text: Section one
    href: '#section-one'
  - text: Section two
    href: '#section-two'
---
 

This is a demo table. It uses the small body font. Margins/spacing not yet updated.

<table class="ds-c-table ds-text-body--sm">
    <thead>
        <tr>
            <th>Name/Alias</th>
            <th>Appearances</th>
            <th>Year</th>
            <th>Years Since Joined</th>
            <th>Died?</th>
            <th>Returned?</th>
            <th>Notes</th>
        </tr>
    </thead>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        <tr>
            <td>{{ row["Name/Alias"] }}</td>
            <td>{{ row["Appearances"] }}</td>
            <td>{{ row["Year"] }}</td>
            <td>{{ row["Years since joining"] }}</td>
            <td>{{ row["Death1"] }}</td>
            <td>{{ row["Return1"] }}</td>
            <td>{{ row["Notes"] }}</td>
        </tr>
    {% endif %}
{% endfor %}
</table>



# What is this CMS Certification Repository?
The CMS Certification Repository on GitHub will provide a collaborative space where states can learn, share, and contribute information about the MES Certification process and its related artifacts. We created this repository for CMS, states, and vendors to:
* Access the latest-and-greatest information about CMS-Required outcomes and recommended metrics
* Create and contribute to the community of state-specific outcomes and metrics
* Access examples of well-defined outcomes and metrics

This repository will also host rules of behavior governing how the information should be used and interaction norms.
[Placeholder for governance plan to define how and when information is updated and who is responsible for making changes]

# What is GitHub?
GitHub is a hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. No coding necessary, all you need is a [GitHub.com](https://github.com/) account and Internet access. You don’t need to know how to code, use the command line, or install Git (the version control software GitHub is built on).
