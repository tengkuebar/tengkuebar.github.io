---
title: Resume
permalink: /resume/
redirect_from:
  - /cv/
  - /volunteering/
sectionnav: true
description: Resume of Tengku Ebar Syarif Hamzah, graduate ICT support engineer with a Master of Cybersecurity, based in Melbourne.
---

<div class="resume-layout">

  <aside class="resume-side">
    <div class="side-sticky">
      <div class="rise">
        <h1>Tengku Ebar Syarif Hamzah</h1>
        <p class="roles">ICT Support Engineer<br>Service Desk Analyst<br>Junior Cybersecurity Analyst</p>
        <p class="contact-lines">Melbourne, Victoria, Australia<br><a href="mailto:tengku.ebar@gmail.com">tengku.ebar@gmail.com</a><br><a href="https://www.linkedin.com/in/tengku-ebar-syarif-hamzah-422367194">LinkedIn</a></p>
        <p><a class="btn btn-block" href="{{ site.resume_path | relative_url }}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 11l5 5 5-5M5 21h14"></path></svg>Download resume (PDF)</a></p>
      </div>

      <section class="side-block rise d2" aria-labelledby="certs-h">
        <h2 id="certs-h">Certifications</h2>
        <ul>
          <li>Google IT Support Professional Certificate</li>
          <li>Certified in Cybersecurity (CC), ISC2</li>
          <li>Microsoft Azure Fundamentals (AZ-900), in progress</li>
        </ul>
      </section>

      <section class="side-block rise d3" aria-labelledby="lang-h">
        <h2 id="lang-h">Languages and work rights</h2>
        <p>English (Full Professional)<br>Indonesian (Native)<br>Malay (Professional Working)</p>
        <p class="fineprint">Temporary Graduate visa (subclass 485). Full working rights in Australia. Open to sponsorship and willing to relocate.</p>
      </section>
    </div>
  </aside>

  <div class="resume-main">

    <nav class="section-nav" id="section-nav" aria-label="Resume sections">
      <div class="sn-card">
        <div class="sn-tabs">
          <ul class="sn-list">
            <li><a href="#summary-h" data-full="Professional summary">Summary</a></li>
            <li><a href="#edu-h">Education</a></li>
            <li><a href="#proj-h">Projects</a></li>
            <li><a href="#exp-h">Experience</a></li>
            <li><a href="#vol-h">Volunteering</a></li>
            <li><a href="#pub-h">Publications</a></li>
            <li><a href="#skills-h" data-full="Key skills">Skills</a></li>
          </ul>
          <span class="sn-indicator" aria-hidden="true"></span>
        </div>
        <div class="sn-summary" aria-hidden="true"><span class="sn-position"></span><span class="sn-label"></span></div>
        <button class="sn-toggle" type="button" aria-expanded="true" aria-label="Collapse section navigation" hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"></path></svg>
        </button>
      </div>
    </nav>
    <section class="rise d2" aria-labelledby="summary-h">
      <h2 id="summary-h">Professional summary</h2>
      <p class="summary">Graduate ICT support engineer with a Master of Cybersecurity from Monash University. I diagnose and resolve installation and software problems, test systems for functionality and security, and write technical documentation. I hold the Google IT Support Professional Certificate and ISC2 CC, and I am preparing for Microsoft AZ-900.</p>
    </section>

    <section class="rise d3" aria-labelledby="edu-h">
      <h2 id="edu-h">Education</h2>
      <div class="entry">
        <h3>Master of Cybersecurity</h3>
        <p class="meta">Monash University, Melbourne, Australia. 2024 to 2026.</p>
        <ul>
          <li>Systems analysis and design. Covered how to gather requirements, model an information system and explain its data, storage and processing needs to technical and non-technical stakeholders.</li>
          <li>Project management. Applied the 10 PMBOK areas to build a project plan from a case study, with governance, ethics and security requirements included.</li>
          <li>Professional practice. Covered communication, conflict resolution and teamwork in cross-cultural teams, and working under the ACS Code of Ethics.</li>
          <li>Risk and security management, and cyber operations. Learned to assess threats and risks to information assets, run a risk analysis, propose controls and respond to security breaches.</li>
          <li>Network security and software security. Learned to assess networked environments, model threats to applications, test security features and recommend improvements.</li>
          <li>IT forensics. Covered collecting evidence, forensic techniques on local media and networks, the legal side, and reporting findings clearly.</li>
          <li>IT research methods. Covered reviewing sources, choosing qualitative or quantitative methods, and presenting findings to different audiences.</li>
          <li>Technical base. Databases, Python and data analysis, data science, and computer architecture and networking.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Bachelor of Technology, Computer and Information Systems Security (Information Assurance)</h3>
        <p class="meta">International Islamic University Malaysia. 2018 to 2023.</p>
        <ul>
          <li>Studied computer organisation, operating systems, computer networking and database systems.</li>
          <li>Completed units in systems analysis and design, human computer interaction and project management in IT.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="proj-h">
      <h2 id="proj-h">Projects</h2>
      <div class="entry">
        <h3><a href="{{ '/projects/beyondreaim/' | relative_url }}">BeyondReAim, industry project</a></h3>
        <p class="meta">Monash University. 2026.</p>
        <ul>
          <li>Delivered the project in a student team, working next to the developers. Set up the team's laptops to run the app locally and fixed installation problems.</li>
          <li>Tested the web application across three iterations and reported 29 security findings mapped to OWASP Top 10:2025, then re-checked them after fixes and confirmed 6 as fixed, including 2 critical.</li>
          <li>Worked with the developers to fix a CORS misconfiguration, move the app from admin to least-privilege database access, add rate limiting and security headers, and rotate a database credential that had been committed to Git history. Ran Nuclei scans and set up SonarQube.</li>
          <li>Wrote the security report covering a risk assessment, an incident response plan, an access matrix, privacy and legal issues, and a backup and restore plan.</li>
          <li>Wrote fix recommendations ranked by severity, and named the supply chain (Vercel, Neon, Groq, Hugging Face) as the remaining risk, so the team could decide what to fix first.</li>
          <li>Wrote the troubleshooting guide (8 faults) and the incident response process (3 severity levels) so a new operator could run the system after handover.</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/pihole-tailscale/' | relative_url }}">Pi-hole over Tailscale, home lab project</a></h3>
        <p class="meta">Personal project. Aug 2026 to Oct 2026.</p>
        <ul>
          <li>Ran Pi-hole in Docker for network-wide ad blocking, reached from a phone over Tailscale with no router port forwarded.</li>
          <li>Bound the DNS and admin ports to the Tailscale address only, then scanned with nmap from the same Wi-Fi, another network and inside the tailnet. The ports were filtered from outside and open only on the tailnet.</li>
          <li>Fixed a startup fault where the container inherited Tailscale DNS, which is the Pi-hole itself, so it could not download blocklists. Gave the container its own resolvers.</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/domaincheck/' | relative_url }}">DomainCheck</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements and scope and reviewed the work, while Claude Code, an AI coding assistant, wrote the code.</li>
          <li>Built a web app that checks a domain's email and website security (SPF, DMARC, DKIM, TLS, security headers) with passive checks only, and explains the results in plain English with ranked fixes and a PDF report.</li>
          <li>Required every outbound request to go through one safe fetcher that blocks private addresses, and enforced it with tests and CI (ruff, Bandit, pip-audit).</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/secnews/' | relative_url }}">secnews</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements and scope and reviewed the work, while Claude Code wrote the code.</li>
          <li>Collects security news from five RSS feeds, pulls out the CVE numbers and checks each official NVD score. A missing score shows as Unrated and is never guessed.</li>
          <li>Shows a daily list of what needs a decision, merges the same CVE across sources, checks robots.txt before each fetch and runs on localhost only.</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/interview-gym/' | relative_url }}">Interview Gym</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements and design spec and reviewed the work, while Claude Code wrote the code.</li>
          <li>Built an app for practising interviews out loud with local AI characters. The model, voices and speech recognition all run on my own computer, and the coach report only quotes my own words, checked by code.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="exp-h">
      <h2 id="exp-h">Experience</h2>
      <div class="entry">
        <h3>Information Technology Intern</h3>
        <p class="meta">PT. Mede Media Softika, Jakarta, Indonesia (remote). Mar 2023 to Sep 2023.</p>
        <ul>
          <li>Loaded client data into a company database with SQL Loader at up to thousands of rows per day, then checked the error logs and fixed the queries whenever an upload failed, so the final data stayed accurate.</li>
          <li>Wrote documentation of the project's tasks and procedures so routine work could be repeated without errors.</li>
          <li>Finalised the daily batches of temporary data (up to thousands of rows) into the final tables once the checks passed, so the client data was ready to use.</li>
          <li>Configured a locally hosted web app with TOAD, Visual Studio and IIS, writing custom parameters in C#.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="vol-h">
      <h2 id="vol-h">Volunteering</h2>
      <div class="entry">
        <h3>Food and Beverage Volunteer</h3>
        <p class="meta">Festival Indonesia (arts and culture), Federation Square, Melbourne. Oct 2026, one day.</p>
        <ul>
          <li>Ran the food and beverage stall and sold items directly to about 100 visitors.</li>
          <li>Handled cash payments, giving correct change and counting the physical cash takings at the end of the day.</li>
          <li>Counted sold and unsold stock against opening inventory, then calculated the day's sales and profit.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Publications Manager</h3>
        <p class="meta">Sharing For Surrounding 2019 (poverty alleviation). Jul 2019, one month.</p>
        <ul>
          <li>Prepared the donation event by running its media publicity.</li>
          <li>Worked with the food bureau to prepare the basic needs items and transfer them to the event location.</li>
          <li>Worked with other volunteers on advertising to potential donors.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>General Volunteer</h3>
        <p class="meta">Brotherhood Of Harmony: Deliver Salam &amp; Smile Campaign (arts and culture). May 2018, one month.</p>
        <ul>
          <li>Helped prepare the event by creating posters and graphical materials.</li>
          <li>Gathered photos during the event to share on social media and publicise its benefits.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Publications Assistant</h3>
        <p class="meta">Majelis Musyawarah Tertinggi (MMT) XXV 2017 (education). Oct 2017, one month.</p>
        <ul>
          <li>Prepared the presentation materials the committee needed for the event.</li>
          <li>Prepared the graphical posters used to advertise it.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Publications Assistant</h3>
        <p class="meta">Indonesian Day 2017 (arts and culture). Sep 2017, one month.</p>
        <ul>
          <li>Gathered photos and videos of participants throughout the one-week event.</li>
          <li>Made the graphical posters used to advertise it.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Publications Assistant</h3>
        <p class="meta">Psychology and Life 4 Conference (health). Apr 2017, one month.</p>
        <ul>
          <li>Prepared graphical media and design, and promoted the event on social media and with physical posters.</li>
          <li>Helped the organiser with the slides and materials needed during the event.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="pub-h">
      <h2 id="pub-h">Publications</h2>
      <div class="entry">
        <h3>A Conceptual eHealthCare4U Digital Platform Business Model: Ensure healthy lives and promote wellbeing for all ages of Healthcare and including prevention &amp; cure</h3>
        <p class="meta">International Journal of Computer Science and Information Technology Research, Vol. 8, Issue 3, July to September 2020</p>
        <ul>
          <li>Co-authored with Issa Mahamat Issa Ahmat, Gaber Amer Abdullah Saleh Yahya and Abdul Rahman bin Ahmad Dahlan.</li>
          <li><a href="https://www.researchpublish.com/papers/a-conceptual-ehealthcare4u-digital-platform-business-model-ensure-healthy-lives-and-promote-wellbeing-for-all-ages-of-healthcare-and-including-prevention--cure">Read the paper</a></li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="skills-h">
      <h2 id="skills-h">Key skills</h2>
      <ul class="skill-list">
        <li><strong>Support.</strong> Installing, configuring and troubleshooting laptops, software, Windows and Linux; system administration.</li>
        <li><strong>Testing.</strong> User, system and security testing; reviewing systems against standards to find high-risk areas.</li>
        <li><strong>Networking.</strong> Core networking concepts including IP addressing, DNS and DHCP, from Google IT Support coursework and university study.</li>
        <li><strong>Security.</strong> Phishing and malware awareness, network security, vulnerability scanning with Nmap, Nuclei, Burp Suite, Wireshark and Metasploit, code analysis with SonarQube.</li>
        <li><strong>Technical documentation.</strong> System specifications, setup and troubleshooting guides, security reports.</li>
        <li><strong>Cloud.</strong> Microsoft Azure fundamentals (AZ-900 in progress).</li>
        <li><strong>Data and scripting.</strong> Oracle SQL, basic Python and C#, currently learning PowerShell and Bash.</li>
      </ul>
    </section>

  </div>
</div>

<section class="contact-strip" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Get in touch</h2>
  <p>Email is the easiest way to reach me. I'm based in Melbourne, Victoria.</p>
  <p class="contact-actions">
    <a class="btn" href="mailto:{{ site.email }}">Email me</a>
    {% if site.linkedin_url != "" %}<a class="btn btn-secondary" href="{{ site.linkedin_url }}">LinkedIn</a>{% endif %}
    <a class="btn btn-secondary" href="{{ site.resume_path | relative_url }}">Download resume (PDF)</a>
  </p>
</section>
