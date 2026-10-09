---
title: Pi-hole over Tailscale
permalink: /projects/pihole-tailscale/
description: Case study of a home lab project, network-wide ad blocking with Pi-hole in Docker, reached over Tailscale and tested with nmap.
lightbox: true
---

<article class="case">
  <a class="back-link" href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
  <p class="kind">Personal home lab project</p>
  <h1>Pi-hole over Tailscale</h1>
  <p class="intro">I set up network-wide ad blocking with Pi-hole in Docker and reached it from my phone over Tailscale. I tested it with nmap, and its ports could not be reached from outside the tailnet.</p>

  <div class="strip">
    <div><h2>My role</h2><p>I set it up and tested it myself</p></div>
    <div><h2>Built with</h2><ul class="tags"><li>Pi-hole</li><li>Docker Desktop</li><li>Tailscale</li><li>nmap</li></ul></div>
    <div><h2>Links</h2><p><a href="https://github.com/tengkuebar/pihole-tailscale">View on GitHub</a></p></div>
  </div>

  <section class="case-section" aria-labelledby="setup-h">
    <h2 id="setup-h">Setup</h2>
    <ul>
      <li>No router port is forwarded, so nothing is open to the home network or the internet. My phone uses the Pi-hole as its DNS on mobile data through the Tailscale tunnel.</li>
      <li>Chose Tailscale over a self-hosted WireGuard server, because I don't control the router and the ISP may use CGNAT, so port forwarding wasn't an option.</li>
      <li>Bound Pi-hole's DNS and admin ports to the Tailscale address only.</li>
      <li>Fixed a startup problem. A fresh container inherited Tailscale DNS, which is Pi-hole itself, so it couldn't download its blocklists. I gave the container its own resolvers.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="testing-h">
    <h2 id="testing-h">Testing</h2>
    <ul>
      <li>Ran nmap scans from the same Wi-Fi, from another network and from inside the tailnet. The ports were filtered from outside and open only on the tailnet.</li>
      <li>Opened a test domain on my phone over 4G. The query showed in the Pi-hole log, first forwarded and then blocked after I added the domain to the denylist.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="limits-h">
    <h2 id="limits-h">Limits</h2>
    <ul>
      <li>The laptop is a single point of failure. If it sleeps, DNS stops for every device on the tailnet.</li>
      <li>Docker on Windows hides client addresses, so every query shows one internal address.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="shots-h">
    <h2 id="shots-h">Screenshots</h2>
    <ul class="shots shots-fit">
      <li><a href="{{ '/assets/img/pihole/phone-4g.webp' | relative_url }}"><img src="{{ '/assets/img/pihole/phone-4g.webp' | relative_url }}" alt="Phone on 4G showing the test domain cannot be reached" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}"><img src="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}" alt="Pi-hole query log showing the test domain blocked" loading="lazy"></a></li>
    </ul>
  </section>

  <div class="case-foot">
    <a class="btn" href="https://github.com/tengkuebar/pihole-tailscale">View on GitHub</a>
    <a href="{{ '/projects/domaincheck/' | relative_url }}">Next project: DomainCheck &rarr;</a>
  </div>
</article>
