---
title: Projects
permalink: /projects/
description: Study, team and home lab projects by Syarif, labelled as what they are.
---

# Projects

Each project is labelled as a team, personal or home lab project, with my part stated plainly. Open one for the evidence: what I did, how I tested it and where it falls short.

<div class="project-rows">
  <a class="project-row" href="{{ '/projects/beyondreaim/' | relative_url }}">
    <span class="thumb-frame"><img class="thumb" src="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}" alt="" loading="lazy"></span>
    <div>
      <p class="kind">Team project, Monash University (FIT5120)</p>
      <h2>BeyondReAim</h2>
      <p class="outcome">A web platform showing young Australian workers how AI may change their industry. My part: ICT support, testing and security. I found and helped fix a CORS misconfiguration, moved the app off admin database access to least privilege, added rate limiting and wrote the security report.</p>
      <ul class="tags"><li>React</li><li>TypeScript</li><li>Vite</li><li>NeonDB</li><li>Vercel</li></ul>
      <span class="read-more">Read the case study <span aria-hidden="true">&rarr;</span></span>
    </div>
  </a>
  <a class="project-row" href="{{ '/projects/pihole-tailscale/' | relative_url }}">
    <span class="thumb-frame"><img class="thumb thumb-fit" src="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}" alt="" loading="lazy"></span>
    <div>
      <p class="kind">Personal home lab project</p>
      <h2>Pi-hole over Tailscale</h2>
      <p class="outcome">Network-wide ad blocking in Docker, reached over Tailscale with no router port forwarded. I scanned it with nmap from three vantage points: the ports were filtered from outside and open only on the tailnet.</p>
      <ul class="tags"><li>Pi-hole</li><li>Docker Desktop</li><li>Tailscale</li><li>nmap</li></ul>
      <span class="read-more">Read the case study <span aria-hidden="true">&rarr;</span></span>
    </div>
  </a>
  <a class="project-row" href="{{ '/projects/domaincheck/' | relative_url }}">
    <span class="thumb-frame"><img class="thumb" src="{{ '/assets/img/domaincheck/dashboard.webp' | relative_url }}" alt="" loading="lazy"></span>
    <div>
      <p class="kind">Personal project, built with an AI coding assistant</p>
      <h2>DomainCheck</h2>
      <p class="outcome">My part: requirements, scope and review, with Claude Code writing the code. It checks SPF, DMARC, DKIM, TLS and security headers using passive checks only. Every outbound request goes through one safe fetcher that blocks private addresses, and tests and CI (ruff, Bandit, pip-audit) enforce it.</p>
      <ul class="tags"><li>Python</li><li>FastAPI</li><li>pytest</li><li>Bandit</li><li>GitHub Actions</li></ul>
      <span class="read-more">Read the case study <span aria-hidden="true">&rarr;</span></span>
    </div>
  </a>
  <a class="project-row" href="{{ '/projects/secnews/' | relative_url }}">
    <span class="thumb-frame"><img class="thumb" src="{{ '/assets/img/secnews/today.webp' | relative_url }}" alt="" loading="lazy"></span>
    <div>
      <p class="kind">Personal project, built with an AI coding assistant</p>
      <h2>secnews</h2>
      <p class="outcome">My part: requirements, scope and review, with Claude Code writing the code. It reads security news feeds, pulls out the CVE numbers and looks up each official NVD score. A local dashboard shows what needs a decision today, merges the same CVE across sources and never guesses a missing score. It checks robots.txt and binds to localhost only.</p>
      <ul class="tags"><li>Python</li><li>Flask</li><li>SQLite</li><li>NVD API</li><li>pytest</li></ul>
      <span class="read-more">Read the case study <span aria-hidden="true">&rarr;</span></span>
    </div>
  </a>
  <a class="project-row" href="{{ '/projects/interview-gym/' | relative_url }}">
    <span class="thumb-frame"><img class="thumb" src="{{ '/assets/img/interview-gym/practice.webp' | relative_url }}" alt="" loading="lazy"></span>
    <div>
      <p class="kind">Personal project, built with an AI coding assistant</p>
      <h2>Interview Gym</h2>
      <p class="outcome">My part: requirements, design spec and review, with Claude Code writing the code. You practise interviews out loud with an AI recruiter or hiring manager, then get a coach report that quotes your own words and never invents any. The model, voices and speech recognition all run locally, so nothing leaves the computer.</p>
      <ul class="tags"><li>Python</li><li>FastAPI</li><li>Next.js</li><li>Ollama</li><li>SQLite</li></ul>
      <span class="read-more">Read the case study <span aria-hidden="true">&rarr;</span></span>
    </div>
  </a>
</div>
