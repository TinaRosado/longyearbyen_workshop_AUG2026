# Exploring Longyearbyen Through the *Svalbardposten* Archive

**Community workshop visualization · Artica Svalbard · Longyearbyen · August 2026**

This repository contains the version of the *Svalbardposten* discourse map developed for **Exploring Longyearbyen Through the Svalbardposten Archive**, a public talk and participatory workshop held at [Artica Svalbard](https://www.articasvalbard.no/2026/workshop-talk-exploring-longyearbyen-through-the-svalbardposten-archive) on August 26, 2026.

The project uses computational text analysis and information design to explore more than 16,700 articles published by *Svalbardposten* between 2006 and 2024. Rather than treating the resulting visualization as a definitive representation of the newspaper archive—or of Longyearbyen itself—the workshop used the map as an object of inquiry: something participants could explore, question, annotate, and redraw through their own knowledge of the community.

> **How does a computational reading of an archive change when the people represented within it are invited to read the map themselves?**

---

## Quick Links

[Project Evolution](#project-evolution) · [Artica Workshop](#the-artica-workshop) · [Workshop Process](#workshop-process) · [What Emerged](#what-emerged) · [Computational + Community Reading](#computational-reading--community-reading) · [About the Data](#about-the-data) · [Research Context](#research-context) · [Repository Lineage](#repository-lineage) · [References](#selected-references) · [Acknowledgments](#acknowledgments)

---

## Project Evolution

This repository represents the third stage in an evolving research and design process.

### 01 — Thesis: *An Atlas of Discourse*

[**dataviz_svalbardposten_weathermap**](https://github.com/TinaRosado/dataviz_svalbardposten_weathermap)

The project originated in Tina Rosado's 2025 MFA thesis in Information Design and Data Visualization at Northeastern University, *An Atlas of Discourse: Mapping Large Digital Archives through Expansive Interface Design*.

The thesis investigated how computational methods and information visualization could support exploration of large digital archives while maintaining interpretive openness. *Svalbardposten*'s digital archive served as the primary case study.

One of the resulting interfaces adapted Dario Rodighiero and Jean Daniélou's **Weather Map** model to visualize relationships among actors appearing in the newspaper archive.

**Thesis:**  
Rosado, T. L. (2025). *An atlas of discourse: Mapping large digital archives through expansive interface design* [Master's thesis, Northeastern University].  
https://doi.org/10.17760/D20741600

---

### 02 — Workshop Development

[**rodighiero/svalbard-workshop**](https://github.com/rodighiero/svalbard-workshop)

In preparation for bringing the project to Longyearbyen, Dario Rodighiero developed a new iteration of the computational and visual approach.

This stage expanded the original thesis prototype and provided the basis for redesigning the visualization around a different purpose: not only navigating the archive, but using the map in conversation with people who know Longyearbyen and its histories.

---

### 03 — Longyearbyen Workshop Interface

**This repository:** [longyearbyen_workshop_AUG2026](https://github.com/TinaRosado/longyearbyen_workshop_AUG2026)

The interface was further redesigned for the August 2026 workshop at Artica Svalbard.

The visualization introduced new ways of reading the archive at multiple scales, including discourse regions, clusters, individual articles, temporal views, and alternative representations of the underlying computational structure.

The central shift, however, was methodological: **the computational map became the beginning of interpretation rather than its conclusion.**

Participants were invited to compare the relationships generated through computational analysis with their own knowledge of Longyearbyen.

---

## The Artica Workshop

**Exploring Longyearbyen Through the Svalbardposten Archive**  
Artica Svalbard, Longyearbyen  
August 26, 2026

[View the event at Artica Svalbard](https://www.articasvalbard.no/2026/workshop-talk-exploring-longyearbyen-through-the-svalbardposten-archive)

The workshop brought the visualization back to the community represented within the archive. Residents and visitors explored the map alongside the research team and were asked to identify recognizable patterns, unexpected relationships, questionable groupings, missing perspectives, and tensions between the computational representation and their experience of Longyearbyen.

The aim was not simply to test whether the map was "correct." Instead, the workshop examined what different forms of reading could contribute to one another:

**What can computational analysis make visible across thousands of articles?**

**What can local knowledge recognize that computational analysis cannot?**

---

## Workshop Process

The workshop moved through three stages: **exploration, inquiry, and reinterpretation.**

### 1. Exploration

Participants first encountered a simplified black-and-white version of the map showing discourse regions, contours, and cluster labels.

They were invited to read the map spatially, identify subjects they recognized, and mark areas that interested them or connected with their experience of Longyearbyen.

### 2. Inquiry

Participants then worked with a more detailed printed map and the interactive visualization.

Using annotations and post-it notes, they identified:

- recognizable patterns;
- unexpected connections;
- potentially misleading groupings;
- missing perspectives;
- relationships they believed should be stronger or weaker;
- tensions between local experience and the narrative represented by the newspaper archive.

Participants could move between the complete map, discourse regions, clusters, and individual articles to investigate particular areas in greater depth.

### 3. Reinterpreting the Map

Finally, participants were invited to physically redraw the computational map.

They could:

- draw new boundaries;
- connect areas separated by the algorithm;
- divide existing discourse regions;
- rename or question cluster labels;
- reposition relationships;
- add missing subjects or perspectives.

The resulting annotations created a second interpretive layer over the computational map: **a community reading of the archive.**

---

## What Emerged

The workshop exposed productive differences between computational proximity and community interpretation.

One recurring discussion concerned **centrality**. The computational map positioned the Governor (*Sysselmesteren*) prominently near the center of the network, reflecting the institution's connections across many areas of newspaper discourse. Participants questioned whether institutional prominence in the newspaper should be interpreted as centrality within community life.

Conversely, opinion and community commentary appeared toward the margins of the computational map. Participants suggested that these conversations could be understood as considerably more central to how the community discusses and negotiates local issues.

Participants also recognized relationships between clusters that appeared computationally distant, questioned the separation of related wildlife topics, identified highly specific historical phenomena such as business-support discussions associated with the COVID-19 period, and reflected on how the archive preserves memories in a place characterized by a highly mobile population.

These observations point toward an important distinction:

**A map of what is structurally central in a newspaper archive is not necessarily a map of what a community considers central to itself.**

Rather than treating this discrepancy as an error to eliminate, the project considers the tension between these readings as a source of knowledge.

---

## Computational Reading + Community Reading

The workshop suggests a model in which computational and situated interpretations operate as complementary layers.

```text
Svalbardposten Archive
        ↓
Computational Analysis
        ↓
Algorithmic Map
        ↓
Community Reading
        ↓
Annotations / Connections / Corrections / Questions
        ↓
New Interpretation
```

Computational methods can reveal patterns distributed across thousands of documents that would be difficult to perceive through conventional reading alone. Local interpretation, meanwhile, can identify social relationships, historical context, linguistic differences, absences, and forms of meaning that are not encoded in textual similarity.

The objective is therefore not to determine which reading is authoritative, but to investigate what becomes visible **between them**.

---

## About the Data

The dataset comprises more than **16,700 digital articles from *Svalbardposten*, spanning 2006–2024**.

*Svalbardposten*, founded in 1948, is the local newspaper of Svalbard and is based in Longyearbyen. Its archive records transformations in community life across subjects including local politics, mining, tourism, research, wildlife, environmental change, infrastructure, culture, and everyday life.

The computational analysis uses article text and metadata to identify relationships across the archive. The visualization should therefore be understood as a representation produced through a particular analytical methodology—not as a neutral or exhaustive representation of Longyearbyen.

Full article texts remain proprietary and are not distributed through this repository.

---

## Research Context

The workshop forms part of an ongoing research collaboration connecting information design, digital humanities, computational analysis, and Arctic research.

The work developed from Tina Rosado's MFA thesis at Northeastern University and subsequent collaboration with **Dario Rodighiero**, **Sabina Rosenbergova**, and **Maarten Loonen** through the University of Groningen and the SVALUR research context.

### Workshop team

**Tina Rosado** — Information designer and digital humanist. Project design, computational exploration, visualization, and workshop co-design/facilitation.

**Dario Rodighiero** — Assistant Professor of Science and Technology Studies, University of Groningen, Campus Fryslân. Computational methodology, visualization development, research supervision, and workshop co-design/facilitation.

**Sabina Rosenbergova** — Cultural heritage researcher, University of Groningen, Campus Fryslân. Cultural heritage perspective and workshop co-design/facilitation.

**Maarten Loonen** — Arctic researcher, Arctic Centre, University of Groningen. SVALUR project lead and Arctic research context.

---

## Repository Lineage

The three repositories document different stages of the project rather than interchangeable versions of the same application.

| Stage | Repository | Purpose |
|---|---|---|
| 2025 | [dataviz_svalbardposten_weathermap](https://github.com/TinaRosado/dataviz_svalbardposten_weathermap) | MFA thesis prototype and computational methodology |
| 2026 | [rodighiero/svalbard-workshop](https://github.com/rodighiero/svalbard-workshop) | Methodological and visualization development for the workshop |
| Aug. 2026 | [longyearbyen_workshop_AUG2026](https://github.com/TinaRosado/longyearbyen_workshop_AUG2026) | Interface used for the Artica Svalbard community workshop |

---

## Selected References

Latour, B. (2021). Préface. In C. Seurat & T. Tari (Eds.), *Controverses mode d'emploi*. Presses de Sciences Po.

Rodighiero, D., & Daniélou, J. (2023). Weather map: A diachronic visual model for controversy mapping. In F. Armaselu & A. Fickers (Eds.), *Zoomland: Exploring scale in digital history and humanities*. De Gruyter. https://doi.org/10.1515/9783111317779-017

Rosado, T. L. (2025). *An atlas of discourse: Mapping large digital archives through expansive interface design* [Master's thesis, Northeastern University]. https://doi.org/10.17760/D20741600

---

## Acknowledgments

This iteration of the project was made possible through collaboration with Dario Rodighiero, Sabina Rosenbergova, and Maarten Loonen, and with the support of the University of Groningen’s Campus Fryslân and Arctic Centre, the SVALUR research project, and Artica Svalbard.

Special thanks to the residents and visitors who participated in the Longyearbyen workshop and contributed their interpretations, questions, annotations, and knowledge of the community.

