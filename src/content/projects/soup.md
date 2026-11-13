---
title: SOUP
category: Web app
year: 2026
order: 1
featured: true
summary: A web app for object-centric process mining — event logs in, an explorable knowledge graph out.
role: Plugin architecture, package system & API v3 (contributor)
stack: [Angular, Python, Flask, Memgraph, Docker]
links:
  - { label: GitHub, href: 'https://github.com/AlessioPiana54/soup' }
  - { label: Docs, href: 'https://github.com/AlessioPiana54/soup/wiki' }
cover: ../../assets/img/soup.png
coverAlt: A dark bowl of rainbow noodles whose strands rise and turn into the glowing nodes of a graph.
coverSize: auto 100%
coverPosition: center
---

SOUP turns event logs into an **Event Knowledge Graph**: every event, every object it touches and
every relationship between them, stored in Memgraph and ready to be explored. You import a CSV or
an OCEL 2.0 log, and the app lets you look at the graph, run queries, filter it, aggregate it and
export what you find.

I joined the project to rebuild its foundations. Following the idea behind ProM, I reshaped it
around a **small core that only mediates**: it loads packages and routes requests to them, while
importers, analyses, visualizers and exporters all live in packages. Those packages can be installed
from a zip while the app is running, and their frontends ship as Web Components built on a small
SDK.

On top of that I designed the new `/api/v3`, the host pages (import, workspace, object page,
packages) and the packages for EKG, OCEL 2.0, analyses, views and the aggregated graph. Analyses are
non-destructive: a filter creates a new derived object and the original stays untouched.

I also took the backend off direct Docker access and added the test suites and continuous
integration. The original SOUP was created by Alessio Giacché.
