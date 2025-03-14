---
title: Formation et événements du gouvernement du Canada sur l'accessibilité
description: La vision du gouvernement du Canada est de faire de la fonction publique du Canada la plus accessible et inclusive au monde.
permalink: /formation/
otherLanguagePermalink: /learning/
eleventyExcludeFromCollections: true
internalLinks: true
---

[Services partagés Canada (SPC)](https://www.canada.ca/fr/services-partages.html) appuie cette vision en rendant les technologies de l'information et des communications utilisables par tous. SSC organise de nombreuses formations et événements liés à l'accessibilité et ils sont répertoriés sur cette page.

Pour voir les présentations précédentes, consultez notre page des [présentations précédentes<span class="fas fa-user-lock mrgn-lft-sm" aria-hidden="true"></span><span class="wb-inv"> Lien interne</span>](https://www.gcpedia.gc.ca/wiki/Past_Presentations_%E2%80%93_SSC%E2%80%99s_Accessibility_Training_and_Events_/_Pr%C3%A9sentations_pass%C3%A9es_-_Formation_et_%C3%A9v%C3%A9nements_sur_l%27accessibilit%C3%A9_de_SPC).

Pour aider à promouvoir les activités d'accessibilité à venir organisées par divers ministères du gouvernement du Canada et ouvertes aux employés de la fonction publique, nous avons également affiché les détails de leur événement ci-dessous.

{# Liste de tous les événements ici #}

{%- if collections.learning and collections.learning.length > 0 -%}
  {%- set learninglist = collections.learning | localeMatch(locale) -%}
  {%- if learninglist and learninglist.length > 0 -%}
    {%- include "partials/learninglist.njk" -%}
  {%- else -%}
    Aucun événement n'est prévu pour le moment.
  {%- endif -%}
{%- else -%}
  Aucun événement n'est prévu pour le moment.
{%- endif -%}
