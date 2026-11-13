---
title: HackHub
category: Full stack
year: 2026
order: 3
featured: true
summary: A platform to run hackathons end to end — teams, submissions, judges and a final leaderboard.
role: Full development — first phase in a team, deployment & infrastructure solo
stack: [Spring Boot, Angular, PostgreSQL, JWT, Docker, Kubernetes]
links:
  - { label: GitHub, href: 'https://github.com/AlessioPiana54/HackHub' }
  - { label: Docs, href: 'https://github.com/AlessioPiana54/HackHub/wiki' }
cover: ../../assets/img/hackhub.png
coverAlt: A three-step podium with small teams of silhouettes, the winners raising their arms under a glowing trophy and a timeline of dots.
coverSize: auto 100%
coverPosition: center
---

HackHub manages a hackathon from the first sign-up to the final ranking. Organizers create the
event, teams form and register, submit their project, judges score it from 0 to 10 with written
feedback, and a leaderboard closes it all. Teams can also ask a mentor for a call or report a
problem to the organizer while the clock is running.

Every hackathon moves on its own through six states — **Pending, Open, In Progress, Evaluation,
Award, Concluded** — driven by a scheduler, so nobody has to remember to flip a switch at midnight.
Access is handled with stateless JWT and six distinct roles, from organizer to team member.

I worked on the whole application. The first part — the Spring Boot backend, the Angular frontend
and the hackathon flow — was built together with a teammate. After that I carried it on alone:
the refactoring, the frontend tests, the mobile layout and turning it into an installable **PWA**
with offline support.

I also took care of every way it runs: Docker Compose for local development, a setup without
Docker, a cloud deployment on Railway with three separate services, and Kubernetes manifests
tested on Minikube.
