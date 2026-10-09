---
title: Home
redirect_from: /about/
---

<section class="hero">
  <div class="hero-text">
    <p class="eyebrow rise">Melbourne &middot; Open to work</p>
    <h1 class="rise d2">I like getting people&rsquo;s tech working again.</h1>
    <p class="lead rise d3">I&rsquo;m Syarif, a graduate ICT support engineer with a Master of Cybersecurity from Monash University. I&rsquo;m based in Melbourne and looking for ICT support engineer and entry-level cybersecurity roles.</p>
    <p class="hero-actions rise d4">
      <a class="btn" href="{{ '/resume/' | relative_url }}">View resume</a>
      <a class="btn btn-secondary" href="mailto:{{ site.email }}">Email me</a>
    </p>
    <p class="fineprint rise d4">Temporary Graduate visa (subclass 485). Full working rights in Australia.</p>
  </div>
  <!-- Placeholder. Replace this div with: <img class="photo" src="{{ '/assets/img/me.webp' | relative_url }}" alt="Photo of Syarif"> -->
  <div class="photo-ph rise d3" role="img" aria-label="Placeholder for a portrait photo">
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"></path></svg>
    <span>Your photo here</span>
    <small>Portrait, 4:5</small>
  </div>
</section>

<section class="why" aria-label="Why I do this">
  <p>I want to work in ICT support because I like helping people. When someone's laptop or account stops working, they're stressed, and fixing it for them feels good.</p>
</section>

<section aria-labelledby="featured-heading">
  <div class="section-head">
    <h2 id="featured-heading">Selected projects</h2>
    <a href="{{ '/projects/' | relative_url }}">All projects</a>
  </div>
  <ul class="card-grid">
    <li>
      <a class="card card-link" href="{{ '/projects/beyondreaim/' | relative_url }}">
        <img class="cover-img" src="{{ '/assets/img/beyondreaim/home.webp' | relative_url }}" alt="" loading="lazy">
        <span class="card-body">
          <h3>BeyondReAim</h3>
          <p class="muted">Team web platform. I handled testing, security fixes and ICT support.</p>
          <span class="tagline">Team project &middot; Monash</span>
        </span>
      </a>
    </li>
    <li>
      <a class="card card-link" href="{{ '/projects/pihole-tailscale/' | relative_url }}">
        <img class="cover-img" src="{{ '/assets/img/pihole/query-log-blocked.webp' | relative_url }}" alt="" loading="lazy">
        <span class="card-body">
          <h3>Pi-hole over Tailscale</h3>
          <p class="muted">Network-wide ad blocking, reachable only over the tailnet and checked with nmap.</p>
          <span class="tagline">Home lab</span>
        </span>
      </a>
    </li>
    <li>
      <a class="card card-link" href="{{ '/projects/domaincheck/' | relative_url }}">
        <img class="cover-img" src="{{ '/assets/img/domaincheck/dashboard.webp' | relative_url }}" alt="" loading="lazy">
        <span class="card-body">
          <h3>DomainCheck</h3>
          <p class="muted">Passive domain security checks explained in plain English.</p>
          <span class="tagline">Personal &middot; built with an AI assistant</span>
        </span>
      </a>
    </li>
  </ul>
</section>

<section aria-labelledby="certs-heading">
  <h2 id="certs-heading">Certificates</h2>
  <ul class="card-grid cert-grid">
    {% for cert in site.data.certs %}
    <li class="card">
      <h3>{{ cert.name }}</h3>
      <p class="muted">{{ cert.issuer }}</p>
      <p><span class="badge{% if cert.status == 'In progress' %} badge-progress{% endif %}">{{ cert.status }}</span></p>
      {% if cert.url and cert.url != "" %}<p><a href="{{ cert.url }}" rel="noopener">{{ cert.link_label | default: "Verify" }}</a></p>{% endif %}
    </li>
    {% endfor %}
  </ul>
</section>

<section aria-labelledby="work-heading">
  <h2 id="work-heading">What I&rsquo;ve worked on</h2>
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

<section class="contact-strip" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Get in touch</h2>
  <p>Email is the easiest way to reach me. I'm based in Melbourne, Victoria.</p>
  <p class="contact-actions">
    <a class="btn" href="mailto:{{ site.email }}">Email me</a>
    {% if site.linkedin_url != "" %}<a class="btn btn-secondary" href="{{ site.linkedin_url }}">LinkedIn</a>{% endif %}
    <a class="btn btn-secondary" href="{{ site.resume_path | relative_url }}">Download resume (PDF)</a>
  </p>
</section>
