---
title: Tactical RPG
category: Game
year: 2026
order: 2
featured: true
summary: A turn-based tactics game on a grid — warriors, mages and archers against an AI that hunts you down.
role: Solo project
stack: [Java 25, JavaFX, JAXB, Gradle, JUnit 5]
links:
  - { label: GitHub, href: 'https://github.com/AlessioPiana54/RPG_Strategy' }
  - { label: Docs, href: 'https://github.com/AlessioPiana54/RPG_Strategy/wiki' }
cover: ../../assets/img/rpg-strategy.png
coverAlt: An isometric board with forests and mountains, three dark player units facing three pink enemies, a spark of impact and a floating "-12".
coverSize: auto 100%
coverPosition: center
---

A turn-based tactical RPG written in Java with JavaFX. You lead a small party across a 2D grid of
plains, forests and mountains and fight a squad controlled by the computer, alternating moves and
abilities turn after turn.

Three classes keep it interesting: the **Warrior** hits hard up close, the **Mage** attacks from a
distance and can heal, the **Archer** strikes from range. Each unit goes through a clear cycle in
every turn — `READY → MOVED → EXHAUSTED` — so the rules stay readable both in code and on screen.

The enemy AI uses a **breadth-first search** to find the shortest path to the nearest target,
walking around mountains and through forests. Games can be saved and loaded as XML, and maps are
plain XML files too, so adding a new battlefield needs no code.

The code is split into model, controller, persistence and view, with a JUnit 5 suite covering the
battle engine, the turn logic, the AI and the save round-trip. The visual layer adds HP bars,
floating damage numbers and a pulse on the selected unit, all styled from one external stylesheet.
