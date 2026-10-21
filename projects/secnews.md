---
title: secnews
permalink: /projects/secnews/
description: Case study of secnews, a personal tool that collects cybersecurity news, pulls out the CVE numbers, checks their official scores and shows what needs a decision.
lightbox: true
---

<article class="case">
  <a class="back-link" href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
  <p class="kind">Personal project, built with an AI coding assistant</p>
  <h1>secnews</h1>
  <p class="intro">A tool that reads cybersecurity news feeds, pulls out the CVE numbers they mention, looks up each official score and shows a short list of what needs a decision today. It runs on my own machine and stores everything in a local SQLite database.</p>

  <div class="strip">
    <div><h2>My role</h2><p>I set the requirements and the scope, made the design decisions and reviewed the work. Claude Code, an AI coding assistant, wrote the code under my direction.</p></div>
    <div><h2>Built with</h2><ul class="tags"><li>Python</li><li>Flask</li><li>SQLite</li><li>APScheduler</li><li>feedparser</li><li>NVD API</li><li>pytest</li><li>Claude Code</li></ul></div>
  </div>

  <section class="case-section" aria-labelledby="how-h">
    <h2 id="how-h">How it works</h2>
    <ul>
      <li>It reads the RSS feeds of five security sites on a schedule, including Krebs on Security, The Hacker News, BleepingComputer and CISA Advisories. It skips an article it has already stored, by URL or by a hash of the content.</li>
      <li>It extracts CVE identifiers and any CVSS score quoted next to them. If no score is found, the CVE is marked Unrated. It is never guessed.</li>
      <li>After each scrape it asks the NIST National Vulnerability Database for the official score of each CVE found. Only the CVE number is sent. The official score replaces the one an article quotes, and a CVE whose articles disagree with NVD is flagged.</li>
      <li>The same CVE from several sources shows as one row with a source count. The CVE page shows each source's score, your notes and what happened to it.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="dash-h">
    <h2 id="dash-h">The dashboard</h2>
    <ul>
      <li><strong>Today</strong> lists CVEs that match the products on my watchlist, then critical ones reported as exploited. Each can be marked Reviewed or snoozed, with an Undo bar.</li>
      <li><strong>Threats</strong> lists every CVE from the last 30 days with state tabs, severity filters and search.</li>
      <li><strong>Watchlist and alerts</strong> holds the products I run and the alert rules. Alerts can go to Slack, email or a webhook. They ship switched off, and a rule alerts once per CVE unless the score rises or exploitation is first reported.</li>
      <li><strong>System</strong> shows source health, a run log and settings.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="care-h">
    <h2 id="care-h">Fetching politely and keeping it safe</h2>
    <ul>
      <li>It uses RSS feeds, checks robots.txt before every fetch, waits a second between requests to a host and identifies itself in the User-Agent.</li>
      <li>SecurityWeek blocked the tool with HTTP 403. I switched that source off instead of disguising the User-Agent.</li>
      <li>Secrets such as the Slack webhook or an NVD API key are read from environment variables and never stored in the config file.</li>
      <li>The dashboard binds to 127.0.0.1 only and every form post carries a CSRF token. There are no user accounts, so it is not meant to be exposed to a network.</li>
      <li>The tests use saved feed fixtures and a fake HTTP session, so they make no network calls.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="limits-h">
    <h2 id="limits-h">Limits</h2>
    <ul>
      <li>Score extraction is pattern-based. It finds common phrasings such as "CVSS 9.8" but not every one, and the "affected software" text is a best guess.</li>
      <li>A watchlist match is a hint. It matches product names in headlines and summaries and does not know which version I run.</li>
      <li>It is a lead generator. Severity, affected versions and fixes still need confirming in the vendor advisory or the NVD before acting.</li>
      <li>It has no digest mode, and it is built for one person on one machine.</li>
    </ul>
  </section>

  <section class="case-section" aria-labelledby="shots-h">
    <h2 id="shots-h">Screenshots</h2>
    <ul class="shots">
      <li><a href="{{ '/assets/img/secnews/today.webp' | relative_url }}"><img src="{{ '/assets/img/secnews/today.webp' | relative_url }}" alt="secnews Today page with summary counts, a weekly CVE chart and critical exploited CVEs with official NVD scores" loading="lazy"></a></li>
      <li><a href="{{ '/assets/img/secnews/threats.webp' | relative_url }}"><img src="{{ '/assets/img/secnews/threats.webp' | relative_url }}" alt="secnews Threats page with search, state and severity filters and a list of CVEs with Reviewed and Snooze buttons" loading="lazy"></a></li>
    </ul>
    <p class="fineprint">Screenshots show live data from my own instance. The headlines are from public news sites.</p>
  </section>

  <div class="case-foot">
    <a href="{{ '/projects/' | relative_url }}">&larr; All projects</a>
    <a href="{{ '/projects/beyondreaim/' | relative_url }}">Back to the first project: BeyondReAim &rarr;</a>
  </div>
</article>
