---
title: Home
redirect_from: /about/
---

<section class="hero hero-home">
  <div class="hero-text">
    <h1 class="rise">I get people&rsquo;s tech working again.</h1>
    <p class="lead rise d2">Graduate ICT support engineer in Melbourne, with a Master of Cybersecurity from Monash University. Looking for ICT support engineer and entry-level cybersecurity roles.</p>
    <p class="hero-actions">
      <a class="btn" href="mailto:{{ site.email }}">Email me</a>
      <a class="btn btn-secondary" href="{{ '/resume/' | relative_url }}">View resume</a>
    </p>
    <p class="fineprint">Temporary Graduate visa (subclass 485). Full working rights in Australia.</p>
  </div>
  <figure class="hero-media rise d3">
    <div class="hero-frame">
      <img src="{{ '/assets/img/graduation.webp' | relative_url }}" width="800" height="1000" alt="Syarif in a graduation gown and cap, sitting on a wide staircase seen from above">
    </div>
    <figcaption>Graduation day.</figcaption>
  </figure>
</section>

<section class="library" aria-labelledby="featured-heading">
  <div class="section-head">
    <h2 id="featured-heading">Projects</h2>
    <a href="{{ '/projects/' | relative_url }}">All projects</a>
  </div>
  <ul class="tiles">
    <li>
      <a class="tile" href="{{ '/projects/beyondreaim/' | relative_url }}">
        <span class="tile-frame"><img src="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}" width="1200" height="750" alt="" loading="lazy"></span>
        <span class="tile-bar" aria-hidden="true"></span>
        <h3>BeyondReAim</h3>
        <p>Team web platform. Testing, security fixes and ICT support.</p>
      </a>
    </li>
    <li>
      <a class="tile" href="{{ '/projects/pihole-tailscale/' | relative_url }}">
        <span class="tile-frame"><img src="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}" width="1200" height="750" alt="" loading="lazy"></span>
        <span class="tile-bar" aria-hidden="true"></span>
        <h3>Pi-hole over Tailscale</h3>
        <p>Ad blocking reachable only over the tailnet, checked with nmap.</p>
      </a>
    </li>
    <li>
      <a class="tile" href="{{ '/projects/domaincheck/' | relative_url }}">
        <span class="tile-frame"><img src="{{ '/assets/img/domaincheck/dashboard.webp' | relative_url }}" width="1200" height="750" alt="" loading="lazy"></span>
        <span class="tile-bar" aria-hidden="true"></span>
        <h3>DomainCheck</h3>
        <p>Passive domain security checks in plain English.</p>
      </a>
    </li>
  </ul>
</section>

<section class="about" aria-label="About me">
  <p class="statement">I like trying new things, working out why something is broken, and helping the person who is stuck. Then I get to give them their day back.</p>
  <div class="ticket" data-ticket aria-label="An example support ticket moving from reported to fixed">
    <p class="ticket-tag">Support ticket</p>
    <p class="ticket-title">Laptop won&rsquo;t join the office Wi-Fi</p>
    <ol class="ticket-steps">
      <li data-step="0" class="is-done">Reported</li>
      <li data-step="1" class="is-done">Traced</li>
      <li data-step="2" class="is-on">Fixed</li>
    </ol>
    <div class="ticket-track" aria-hidden="true"><div class="ticket-bar" data-ticket-bar></div></div>
    <p class="ticket-text" data-ticket-text>Removed the old profile and rejoined. The user is back online and working.</p>
  </div>
</section>

<section aria-labelledby="certs-heading">
  <h2 id="certs-heading">Achievements</h2>
  <ul class="achievements">
    <li class="achievement">
      <span class="achievement-mark" aria-hidden="true">MC</span>
      <div class="achievement-body">
        <h3>Master of Cybersecurity</h3>
        <p class="muted">Monash University</p>
      </div>
      <span class="chip chip-done">Completed</span>
    </li>
    {% for cert in site.data.certs %}
    <li class="achievement">
      {% if cert.badge and cert.badge != "" %}<img class="achievement-badge" src="{{ cert.badge | relative_url }}" alt="{{ cert.name }} badge" width="72" height="72" loading="lazy">{% else %}<span class="achievement-mark" aria-hidden="true">AZ</span>{% endif %}
      <div class="achievement-body">
        <h3>{{ cert.name }}</h3>
        <p class="muted">{{ cert.issuer }}{% if cert.url and cert.url != "" %} &middot; <a href="{{ cert.url }}" rel="noopener">{{ cert.link_label | default: "Verify" }}</a>{% endif %}</p>
      </div>
      <span class="chip{% if cert.status == 'In progress' %} chip-progress{% else %} chip-done{% endif %}">{% if cert.status == 'In progress' %}In progress{% else %}Unlocked{% endif %}</span>
    </li>
    {% endfor %}
  </ul>
