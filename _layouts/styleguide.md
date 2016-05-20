<!DOCTYPE html>
<!--[if lt IE 9]><html class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en"><!--<![endif]-->

  <head>
    {% include head.html %}
  </head>

  <body id="styleguide" class="{{ page.title | slugify }}">
  	{% include navbar.html %}

  	{% include sidenav.html %}

    <div id="main-content" class="usa-grid">
      <div class="styleguide-content usa-content">
        <h1 id="{{ page.title | slugify }}">{{ page.title }}</h1>
        <p class="usa-font-lead">{{ page.lead }}</p>
        {{ content }}
      </div>

      {% capture my-include %}{% include acronyms.md %}{% endcapture %}
      {{ my-include | markdownify }}

    </div>
    {% include footer.html %}

    {% include analytics.html %}

    {% include scripts.html %}

  </body>

</html>
