---
permalink: /getting-started/
layout: styleguide
title: Getting started
lead: The SAM Web Design Standards extend the <a href="https://18f.gsa.gov/2015/09/28/web-design-standards/">US Web Design Standards</a>.
---

<p>For more information on why we chose the US Web Design Standards as a starting point, read the <a href="https://18f.gsa.gov/2015/09/28/web-design-standards/">blog post introducing the standards</a>.</p>

<p>As the Standards do not replace the US Web Design Standards, it is important to visit and become familiar with them.</p>

<h3 class="usa-heading">For developers</h3>

<p>The US and SAM Web Design Standards supplies front-end developers with UI components to create a common HTML structure for the SAM environment.</p>

<p>Further, the design and development communities created SAM UI kits, which gives you the ability to quickly generate HTML output by configuring components and rendering the output to the page. Each UI kit is written for a specific language or framework. They can be used independent of each other and can be installed using traditional package management systems for the language or framework.</p>

<h4>CSS architecture:</h4>

<p>We avoid modifying the base CSS generated by the US Web Design Standards as much as possible; opting to contribute directly to that project through issues and pull requests.</p>

<p>For more details see the <a href="{{ site.repos[0].url }}">GitHub repository</a>.</p>

<h3 class="usa-heading">For designers</h3>

<h4>Iconography:</h4>

The Standards include [Font Awesome](https://fortawesome.github.io/Font-Awesome/) for the majority of icon decisions. If you cannot locate a desirable icon from Font Awesome, either [create an issue]({{ site.repos[0].url }}/issues) or modify the [Icon component]({{ site.baseurl }}/other/icons) and submit a pull request.

<h4>Mobile first:</h4>

SAM uses the [grid](https://playbook.cio.gov/designstandards/grids/) established by the *US Web Standards* to create responsive designs[^ResponsiveDesign] with a mobile first mindset.

[^ResponsiveDesign]: [Responsive Web Design: Google](https://developers.google.com/webmasters/mobile-sites/mobile-seo/responsive-design)