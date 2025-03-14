---
title: Government of Canada Accessibility Training and Events
description: The Government of Canada’s vision is to make Canada’s public service the most accessible and inclusive in the world.
permalink: /learning/
otherLanguagePermalink: /formation/
eleventyExcludeFromCollections: true
internalLinks: true
---
[Shared Services Canada (SSC)](https://www.canada.ca/en/shared-services.html) supports this vision by making information and communications technology usable by all. SSC hosts many training and events related to accessibility and they are listed on this page.

To view previous presentations check out our [past presentations page <span class="fas fa-user-lock mrgn-lft-sm mrgn-rght-sm" aria-hidden="true"></span><span class="wb-inv"> Internal link</span>](https://www.gcpedia.gc.ca/wiki/Past_Presentations_%E2%80%93_SSC%E2%80%99s_Accessibility_Training_and_Events_/_Pr%C3%A9sentations_pass%C3%A9es_-_Formation_et_%C3%A9v%C3%A9nements_sur_l%27accessibilit%C3%A9_de_SPC).

To help promote upcoming accessibility activities organized by various Government of Canada departments that are open to public service employees we have also posted their event details below.

## Learning

{# List all learning events here #}
{%- if collections.learning and collections.learning.length > 0 -%}
  {%- set learninglist = collections.learning | localeMatch(locale) -%}
  {%- if learninglist and learninglist.length > 0 -%}
    {%- include "partials/learninglist.njk" -%}
  {%- else -%}
    There are no learning events scheduled at the moment.
  {%- endif -%}
{%- else -%}
  There are no learning events scheduled at the moment.
{%- endif -%}
