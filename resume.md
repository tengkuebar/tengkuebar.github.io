---
title: Resume
permalink: /resume/
redirect_from:
  - /cv/
  - /volunteering/
sectionnav: true
resumetabs: true
description: Resume of Tengku Ebar Syarif Hamzah, graduate cybersecurity and ICT support engineer with a Master of Cybersecurity, based in Melbourne.
---

<script>
  (function () {
    var d = document.documentElement;
    d.classList.add('tabs-js');
    d.setAttribute('data-track', location.hash === '#support' ? 'support' : 'cyber');
  })();
</script>

<div class="track-bar">
  <div class="track-switch" role="tablist" aria-label="Choose resume" data-active="cyber">
    <span class="track-pill" aria-hidden="true"></span>
    <button type="button" role="tab" id="tab-cyber" aria-selected="true" aria-controls="pane-cyber"><b>Cybersecurity</b><small>Junior analyst</small></button>
    <button type="button" role="tab" id="tab-support" aria-selected="false" aria-controls="pane-support" tabindex="-1"><b>IT Support</b><small>Service desk</small></button>
  </div>
</div>

<div class="track-pane" id="pane-cyber" role="tabpanel" aria-labelledby="tab-cyber">
<div class="resume-layout">

  {% include resume-side.html id="c" label="Cybersecurity" roles="Junior Cyber Security Analyst|Vulnerability Assessment|Risk and Incident Response" pdf=site.resume_cyber_path %}

  <div class="resume-main">

    <nav class="section-nav" aria-label="Cybersecurity resume sections">
      <div class="sn-card">
        <div class="sn-tabs">
          <ul class="sn-list">
            <li><a href="#c-summary-h" data-full="Professional summary">Summary</a></li>
            <li><a href="#c-skills-h" data-full="Security and technical skills">Skills</a></li>
            <li><a href="#c-exp-h">Experience</a></li>
            <li><a href="#c-proj-h">Projects</a></li>
            <li><a href="#c-edu-h">Education</a></li>
            <li><a href="#c-vol-h">Volunteering</a></li>
            <li><a href="#c-pub-h">Publications</a></li>
          </ul>
          <span class="sn-indicator" aria-hidden="true"></span>
        </div>
        <div class="sn-summary" aria-hidden="true"><span class="sn-position"></span><span class="sn-label"></span></div>
        <button class="sn-toggle" type="button" aria-expanded="true" aria-label="Collapse section navigation" hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"></path></svg>
        </button>
      </div>
    </nav>

    <section class="rise d2" aria-labelledby="c-summary-h">
      <h2 id="c-summary-h">Professional summary</h2>
      <p class="summary">Cybersecurity graduate with a Master of Cybersecurity from Monash University. I ran security assessments on a team web platform, mapped the findings to OWASP Top 10 and ISO 27001, and worked with the developers to fix them. I hold the ISC2 Certified in Cybersecurity (CC) and write clear security reports and handover documents.</p>
    </section>

    <section class="rise d3" aria-labelledby="c-skills-h">
      <h2 id="c-skills-h">Security and technical skills</h2>
      <ul class="skill-list">
        <li><strong>Security.</strong> Vulnerability assessment, risk assessment, incident response (studied), OWASP Top 10, role-based access control, Nmap, Nuclei, Burp Suite, Wireshark, Metasploit, SonarQube.</li>
        <li><strong>Systems and networking.</strong> Microsoft Windows, Linux, Microsoft 365 (Outlook, Teams, OneDrive), Active Directory (studied), computer networking (IP addressing, DNS, DHCP).</li>
        <li><strong>Data and scripting.</strong> Oracle SQL, basic Python and C#.</li>
        <li><strong>Helpdesk and end-user support.</strong> Troubleshooting (hardware, software, network and Wi-Fi), Windows installation, remote support (TeamViewer), user guides and knowledge base articles.</li>
        <li><strong>Other.</strong> Technical documentation, project management.</li>
      </ul>
    </section>

    <section aria-labelledby="c-exp-h">
      <h2 id="c-exp-h">Experience</h2>
      <div class="entry">
        <h3><a href="{{ '/projects/beyondreaim/' | relative_url }}">Cybersecurity Analyst (industry experience)</a></h3>
        <p class="meta">Monash University, Clayton, Victoria. Feb 2026 to Jul 2026.</p>
        <ul>
          <li>Worked in an agile team on BeyondReAim, a web platform that helps young people upskill for an AI-driven job market, with security checks in every iteration, guided by an industry supervisor and Monash mentors.</li>
          <li>Ran 3 security assessments and reported 29 findings mapped to OWASP Top 10:2025 and ISO 27001, then re-checked after fixes and confirmed 6 as fixed, including 2 critical. Named the supply chain (Vercel, Neon, Groq, Hugging Face) as the remaining risk.</li>
          <li>Worked with the developers to fix a CORS misconfiguration, move the app to least-privilege database access, add rate limiting and security headers, and rotate a database credential committed to Git history. Ran Nuclei scans and set up SonarQube.</li>
          <li>Wrote the security report (risk assessment, incident response plan, access matrix, backup and restore plan), the troubleshooting guide (8 faults) and the incident response process (3 severity levels), so a new operator could run the system after handover. Set up the team's laptops and fixed installation problems.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Franchise Director (self-employed)</h3>
        <p class="meta">Almaz Fried Chicken Franchise, Tambun Selatan, West Java, Indonesia (remote). Sep 2024 to present.</p>
        <ul>
          <li>Identify and propose outlet locations to the franchisor's management, and prepare outlets for opening by overseeing renovations and setting up equipment.</li>
          <li>Monitor financial reports, bank account transactions and tax reporting, and track sales performance and variable and fixed operating expenses.</li>
          <li>Approve large expenditures, audit cash and inventory records, and make sure the operating team follows franchise standards.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Junior Database Administrator (internship)</h3>
        <p class="meta">PT. Mede Media Softika, Jakarta, Indonesia (remote). Mar 2023 to Sep 2023.</p>
        <ul>
          <li>Loaded client data files of thousands of lines each into the SIP macroprudential database with SQL Loader, writing a custom command for each file because every file had different attributes and data types.</li>
          <li>Read error logs from failed loads, found the cause and fixed the queries until the data passed the system rules. Merged older records into new data that followed updated criteria, then posted the validated temporary data as final data.</li>
          <li>Built custom input parameters in C# for the SIP web application, hosted locally on IIS through Visual Studio, using TOAD with Oracle SQL and PL/SQL. Wrote documentation of the project's tasks so routine work could be repeated without errors.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Kitchen Assistant (part-time)</h3>
        <p class="meta">Cafe, Victoria, Australia (on-site). Aug 2026 to Sep 2026.</p>
        <ul>
          <li>Worked with a multicultural team in a fast-paced kitchen, taking instructions from chefs and coordinating with front-of-house during busy periods.</li>
          <li>Counted and recorded ingredients and supplies taken in and out of the storeroom and freezer, and followed food safety and hygiene rules.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="c-proj-h">
      <h2 id="c-proj-h">Projects</h2>
      <div class="entry">
        <h3><a href="{{ '/projects/pihole-tailscale/' | relative_url }}">Pi-hole over Tailscale, home lab project</a></h3>
        <p class="meta">Personal project. Aug 2026 to Oct 2026.</p>
        <ul>
          <li>Ran Pi-hole in Docker for network-wide ad blocking, reached from a phone over Tailscale with no router port forwarded, and bound the DNS and admin ports to the Tailscale address only.</li>
          <li>Scanned with nmap from the same Wi-Fi, another network and inside the tailnet. The ports were filtered from outside and open only on the tailnet.</li>
          <li>Fixed a startup fault where the container inherited Tailscale DNS, which is the Pi-hole itself, so it could not download blocklists. Gave the container its own resolvers.</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/domaincheck/' | relative_url }}">DomainCheck</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements, scope and review while Claude Code, an AI coding assistant, wrote the code. The app checks a domain's email and website security (SPF, DMARC, DKIM, TLS, security headers) with passive checks, and gives ranked fixes and a PDF report.</li>
          <li>Required every outbound request to go through one safe fetcher that blocks private addresses, enforced by tests and CI (ruff, Bandit, pip-audit).</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/secnews/' | relative_url }}">secnews</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements, scope and review while Claude Code wrote the code. The tool collects security news from five RSS feeds, pulls out the CVE numbers and checks each official NVD score, and never guesses a missing one.</li>
          <li>Shows a daily list of what needs a decision, merges the same CVE across sources, checks robots.txt before each fetch and runs on localhost only.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>CycleThings, final year project</h3>
        <p class="meta">International Islamic University Malaysia. 2022 to 2023.</p>
        <ul>
          <li>Designed and built a Flutter mobile app on my own for IIUM students and staff to donate and request second-hand items. Users sign up, list an item with a photo, browse and favourite listings, and request an item from the donor.</li>
          <li>Used Firebase for sign-in, the database (Cloud Firestore) and photo storage, and built one-to-one chat with text, images and item attachments so donors and requesters can arrange the hand-over.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="c-edu-h">
      <h2 id="c-edu-h">Education</h2>
      <div class="entry">
        <h3>Master of Cybersecurity</h3>
        <p class="meta">Monash University, Clayton, Victoria. 2024 to 2026.</p>
        <ul>
          <li>Studied risk and security management, cyber operations, network security and software security. Learned to assess threats and risks, run a risk analysis, test security features, propose controls and respond to breaches.</li>
          <li>Studied IT forensics and IT research methods. Covered collecting evidence, reporting findings clearly, choosing research methods and presenting to different audiences.</li>
          <li>Studied systems analysis and design, project management and professional practice. Covered requirements gathering, system modelling, the 10 PMBOK areas, a project plan from a case study, conflict resolution, and working under the ACS Code of Ethics in cross-cultural teams.</li>
          <li>Built the technical base through databases, Python and data analysis, data science, and computer architecture and networking.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Bachelor of Technology, Computer and Information Systems Security (Information Assurance)</h3>
        <p class="meta">International Islamic University Malaysia. 2018 to 2023.</p>
        <ul>
          <li>Concentration in Information Assurance and Security. Studied control and audit of information systems, risk management, information security management, information privacy, business continuity and disaster recovery, and cyber law and ethics.</li>
          <li>Also studied operating systems, networking, database systems, systems analysis and design, and project management in IT.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="c-vol-h">
      <h2 id="c-vol-h">Volunteering</h2>
      <div class="entry">
        <h3>Publications Manager</h3>
        <p class="meta">Sharing For Surrounding 2019 (poverty alleviation). Jul 2019, one month.</p>
        <ul>
          <li>Prepared a donation event by running its media publicity, and worked with the food bureau and other volunteers to prepare the items and find donors.</li>
        </ul>
      </div>
    </section>

    {% include resume-publications.html id="c" %}

  </div>
