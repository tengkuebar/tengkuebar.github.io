---
title: DomainCheck
permalink: /projects/domaincheck/
description: Case study of DomainCheck, a personal web app that checks a domain's email and website security, built with an AI coding assistant under Syarif's direction.
lightbox: true
---

<article class="case">
  <a class="back-link" href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
  <p class="kind">Personal project, built with an AI coding assistant</p>
  <h1>DomainCheck</h1>
  <p class="intro">A web app that checks a domain's email and website security and explains the results in plain English. You enter a domain and get a score, ranked fixes with steps for Microsoft 365, Google Workspace and cPanel, and a PDF report. It uses only passive checks: DNS records, the TLS certificate and the home page.</p>

  <div class="strip">
    <div><h2>My role</h2><p>I set the requirements and the scope, made the design decisions and reviewed the work. Claude Code, an AI coding assistant, wrote the code under my direction.</p></div>
    <div><h2>Built with</h2><ul class="tags"><li>Python</li><li>FastAPI</li><li>ReportLab</li><li>pytest</li><li>ruff</li><li>Bandit</li><li>pip-audit</li><li>GitHub Actions</li><li>Claude Code</li></ul></div>
  </div>

  <section class="case-section" aria-labelledby="checks-h">
    <h2 id="checks-h">What it checks</h2>
    <ul>
      <li>Nine checks: SPF, DMARC, DKIM, the TLS certificate and versions, HTTPS and HSTS, security headers, cookie flags and CAA.</li>
      <li>A tenth check asks for a short fixed list of sensitive files, such as <code>.env</code>. It is built but switched off, because the app can't prove that the user owns the domain.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="security-h">
    <h2 id="security-h">Security</h2>
    <ul>
      <li>The app fetches whatever domain a visitor types, so every outbound request goes through one safe fetcher. It resolves the name first and refuses private, loopback and cloud-metadata addresses. It connects to the address it checked, so a DNS answer that changes can't redirect the request, and it re-checks every redirect. It also caps time and response size.</li>
      <li>Tests cover each of those cases, including a domain that points at an internal address and a redirect to one. A test fails if any other code opens its own connection.</li>
      <li>The app also has a strict content security policy, CSRF protection and rate limits. A GitHub Actions workflow runs the tests, ruff, Bandit and pip-audit.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="limits-h">
    <h2 id="limits-h">Limits</h2>
    <ul>
      <li>Anyone can scan any domain, and the rate limits are per IP address, which is easy to get around.</li>
      <li>It has not been tested with a real screen reader. It is tested against fake DNS and web servers and a local TLS server, and it has been run against one real site. It is not deployed yet.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="shots-h">
    <h2 id="shots-h">Screenshots</h2>
    <ul class="shots">
      <li><a href="{{ '/assets/img/domaincheck/landing.webp' | relative_url }}"><img src="{{ '/assets/img/domaincheck/landing.webp' | relative_url }}" alt="DomainCheck home page with a domain field and a sample report preview" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/domaincheck/dashboard.webp' | relative_url }}"><img src="{{ '/assets/img/domaincheck/dashboard.webp' | relative_url }}" alt="DomainCheck report with a score of 67 out of 100, three area cards and fixes ranked by score points" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/domaincheck/findings.webp' | relative_url }}"><img src="{{ '/assets/img/domaincheck/findings.webp' | relative_url }}" alt="List of findings with filter buttons and an expanded security headers finding showing evidence and fix steps" loading="lazy"></a></li>
    </ul>
    <p class="fineprint">Screenshots show sample data from a demo mode, not a live scan.</p>
  </section>

  <div class="case-foot">
    <a href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
    <a href="{{ '/projects/beyondreaim/' | relative_url }}">Back to the first project: BeyondReAim &rarr;</a>
  </div>
</article>
