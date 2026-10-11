---
title: BeyondReAim
permalink: /projects/beyondreaim/
description: Case study of BeyondReAim, a team web platform at Monash University. Syarif did ICT support, testing and security.
lightbox: true
---

<article class="case">
  <a class="back-link" href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
  <p class="kind">Team project, Monash University (FIT5120)</p>
  <h1>BeyondReAim</h1>
  <p class="intro">A web platform that helps young Australian workers and recent graduates see how AI may change their industry. Users pick an industry, take a guided self-assessment and get a personal risk profile. My part was the team's security, testing and ICT support.</p>

  <div class="strip">
    <div><h2>My role</h2><p>Security, testing and ICT support for a team project</p></div>
    <div><h2>Built with</h2><ul class="tags"><li>React</li><li>TypeScript</li><li>Vite</li><li>Tailwind CSS</li><li>NeonDB</li><li>Vercel</li></ul></div>
    <div><h2>Links</h2><p><a href="https://www.beyondai-saltjs.me/">Open the app</a></p></div>
  </div>

  <section class="case-section" aria-labelledby="security-h">
    <h2 id="security-h">Security findings and fixes</h2>
    <ul>
      <li>Found security bugs, including a CORS misconfiguration, and worked with the developers to diagnose, fix and retest each one.</li>
      <li>Found that the app connected to the database with admin access. I worked with the team's database member to move it to least-privilege access.</li>
      <li>Added rate limiting to the app.</li>
      <li>Ran Nuclei scans and set up SonarQube.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="testing-h">
    <h2 id="testing-h">Testing and review</h2>
    <ul>
      <li>Tested every iteration with user, system and security testing, against the quality standards the team agreed.</li>
      <li>Reviewed the project for high-risk areas and gaps against the agreed standards and procedures, and reported them to the team.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="support-h">
    <h2 id="support-h">ICT support</h2>
    <ul>
      <li>Set up the team's laptops so each one could run the app and its tools locally, and fixed installation problems as they came up.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="docs-h">
    <h2 id="docs-h">Documentation</h2>
    <ul>
      <li>Wrote the team's security report. It covers:
        <ul>
          <li>a risk assessment of the app;</li>
          <li>an incident response plan;</li>
          <li>identity and access management, with an access matrix;</li>
          <li>the privacy, legal and ethical issues to consider when building the app;</li>
          <li>real security incidents related to the tools, packages and software the app uses;</li>
          <li>a backup and restore plan.</li>
        </ul>
      </li>
      <li>Worked with the team on the handover documents: the system specification and the setup and troubleshooting guides.</li>
    </ul>
  </section>
  <section class="case-section" aria-labelledby="shots-h">
    <h2 id="shots-h">Screenshots</h2>
    <ul class="shots">
      <li><a href="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}" alt="BeyondReAim home page with the guided journey from AI impact to being future ready" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/beyondreaim/industry-insights.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/industry-insights.webp' | relative_url }}" alt="Industry AI insights page showing AI exposure, entry-level demand and role-specific impacts for marketing" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/beyondreaim/learning-hub.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/learning-hub.webp' | relative_url }}" alt="Guided learning page with progress, an achievement and the learning hub" loading="lazy"></a></li>
    </ul>
  </section>

  <div class="case-foot">
    <a class="btn" href="https://www.beyondai-saltjs.me/">Open the app</a>
    <a href="{{ '/projects/pihole-tailscale/' | relative_url }}">Next project: Pi-hole over Tailscale &rarr;</a>
  </div>
</article>