</div>
</div>

<div class="track-pane" id="pane-support" role="tabpanel" aria-labelledby="tab-support">
<div class="resume-layout">

  {% include resume-side.html id="s" label="IT Support" roles="Level 1 IT Support|Helpdesk and Service Desk|Windows, Office 365 and Hardware" pdf=site.resume_path %}

  <div class="resume-main">

    <nav class="section-nav" aria-label="IT support resume sections">
      <div class="sn-card">
        <div class="sn-tabs">
          <ul class="sn-list">
            <li><a href="#s-summary-h" data-full="Professional summary">Summary</a></li>
            <li><a href="#s-skills-h" data-full="Helpdesk and technical skills">Skills</a></li>
            <li><a href="#s-exp-h">Experience</a></li>
            <li><a href="#s-proj-h">Projects</a></li>
            <li><a href="#s-edu-h">Education</a></li>
            <li><a href="#s-vol-h">Volunteering</a></li>
            <li><a href="#s-pub-h">Publications</a></li>
          </ul>
          <span class="sn-indicator" aria-hidden="true"></span>
        </div>
        <div class="sn-summary" aria-hidden="true"><span class="sn-position"></span><span class="sn-label"></span></div>
        <button class="sn-toggle" type="button" aria-expanded="true" aria-label="Collapse section navigation" hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 15l6-6 6 6"></path></svg>
        </button>
      </div>
    </nav>

    <section class="rise d2" aria-labelledby="s-summary-h">
      <h2 id="s-summary-h">Professional summary</h2>
      <p class="summary">Graduate looking for a Level 1 helpdesk role supporting users by phone and email. I am comfortable with Microsoft Windows, Office 365, hardware and Wi-Fi troubleshooting, and remote fixes over TeamViewer. On a university project I set up the team's laptops, wrote an 8-fault troubleshooting guide and tracked the team's work on a LeanKit Kanban board, comparable to Jira. I hold the Google IT Support Professional Certificate and ISC2 CC.</p>
    </section>

    <section class="rise d3" aria-labelledby="s-skills-h">
      <h2 id="s-skills-h">Helpdesk and technical skills</h2>
      <ul class="skill-list">
        <li><strong>Helpdesk and end-user support.</strong> Hardware, software, network and Wi-Fi troubleshooting; Windows installation; remote support with TeamViewer; ticketing (LeanKit Kanban, comparable to Jira); user guides and knowledge base articles.</li>
        <li><strong>Systems and networking.</strong> Microsoft Windows, Office 365 (Outlook, Teams, OneDrive), Linux, Active Directory (studied), TCP/IP, IP addressing, DNS and DHCP.</li>
        <li><strong>Security.</strong> Risk assessment, incident response (studied), role-based access control, OWASP Top 10, Nmap, Wireshark.</li>
        <li><strong>Data and scripting.</strong> Oracle SQL, basic Python and C#.</li>
        <li><strong>Other.</strong> Technical documentation, problem solving, time management, project management.</li>
      </ul>
    </section>

    <section aria-labelledby="s-exp-h">
      <h2 id="s-exp-h">Experience</h2>
      <div class="entry">
        <h3>Kitchen Assistant (part-time)</h3>
        <p class="meta">Cafe, Victoria, Australia (on-site). Aug 2026 to Sep 2026.</p>
        <ul>
          <li>Worked with a multicultural team of Australian and international kitchen staff in a fast-paced kitchen, taking instructions from chefs and coordinating with front-of-house during busy periods.</li>
          <li>Counted and recorded ingredients and supplies taken in and out of the storeroom and freezer.</li>
          <li>Followed food safety and hygiene rules, including cleaning and sanitising work areas and equipment.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Cybersecurity Analyst (industry experience)</h3>
        <p class="meta">Monash University, Clayton, Victoria. Feb 2026 to Jul 2026.</p>
        <ul>
          <li>Worked in an agile team on BeyondReAim, a web platform that helps young people upskill for an AI-driven job market, guided by an industry supervisor and Monash mentors. Tracked the team's work items on a LeanKit Kanban board, comparable to Jira.</li>
          <li>Set up the team's laptops and fixed installation problems. Wrote the troubleshooting guide (8 faults) and the incident response process (3 severity levels), so a new operator could run the system after handover.</li>
          <li>Ran 3 security assessments and reported 29 findings mapped to OWASP Top 10:2025 and ISO 27001, then confirmed 6 as fixed, including 2 critical. Worked with the developers on fixes such as a CORS misconfiguration and rate limiting.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Franchise Director (self-employed)</h3>
        <p class="meta">Almaz Fried Chicken Franchise, Tambun Selatan, West Java, Indonesia (remote). Sep 2024 to present.</p>
        <ul>
          <li>Identify and propose outlet locations to the franchisor's management, and prepare outlets for opening by overseeing renovations and equipment set-up.</li>
          <li>Monitor financial reports, bank account transactions and tax reporting, and track sales performance and operating expenses.</li>
          <li>Approve large expenditures, audit cash and inventory records, and make sure the operating team follows franchise standards.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Junior Database Administrator (internship)</h3>
        <p class="meta">PT. Mede Media Softika, Jakarta, Indonesia (remote). Mar 2023 to Sep 2023.</p>
        <ul>
          <li>Loaded client data files of thousands of lines each into the SIP macroprudential database with SQL Loader, writing a custom command for each file because every file had different attributes and data types.</li>
          <li>Read error logs from failed loads, found the cause and fixed the queries until the data passed the system rules. Merged older records into new data that followed updated criteria, then posted the validated temporary data as final data.</li>
          <li>Built custom input parameters in C# for the SIP web application, hosted locally on IIS through Visual Studio, using TOAD with Oracle SQL and PL/SQL. Wrote documentation of the project's tasks so routine work could be repeated without errors.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="s-proj-h">
      <h2 id="s-proj-h">Projects</h2>
      <div class="entry">
        <h3><a href="{{ '/projects/pihole-tailscale/' | relative_url }}">Pi-hole over Tailscale, home lab project</a></h3>
        <p class="meta">Personal project. Aug 2026 to Oct 2026.</p>
        <ul>
          <li>Ran Pi-hole in Docker for network-wide ad blocking, reached from a phone over Tailscale with no router port forwarded, and bound the DNS and admin ports to the Tailscale address only.</li>
          <li>Scanned with nmap from the same Wi-Fi, another network and inside the tailnet. The ports were filtered from outside and open only on the tailnet.</li>
          <li>Fixed a startup fault where the container inherited Tailscale DNS, which is the Pi-hole itself, so it could not download blocklists. Gave the container its own resolvers.</li>
        </ul>
      </div>
      <div class="entry">
        <h3><a href="{{ '/projects/domaincheck/' | relative_url }}">DomainCheck</a></h3>
        <p class="meta">Personal project. Oct 2026.</p>
        <ul>
          <li>Set the requirements, scope and review while Claude Code, an AI coding assistant, wrote the code for an app that checks a domain's email and website security (SPF, DMARC, DKIM, TLS, security headers) and gives ranked fixes and a PDF report.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>CycleThings, final year project</h3>
        <p class="meta">International Islamic University Malaysia. 2022 to 2023.</p>
        <ul>
          <li>Designed and built, as a solo project, a Flutter mobile app for IIUM students and staff to donate and request second-hand items. Users sign up, list an item with a photo, browse and favourite listings, and request an item from the donor.</li>
          <li>Used Firebase for sign-in, the database (Cloud Firestore) and photo storage, and built one-to-one chat with text, images and item attachments so donors and requesters can arrange the hand-over.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="s-edu-h">
      <h2 id="s-edu-h">Education</h2>
      <div class="entry">
        <h3>Master of Cybersecurity</h3>
        <p class="meta">Monash University, Melbourne, Australia. 2024 to 2026.</p>
        <ul>
          <li>Studied computer architecture and networks, network security and cyber operations. Used GNS3 for networking labs, including a firewall lab.</li>
          <li>Studied risk and security management, software security and IT forensics. Learned to assess threats and risks, propose controls, respond to breaches and report findings clearly to different audiences.</li>
          <li>Studied systems analysis and design, project management, databases, Python and data analysis, working in cross-cultural teams under the ACS Code of Ethics.</li>
        </ul>
      </div>
      <div class="entry">
        <h3>Bachelor of Technology, Computer and Information Systems Security (Information Assurance)</h3>
        <p class="meta">International Islamic University Malaysia. 2018 to 2023.</p>
        <ul>
          <li>Studied control and audit of information systems, risk management, information security management, business continuity and disaster recovery, and cyber law and ethics.</li>
          <li>Also studied computer organisation, computer networking, operating systems, database systems and systems analysis and design. Took Basic Counseling Skills 1 and 2, which covered listening to and communicating with people.</li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="s-vol-h">
      <h2 id="s-vol-h">Volunteering</h2>
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
          <li>Prepared a donation event by running its media publicity, and worked with the food bureau and other volunteers to prepare the items and find donors.</li>
        </ul>
      </div>
    </section>

    {% include resume-publications.html id="s" %}

  </div>
</div>
</div>

<section class="contact-strip" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Get in touch</h2>
  <p class="contact-actions">
    <a class="btn" href="mailto:{{ site.email }}">Email me</a>
    {% if site.linkedin_url != "" %}<a class="btn btn-secondary" href="{{ site.linkedin_url }}">LinkedIn</a>{% endif %}
  </p>
</section>
