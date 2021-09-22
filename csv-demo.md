---
layout: default
---

This example uses data from the [538 Github repository](https://github.com/fivethirtyeight/data), and the data (the CSV file `avengers.csv`) is made available under an MIT license, as it is not a work of the US Government. Please see the [original repository](https://github.com/fivethirtyeight/data).

## First, a datafile

Any CSV will do.

I use `VS Code` and the extension `Rainbow CSV` so that every column gets its own color when editing. This makes things easier. (You may have other favorite tools.) Obviously, you could also use Excel, save the `.xlsx` in the `_data` directory, and keep an up-to-date `.csv` version along side it.

In this case, we're using `_data/avengers.csv`.

## Then, a for loop

Jekyll uses [Liquid Tags]() for markup. Here's the [iteration](https://shopify.github.io/liquid/tags/iteration/) section of the docs. Also, here's a handy [cheatsheet](https://gist.github.com/JJediny/a466eed62cee30ad45e2).

We'll start with a `for` loop.

{% raw %}
<pre>
{% for row in site.data.avengers_short %}
  
{% endfor %}
</pre>
{% endraw %}

## Show some data

{% raw %}
<pre>
&lt;ul>
{% for row in site.data.avengers_short %}
    &lt;li>{{ row["Name/Alias"] }}&lt;/li>
{% endfor %}
&lt;/ul>
</pre>
{% endraw %}

becomes

<ul>
{% for row in site.data.avengers_short %}
    <li>{{ row["Name/Alias"] }}</li>
{% endfor %}
</ul>

## Filtering data

We could see how many of the avengers have more than 2000 appearances. This [involves converting a string (all data in the CSV comes into Jekyll as a string) into an integer](https://stackoverflow.com/questions/27198710/convert-string-to-integer-in-shopify-liquid). We do that in a very... opaque way. We do it by adding zero to the string. (Yeah. Welcome to Jekyll. Google is your friend. Ask questions in Slack anytime.)


{% raw %}
<pre>
&lt;ul>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        &lt;li>{{ row["Name/Alias"] }}&lt;/li>
    {% endif %}
{% endfor %}
&lt;/ul>
</pre>
{% endraw %}

becomes

<ul>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        <li>{{ row["Name/Alias"] }}</li>
    {% endif %}
{% endfor %}
</ul>

As you can see, we now have a small set of Avengers. Only a few have appeared many times. And, they're all dudes.

## Why filtering?

You might not need it. To manage sections, you might just have separate CSV files. 

Or, you might have one CSV, and tag sections like "OVERVIEW," "POLICY," "RECOMMENDATION." Then, you could do comparisons on that column (e.g. an `if` that asks if that column is `OVERVIEW`), and only put out part of a table at a time. You would only do this if it makes sense to keep multiple sections conceptually "together," but you'd like to render them out in chunks.

## Speaking of tables!

Tables will involve a bit of HTML. It's better than mixing in Markdown with the Liquid markup. (And, I'm not really certain that you can even use Markdown in the middle of a chunk of Jekyll markup.)

{% raw %}
<pre>
&lt;table class="ds-c-table ds-c-table ds-text-body--sm">
        &lt;thead>
            &lt;tr>
                &lt;th>Name/Alias&lt;/th>
                &lt;th>Appearances&lt;/th>
                &lt;th>Year&lt;/th>
            &lt;/tr>
        &lt;/thead>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        &lt;tr>
            &lt;td>{{ row["Name/Alias"] }}&lt;/td>
            &lt;td>{{ row["Appearances"] }}&lt;/td>
            &lt;td>{{ row["Year"] }}&lt;/td>
        &lt;/tr>
    {% endif %}
{% endfor %}
&lt;/table>
</pre>
{% endraw %}

which comes out [all nice and Kentucky](https://meaningofliff.tumblr.com/post/103573767131/kentucky-adv), just the way you want:

<table class="ds-c-table ds-text-body--sm">
    <thead>
        <tr>
            <th>Name/Alias</th>
            <th>Appearances</th>
            <th>Year</th>
        </tr>
    </thead>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        <tr>
            <td>{{ row["Name/Alias"] }}</td>
            <td>{{ row["Appearances"] }}</td>
            <td>{{ row["Year"] }}</td>
        </tr>
    {% endif %}
{% endfor %}
</table>

## Links: a bit of fanciness

And, in case you have URLs you want to link in, it might look like this.


{% raw %}
<pre>
&lt;table class="ds-c-table ds-c-table--borderless ds-text-body--sm">
        &lt;thead>
            &lt;tr>
                &lt;th>Name/Alias&lt;/th>
                &lt;th>Appearances&lt;/th>
                &lt;th>Year&lt;/th>
            &lt;/tr>
        &lt;/thead>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        &lt;tr>
            &lt;td>&lt;a href="{{ row["URL"] }}">{{ row["Name/Alias"] }}&lt;/a>&lt;/td>
            &lt;td>{{ row["Appearances"] }}&lt;/td>
            &lt;td>{{ row["Year"] }}&lt;/td>
        &lt;/tr>
    {% endif %}
{% endfor %}
&lt;/table>
</pre>
{% endraw %}

which renders as

<table class="ds-c-table ds-c-table--borderless ds-text-body--sm">
    <thead>
        <tr>
            <th>Name/Alias</th>
            <th>Appearances</th>
            <th>Year</th>
        </tr>
    </thead>
{% for row in site.data.avengers_short %}
    {% assign app = row["Appearances"] | plus: 0 %}
    {% if  app > 2000 %}
        <tr>
            <td><a href="{{ row["URL"] }}">{{ row["Name/Alias"] }}</a></td>
            <td>{{ row["Appearances"] }}</td>
            <td>{{ row["Year"] }}</td>
        </tr>
    {% endif %}
{% endfor %}
</table>

and really just adds an `A` tag around the name of the Avenger, using the contents of the `URL` column as the `href` for the URL. (If that statement went by a bit quick, or you're getting lost in HTML soup, give a shout.)