</section>

<section aria-labelledby="toolkit-heading">
  <h2 id="toolkit-heading">Toolkit</h2>
  <p class="section-note">Pick a slot to see what I did with it.</p>
  <div class="toolkit" data-toolkit>
    <div class="slot-grid">
      {% for slot in site.data.toolkit %}
      <button class="slot" type="button" data-name="{{ slot.name }}" data-use="{{ slot.use }}" data-used="{{ slot.used }}" data-link="{{ slot.link | relative_url }}" data-link-label="{{ slot.link_label }}" aria-pressed="{% if forloop.first %}true{% else %}false{% endif %}"><span class="slot-label">{{ slot.name }}</span><span class="slot-sub">{{ slot.tools }}</span></button>
      {% endfor %}
    </div>
    <div class="slot-panel" aria-live="polite">
      {% assign first = site.data.toolkit | first %}
      <p class="slot-name" data-slot-name>{{ first.name }}</p>
      <p class="slot-use" data-slot-use>{{ first.use }}</p>
      <p class="slot-used" data-slot-used>{{ first.used }}</p>
      <p class="slot-link"><a href="{{ first.link | relative_url }}" data-slot-link>{{ first.link_label }} &rarr;</a></p>
    </div>
  </div>
  <noscript>
    <ul class="slot-fallback">
      {% for slot in site.data.toolkit %}<li><strong>{{ slot.name }}</strong> ({{ slot.tools }}): {{ slot.used }} <a href="{{ slot.link | relative_url }}">{{ slot.link_label }}</a></li>{% endfor %}
    </ul>
  </noscript>
</section>

<section aria-labelledby="work-heading">
  <h2 id="work-heading">Experience</h2>
  <ol class="timeline">
    <li>
      <h3>IT internship</h3>
      <p class="muted">PT. Mede Media Softika, March to September 2023</p>
      <p>I worked remotely with an IT team on a client database project. I loaded client data into an Oracle database, checked uploads through error logs and fixed SQL queries.</p>
    </li>
    <li>
      <h3>Security work on a team web platform</h3>
      <p class="muted">Monash University, FIT5120</p>
      <p>I added rate limiting, and worked with teammates to fix a CORS misconfiguration and move the app from admin to least-privilege database access. I ran Nuclei scans, set up SonarQube and wrote the security report for the team. <a href="https://www.beyondai-saltjs.me/">See the platform, BeyondReAim</a>.</p>
    </li>
    <li>
      <h3>ICT support and testing for the same team</h3>
      <p class="muted">Monash University, FIT5120</p>
      <p>I set up the team&rsquo;s laptops to run the app locally and fixed installation problems. I tested each iteration (user, system and security testing) and flagged high-risk gaps. I also co-wrote the handover documents: system specification, setup, troubleshooting and incident response guides.</p>
    </li>
    <li>
      <h3>Vulnerability scanning practical</h3>
      <p class="muted">Monash University, Master of Cybersecurity</p>
      <p>Coursework in threat detection, network security and secure systems, including a hands-on vulnerability scanning practical. I use Nmap, Nuclei, Burp Suite, Wireshark and Metasploit.</p>
    </li>
    <li>
      <h3>Published research</h3>
      <p class="muted">International Journal of Computer Science and Information Technology Research</p>
      <p>I co-authored a paper on a digital healthcare platform business model. <a href="https://www.researchpublish.com/papers/a-conceptual-ehealthcare4u-digital-platform-business-model-ensure-healthy-lives-and-promote-wellbeing-for-all-ages-of-healthcare-and-including-prevention--cure">Read the paper</a>.</p>
    </li>
  </ol>
  <p>There is more detail on the <a href="{{ '/resume/' | relative_url }}">resume page</a>.</p>
</section>

<section class="contact-field" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Hiring for ICT support or entry-level security? Let&rsquo;s talk.</h2>
  <p>Email is the easiest way to reach me. I&rsquo;m based in Melbourne, Victoria, with full working rights in Australia.</p>
  <p class="contact-actions">
    <a class="btn" href="mailto:{{ site.email }}">Email me</a>
    <a class="btn" href="{{ site.resume_path | relative_url }}">Download resume (PDF)</a>
    {% if site.linkedin_url != "" %}<a class="btn" href="{{ site.linkedin_url }}">LinkedIn</a>{% endif %}
  </p>
</section>
