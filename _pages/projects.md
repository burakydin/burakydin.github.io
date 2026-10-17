---
layout: page
title: projects
permalink: /projects/
description: My projects throughout the years.
nav: true
nav_order: 4
display_categories: [work, personal]
---

<div class="projects projects-gallery">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
    {% assign sorted_projects = site.projects | where: "category", category | sort: "importance" %}
    {% unless sorted_projects == empty %}
      <section class="project-category" aria-label="{{ category | capitalize }} projects">
        {% unless category == "work" %}
          <h2 class="category" id="{{ category }}">
            {% if category == "personal" %}<i class="fa-solid fa-user" aria-hidden="true"></i>{% endif %}
            {{ category | capitalize }}
          </h2>
        {% endunless %}
        <div class="project-gallery-grid">
          {% for project in sorted_projects %}
            {% include project_tile.liquid %}
          {% endfor %}
        </div>
      </section>
    {% endunless %}
  {% endfor %}
{% else %}
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="project-gallery-grid">
    {% for project in sorted_projects %}
      {% include project_tile.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
