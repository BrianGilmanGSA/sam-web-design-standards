---
layout: styleguide
type: form-control
title: Text Input
---

<p class="usa-font-lead">See <a href="https://playbook.cio.gov/designstandards/form-controls/#text-inputs">US Web Design Standards</a> for design description.</p>

<div class="preview">
	<div>
		<label for="input-type-text">Text input label</label>
		<input id="input-type-text" name="input-type-text" type="text">
	</div>

	<div>
		<label for="input-type-text">Text input label</label>
		<span class="usa-form-hint">Instructional text.</span>
		<input id="input-type-text" name="input-type-text" type="text">
	</div>

	<div class="usa-input-error">
		<label class="usa-input-error-label" for="input-error">Text input error</label>
		<span class="usa-input-error-message" id="input-error-message" role="alert">Helpful error message</span>
		<span class="usa-form-hint">Instructional text.</span>
		<input id="input-error" name="input-error" type="text" aria-describedby="input-error-message">
	</div>

	<div>
		<label for="input-type-textarea">Text area label</label>
		<textarea id="input-type-textarea" name="input-type-textarea"></textarea>
	</div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="false" aria-controls="collapsible-0">
    PHP Usage
  </button>
  <div id="collapsible-0" aria-hidden="true" class="usa-accordion-content">
	<pre><code>SAMUIKit\FormControls::textInput($config);</code></pre>
	<p>Returns unescaped HTML output without instantiating an object.</p>

	<pre><code>SAMUIKit\FormControls::createTextInput($config = null);</code></pre>
	<p>Returns an instance of the TextInput class. Allows method chaining:</p>
<pre><code>$input = SAMUIKit\FormControls::createTextInput()
	->setLabel('Text input label')
	->setName('input-type-text')
	->setType('text');

// to get the HTML output
$output = $input->getHtml();

// to render the HTML output (first example)
echo $output;

// update configuration
$input->setHint('Instructional text.');

// render updated HTML output (second example)
echo $input->getHtml();

// render updated HTML output (third example)
echo $input->setErrorMessage('Helpful error message')
	->getHtml();</code></pre>
  </div>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">

{% include formcontroloverview.md %}
	
	<h4 class="usa-heading">Text input</h4>
	<h5>Required key</h5>
	<ul>
	<li><strong>type:</strong> text|password|email|textarea</li>
	</ul>

	<h5>Optional keys</h5>
	<ul>
	<li><strong>value:</strong> Pre-fill the text input.</li>
	<li><strong>size:</strong> medium|tiny (default is normal).</li>
	</ul>

  </div>
</div>