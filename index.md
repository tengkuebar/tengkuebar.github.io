---
title: Home
---

<section class="hero">
  <h1>I like getting people&rsquo;s tech working again.</h1>
  <p class="lead">I&rsquo;m Syarif, a graduate ICT support engineer with a Master of Cybersecurity from Monash University. I&rsquo;m based in Melbourne and looking for ICT support engineer and entry-level cybersecurity roles.</p>
  <p class="hero-actions">
    <a class="btn" href="{{ '/resume/' | relative_url }}">View resume</a>
    <a class="btn btn-secondary" href="mailto:{{ site.email }}">Email me</a>
  </p>
  <p class="fineprint">Temporary Graduate visa (subclass 485). Full working rights in Australia.</p>
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
  <ul class="card-grid">
    <li class="card">
      <h3>IT internship</h3>
      <p class="muted">PT. Mede Media Softika, March to September 2023</p>
      <p>I worked remotely with an IT team on a client database project. I loaded client data into an Oracle database, checked uploads through error logs and fixed SQL queries.</p>
    </li>
    <li class="card">
      <h3>Security work on a team web platform</h3>
      <p class="muted">Monash University, FIT5120</p>
      <p>I added rate limiting, and worked with teammates to fix a CORS misconfiguration and move the app from admin to least-privilege database access. I also wrote the security report for the team. <a href="https://www.beyondai-saltjs.me/">See the platform, BeyondReAim</a>.</p>
    </li>
    <li class="card">
      <h3>Published research</h3>
      <p class="muted">International Journal of Computer Science and Information Technology Research</p>
      <p>I co-authored a paper on a digital healthcare platform business model. <a href="https://www.researchpublish.com/papers/a-conceptual-ehealthcare4u-digital-platform-business-model-ensure-healthy-lives-and-promote-wellbeing-for-all-ages-of-healthcare-and-including-prevention--cure">Read the paper</a>.</p>
    </li>
  </ul>
  <p>There is more detail on the <a href="{{ '/resume/' | relative_url }}">resume page</a>.</p>
</section>
