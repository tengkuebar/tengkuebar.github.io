---
title: Projects
permalink: /projects/
description: Study and team projects by Syarif, labelled as what they are.
# Loads the screenshot viewer for the .shots gallery
lightbox: true
---

# Projects

These are study and team projects. I label each one so you know what it was and what part I did.

<ul class="card-grid project-list">
  <li class="card">
    <h3>BeyondReAim</h3>
    <p class="muted">Team project, Monash University (FIT5120)</p>
    <p>A web platform that helps young Australian workers and recent graduates see how AI may change their industry. Users pick an industry, take a guided self-assessment and get a personal risk profile.</p>
    <p><strong>My role:</strong> ICT support, testing and security for the team.</p>
    <details class="more" open>
    <summary>Details and screenshots</summary>
    <h4>Support</h4>
    <ul>
      <li>Set up the team's laptops so each one could run the app and its tools locally, and fixed installation problems as they came up.</li>
    </ul>
    <h4>Testing and review</h4>
    <ul>
      <li>Tested the app in every iteration, covering user, system and security testing, to keep it to the agreed quality standards.</li>
      <li>Reviewed the project for high-risk areas and gaps against the agreed standards and procedures, and reported them to the team.</li>
    </ul>
    <h4>Security</h4>
    <ul>
      <li>Found security bugs and worked with the developers to diagnose, fix and retest them, including a CORS misconfiguration.</li>
      <li>Added rate limiting to the app.</li>
      <li>Found that the app connected to the database with admin access, and worked with the team's database member to move it to least-privilege access.</li>
      <li>Ran Nuclei scans and set up SonarQube.</li>
    </ul>
    <h4>Documentation</h4>
    <ul>
      <li>Wrote the security report and, with the team, the handover documents, including the system specification and guides for setup, troubleshooting, incident response, and backup and restore.</li>
    </ul>
    <ul class="shots">
      <li><a href="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}" alt="BeyondReAim home page with the guided journey from AI impact to being future ready" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/beyondreaim/industry-insights.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/industry-insights.webp' | relative_url }}" alt="Industry AI insights page showing AI exposure, entry-level demand and role-specific impacts for marketing" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/beyondreaim/learning-hub.webp' | relative_url }}"><img src="{{ '/assets/img/beyondreaim/learning-hub.webp' | relative_url }}" alt="Guided learning page with progress, an achievement and the learning hub" loading="lazy"></a></li>
    </ul>
    </details>
    <p class="muted">Built with React, TypeScript, Vite, Tailwind CSS, NeonDB and Vercel.</p>
    <p><a href="https://www.beyondai-saltjs.me/">Open the app</a></p>
  </li>
  <li class="card">
    <h3>Pi-hole over Tailscale</h3>
    <p class="muted">Personal home lab project</p>
    <p>I set up network-wide ad blocking with Pi-hole in Docker and reached it from my phone over Tailscale. I tested it with nmap, and its ports could not be reached from outside the tailnet.</p>
    <details class="more">
    <summary>Details and screenshots</summary>
    <h4>Setup</h4>
    <ul>
      <li>No router port is forwarded, so nothing is open to the home network or the internet. My phone uses the Pi-hole as its DNS on mobile data through the Tailscale tunnel.</li>
      <li>Chose Tailscale over a self-hosted WireGuard server, because I don't control the router and the ISP may use CGNAT, so port forwarding wasn't an option.</li>
      <li>Bound Pi-hole's DNS and admin ports to the Tailscale address only.</li>
      <li>Fixed a startup problem. A fresh container inherited Tailscale DNS, which is Pi-hole itself, so it couldn't download its blocklists. I gave the container its own resolvers.</li>
    </ul>
    <h4>Testing</h4>
    <ul>
      <li>Ran nmap scans from the same Wi-Fi, from another network and from inside the tailnet. The ports were filtered from outside and open only on the tailnet.</li>
      <li>Opened a test domain on my phone over 4G. The query showed in the Pi-hole log, first forwarded and then blocked after I added the domain to the denylist.</li>
    </ul>
    <h4>Limits</h4>
    <ul>
      <li>The laptop is a single point of failure. If it sleeps, DNS stops for every device on the tailnet.</li>
      <li>Docker on Windows hides client addresses, so every query shows one internal address.</li>
    </ul>
    <ul class="shots shots-fit">
      <li><a href="{{ '/assets/img/pihole/phone-4g.webp' | relative_url }}"><img src="{{ '/assets/img/pihole/phone-4g.webp' | relative_url }}" alt="Phone on 4G showing the test domain cannot be reached" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}"><img src="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}" alt="Pi-hole query log showing the test domain blocked" loading="lazy"></a></li>
    </ul>
    </details>
    <p class="muted">Built with Pi-hole, Docker Desktop, Tailscale and nmap.</p>
    <p><a href="https://github.com/tengkuebar/pihole-tailscale">View on GitHub</a></p>
  </li>
</ul>
